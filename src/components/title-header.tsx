"use client";

import {
  initialShowcaseProps,
  type ShowcaseProps,
  type TextToken,
} from "@/types";
import { useEffect, useMemo, useState } from "react";
import HeadingInlineEditor from "./editor-toolbar";
import { readShowcaseCache } from "@/lib/cache";

type Props = {
  token: keyof ShowcaseProps["tokens"]; // e.g. "landing" | "showcase"
  value?: ShowcaseProps; // can be undefined initially
  onChange: (next: ShowcaseProps) => void;
  className?: string;
};

/** Get a safe token from props, cache, or defaults */
function tokenFrom(
  props: ShowcaseProps | null | undefined,
  key: keyof ShowcaseProps["tokens"],
  fallbackBase: ShowcaseProps
): TextToken {
  return (
    props?.tokens?.[key] ??
    readShowcaseCache()?.tokens?.[key] ??
    fallbackBase.tokens[key] ?? {
      title: "Editable title",
      color: "#ffffff",
      fontSize: 20,
      weight: 500,
    }
  );
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
    const cached = readShowcaseCache();
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
