// src/components/ui/skeleton.tsx
"use client";

import * as React from "react";

export function Skeleton({
  className = "",
  rounded = "rounded-md",
}: {
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-white/10 ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
}
