// src/components/showcase-section.tsx
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
import { useShowcaseDoc } from "./editor-shell";
import { ShowcaseProps } from "@/types/showcase";
import { useAutosave } from "@/hooks/useAutosave";
import HeadingInlineEditor from "../editor-toolbar";

const categories: ReadonlyArray<{
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}> = [
  { icon: <Heart className="h-4 w-4" />, label: "Featured", active: true },
  { icon: <Briefcase className="h-4 w-4" />, label: "Marketing" },
  { icon: <LineChart className="h-4 w-4" />, label: "Sales" },
  { icon: <Code2 className="h-4 w-4" />, label: "Programming" },
  { icon: <FlaskConical className="h-4 w-4" />, label: "Research" },
  { icon: <BookOpen className="h-4 w-4" />, label: "Productivity" },
  { icon: <School className="h-4 w-4" />, label: "Education" },
  { icon: <UserPlus className="h-4 w-4" />, label: "Hiring" },
  { icon: <Heart className="h-4 w-4" />, label: "Lifestyle" },
];

const items = [
  {
    title: "Startup Ebook Landing Page",
    description:
      "High-conversion landing page designed to capture leads for your startup’s downloadable ebook.",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Marketing" }, { label: "Website" }],
  },
  {
    title: "Image Cropper Tool",
    description:
      "Web-based cropping solution with live preview, adjustable dimensions, and instant image download.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Programming" }, { label: "Website" }],
  },
  {
    title: "Python Cheatsheet",
    description:
      "Beginner-friendly PDF cheatsheet for Python covering essential syntax, tips, and quick reference guides.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Education" }, { label: "Report" }],
  },
  {
    title: "Vietnam Travel Guide",
    description:
      "One-week travel itinerary for Vietnam covering destinations, activities, and tips.",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Lifestyle" }, { label: "Website" }],
  },
  {
    title: "Character.AI Mentions",
    description:
      "Spreadsheet analyzing mentions on social platforms with sentiment insights.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Data Analytics" }, { label: "Document" }],
  },
  {
    title: "US-China Comparison",
    description:
      "Report comparing US and China financial years with sector developments and economic trends.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Finance" }, { label: "Report" }],
  },
  {
    title: "Perplexity AI",
    description:
      "Comprehensive analysis & strategy: report layout with executive summary.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Data Analytics" }, { label: "Report" }],
  },
  {
    title: "Daily Habits Dashboard",
    description:
      "Build better habits with a clean productivity dashboard and streak tracking.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    badges: [{ label: "Productivity" }, { label: "Website" }],
  },
];

export default function ShowcaseSection() {
  const { showcaseRecord, setShowcaseRecord } = useShowcaseDoc();
  const p = showcaseRecord.props;

  useAutosave<ShowcaseProps>({
    id: showcaseRecord.id,
    initialRev: showcaseRecord.rev,
    data: { props: showcaseRecord.props },
    enabled: true,
    delay: 900,
    onSaved: ({ rev }) =>
      setShowcaseRecord((prev) => (prev ? { ...prev, rev } : prev)),
    onConflict: ({ rev, props }) => {
      const serverProps = props as ShowcaseProps;
      setShowcaseRecord((prev) =>
        prev ? { ...prev, rev, props: serverProps } : prev
      );
    },
  });

  function onEdit(next: ShowcaseProps) {
    setShowcaseRecord((prev) => (prev ? { ...prev, props: next } : prev));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 my-12">
      <div className="relative flex items-center justify-center">
        <div className="hidden lg:flex h-px w-full bg-white/10" />
        <HeadingInlineEditor value={p} onChange={onEdit} />
        <div className="hidden lg:flex h-px w-full bg-white/10" />
      </div>
      <div className="mt-12 overflow-x-auto">
        <div className="min-w-max mx-auto flex items-center gap-2 rounded-full border border-white/3">
          {categories.map((c) => (
            <button
              key={c.label}
              className={[
                "inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm whitespace-nowrap",
                c.active
                  ? "bg-[#5193cd] text-white border-transparent"
                  : "text-white/90 hover:bg-[#0a0a0a]",
              ].join(" ")}
            >
              {c.icon}
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((it) => (
          <ShowcaseCard
            key={it.title}
            title={it.title}
            description={it.description}
            img={it.img}
            badges={it.badges}
          />
        ))}
      </div>
    </section>
  );
}
