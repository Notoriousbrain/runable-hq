/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { updateTitle, type TitleComponentRecord } from "@/lib/api";
import { writeShowcaseCache, readShowcaseCache } from "@/lib/cache";
import type { ShowcaseProps, TitleToken } from "@/types";
import { toTitleToken } from "@/lib/normalizers";

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

type AutosaveData = Partial<TitleToken>;

export function useAutosave({
  id,
  key,
  data,
  enabled = true,
  delay = 1200,
  onSaved,
}: {
  id: string;
  key: string;
  data: AutosaveData;
  enabled?: boolean;
  delay?: number;
  onSaved?: (next: { updatedAt: string }) => void;
}) {
  const [saving, setSaving] = useState(false);
  const mounted = useRef(true);
  const timer = useRef<number | null>(null);
  const lastSentPayload = useRef<string | null>(null);

  const onSavedRef = useLatest(onSaved);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const stablePayload = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    if (!enabled || !id) return;
    if (stablePayload === lastSentPayload.current) return;

    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(async () => {
      try {
        if (!mounted.current) return;
        setSaving(true);

        const updated: TitleComponentRecord = await updateTitle(id, data);

        const cached = readShowcaseCache() || ({ titles: {} } as ShowcaseProps);
        const next: ShowcaseProps = {
          ...cached,
          titles: {
            ...cached.titles,
            [key]: toTitleToken(updated),
          },
        };
        writeShowcaseCache(next);

        lastSentPayload.current = stablePayload;
        onSavedRef.current?.({ updatedAt: updated.updatedAt });
      } catch (err) {
        console.error("Autosave failed:", err);
      } finally {
        if (mounted.current) setSaving(false);
      }
    }, delay);
  }, [stablePayload, id, key, enabled, delay, onSavedRef]);

  return { saving };
}
