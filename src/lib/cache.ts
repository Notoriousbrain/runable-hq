import type { ShowcaseProps } from "@/types";

export const CACHE_KEY = "runable.title.cache";

export function writeShowcaseCache(next: ShowcaseProps) {
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
    if (parsed && typeof parsed === "object" && "titles" in parsed) {
      return parsed as ShowcaseProps;
    }
    return null;
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

export function clearLocalCaches() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("runable.showcase.cache");
    localStorage.removeItem(CACHE_KEY);
  } catch {}
}
