"use client";
export default function ActionCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
      <div className="aspect-[16/10] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3 text-sm font-medium">{title}</div>
    </div>
  );
}
