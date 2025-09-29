"use client";
import { PropsWithChildren, useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./top-bar";

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div
      className="min-h-dvh bg-[#0b0b0c] text-white grid"
      style={{ gridTemplateRows: "44px 1fr" }}
    >
      <Topbar
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        sidebarOpen={sidebarOpen}
      />

      <div
        className="relative grid"
        style={{ gridTemplateColumns: sidebarOpen ? "256px 1fr" : "0 1fr" }}
      >
        {/* Sidebar column (full height). When closed, width = 0 and content visually hidden for a clean collapse. */}
        <aside
          className={`${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-200`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </aside>

        {/* Main content */}
        <section className="min-w-0">{children}</section>

        {/* Floating open button when collapsed */}
        {!sidebarOpen && (
          <button
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
            className="fixed left-3 top-[56px] z-30 h-8 w-8 grid place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <span className="i-lucide:chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
}
