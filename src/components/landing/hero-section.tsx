"use client";

import {
  ChevronRight,
  Crown,
  ExternalLink,
  Paperclip,
  PlayCircle,
} from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ActionCard from "./action-card";
import SharedTitle from "../shared-title";
import { useSharedTitle } from "@/lib/title-store";
import { Skeleton } from "@/components/ui/skeleton";

const LANDING_ID = "landing-heading";

const HeroSection = () => {
  const { value: placeholder, loading: phLoading } = useSharedTitle(
    "landing-input-placeholder"
  );

  const cards: ReadonlyArray<{ titleId: string; img: string }> = [
    {
      titleId: "card-title-create-presentation",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-make-website",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-create-report",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-create-podcast",
      img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-research-about",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-browse-for-me",
      img: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
    },
    {
      titleId: "card-title-connect-your-apps",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl min-h-[calc(100dvh-200px)] px-4 flex justify-center items-center">
      <div className="w-full">
        <div className="mb-6 text-center">
          <SharedTitle id={LANDING_ID} skeletonClassName="h-8 w-80 mx-auto" />
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-b-2xl rounded-t-[30px] bg-[#1a1a1b] p-[1px]">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] rounded-full">
              <Paperclip className="h-4 w-4 text-white/60" />
              <div className="relative flex-1">
                {phLoading && (
                  <Skeleton
                    className="absolute inset-y-2 left-0 w-2/3 h-4"
                    rounded="rounded-full"
                  />
                )}
                <Input
                  type="text"
                  placeholder={placeholder?.text ?? ""}
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-white/50"
                />
              </div>
              <Button
                size="icon"
                className="h-8 w-8 rounded-full bg-[#2a2a2b] hover:bg-[#333] text-white/70"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-white text-[15px]">
                <SharedTitle
                  id="landing-upgrade-banner"
                  skeletonClassName="h-4 w-72"
                />
              </span>
              <button className="inline-flex items-center gap-1 text-[#5ba8f4] hover:underline font-semibold text-sm">
                <Crown className="h-3.5 w-3.5" />
                <SharedTitle
                  id="landing-upgrade-button"
                  skeletonClassName="h-4 w-16"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(0, 4).map((c) => (
            <ActionCard key={c.titleId} titleId={c.titleId} img={c.img} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.slice(4).map((c) => (
            <ActionCard key={c.titleId} titleId={c.titleId} img={c.img} />
          ))}
          <div className="rounded-xl border border-white/10 bg-[#141415] p-4 flex flex-col justify-center">
            <div className="flex items-center flex-col gap-2 text-sm">
              <PlayCircle className="h-10 w-10 text-white" strokeWidth={1.5} />
              <div className="flex items-center justify-center gap-3">
                <span className="font-black">
                  <SharedTitle
                    id="landing-runbooks-title"
                    skeletonClassName="h-4 w-24"
                  />
                </span>
                <ExternalLink className="h-3.5 w-3.5 ms-auto font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
