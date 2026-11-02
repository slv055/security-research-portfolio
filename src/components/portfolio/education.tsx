import { GraduationCap, Award, Flag } from "lucide-react";
import { CERTS, EDUCATION, LEADERSHIP, LINKS } from "@/data/portfolio";
import { Section, Tag, CopyButton, useCopy } from "./shared";
import { CONTACT } from "@/data/portfolio";

export function EducationSection() {
  const { copied, copy } = useCopy();

  return (
    <Section
      id="education"
      index="05"
      kicker="education, ctf & leadership"
      title="Foundation & community"
      description="Academic background, certifications, and community leadership in security education."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* education */}
        <div className="border-t-2 border-primary pt-6">
          <div className="kicker flex items-center gap-2 text-muted-foreground">
            <GraduationCap className="size-4 text-primary" aria-hidden />
            Education
          </div>
          <p className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
            {EDUCATION.degree}
          </p>
          <p className="serif-text mt-2 text-[15px] text-muted-foreground">{EDUCATION.school}</p>
          <div className="mono-chip mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary px-2.5 py-1 text-primary">
              cgpa {EDUCATION.cgpa} / 10
            </span>
            <span className="text-muted-foreground">{EDUCATION.period}</span>
          </div>
        </div>

        {/* certifications */}
        <div className="border-t-2 border-primary pt-6">
          <div className="kicker flex items-center gap-2 text-muted-foreground">
            <Award className="size-4 text-primary" aria-hidden />
            Certifications
          </div>
          <ul className="mt-5 space-y-3">
            {CERTS.map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-2.5 border-t border-border pt-3 text-sm text-foreground/90 first:border-0 first:pt-0"
              >
                <span aria-hidden className="mono-chip mt-0.5 shrink-0 text-primary">
                  ◆
                </span>
                {cert}
              </li>
            ))}
          </ul>
          <a
            href={LINKS.unstop}
            target="_blank"
            rel="noreferrer"
            className="mono-chip mt-4 inline-flex items-center gap-1.5 text-primary underline decoration-dotted underline-offset-4"
          >
            more certifications ↗
          </a>
        </div>

        {/* CTF / leadership */}
        <div className="border-t-2 border-primary pt-6">
          <div className="kicker flex items-center gap-2 text-muted-foreground">
            <Flag className="size-4 text-primary" aria-hidden />
            CTF &amp; Leadership
          </div>
          <p className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
            {LEADERSHIP.title}
          </p>
          <p className="mono-chip mt-1 text-muted-foreground">
            {LEADERSHIP.org} · {LEADERSHIP.period}
          </p>
          <ul className="mt-3 space-y-2">
            {LEADERSHIP.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                <span aria-hidden className="mono-chip mt-0.5 shrink-0 text-primary">
                  ›
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.anzenctf}
            target="_blank"
            rel="noreferrer"
            className="mono-chip mt-3 inline-flex items-center gap-1.5 text-primary underline decoration-dotted underline-offset-4"
          >
            anzenctf.tech ↗
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Footer({ onOpenResume }: { onOpenResume: () => void }) {
  const { copied, copy } = useCopy();

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="grid-paper pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-baseline gap-2 font-display text-4xl font-bold tracking-tight text-foreground">
              {CONTACT.handle}
              <span aria-hidden className="text-primary">.</span>
              <span aria-hidden className="mono-chip caret-blink text-primary" />
            </div>
            <p className="serif-text mt-3 max-w-md text-lg text-muted-foreground">
              Open to security research collaborations, AppSec roles, and responsible
              disclosure programmes. Best way to reach me is email.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onOpenResume}
                className="mono-chip inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                resume.pdf
              </button>
              <CopyButton
                value={CONTACT.email}
                copyKey="f-email"
                copied={copied}
                onCopy={copy}
                label={CONTACT.email}
              />
              <CopyButton
                value={CONTACT.phone}
                copyKey="f-phone"
                copied={copied}
                onCopy={copy}
                label={CONTACT.phone}
              />
            </div>
          </div>

          <div className="mono-chip flex flex-col gap-2.5 text-muted-foreground sm:items-end">
            <a href={CONTACT.hackerone} target="_blank" rel="noreferrer" className="hover:text-primary">
              hackerone.com/{CONTACT.handle}
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
              linkedin.com/in/lakshmi-vignesh-s
            </a>
            <a href={LINKS.paper} target="_blank" rel="noreferrer" className="hover:text-primary">
              zenodo · doi 10.5281/zenodo.17618882
            </a>
            <a href={LINKS.enten} target="_blank" rel="noreferrer" className="hover:text-primary">
              enten — supply chain mitigation
            </a>
          </div>
        </div>

        <div className="mono-chip mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-5 text-muted-foreground">
          <span>© 2026 {CONTACT.name}</span>
          <span aria-live="polite">
            built with care · all disclosures responsibly coordinated
          </span>
        </div>
      </div>
    </footer>
  );
}
