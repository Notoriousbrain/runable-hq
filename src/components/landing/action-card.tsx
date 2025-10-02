"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SharedTitle from "../shared-title";

export default function ActionCard({
  titleId,
  title,
  img,
}: {
  titleId?: string;
  title?: string;
  img: string;
}) {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-[#141415] hover:bg-[#1a1a1b] transition-colors">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl p-4 space-y-4">
        <div className="text-sm font-medium">
          {titleId ? (
            <SharedTitle id={titleId} skeletonClassName="h-4 w-32" />
          ) : (
            title
          )}
        </div>

        <div className="relative h-full w-full rounded-t-lg overflow-hidden">
          {!imgLoaded && (
            <Skeleton
              className="absolute inset-0 h-full w-full"
              rounded="rounded-lg"
            />
          )}
          <Image
            src={img}
            alt={title ?? titleId ?? "card"}
            sizes="1000px"
            width={800}
            height={500}
            className={`h-full w-full object-cover rounded-t-lg transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImgLoaded(true)}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
