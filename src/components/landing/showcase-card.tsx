"use client";

import Image from "next/image";

type Badge = { label: string };
export default function ShowcaseCard({
  title,
  description,
  img,
  badges = [],
}: {
  title: string;
  description: string;
  img: string;
  badges?: Badge[];
}) {
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors">
      <div className="relative">
        <Image
          src={img}
          alt="img"
          width={500}
          height={500}
          className="w-full aspect-[16/9] object-cover rounded-2xl"
        />
        <div className="absolute left-2 top-2 flex gap-2 flex-wrap">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur text-[11px] px-2 py-1 border border-white/10"
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="font-medium">{title}</div>
        <div className="mt-1 text-sm text-white/70 leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
}
