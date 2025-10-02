/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { updateComponent } from "@/lib/api";
import type { Json } from "@/types/json";

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

type AutosaveData<TProps = Json> = {
  sourceCode?: string;
  props?: TProps;
};

export function useAutosave<TProps = Json>({
  id,
  data,
  enabled = true,
  delay = 1200,
  onSaved,
}: {
  id: string;
  data: AutosaveData<TProps>;
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

        const updated = await updateComponent<TProps>(id, data);

        lastSentPayload.current = stablePayload;
        onSavedRef.current?.({ updatedAt: updated.updatedAt });
      } catch (err) {
        console.error("Autosave failed:", err);
      } finally {
        if (mounted.current) setSaving(false);
      }
    }, delay);
  }, [stablePayload, id, enabled, delay, onSavedRef]);

  return { saving };
}
