"use client";

import Image from "next/image";
import React from "react";
import SharedTitle from "../shared-title";
import { Skeleton } from "@/components/ui/skeleton";

type Badge = { labelId: string };

export default function ShowcaseCard({
  titleId,
  descId,
  img,
  badges = [],
}: {
  titleId: string;
  descId: string;
  img: string;
  badges?: Badge[];
}) {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors border border-white/10">
      <div className="relative">
        {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
        <Image
          src={img}
          alt="img"
          width={1000}
          height={562}
          className={`w-full aspect-[16/9] object-cover rounded-2xl transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="absolute left-2 top-2 flex gap-2 flex-wrap">
          {badges.map((b) => (
            <span
              key={b.labelId}
              className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur text-[11px] px-2 py-1 border border-white/10"
            >
              <SharedTitle id={b.labelId} skeletonClassName="h-3 w-14" />
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="font-medium">
          <SharedTitle id={titleId} skeletonClassName="h-4 w-48" />
        </div>
        <div className="mt-1 text-sm text-white/70 leading-snug">
          <SharedTitle id={descId} skeletonClassName="h-3 w-4/5" />
        </div>
      </div>
    </div>
  );
}
