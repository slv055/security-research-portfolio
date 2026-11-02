import { STATS } from "@/data/portfolio";

export function StatsBar() {
  return (
    <section
      id="highlights"
      className="sec-pad relative scroll-mt-24 overflow-hidden bg-primary text-primary-foreground"
    >
      <div aria-hidden className="topo pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="kicker mb-10 flex items-center gap-3 opacity-80">
          <span aria-hidden>◆</span>
          <span>01 · key metrics</span>
          <span aria-hidden className="h-px flex-1 bg-primary-foreground/25" />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-t border-primary-foreground/30 pt-5 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-t-0 lg:[&:not(:first-child)]:pl-6"
            >
              <div className="font-display text-4xl font-bold tracking-tight sm:text-[2.6rem]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold leading-snug">{stat.label}</div>
              <div className="mono-chip mt-3 uppercase opacity-70">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
