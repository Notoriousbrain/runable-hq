"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, ChevronRight, Paperclip, Crown } from "lucide-react";
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
      <div className="mx-auto min-h-[calc(100dvh-200px)] max-w-6xl px-4 flex justify-center items-center">
        <div>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            What can I get done for you?
          </h1>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="rounded-b-2xl rounded-t-[30px] bg-[#1a1a1b] p-[1px]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] rounded-full">
                <Paperclip className="h-4 w-4 text-white/60" />
                <Input
                  type="text"
                  placeholder="Create a weekly report of stock market trends"
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-white/50"
                />
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-full bg-[#2a2a2b] hover:bg-[#333] text-white/70"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-white text-[15px]">
                  Upgrade your plan to unlock more power of Runable
                </span>
                <button className="inline-flex items-center gap-1 text-[#5ba8f4] hover:underline font-semibold text-sm">
                  <Crown className="h-3.5 w-3.5" /> Upgrade
                </button>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.slice(0, 4).map((c) => (
              <ActionCard key={c.title} title={c.title} img={c.img} />
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.slice(4).map((c) => (
              <ActionCard key={c.title} title={c.title} img={c.img} />
            ))}
            {/* Runbooks card */}
            <div className="rounded-xl border border-white/10 bg-[#141415] p-4 flex flex-col justify-center">
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
      </div>

      <div className="sticky bottom-0 z-10 border-t border-white/10 bg-[#0b0b0c]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-10 text-xs text-white/70 flex items-center justify-center">
          Explore what people are building with Runable
        </div>
      </div>
    </EditorShell>
  );
}
