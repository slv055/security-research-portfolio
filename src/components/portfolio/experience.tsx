import { Briefcase, GraduationCap, FlaskConical, Github, BookOpen } from "lucide-react";
import { EXPERIENCE, LINKS, type Experience } from "@/data/portfolio";
import { Section, Tag } from "./shared";

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
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block"
        />
        <div className="dense-gap grid grid-cols-1 gap-4">
          {EXPERIENCE.map((exp) => {
            const meta = KIND_META[exp.kind];
            const Icon = meta.icon;
            return (
              <article
                key={exp.role}
                className="card-sheen relative rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:ml-8"
              >
                <span
                  aria-hidden
                  className="absolute -left-8 top-6 hidden size-[15px] items-center justify-center rounded-full border border-primary/50 bg-background sm:flex"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Icon className="size-4 text-primary" aria-hidden />
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {exp.role}
                  </h3>
                  <span className="mono-chip rounded border border-border bg-secondary/60 px-2 py-0.5 text-muted-foreground">
                    {meta.label}
                  </span>
                  <span className="mono-chip ml-auto text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mono-chip mt-1.5 text-primary">{exp.org}</p>
                <p className="dense-text mt-3 text-sm text-muted-foreground">{exp.summary}</p>

                <ul
                  className={cnList("mt-3 space-y-2", exp.kind === "publication" && "hidden")}
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
                    className="mono-chip mt-3 inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    live demo — enten-alpha.vercel.app ↗
                  </a>
                ) : null}
                {exp.kind === "publication" ? (
                  <a
                    href={LINKS.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="mono-chip mt-3 inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    doi.org/10.5281/zenodo.17618882 ↗
                  </a>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Tag key={s}>{s.toLowerCase()}</Tag>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function cnList(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
