"use client";

import { Badge } from "../ui/badge";

export default function Topbar() {
  return (
    <div className="h-20 flex items-center px-3">
      <div className="h-12 flex items-center gap-3 px-3">
        <div className="h-5 w-5 rounded grid place-items-center bg-white text-black text-[10px] font-bold">
          R
        </div>
        <span className="font-medium">Runable</span>
      </div>

      <div className="ms-auto flex items-center gap-3">
        <Badge className="p-2 bg-black border border-white/20">
          <div className="flex gap-3 items-center">
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
            5000
          </div>
          | <span>Upgrade</span>
        </Badge>

        <div className="bg-blue-400 rounded-full py-2 px-4">R</div>
      </div>
    </div>
  );
}
