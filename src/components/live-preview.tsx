"use client";

type Props = { text: string; color: string; fontSize: number; bold: boolean };
export default function LivePreview({ text, color, fontSize, bold }: Props) {
  return (
    <div className="p-6 border rounded-2xl shadow bg-white">
      <div style={{ color, fontSize, fontWeight: bold ? 700 : 400 }}>
        {text}
      </div>
    </div>
  );
}
