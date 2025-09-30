"use client";

import { PropsWithChildren, useState } from "react";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div
      className="min-h-dvh bg-[#010101] text-white grid"
      style={{ gridTemplateRows: "80px 1fr" }}
    >
      <Topbar />

      <div
        className="relative grid"
        style={{ gridTemplateColumns: sidebarOpen ? "350px 1fr" : "0 1fr" }}
      >
        <aside
          className={`${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-200`}
        >
          <Sidebar />
        </aside>

        <section className="min-w-0 bg-[#0f0f0f] border border-white/10 rounded-2xl">
          <button
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            onClick={() => setSidebarOpen((v) => !v)}
            className="h-8 w-8 m-4 grid place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {children}
        </section>
      </div>
    </div>
  );
}
