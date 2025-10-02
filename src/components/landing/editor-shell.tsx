"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import { listTitles, type TitleComponentRecord } from "@/lib/api";
import { initialShowcaseProps, type ShowcaseProps } from "@/types";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  writeShowcaseCache,
  readShowcaseCache,
  clearShowcaseCache,
} from "@/lib/cache";
import { toTitleToken } from "@/lib/normalizers";

const SIDEBAR_WIDTH = 300;
const TOPBAR_HEIGHT = 60;
const CONTENT_SPACING = 8;

type Ctx = {
  showcase: ShowcaseProps;
  setShowcase: React.Dispatch<React.SetStateAction<ShowcaseProps>>;
};

const ShowcaseCtx = createContext<Ctx | null>(null);

export function useShowcaseDoc(): Ctx {
  const ctx = useContext(ShowcaseCtx);
  if (!ctx) throw new Error("useShowcaseDoc must be used inside EditorShell");
  return ctx;
}

export default function EditorShell({ children }: PropsWithChildren) {
  const [hydrated, setHydrated] = useState(false);
  const [showcase, setShowcase] = useState<ShowcaseProps>(initialShowcaseProps);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_WIDTH : 0;

  const fetchedOnce = useRef(false);

  useEffect(() => {
    setHydrated(true);
    const cached = readShowcaseCache();
    if (cached) setShowcase(cached);
  }, []);

  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;

    let alive = true;

    (async () => {
      try {
        const rows: TitleComponentRecord[] = await listTitles();
        if (!alive) return;

        const next: ShowcaseProps = { titles: {} };
        for (const rec of rows) {
          next.titles[rec.id] = toTitleToken(rec);
        }

        setShowcase(next);
        writeShowcaseCache(next);
      } catch (e) {
        if (!alive) return;
        clearShowcaseCache();
        setError(e instanceof Error ? e.message : "Failed to load titles");
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeShowcaseCache(showcase);
  }, [showcase, hydrated]);

  const value: Ctx = { showcase, setShowcase };

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
