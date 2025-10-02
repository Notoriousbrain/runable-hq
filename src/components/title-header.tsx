"use client";

import {
  initialShowcaseProps,
  type ShowcaseProps,
  type TextToken,
} from "@/types";
import { useEffect, useMemo, useState } from "react";
import HeadingInlineEditor from "./editor-toolbar";

type Props = {
  token: keyof ShowcaseProps["tokens"]; // e.g. "landing" | "showcase" | "pricing"
  value?: ShowcaseProps; // can be undefined initially
  onChange: (next: ShowcaseProps) => void;
  className?: string;
};

const CACHE_KEY = "runable.showcase.cache";

/** Safely read cached props regardless of shape:
 * - { id, name, rev, sourceCode, props: { tokens: ... } }  <-- ComponentRecord
 * - { tokens: ... }                                       <-- raw ShowcaseProps
 */
function readCachedProps(): ShowcaseProps | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    // Newer shape: ComponentRecord<ShowcaseProps>
    if (parsed && typeof parsed === "object" && parsed.props?.tokens) {
      return parsed.props as ShowcaseProps;
    }

    // Older/alternate shape: plain ShowcaseProps
    if (parsed && typeof parsed === "object" && parsed.tokens) {
      return parsed as ShowcaseProps;
    }

    return null;
  } catch {
    return null;
  }
}

/** Get a safe token from (props or fallback) */
function tokenFrom(
  props: ShowcaseProps | null | undefined,
  key: keyof ShowcaseProps["tokens"],
  fallbackBase: ShowcaseProps
): TextToken {
  // prefer given props
  const t1 = props?.tokens?.[key];
  if (t1) return t1;

  // then cached
  const cached = readCachedProps();
  const t2 = cached?.tokens?.[key];
  if (t2) return t2;

  // then initial defaults
  const t3 = fallbackBase.tokens[key];
  if (t3) return t3;

  // ultimate safety
  return {
    title: "Editable title",
    color: "#ffffff",
    fontSize: 20,
    weight: 500,
  };
}

export default function TitleEditor({
  token,
  value,
  onChange,
  className,
}: Props) {
  // compute the initial effective token only once on mount (for stable SSR/CSR)
  const initialToken = useMemo(
    () => tokenFrom(value, token, initialShowcaseProps),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // intentionally empty to avoid hydration mismatch
  );

  // local fallback that can be updated if cache becomes available
  const [fallback, setFallback] = useState<TextToken>(initialToken);

  // on mount: if cache has a better value than the initial one, use it
  useEffect(() => {
    const cached = readCachedProps();
    const cachedToken = cached?.tokens?.[token];
    if (cachedToken) setFallback(cachedToken);
  }, [token]);

  // Live value passed down (if parent already has it), else our fallback
  const tokens = value?.tokens ?? {};
  const tokenValue: TextToken = tokens[token] ?? fallback;

  function handleChange(nextFlat: TextToken) {
    // Merge into a FULL ShowcaseProps so we don't drop other fields
    const base = value ?? initialShowcaseProps;
    const next: ShowcaseProps = {
      ...base,
      tokens: {
        ...base.tokens,
        [token]: nextFlat,
      },
    };
    onChange(next);
  }

  return (
    <HeadingInlineEditor
      value={tokenValue}
      onChange={handleChange}
      className={className}
    />
  );
}
