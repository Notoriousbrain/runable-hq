"use client";

import {
  BookOpen,
  Briefcase,
  Code2,
  FlaskConical,
  LineChart,
  School,
  UserPlus,
  Heart,
} from "lucide-react";
import ShowcaseCard from "./showcase-card";
import SharedTitle from "../shared-title";

const SHOWCASE_ID = "showcase-heading";

const categories: ReadonlyArray<{
  icon: React.ReactNode;
  labelId: string;
  active?: boolean;
}> = [
  {
    icon: <Heart className="h-4 w-4" />,
    labelId: "showcase-cat-featured",
    active: true,
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    labelId: "showcase-cat-marketing",
  },
  { icon: <LineChart className="h-4 w-4" />, labelId: "showcase-cat-sales" },
  { icon: <Code2 className="h-4 w-4" />, labelId: "showcase-cat-programming" },
  {
    icon: <FlaskConical className="h-4 w-4" />,
    labelId: "showcase-cat-research",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    labelId: "showcase-cat-productivity",
  },
  { icon: <School className="h-4 w-4" />, labelId: "showcase-cat-education" },
  { icon: <UserPlus className="h-4 w-4" />, labelId: "showcase-cat-hiring" },
  { icon: <Heart className="h-4 w-4" />, labelId: "showcase-cat-lifestyle" },
];

const items = [
  {
    titleId: "showcase-item-1-title",
    descId: "showcase-item-1-desc",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-marketing" },
      { labelId: "showcase-badge-website" },
    ],
  },
  {
    titleId: "showcase-item-2-title",
    descId: "showcase-item-2-desc",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-programming" },
      { labelId: "showcase-badge-website" },
    ],
  },
  {
    titleId: "showcase-item-3-title",
    descId: "showcase-item-3-desc",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-education" },
      { labelId: "showcase-badge-report" },
    ],
  },
  {
    titleId: "showcase-item-4-title",
    descId: "showcase-item-4-desc",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-lifestyle" },
      { labelId: "showcase-badge-website" },
    ],
  },
  {
    titleId: "showcase-item-5-title",
    descId: "showcase-item-5-desc",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-data-analytics" },
      { labelId: "showcase-badge-document" },
    ],
  },
  {
    titleId: "showcase-item-6-title",
    descId: "showcase-item-6-desc",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-finance" },
      { labelId: "showcase-badge-report" },
    ],
  },
  {
    titleId: "showcase-item-7-title",
    descId: "showcase-item-7-desc",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-data-analytics" },
      { labelId: "showcase-badge-report" },
    ],
  },
  {
    titleId: "showcase-item-8-title",
    descId: "showcase-item-8-desc",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { labelId: "showcase-badge-productivity" },
      { labelId: "showcase-badge-website" },
    ],
  },
];

export default function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 my-12">
      <div className="relative flex items-center justify-center">
        <div className="hidden lg:flex h-px w-full bg-white/10" />
        <div className="w-full">
          <SharedTitle id={SHOWCASE_ID} />
        </div>
        <div className="hidden lg:flex h-px w-full bg-white/10" />
      </div>

      <div className="mt-12 overflow-x-auto">
        <div className="min-w-max mx-auto flex items-center gap-2 rounded-full border border-white/10 px-2 py-1">
          {categories.map((c) => (
            <button
              key={c.labelId}
              className={[
                "inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm whitespace-nowrap border",
                c.active
                  ? "bg-[#5193cd] text-white border-transparent"
                  : "text-white/90 hover:bg-[#0a0a0a] border-transparent",
              ].join(" ")}
            >
              {c.icon}
              <span>
                <SharedTitle id={c.labelId} />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((it) => (
          <ShowcaseCard
            key={it.titleId}
            titleId={it.titleId}
            descId={it.descId}
            img={it.img}
            badges={it.badges}
          />
        ))}
      </div>
    </section>
  );
}
