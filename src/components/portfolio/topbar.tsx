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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        {/* brand */}
        <a
          href="#top"
          className="flex items-baseline gap-2 font-display text-lg font-bold tracking-tight text-foreground"
          aria-label="Back to top"
        >
          {CONTACT.handle}
          <span aria-hidden className="text-primary">
            .
          </span>
        </a>

        <span className="mono-chip hidden text-muted-foreground md:inline">
          security researcher
        </span>

        {/* quick stats */}
        <div className="mono-chip hidden items-center gap-4 lg:flex">
          {[
            { k: "cves", v: "12" },
            { k: "orgs", v: "40+" },
            { k: "rank", v: "#1" },
          ].map((pill) => (
            <span key={pill.k} className="text-muted-foreground">
              <span aria-hidden className="mr-1.5 text-primary">◆</span>
              {pill.k} <span className="text-foreground">{pill.v}</span>
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <button
          type="button"
          onClick={onOpenPalette}
          className="mono-chip hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
        >
          <Search className="size-3.5" aria-hidden />
          <span>search</span>
          <kbd className="rounded-full border border-border px-1.5 text-[10px]">⌘K</kbd>
        </button>

        <button
          type="button"
          onClick={onOpenPalette}
          aria-label="Open search"
          className="inline-flex items-center rounded-full border border-border p-2 text-muted-foreground hover:text-primary sm:hidden"
        >
          <Search className="size-4" aria-hidden />
        </button>

        <button
          type="button"
          onClick={onToggleDensity}
          title={density === "comfortable" ? "Switch to dense view" : "Switch to quick reading mode"}
          aria-label={density === "comfortable" ? "Switch to dense view" : "Switch to quick reading mode"}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {density === "comfortable" ? (
            <AlignJustify className="size-4" aria-hidden />
          ) : (
            <Rows3 className="size-4" aria-hidden />
          )}
          <span className="mono-chip hidden sm:inline">
            {density === "comfortable" ? "quick" : "dense"}
          </span>
        </button>

        <Button
          size="sm"
          onClick={onOpenResume}
          className="rounded-full bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <FileDown className="size-3.5" aria-hidden />
          Resume
        </Button>
      </div>

      {/* section quick-nav */}
      <nav
        aria-label="Sections"
        className="mx-auto flex w-full max-w-6xl items-center gap-5 overflow-x-auto px-4 pb-2.5 sm:px-6"
      >
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToId(item.id)}
            className={cn(
              "kicker shrink-0 text-[11px] text-muted-foreground transition-colors hover:text-primary",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
