"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { PaintBucket, CaseUpper, Bold as BoldIcon } from "lucide-react";
import type { TitleToken } from "@/types";

type Props = {
  value: TitleToken;
  onChange: (next: TitleToken) => void;
  className?: string;
};

const WEIGHTS = [400, 500, 600, 700] as const;

export default function HeadingInlineEditor({
  value,
  onChange,
  className,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openWeight, setOpenWeight] = useState(false);
  const [localWeight, setLocalWeight] = useState<TitleToken["weight"] | null>(
    null
  );

  const hRef = useRef<HTMLHeadingElement | null>(null);
  const popMainRef = useRef<HTMLDivElement | null>(null);

  const [localText, setLocalText] = useState(value.text ?? "");

  const initialRGBA = useMemo(
    () => parseColorToRgba(value.color),
    [value.color]
  );
  const [r, setR] = useState(initialRGBA.r);
  const [g, setG] = useState(initialRGBA.g);
  const [b, setB] = useState(initialRGBA.b);
  const [a, setA] = useState(initialRGBA.a);

  const rgbaString = `rgba(${clamp(r, 0, 255)}, ${clamp(g, 0, 255)}, ${clamp(
    b,
    0,
    255
  )}, ${clamp(a, 0, 1)})`;
  const hexString = rgbToHex(r, g, b);

  useEffect(() => {
    if (!editing) setLocalText(value.text ?? "");
  }, [value.text, editing]);

  useEffect(() => {
    const next = parseColorToRgba(value.color);
    setR(next.r);
    setG(next.g);
    setB(next.b);
    setA(next.a);
  }, [value.color]);

  function moveCaretToEnd(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  useLayoutEffect(() => {
    if (!editing) return;
    const el = hRef.current;
    if (!el) return;
    el.innerText = localText;
    el.focus({ preventScroll: true });
    requestAnimationFrame(() => moveCaretToEnd(el));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  useEffect(() => {
    if (!editing) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (hRef.current?.contains(t)) return;
      if (popMainRef.current?.contains(t)) return;
      const subs = document.querySelectorAll("[data-subpopover='true']");
      for (const el of Array.from(subs)) if (el.contains(t)) return;
      setEditing(false);
      setOpenColor(false);
      setOpenSize(false);
      setOpenWeight(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [editing]);

  function applyColor(next: {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
  }) {
    const R = clamp(next.r ?? r, 0, 255);
    const G = clamp(next.g ?? g, 0, 255);
    const B = clamp(next.b ?? b, 0, 255);
    const A = clamp(next.a ?? a, 0, 1);
    setR(R);
    setG(G);
    setB(B);
    setA(A);
    onChange({ ...value, color: `rgba(${R}, ${G}, ${B}, ${A})` });
  }
  function applyHex(hex: string) {
    const parsed = hexToRgbSafe(hex);
    if (parsed) applyColor({ r: parsed.r, g: parsed.g, b: parsed.b });
  }
  function applyNativeColor(hex: string) {
    applyHex(hex);
  }
  function applyAlpha(val: number[]) {
    const v = Array.isArray(val) && typeof val[0] === "number" ? val[0] : a;
    applyColor({ a: v });
  }

  function applySize(px: number[]) {
    const raw = Array.isArray(px) ? px[0] : Number(px);
    const n = clamp(Number.isFinite(raw) ? raw : value.size ?? 20, 10, 128);
    onChange({ ...value, size: n });
  }

  const currentWeight: TitleToken["weight"] = localWeight ?? value.weight;
  function setWeight(w: TitleToken["weight"]) {
    setLocalWeight(w);
    onChange({ ...value, weight: w });
  }

  function insertAtCaret(text: string) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    sel.deleteFromDocument();
    sel.getRangeAt(0).insertNode(document.createTextNode(text));
    sel.collapseToEnd();
  }

  return (
    <>
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
            onDoubleClick={() => setEditing(true)}
            onClick={() =>
              editing && hRef.current?.focus({ preventScroll: true })
            }
            onPaste={(e) => {
              e.preventDefault();
              const text = e.clipboardData?.getData("text/plain") ?? "";
              insertAtCaret(text);
              const el = hRef.current;
              if (el) {
                const t = el.innerText;
                setLocalText(t);
                onChange({ ...value, text: t.trim().replace(/\s+/g, " ") });
              }
            }}
            onInput={(e) => {
              const t = (e.target as HTMLElement).innerText;
              setLocalText(t);
              onChange({ ...value, text: t.trim().replace(/\s+/g, " ") });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            style={{
              color: value.color,
              fontSize: value.size,
              fontWeight: currentWeight,
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
            ref={popMainRef}
            side="top"
            align="center"
            sideOffset={18}
            collisionPadding={16}
            avoidCollisions
            className="min-w-[260px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-2"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-center gap-2">
              <Badge
                onClick={() => {
                  setOpenColor((v) => !v);
                  setOpenSize(false);
                  setOpenWeight(false);
                }}
                variant="secondary"
                className="cursor-pointer text-xs px-2.5 py-1.5 rounded-full text-white bg-white/10 hover:bg-white/15 transition inline-flex items-center"
              >
                <PaintBucket className="mr-1 h-3.5 w-3.5" />
                Color
              </Badge>

              <Badge
                onClick={() => {
                  setOpenSize((v) => !v);
                  setOpenColor(false);
                  setOpenWeight(false);
                }}
                variant="secondary"
                className="cursor-pointer text-xs px-2.5 py-1.5 rounded-full text-white bg-white/10 hover:bg-white/15 transition inline-flex items-center"
              >
                <CaseUpper className="mr-1 h-3.5 w-3.5" />
                Size
              </Badge>

              <Badge
                onClick={() => {
                  setOpenWeight((v) => !v);
                  setOpenColor(false);
                  setOpenSize(false);
                }}
                variant="secondary"
                className="cursor-pointer text-xs px-2.5 py-1.5 rounded-full text-white bg-white/10 hover:bg-white/15 transition inline-flex items-center"
              >
                <BoldIcon className="mr-1 h-3.5 w-3.5" />
                Weight
              </Badge>
            </div>
          </PopoverContent>
        )}
      </Popover>

      <Popover open={openColor} onOpenChange={setOpenColor}>
        <PopoverAnchor asChild>
          <span />
        </PopoverAnchor>
        <PopoverContent
          side="top"
          align="center"
          sideOffset={8}
          collisionPadding={16}
          data-subpopover="true"
          className="min-w-[320px] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-3"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between gap-3">
            <div
              className="h-10 w-10 rounded-md border border-white/20"
              style={{ background: rgbaString }}
            />
            <Input
              type="color"
              value={hexString}
              className="h-10 w-14 p-1 cursor-pointer bg-transparent"
              onChange={(e) => applyNativeColor(e.target.value)}
              aria-label="Pick color"
            />
            <div className="flex-1">
              <Input
                value={hexString}
                onChange={(e) => applyHex(e.target.value)}
                className="h-8 mt-1 text-white"
                spellCheck={false}
              />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "#ffffff",
              "#000000",
              "#f43f5e",
              "#f59e0b",
              "#10b981",
              "#3b82f6",
              "#8b5cf6",
              "#14b8a6",
              "#e11d48",
            ].map((hex) => (
              <button
                key={hex}
                onClick={() => applyHex(hex)}
                className="h-7 w-7 rounded-md border border-white/20"
                style={{ background: hex }}
                aria-label={`Preset ${hex}`}
              />
            ))}
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-white/80 mb-2">
              <span>Opacity</span>
              <span>{Math.round(a * 100)}%</span>
            </div>
            <Slider
              value={[a]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={applyAlpha}
            />
          </div>
        </PopoverContent>
      </Popover>

      <Popover open={openSize} onOpenChange={setOpenSize}>
        <PopoverAnchor asChild>
          <span />
        </PopoverAnchor>
        <PopoverContent
          side="left"
          align="center"
          sideOffset={12}
          alignOffset={4}
          collisionPadding={16}
          avoidCollisions
          data-subpopover="true"
          className="min-w-[280px] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-3"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between text-xs text-white/80">
            <span>Font size</span>
            <Input
              type="number"
              value={Math.round(value.size ?? 20)}
              min={10}
              max={128}
              className="h-7 w-16"
              onChange={(e) => applySize([Number(e.target.value)])}
            />
          </div>
          <div className="mt-2">
            <Slider
              value={[Math.round(value.size ?? 20)]}
              min={10}
              max={128}
              step={1}
              onValueChange={applySize}
            />
          </div>
        </PopoverContent>
      </Popover>

      <Popover open={openWeight} onOpenChange={setOpenWeight}>
        <PopoverAnchor asChild>
          <span />
        </PopoverAnchor>
        <PopoverContent
          side="left"
          align="center"
          data-subpopover="true"
          className="min-w-[300px] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-3"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="text-xs text-white/80 mb-2">Font weight</div>
          <div className="grid grid-cols-4 gap-2">
            {WEIGHTS.map((w) => {
              const active = (currentWeight ?? 400) === w;
              return (
                <Button
                  key={w}
                  size="sm"
                  variant={active ? "default" : "secondary"}
                  className="rounded-full"
                  style={{ fontWeight: w }}
                  onClick={() => setWeight(w)}
                >
                  {w}
                </Button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}
function parseColorToRgba(input?: string) {
  if (!input) return { r: 255, g: 255, b: 255, a: 1 };
  const rgba = input.match(
    /rgba?\s*\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)/i
  );
  if (rgba) {
    const r = clamp(parseInt(rgba[1], 10), 0, 255);
    const g = clamp(parseInt(rgba[2], 10), 0, 255);
    const b = clamp(parseInt(rgba[3], 10), 0, 255);
    const a = rgba[4] !== undefined ? clamp(parseFloat(rgba[4]), 0, 1) : 1;
    return { r, g, b, a };
  }
  const hex = input.trim();
  if (/^#([0-9a-f]{3})$/i.test(hex)) {
    const h = hex.slice(1);
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16),
      a: 1,
    };
  }
  if (/^#([0-9a-f]{6})$/i.test(hex)) {
    const h = hex.slice(1);
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
      a: 1,
    };
  }
  return { r: 255, g: 255, b: 255, a: 1 };
}
function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) =>
    clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function hexToRgbSafe(hex: string) {
  const c = hex.trim().toLowerCase();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)) return null;
  let r: number, g: number, b: number;
  if (c.length === 4) {
    r = parseInt(c[1] + c[1], 16);
    g = parseInt(c[2] + c[2], 16);
    b = parseInt(c[3] + c[3], 16);
  } else {
    r = parseInt(c.slice(1, 3), 16);
    g = parseInt(c.slice(3, 5), 16);
    b = parseInt(c.slice(5, 7), 16);
  }
  return { r, g, b };
}
