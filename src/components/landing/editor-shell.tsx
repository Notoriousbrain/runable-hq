/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import { createComponent, getComponent, type ComponentRecord } from "@/lib/api";
import { initialShowcaseProps, type ShowcaseProps } from "@/types/";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { writeShowcaseCache } from "@/lib/cache";

const SIDEBAR_WIDTH = 300;
const TOPBAR_HEIGHT = 60;
const CONTENT_SPACING = 8;

const CACHE_KEY = "runable.showcase.cache";

type Ctx = {
  showcaseRecord: ComponentRecord<ShowcaseProps>;
  setShowcaseRecord: React.Dispatch<
    React.SetStateAction<ComponentRecord<ShowcaseProps>>
  >;
  sharedId: string;
};

const ShowcaseCtx = createContext<Ctx | null>(null);

export function useShowcaseDoc(): Ctx {
  const ctx = useContext(ShowcaseCtx);
  if (!ctx) throw new Error("useShowcaseDoc must be used inside EditorShell");
  return ctx;
}

// --- util: read cached ComponentRecord for faster hydration ---
function safeReadCache(): ComponentRecord<ShowcaseProps> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as ComponentRecord<ShowcaseProps>) : null;
  } catch {
    return null;
  }
}

const STABLE_DEFAULT_DOC: ComponentRecord<ShowcaseProps> = {
  id: "shared-doc",
  name: "ShowcaseSection",
  rev: 0,
  sourceCode: `export default function Showcase(){return null}`,
  props: initialShowcaseProps,
} as ComponentRecord<ShowcaseProps>;

export default function EditorShell({ children }: PropsWithChildren) {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const idFromQuery = searchParams?.get("doc") ?? "";
  const idFromEnv =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_SHOWCASE_ID ?? ""
      : "";
  const sharedId = useMemo(() => idFromQuery || idFromEnv, []);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_WIDTH : 0;
  
  const cached = safeReadCache();
  const [doc, setDoc] = useState<ComponentRecord<ShowcaseProps>>(
    cached ?? STABLE_DEFAULT_DOC
  );
  const [error, setError] = useState<string | null>(null);

  // Hydration guard
  const hydratedOnceRef = useRef(false);

  const ALLOW_CREATE_IF_MISSING =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_ALLOW_CREATE === "1"
      : false;

  useEffect(() => {
    if (hydratedOnceRef.current) return;
    hydratedOnceRef.current = true;

    let alive = true;

    (async () => {
      try {
        // 1) Resolve the id (URL > env)
        const urlParams =
          typeof window !== "undefined"
            ? new URLSearchParams(window.location.search)
            : null;
        const idFromQuery = urlParams?.get("doc") ?? "";
        const idFromEnv =
          typeof process !== "undefined"
            ? process.env.NEXT_PUBLIC_SHOWCASE_ID ?? ""
            : "";
        const resolvedId = idFromQuery || idFromEnv;

        if (resolvedId) {
          // fetch the shared doc
          const rec = await getComponent<ShowcaseProps>(resolvedId);
          if (!alive) return;
          setDoc(rec);
          writeShowcaseCache(rec);
          return;
        }

        // 2) No id given: create only if allowed
        if (ALLOW_CREATE_IF_MISSING) {
          const created = await createComponent<ShowcaseProps>({
            name: "ShowcaseSection",
            sourceCode: STABLE_DEFAULT_DOC.sourceCode,
            props: STABLE_DEFAULT_DOC.props,
          });
          if (!alive) return;
          setDoc(created);
          writeShowcaseCache(created);
          // You can also log/flash the new id so you can set it in .env later
          console.info("Created shared component id:", created.id);
          return;
        }

        // 3) Otherwise, show the helpful error
        setError(
          "No shared document id. Provide NEXT_PUBLIC_SHOWCASE_ID or ?doc=<id>."
        );
      } catch (e) {
        if (!alive) return;
        setError(
          e instanceof Error ? e.message : "Failed to load Showcase doc"
        );
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // 2) Real-time sync (polling): every 3s, pull server and apply if rev advanced
  useEffect(() => {
    if (!sharedId) return;
    let alive = true;

    const tick = async () => {
      try {
        const rec = await getComponent<ShowcaseProps>(sharedId);
        if (!alive) return;
        if (rec.rev > doc.rev) {
          setDoc(rec);
          writeShowcaseCache(rec);
        }
      } catch {
        // network errors ignored for polling
      }
    };

    const id = window.setInterval(tick, 3000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [sharedId, doc.rev]);

  // 3) Also write cache whenever doc changes locally
  useEffect(() => {
    writeShowcaseCache(doc);
  }, [doc]);

  const value: Ctx = {
    showcaseRecord: doc,
    setShowcaseRecord: setDoc,
    sharedId,
  };

  return (
    <ShowcaseCtx.Provider value={value}>
      <div className="min-h-dvh bg-[#010101] text-white">
        <div
          className="fixed inset-x-0 top-0 z-50 bg-[#010101]"
          style={{ height: TOPBAR_HEIGHT }}
        >
          <Topbar />
        </div>

        <aside
          className={`fixed left-0 bottom-0 z-40 overflow-hidden transition-[opacity,width] duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: TOPBAR_HEIGHT, width: sidebarWidth }}
        >
          <Sidebar />
        </aside>

        <div
          className="px-2 pb-2 transition-[margin-left] duration-200"
          style={{
            paddingTop: TOPBAR_HEIGHT + CONTENT_SPACING,
            marginLeft: sidebarWidth,
          }}
        >
          <section
            className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#0f0f0f]"
            style={{
              height: `calc(100dvh - ${TOPBAR_HEIGHT + CONTENT_SPACING * 2}px)`,
            }}
          >
            <button
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              onClick={() => setSidebarOpen((v) => !v)}
              className="m-4 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
            >
              {sidebarOpen ? (
                <ChevronLeft className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </button>

            <div className="px-4 text-[11px] text-white/50">
              ID: {doc.id} • Rev: {doc.rev}
              {error ? (
                <span className="ml-2 text-red-400">• {error}</span>
              ) : null}
            </div>

            <div className="flex-1 overflow-y-auto">{children}</div>
          </section>
        </div>
      </div>
    </ShowcaseCtx.Provider>
  );
}
