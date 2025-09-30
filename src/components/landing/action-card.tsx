"use client";

export default function ActionCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#141415] hover:bg-[#1a1a1b] transition-colors">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-3 py-2 text-sm font-medium">{title}</div>
    </div>
  );
}
