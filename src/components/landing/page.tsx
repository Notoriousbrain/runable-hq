"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ExternalLink, ChevronRight } from "lucide-react";
import EditorShell from "./editor-shell";
import ActionCard from "./action-card";

const cards: ReadonlyArray<{ title: string; img: string }> = [
  {
    title: "Create a presentation",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Make a website",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Create report",
    img: "https://images.unsplash.com/photo-1551281044-8af0d0907b88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Create a podcast",
    img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Research about",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Browse for me",
    img: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Connect your apps",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RunableLandingPage() {
  return (
    <EditorShell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          What can I get done for you?
        </h1>

        <div className="mx-auto mt-6 max-w-3xl">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-1.5">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="relative h-4 w-4 inline-block">
                <span className="absolute inset-0 rounded-full border border-white/50" />
              </span>
              <Input
                type="text"
                placeholder="Summarize the latest news from hackernews"
                className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-white/40"
              />
              <Button
                size="icon"
                variant="ghost"
                className="ms-auto text-white/70 hover:text-white"
                aria-label="More"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="px-4 pb-2 text-[11px] text-white/60">
              Upgrade your plan to unlock more power of Runable
            </div>
          </div>
          <div className="mt-1.5 text-right text-[11px] text-white/60">
            <button className="inline-flex items-center gap-1 hover:underline">
              <Sparkles className="h-3.5 w-3.5" /> Upgrade
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(0, 4).map((c) => (
            <ActionCard key={c.title} title={c.title} img={c.img} />
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(4).map((c) => (
            <ActionCard key={c.title} title={c.title} img={c.img} />
          ))}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <span
                  className="inline-block h-3 w-3"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "6px 0 6px 10px",
                    borderColor:
                      "transparent transparent transparent currentColor",
                  }}
                />
              </span>
              <span className="font-medium">Runbooks</span>
              <ExternalLink className="h-3.5 w-3.5 ms-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-10 border-t border-white/10 bg-[#0b0b0c]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-10 text-xs text-white/70 flex items-center justify-center">
          Explore what people are building with Runable
        </div>
      </div>
    </EditorShell>
  );
}
