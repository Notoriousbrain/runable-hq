import type { ComponentRecord } from "@/lib/api";
import type { ShowcaseProps } from "@/types";

export const CACHE_KEY = "runable.showcase.cache";

export function writeShowcaseCache(next: ComponentRecord<ShowcaseProps>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(next));
  } catch {}
}

export function readShowcaseCache(): ComponentRecord<ShowcaseProps> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ComponentRecord<ShowcaseProps>;
  } catch {
    return null;
  }
}

export function clearShowcaseCache() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch {}
}
