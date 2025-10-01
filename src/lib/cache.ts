// src/lib/cache.ts
import type { ComponentRecord } from "@/lib/api";
import type { ShowcaseProps } from "@/types";

export const CACHE_KEY = "runable.showcase.cache";

export function writeShowcaseCache(next: ComponentRecord<ShowcaseProps>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(next));
  } catch {}
}
