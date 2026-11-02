import { Github, BookOpen, Briefcase } from "lucide-react";
import { EXPERIENCE, LINKS, type Experience } from "@/data/portfolio";
import { Section, Tag } from "./shared";
import { cn } from "@/lib/utils";

const KIND_META: Record<Experience["kind"], { icon: typeof Briefcase; label: string }> = {
  "full-time": { icon: Briefcase, label: "full-time" },
  internship: { icon: Briefcase, label: "internship" },
  "open-source": { icon: Github, label: "open source" },
  publication: { icon: BookOpen, label: "publication" },
};

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="04"
      kicker="work & research"
      title="Experience & security tooling"
      description="Hands-on AppSec, security automation at scale, cloud defence, and open-source supply chain research."
    >
      <div className="border-t border-border">
        {EXPERIENCE.map((exp) => {
          const meta = KIND_META[exp.kind];
          const Icon = meta.icon;
          return (
            <article
              key={exp.role}
              className="grid gap-5 border-b border-border py-8 sm:grid-cols-[210px_1fr] sm:gap-8"
            >
              {/* left rail: period + kind */}
              <div>
                <div className="mono-chip flex items-center gap-2 text-foreground">
                  <span aria-hidden className="text-[9px] text-primary">◆</span>
                  {exp.period}
                </div>
                <div className="mono-chip mt-2 flex items-center gap-1.5 text-muted-foreground">
                  <Icon className="size-3.5" aria-hidden />
                  {meta.label}
                </div>
              </div>

              {/* right column */}
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {exp.role}
                </h3>
                <p className="mono-chip mt-1.5 uppercase text-primary">{exp.org}</p>
                <p className="serif-text dense-text mt-3 max-w-2xl text-lg text-muted-foreground">
                  {exp.summary}
                </p>

                <ul
                  className={cn("mt-4 max-w-3xl space-y-2.5", exp.kind === "publication" && "hidden")}
                >
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="dense-clamp flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span aria-hidden className="mono-chip mt-0.5 shrink-0 text-primary">
                        ›
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>

                {exp.kind === "open-source" ? (
                  <a
                    href={LINKS.enten}
                    target="_blank"
                    rel="noreferrer"
                    className="mono-chip mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    live demo — enten-alpha.vercel.app ↗
                  </a>
                ) : null}
                {exp.kind === "publication" ? (
                  <a
                    href={LINKS.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="mono-chip mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    doi.org/10.5281/zenodo.17618882 ↗
                  </a>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
