import { useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { HALL_OF_FAME, ORG_CATEGORIES } from "@/data/portfolio";
import { Section } from "./shared";
import { cn } from "@/lib/utils";

export function HallOfFame() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? HALL_OF_FAME
        : HALL_OF_FAME.filter((o) => o.category === category),
    [category],
  );

  const tabs = ["All", ...ORG_CATEGORIES];

  return (
    <Section
      id="hall-of-fame"
      index="03"
      kicker="acknowledgements matrix"
      title="Hall of Fame — 40+ organizations"
      description="Recognized by security teams and vendor programmes across tech, blockchain, cloud, developer tools and government."
    >
      <div className="mb-5 flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter acknowledgements">
        {tabs.map((tab) => {
          const count =
            tab === "All"
              ? HALL_OF_FAME.length
              : HALL_OF_FAME.filter((o) => o.category === tab).length;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={category === tab}
              onClick={() => setCategory(tab)}
              className={cn(
                "mono-chip rounded-md border px-3 py-2 transition-colors",
                category === tab
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.toLowerCase()}
              <span className="ml-1.5 text-muted-foreground">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((org) => (
          <div
            key={org.name}
            className="card-sheen group flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-3 transition-colors hover:border-primary/40"
          >
            <ShieldCheck
              className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden
            />
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-foreground">{org.name}</div>
              <div className="mono-chip truncate text-muted-foreground">
                {org.category.toLowerCase()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mono-chip mt-4 text-muted-foreground">
        …and multiple private programmes and additional acknowledgements.
      </p>
    </Section>
  );
}
