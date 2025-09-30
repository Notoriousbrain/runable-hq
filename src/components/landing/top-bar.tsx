"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function Topbar({
  sidebarOpen,
  onToggleSidebar,
}: {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}) {
  return (
    <div className="h-11 flex items-center px-3 ">
      <button
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={onToggleSidebar}
        className="h-8 w-8 grid place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
      >
        {sidebarOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      <div className="ms-auto flex items-center gap-3">
        <Button
          size="icon"
          variant="secondary"
          className="h-7 w-7 bg-white text-black hover:bg-white/90"
          aria-label="New"
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>

        <div className="flex items-center gap-2 text-sm">
          <Badge variant="secondary" className="bg-white/10 text-white/90">
            5000
          </Badge>
          <span className="text-white/30">|</span>
          <button className="text-white/80 hover:text-white underline-offset-4 hover:underline">
            Upgrade
          </button>
        </div>

        <div className="h-6 w-6 rounded-full bg-white/10 grid place-items-center text-xs">
          R
        </div>
      </div>
    </div>
  );
}
