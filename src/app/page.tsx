"use client";

import RunableLandingPage from "@/components/landing/page";
import ResetButton from "@/components/reset-button";

export default function Page() {
  return (
    <main className="min-h-screen">
      <RunableLandingPage />
      <div className="absolute bottom-4 right-4">
        <ResetButton className="ml-2 rounded-full bg-transparent cursor-pointer" />
      </div>
    </main>
  );
}
