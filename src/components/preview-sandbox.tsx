"use client";
import React, { useEffect, useRef } from "react";

export type PreviewSandboxProps = {
  initialHtml?: string;
  height?: number;
};

export function PreviewSandbox({
  initialHtml,
  height = 520,
}: PreviewSandboxProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument!;
    doc.open();
    doc.write(`<!doctype html><html><head><meta charset=\"utf-8\"/><style>
html,body,#root{height:100%;margin:0}*{box-sizing:border-box}
body{font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji}
</style></head><body>
<div id="root">
${
  initialHtml ??
  '<div style="padding:24px"><h1>Sandbox Ready</h1><p>Step 4 static content.</p></div>'
}
</div>
</body></html>`);
    doc.close();
  }, [initialHtml]);

  return (
    <div className="relative rounded-2xl border shadow-sm overflow-hidden bg-white">
      <iframe ref={iframeRef} className="w-full" style={{ height }} />
    </div>
  );
}
