import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { TopBar, type Density } from "@/components/portfolio/topbar";
import { Hero } from "@/components/portfolio/hero";
import { StatsBar } from "@/components/portfolio/stats";
import { CveExplorer } from "@/components/portfolio/cve-explorer";
import { HallOfFame } from "@/components/portfolio/hall-of-fame";
import { ExperienceSection } from "@/components/portfolio/experience";
import { EducationSection, Footer } from "@/components/portfolio/education";
import { ResumeDialog } from "@/components/portfolio/resume-dialog";
import { CommandPalette } from "@/components/portfolio/command-palette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "S. Lakshmi Vignesh (w3shi) — Security Researcher & AppSec Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of S. Lakshmi Vignesh (@w3shi): 60+ disclosed vulnerabilities across 40+ organizations, 12 public CVEs (Intel, Microsoft, NVIDIA), #1 Intel Q1 2026, Microsoft MVR 2025, NASA contributor.",
      },
      { property: "og:title", content: "S. Lakshmi Vignesh (w3shi) — Security Researcher & AppSec Engineer" },
      {
        property: "og:description",
        content:
          "Interactive CVE explorer, hall of fame of 40+ organizations, and security engineering work — Veryon, Enten, AnzenCTF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [density, setDensity] = useState<Density>("comfortable");
  const [cveQuery, setCveQuery] = useState("");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Restore reading-mode preference; it only exists in the browser.
  useEffect(() => {
    const stored = window.localStorage.getItem("w3shi-density");
    if (stored === "dense" || stored === "comfortable") setDensity(stored);
  }, []);

  const toggleDensity = useCallback(() => {
    setDensity((prev) => {
      const next: Density = prev === "comfortable" ? "dense" : "comfortable";
      try {
        window.localStorage.setItem("w3shi-density", next);
      } catch {
        // private mode — fine to skip persistence
      }
      return next;
    });
  }, []);

  // Global ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (e.key === "/" && !paletteOpen) {
        const target = e.target as HTMLElement | null;
        const typing =
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable);
        if (!typing) {
          e.preventDefault();
          setPaletteOpen(true);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen]);

  return (
    <div data-density={density} className="min-h-screen bg-background text-foreground">
      <a
        href="#highlights"
        className="mono-chip sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        skip to highlights
      </a>

      <TopBar
        onOpenPalette={() => setPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        density={density}
        onToggleDensity={toggleDensity}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} onOpenPalette={() => setPaletteOpen(true)} />
        <StatsBar />
        <CveExplorer query={cveQuery} onQueryChange={setCveQuery} />
        <HallOfFame />
        <ExperienceSection />
        <EducationSection />
      </main>

      <Footer onOpenResume={() => setResumeOpen(true)} />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onCveSelect={setCveQuery}
      />
      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </div>
  );
}
