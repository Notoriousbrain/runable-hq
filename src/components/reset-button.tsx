"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { clearLocalCaches } from "@/lib/cache";
import { Loader2, RotateCcw } from "lucide-react";

export default function ResetButton({
  confirmText = "Reset all text back to defaults?",
  truncate = true,
  className,
}: {
  confirmText?: string;
  truncate?: boolean;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onReset() {
    if (!window.confirm(confirmText)) return;
    setLoading(true);
    try {
      const res = await fetch("/api/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ truncate }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Reset failed");
      }
      clearLocalCaches();
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Reset failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onReset}
      disabled={loading}
      className={className}
      title="Reset site content to initial values"
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin text-white" />
      ) : (
        <RotateCcw className="size-4 rounded-full text-white" />
      )}
    </Button>
  );
}
