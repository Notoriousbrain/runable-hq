"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { updateComponent } from "@/lib/api";

/** Small helper to always call the latest callback without re-subscribing effects */
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

type AutosaveData = { sourceCode?: string; props?: Record<string, unknown> };

type ConflictPayload = {
  rev: number;
  sourceCode: string;
  props: unknown;
};

type OnSaved = (next: { rev: number }) => void;
type OnConflict = (server: ConflictPayload) => void;

type UpdateConflictError = Error & {
  code?: number;
  data?: { serverRev: number; server: { sourceCode: string; props: unknown } };
};

export function useAutosave({
  id,
  initialRev,
  data,
  enabled = true,
  delay = 1200,
  onSaved,
  onConflict,
}: {
  id: string;
  initialRev: number;
  data: AutosaveData;
  enabled?: boolean;
  delay?: number;
  onSaved?: OnSaved;
  onConflict?: OnConflict;
}) {
  const [saving, setSaving] = useState(false);
  const lastRev = useRef(initialRev);
  const timer = useRef<number | null>(null);
  const mounted = useRef(true);

  // Keep callbacks fresh without forcing the effect to re-run on every render
  const onSavedRef = useLatest(onSaved);
  const onConflictRef = useLatest(onConflict);

  // If the record changes (new id or new initialRev), sync the rev ref
  useEffect(() => {
    lastRev.current = initialRev;
  }, [id, initialRev]);

  // Track mount state to avoid state updates after unmount
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  // Stable payload string to detect meaningful changes
  const stablePayload = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    if (!enabled || !id) return;
    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(async () => {
      try {
        if (!mounted.current) return;
        setSaving(true);

        const updated = await updateComponent(id, {
          ...data,
          rev: lastRev.current,
        });

        lastRev.current = updated.rev;
        onSavedRef.current?.({ rev: updated.rev });
      } catch (err: unknown) {
        const e = err as UpdateConflictError;
        if (e?.code === 409 && e.data) {
          onConflictRef.current?.({
            rev: e.data.serverRev,
            sourceCode: e.data.server.sourceCode,
            props: e.data.server.props,
          });
        } else {
          console.error(e);
        }
      } finally {
        if (mounted.current) setSaving(false);
      }
    }, delay);
  }, [stablePayload, id, enabled, delay, onSavedRef, onConflictRef, data]);

  return { saving, currentRev: lastRev.current };
}
