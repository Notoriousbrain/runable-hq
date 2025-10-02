"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TitleToken, ShowcaseProps } from "@/types";
import { readShowcaseCache, writeShowcaseCache } from "@/lib/cache";
import { getTitle, updateTitle, type TitleComponentRecord } from "@/lib/api";

export function toTitleToken(r: TitleComponentRecord): TitleToken {
  return { text: r.text, color: r.color, size: r.size, weight: r.weight };
}
export function fromTitleToken(
  id: string,
  t: TitleToken
): TitleComponentRecord {
  const now = new Date().toISOString();
  return {
    id,
    text: t.text,
    color: t.color,
    size: t.size,
    weight: t.weight,
    createdAt: now,
    updatedAt: now,
  };
}

function getCachedTitle(id: string): TitleToken | null {
  const cached = readShowcaseCache();
  const token = cached?.titles?.[id];
  return token ?? null;
}
function setCachedTitle(id: string, token: TitleToken) {
  const cached = readShowcaseCache() || ({ titles: {} } as ShowcaseProps);
  const next: ShowcaseProps = {
    ...cached,
    titles: { ...cached.titles, [id]: token },
  };
  writeShowcaseCache(next);
}

export function useSharedTitle(id: string, debounceMs = 600) {
  const [rec, setRec] = useState<TitleComponentRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const cached = getCachedTitle(id);
    if (cached) {
      setRec(fromTitleToken(id, cached));
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const fresh = await getTitle(id);
        if (!alive) return;
        setRec(fresh);
        setCachedTitle(id, toTitleToken(fresh));
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Failed to load title");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id]);

  const value: TitleToken | null = useMemo(
    () => (rec ? toTitleToken(rec) : null),
    [rec]
  );

  function update(patch: Partial<TitleToken>) {
    if (!rec) return;
    const nextRec: TitleComponentRecord = {
      ...rec,
      text: patch.text ?? rec.text,
      color: patch.color ?? rec.color,
      size: patch.size ?? rec.size,
      weight: patch.weight ?? rec.weight,
      updatedAt: new Date().toISOString(),
    };
    setRec(nextRec);
    setCachedTitle(id, toTitleToken(nextRec));

    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(async () => {
      try {
        setSaving(true);
        await updateTitle(id, patch);
      } catch (e) {
        console.error("Save failed:", e);
        setError(e instanceof Error ? e.message : "Failed to save");
      } finally {
        setSaving(false);
      }
    }, debounceMs) as unknown as number;
  }

  return { value, update, saving, loading, error };
}
