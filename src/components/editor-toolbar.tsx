"use client";
import { useId } from "react";

type Props = {
  value: { text: string; color: string; fontSize: number; bold: boolean };
  onChange: (next: Props["value"]) => void;
};

export default function EditorToolbar({ value, onChange }: Props) {
  const textId = useId();
  const colorId = useId();
  const sizeId = useId();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-gray-50 rounded-2xl shadow">
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-gray-600">Text</span>
        <input
          id={textId}
          className="px-3 py-2 rounded-lg border"
          value={value.text}
          onChange={(e) => onChange({ ...value, text: e.target.value })}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-gray-600">Color</span>
        <input
          id={colorId}
          type="color"
          className="h-10 w-full rounded-lg border"
          value={value.color}
          onChange={(e) => onChange({ ...value, color: e.target.value })}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-gray-600">Font size (px)</span>
        <input
          id={sizeId}
          type="number"
          className="px-3 py-2 rounded-lg border"
          min={10}
          max={96}
          value={value.fontSize}
          onChange={(e) =>
            onChange({ ...value, fontSize: Number(e.target.value) || 16 })
          }
        />
      </label>
      <label className="flex items-end gap-2 text-sm">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={value.bold}
          onChange={(e) => onChange({ ...value, bold: e.target.checked })}
        />
        <span>Bold</span>
      </label>
    </div>
  );
}
