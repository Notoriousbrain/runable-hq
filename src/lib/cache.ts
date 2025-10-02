// lib/cache.ts
import type { ComponentRecord } from "@/lib/api";
import type { ShowcaseProps } from "@/types";

export const CACHE_KEY = "runable.showcase.cache";

export function writeShowcaseCache(next: ComponentRecord<ShowcaseProps>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(next));
  } catch {}
}

export function readShowcaseCache(): ShowcaseProps | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    // If it's a ComponentRecord, return only props
    if (parsed && typeof parsed === "object" && "props" in parsed) {
      return parsed.props as ShowcaseProps;
    }

    // If it's already ShowcaseProps
    if (parsed && typeof parsed === "object" && "tokens" in parsed) {
      return parsed as ShowcaseProps;
    }

    return null;
  } catch {
    return null;
  }
}
