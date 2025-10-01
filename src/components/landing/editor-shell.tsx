"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import { createComponent, getComponent, type ComponentRecord } from "@/lib/api";
import { initialShowcaseProps, type ShowcaseProps } from "@/types";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SIDEBAR_WIDTH = 300;
const TOPBAR_HEIGHT = 60;
const CONTENT_SPACING = 8;

const STORAGE_KEY = "runable.showcase.id";
const CACHE_KEY = "runable.showcase.cache";

type Ctx = {
  showcaseRecord: ComponentRecord<ShowcaseProps>;
  setShowcaseRecord: React.Dispatch<
    React.SetStateAction<ComponentRecord<ShowcaseProps>>
  >;
};

const ShowcaseCtx = createContext<Ctx | null>(null);

export function useShowcaseDoc(): Ctx {
  const ctx = useContext(ShowcaseCtx);
  if (!ctx) throw new Error("useShowcaseDoc must be used inside EditorShell");
  return ctx;
}

function safeReadCache(): ComponentRecord<ShowcaseProps> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as ComponentRecord<ShowcaseProps>) : null;
  } catch {
    return null;
  }
}
function safeWriteCache(doc: ComponentRecord<ShowcaseProps>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(doc));
  } catch {}
}

const STABLE_DEFAULT_DOC: ComponentRecord<ShowcaseProps> = {
  id: "local-temp",
  name: "ShowcaseSection",
  rev: 0,
  sourceCode: `export default function Showcase(){return null}`,
  props: initialShowcaseProps,
} as ComponentRecord<ShowcaseProps>;

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_WIDTH : 0;

  const [doc, setDoc] =
    useState<ComponentRecord<ShowcaseProps>>(STABLE_DEFAULT_DOC);

  const [error, setError] = useState<string | null>(null);

  const hydratedOnceRef = useRef(false);

  useEffect(() => {
    if (hydratedOnceRef.current) return;
    hydratedOnceRef.current = true;

    let alive = true;

    (async () => {
      const cached = safeReadCache();
      if (cached && alive) {
        setDoc(cached);
      }

      try {
        const storedId =
          typeof window !== "undefined"
            ? window.localStorage.getItem(STORAGE_KEY) ?? ""
            : "";

        if (storedId) {
          const rec = await getComponent<ShowcaseProps>(storedId);
          if (!alive) return;
          setDoc(rec);
          return;
        }

        const created = await createComponent<ShowcaseProps>({
          name: "ShowcaseSection",
          sourceCode: (cached ?? STABLE_DEFAULT_DOC).sourceCode,
          props: (cached ?? STABLE_DEFAULT_DOC).props,
        });
        if (!alive) return;
        setDoc(created);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, created.id);
        }
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Failed to reach server");
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    safeWriteCache(doc);
  }, [doc]);

  const value: Ctx = { showcaseRecord: doc, setShowcaseRecord: setDoc };

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
