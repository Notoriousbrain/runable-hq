/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { updateComponent } from "@/lib/api";

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

type AutosaveData<TProps = Record<string, unknown>> = {
  sourceCode?: string;
  props?: TProps;
};

type ConflictPayload<TProps = unknown> = {
  rev: number;
  sourceCode: string;
  props: TProps;
};

type OnSaved = (next: { rev: number }) => void;
type OnConflict<TProps> = (server: ConflictPayload<TProps>) => void;

type UpdateConflictError<TProps = unknown> = Error & {
  code?: number;
  data?: { serverRev: number; server: { sourceCode: string; props: TProps } };
};

export function useAutosave<TProps = Record<string, unknown>>({
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
  data: AutosaveData<TProps>;
  enabled?: boolean;
  delay?: number;
  onSaved?: OnSaved;
  onConflict?: OnConflict<TProps>;
}) {
  const [saving, setSaving] = useState(false);
  const lastRev = useRef(initialRev);
  const timer = useRef<number | null>(null);
  const mounted = useRef(true);

  const lastSentPayload = useRef<string | null>(null);

  const onSavedRef = useLatest(onSaved);
  const onConflictRef = useLatest(onConflict);

  useEffect(() => {
    lastRev.current = initialRev;
  }, [id, initialRev]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const stablePayload = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    lastSentPayload.current = stablePayload;
  }, [id]);

  useEffect(() => {
    if (!enabled || !id) return;

    if (stablePayload === lastSentPayload.current) return;

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
        lastSentPayload.current = stablePayload;
        onSavedRef.current?.({ rev: updated.rev });
      } catch (err: unknown) {
        const e = err as UpdateConflictError<TProps>;
        if (e?.code === 409 && e.data) {
          lastRev.current = e.data.serverRev;
          lastSentPayload.current = JSON.stringify({
            sourceCode: e.data.server.sourceCode,
            props: e.data.server.props,
          });
          onConflictRef.current?.({
            rev: e.data.serverRev,
            sourceCode: e.data.server.sourceCode,
            props: e.data.server.props as TProps,
          });
        } else {
          console.error(e);
        }
      } finally {
        if (mounted.current) setSaving(false);
      }
    }, delay);
  }, [stablePayload, id, enabled, delay, onSavedRef, onConflictRef]);

  return { saving, currentRev: lastRev.current };
}
