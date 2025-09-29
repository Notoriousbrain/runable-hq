"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
  return (
    <main className="min-h-screen grid place-items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">shadcn wired ✅</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Next.js + Tailwind v4 + shadcn running under Bun.
          </p>
        </DialogContent>
      </Dialog>
    </main>
  );
}
