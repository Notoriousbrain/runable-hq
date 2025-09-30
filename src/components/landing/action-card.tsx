"use client";

import Image from "next/image";

export default function ActionCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#141415] hover:bg-[#1a1a1b] transition-colors">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl p-4 space-y-4">
        <div className="text-sm font-medium">{title}</div>
        <Image
          src={img}
          alt="img"
          sizes="1000"
          width={200}
          height={200}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
    </div>
  );
}
