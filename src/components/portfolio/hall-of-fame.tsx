import { useMemo, useState } from "react";
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
      <div className="mb-6 flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter acknowledgements">
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
                "mono-chip rounded-full border px-3.5 py-2 transition-colors",
                category === tab
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {tab}
              <span className="ml-1.5 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {filtered.map((org) => (
          <div
            key={org.name}
            className="group flex items-center justify-between gap-3 border-t border-border py-3.5 transition-colors hover:text-primary"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span aria-hidden className="text-[9px] text-muted-foreground transition-colors group-hover:text-primary">
                ◆
              </span>
              <span className="truncate text-[15px] font-medium">{org.name}</span>
            </div>
            <span className="mono-chip shrink-0 uppercase text-muted-foreground transition-colors group-hover:text-primary">
              {org.category}
            </span>
          </div>
        ))}
      </div>

      <p className="mono-chip mt-5 text-muted-foreground">
        …and multiple private programmes and additional acknowledgements.
      </p>
    </Section>
  );
}
