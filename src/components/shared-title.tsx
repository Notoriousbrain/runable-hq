// src/components/shared-title.tsx
"use client";

import React from "react";
import { useSharedTitle } from "@/lib/title-store";
import { Skeleton } from "@/components/ui/skeleton";
import HeadingInlineEditor from "./editor-toolbar";

type Props = {
  id: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  /** Optional skeleton size (Tailwind classes) */
  skeletonClassName?: string;
};

export default function SharedTitle({
  id,
  className,
  skeletonClassName = "h-7 w-56 mx-auto",
}: Props) {
  const { value, update, loading } = useSharedTitle(id);

  if (loading || !value) {
    return <Skeleton className={skeletonClassName} rounded="rounded-lg" />;
  }

  return (
    <div className="text-center">
      <HeadingInlineEditor
        value={value}
        onChange={(next) => update(next)}
        className={className}
      />
    </div>
  );
}
