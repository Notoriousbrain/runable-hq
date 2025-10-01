"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { createComponent, getComponent, type ComponentRecord } from "@/lib/api";
import { initialShowcaseProps, type ShowcaseProps } from "@/types/showcase";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SIDEBAR_WIDTH = 300;
const TOPBAR_HEIGHT = 60;
const CONTENT_SPACING = 8;

type Ctx = {
  showcaseRecord: ComponentRecord<ShowcaseProps>;
  setShowcaseRecord: React.Dispatch<
    React.SetStateAction<ComponentRecord<ShowcaseProps> | null>
  >;
};

const ShowcaseCtx = createContext<Ctx | null>(null);

export function useShowcaseDoc(): Ctx {
  const ctx = useContext(ShowcaseCtx);
  if (!ctx) throw new Error("useShowcaseDoc must be used inside EditorShell");
  return ctx;
}

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_WIDTH : 0;

  const [doc, setDoc] = useState<ComponentRecord<ShowcaseProps> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const storageKey = "runable.showcase.id";
        const storedId =
          typeof window !== "undefined"
            ? window.localStorage.getItem(storageKey) ?? ""
            : "";

        if (storedId) {
          const rec = await getComponent<ShowcaseProps>(storedId);
          if (!alive) return;
          setDoc(rec);
          return;
        }

        const starter = `export default function Showcase(){return null}`;
        const created = await createComponent<ShowcaseProps>({
          name: "ShowcaseSection",
          sourceCode: starter,
          props: initialShowcaseProps,
        });
        if (!alive) return;
        setDoc(created);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(storageKey, created.id);
        }
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

  if (error) return <div className="p-6 text-red-400">{error}</div>;
  if (!doc) return <div className="p-6">Loading…</div>;

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
            </div>

            <div className="flex-1 overflow-y-auto">{children}</div>
          </section>
        </div>
      </div>
    </ShowcaseCtx.Provider>
  );
}
