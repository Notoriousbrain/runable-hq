"use client";

import { PropsWithChildren, useState } from "react";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SIDEBAR_WIDTH = 350;
const TOPBAR_HEIGHT = 80;
const CONTENT_SPACING = 8;

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const sidebarWidth = sidebarOpen ? SIDEBAR_WIDTH : 0;

  return (
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
          <div className="flex-1 overflow-y-auto">{children}</div>
        </section>
      </div>
    </div>
  );
}
