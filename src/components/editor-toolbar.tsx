// src/components/heading-inline-editor.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ShowcaseProps } from "@/types/showcase";

import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { PaintBucket, CaseUpper, Bold } from "lucide-react";

type Props = {
  value: ShowcaseProps;
  onChange: (next: ShowcaseProps) => void;
  className?: string;
};

export default function HeadingInlineEditor({
  value,
  onChange,
  className,
}: Props) {
  const [editing, setEditing] = useState(false);
  const hRef = useRef<HTMLHeadingElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);
  const [localText, setLocalText] = useState(value.headingText ?? "");
  const startViaRef = useRef<"dblclick" | null>(null);

  // Keep local state in sync when props change (only matters when not editing)
  useEffect(() => {
    if (!editing) setLocalText(value.headingText ?? "");
  }, [value.headingText, editing]);

  function moveCaretToEnd(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false); // end
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  useLayoutEffect(() => {
    if (!editing) return;
    const el = hRef.current;
    if (!el) return;

    // Ensure DOM has the latest text
    if (el.innerText !== localText) el.innerText = localText;

    // Focus without scrolling
    el.focus({ preventScroll: true });

    // Force caret to end AFTER the browser’s own dblclick selection has settled
    requestAnimationFrame(() => {
      requestAnimationFrame(() => moveCaretToEnd(el));
    });

    // we don't need startViaRef anymore since we always go to end
    startViaRef.current = null;
  }, [editing, localText]);

  // Click-away to commit
  useEffect(() => {
    if (!editing) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (hRef.current?.contains(target)) return;
      if (popRef.current?.contains(target)) return;
      stopEditing(true);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing, localText]);

  function stopEditing(commitChanges = true) {
    if (commitChanges) {
      // Read from DOM to be safe
      const finalText = (hRef.current?.innerText ?? localText)
        .trim()
        .replace(/\s+/g, " ");
      setLocalText(finalText);
      onChange({ ...value, headingText: finalText });
    } else {
      // Revert DOM
      if (hRef.current) hRef.current.innerText = value.headingText ?? "";
      setLocalText(value.headingText ?? "");
    }
    setEditing(false);
  }

  return (
    <Popover open={editing}>
      <PopoverAnchor asChild>
        <h2
          ref={hRef}
          className={[
            "text-center w-full sm:text-base select-text outline-none",
            className,
          ].join(" ")}
          suppressContentEditableWarning
          contentEditable={editing}
          spellCheck={false}
          role="textbox"
          aria-label="Edit heading"
          onDoubleClick={() => {
            startViaRef.current = "dblclick";
            setEditing(true);
          }}
          onClick={() => {
            if (editing) hRef.current?.focus({ preventScroll: true });
          }}
          onPaste={(e) => {
            // Paste as plain text
            e.preventDefault();
            const text = e.clipboardData.getData("text/plain");
            document.execCommand("insertText", false, text);
          }}
          onInput={(e) => {
            // Update state for external saves, but React won't re-render text while editing
            const t = (e.target as HTMLElement).innerText;
            setLocalText(t);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              stopEditing(true);
            } else if (e.key === "Escape") {
              e.preventDefault();
              stopEditing(false);
            }
          }}
          // IMPORTANT: while editing, DO NOT render children from React (prevents caret jump)
          style={{
            color: value.headingColor,
            fontSize: value.headingFontSize,
            fontWeight: value.headingBold ? 700 : 500,
            cursor: "text",
            boxShadow: editing
              ? "0 0 0 1px rgba(255,255,255,0.18) inset"
              : "none",
            borderRadius: 8,
            paddingInline: editing ? 6 : 0,
          }}
        >
          {editing ? null : localText}
        </h2>
      </PopoverAnchor>

      {editing && (
        <PopoverContent
          ref={popRef}
          side="top"
          align="center"
          sideOffset={12}
          className="min-w-[260px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-2"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="secondary"
              className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition"
            >
              <PaintBucket className="mr-1 h-3.5 w-3.5" />
              Color
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition"
            >
              <CaseUpper className="mr-1 h-3.5 w-3.5" />
              Size
            </Badge>
            <Badge
              variant="secondary"
              className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition"
            >
              <Bold className="mr-1 h-3.5 w-3.5" />
              Weight
            </Badge>
          </div>
          <div className="mt-2 text-[10px] text-white/70 text-center">
            Enter to save · Esc to cancel
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
}
