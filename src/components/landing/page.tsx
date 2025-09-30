"use client";
import EditorShell from "./editor-shell";
import HeroSection from "./hero-section";
import ShowcaseSection from "./showcase-section";

export default function RunableLandingPage() {
  return (
    <EditorShell>
      <HeroSection />
      <ShowcaseSection />
    </EditorShell>
  );
}
