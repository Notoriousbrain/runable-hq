"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Topbar({
  onToggleSidebar,
  sidebarOpen,
}: {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}) {
  return (
    <div className="h-11 flex items-center justify-end px-3 border-b border-white/10 bg-[#0b0b0c]">
      <div className="absolute left-2">
        {sidebarOpen && (
          <button
            aria-label="Close sidebar"
            onClick={onToggleSidebar}
            className="h-8 w-8 grid place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <span className="i-lucide:chevron-left" />
          </button>
        )}
      </div>
      <div className="ms-auto flex items-center gap-3">
        <Badge variant="secondary" className="bg-white/10 text-white/90">
          5000
        </Badge>
        <Button
          size="sm"
          variant="secondary"
          className="bg-white text-black hover:bg-white/90"
        >
          Upgrade
        </Button>
        <div className="h-6 w-6 rounded-full bg-white/10 grid place-items-center text-xs">
          R
        </div>
      </div>
    </div>
  );
}
