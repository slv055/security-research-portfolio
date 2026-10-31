import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/portfolio";
import { scrollToId } from "./shared";
import { FileDown, Search, AlignJustify, Rows3 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "highlights", label: "Highlights" },
  { id: "cves", label: "CVEs" },
  { id: "hall-of-fame", label: "Hall of Fame" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export type Density = "comfortable" | "dense";

export function TopBar({
  onOpenPalette,
  onOpenResume,
  density,
  onToggleDensity,
}: {
  onOpenPalette: () => void;
  onOpenResume: () => void;
  density: Density;
  onToggleDensity: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        {/* brand */}
        <a
          href="#top"
          className="mono-chip flex items-center gap-2 text-foreground"
          aria-label="Back to top"
        >
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-semibold">{CONTACT.handle}</span>
          <span className="hidden text-muted-foreground sm:inline">/ sec-research</span>
        </a>

        {/* kernel-style status pills */}
        <div className="mono-chip hidden items-center gap-1.5 lg:flex">
          {[
            { k: "cves", v: "12" },
            { k: "orgs", v: "40+" },
            { k: "rank", v: "#1" },
          ].map((pill) => (
            <span
              key={pill.k}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-muted-foreground"
            >
              <span aria-hidden className="text-primary">
                ●
              </span>
              {pill.k}
              <span className="text-foreground">{pill.v}</span>
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <button
          type="button"
          onClick={onOpenPalette}
          className="mono-chip group hidden items-center gap-2 rounded-md border border-border bg-secondary/40 px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:inline-flex"
        >
          <Search className="size-3.5" aria-hidden />
          <span>search</span>
          <kbd className="rounded border border-border bg-background px-1 text-[10px]">
            ⌘K
          </kbd>
        </button>

        <button
          type="button"
          onClick={onOpenPalette}
          aria-label="Open search"
          className="inline-flex items-center rounded-md border border-border bg-secondary/40 p-2 text-muted-foreground hover:text-foreground sm:hidden"
        >
          <Search className="size-4" aria-hidden />
        </button>

        <button
          type="button"
          onClick={onToggleDensity}
          title={density === "comfortable" ? "Switch to dense view" : "Switch to quick reading mode"}
          aria-label={density === "comfortable" ? "Switch to dense view" : "Switch to quick reading mode"}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-2 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          {density === "comfortable" ? (
            <AlignJustify className="size-4" aria-hidden />
          ) : (
            <Rows3 className="size-4" aria-hidden />
          )}
          <span className="mono-chip hidden sm:inline">{density === "comfortable" ? "quick" : "dense"}</span>
        </button>

        <Button
          size="sm"
          onClick={onOpenResume}
          className="gap-1.5 rounded-md bg-primary font-mono text-[13px] font-semibold text-primary-foreground hover:bg-primary/85"
        >
          <FileDown className="size-3.5" aria-hidden />
          Resume
        </Button>
      </div>

      {/* section quick-nav */}
      <nav
        aria-label="Sections"
        className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 pb-2 sm:px-6"
      >
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToId(item.id)}
            className={cn(
              "mono-chip shrink-0 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
            )}
          >
            {item.label.toLowerCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}
