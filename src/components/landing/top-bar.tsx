"use client";

import { Badge } from "../ui/badge";
import SharedTitle from "../shared-title";
import ResetButton from "../reset-button";

export default function Topbar() {
  return (
    <div className="h-16 flex items-center px-3">
      <div className="h-12 flex items-center gap-3 px-3">
        <div className="h-5 w-5 rounded grid place-items-center bg-white text-black text-[10px] font-bold">
          R
        </div>
        <span className="font-medium">
          <SharedTitle id="topbar-brand" skeletonClassName="h-4 w-16" />
        </span>
      </div>

      <div className="ms-auto flex items-center gap-3">
        <Badge className="p-2 gap-2 bg-black border border-white/20">
          <span className="flex gap-3 items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkle w-4 h-4"
              aria-hidden="true"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            </svg>
            <span className="inline-block min-w-[2.5rem]">
              <SharedTitle id="topbar-credits" skeletonClassName="h-4 w-10" />
            </span>
          </span>
          <span>|</span>
          <span className="text-[#5193cd] font-bold inline-block min-w-[3.25rem]">
            <SharedTitle
              id="navbar-upgrade-button"
              skeletonClassName="h-4 w-12"
            />
          </span>
        </Badge>

        <div className="bg-[#5193cd] rounded-full py-2 px-4">R</div>
      </div>
    </div>
  );
}
