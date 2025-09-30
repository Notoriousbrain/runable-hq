"use client";
import React, { useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";

export type PreviewFrameProps = {
  component: React.ComponentType | null;
  height?: number;
};

export function PreviewFrame({
  component: Component,
  height = 520,
}: PreviewFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const rootRef = useRef<Root | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument!;

    doc.open();
    doc.write(`<!doctype html><html><head><meta charset=\"utf-8\"/><style>
html,body,#root{height:100%;margin:0}*{box-sizing:border-box}
:root{--brand:#6366f1}
body{font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji}
button{cursor:pointer}
</style></head><body><div id=\"root\"></div></body></html>`);
    doc.close();

    const container = doc.getElementById("root")!;
    const root = createRoot(container);
    rootRef.current = root;

    if (Component) {
      try {
        root.render(React.createElement(Component));
      } catch (e) {
        container.innerHTML = `<pre style="padding:16px;color:#ef4444;white-space:pre-wrap">${String(
          e
        )}</pre>`;
      }
    } else {
      container.innerHTML = `<div style="padding:24px;color:#64748b">No component yet. Paste to start.</div>`;
    }

    return () => {
      try {
        root.unmount();
      } catch {}
      rootRef.current = null;
    };
  }, [Component]);

  return (
    <div className="relative rounded-2xl border shadow-sm overflow-hidden bg-white">
      <iframe ref={iframeRef} className="w-full" style={{ height }} />
    </div>
  );
}
