import { STATS } from "@/data/portfolio";
import { Section } from "./shared";

export function StatsBar() {
  return (
    <Section
      id="highlights"
      index="01"
      kicker="key metrics"
      title="At a glance"
      description="Career highlights, verified from official researcher leaderboards and vendor acknowledgements."
    >
      <div className="dense-gap grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map((stat) => (
          <div
            key={stat.value}
            className="card-sheen group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div className="mono-chip text-2xl font-semibold text-primary text-glow sm:text-[1.35rem]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium leading-snug text-foreground">
              {stat.label}
            </div>
            <div className="mono-chip mt-2 text-muted-foreground">{stat.sub}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
