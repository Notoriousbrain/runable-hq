"use client";

import { PropsWithChildren, useState } from "react";
import Topbar from "./top-bar";
import Sidebar from "./sidebar";

export default function EditorShell({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div
      className="min-h-dvh bg-[#000] text-white grid"
      style={{ gridTemplateRows: "44px 1fr" }}
    >
      <Topbar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      <div
        className="relative grid"
        style={{ gridTemplateColumns: sidebarOpen ? "232px 1fr" : "0 1fr" }}
      >
        <aside
          className={`${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-200`}
        >
          <Sidebar />
        </aside>

        <section className="min-w-0 bg-[#0f0f0f] border border-white/10 rounded-2xl">{children}</section>
      </div>
    </div>
  );
}
