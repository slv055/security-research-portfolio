import { CONTACT, EXPERTISE, LINKS } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, BadgeCheck, ExternalLink, Mail, Phone } from "lucide-react";
import { CopyButton, useCopy, Tag } from "./shared";
import { Button } from "@/components/ui/button";

export function Hero({
  onOpenResume,
  onOpenPalette,
}: {
  onOpenResume: () => void;
  onOpenPalette: () => void;
}) {
  const { copied, copy } = useCopy();

  return (
    <div id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-paper pointer-events-none absolute inset-0" />
      {/* solid blue accent block, like a printed sticker */}
      <div
        aria-hidden
        className="absolute right-6 top-20 hidden size-20 items-center justify-center bg-primary text-primary-foreground lg:flex"
      >
        <ArrowUpRight className="size-9" strokeWidth={2.5} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <p className="kicker flex items-center gap-3 text-muted-foreground">
          <span aria-hidden className="text-primary">◆</span>
          security researcher · actively disclosing
        </p>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl">
          {CONTACT.name}
        </h1>

        <p className="serif-text mt-5 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          I break things before attackers do — from low-level Intel firmware to cloud
          platforms and AI agents. 60+ disclosed vulnerabilities across 40+ organizations,
          12 public CVEs, and a #1 global rank in Intel&rsquo;s Q1 2026 researcher rankings.
        </p>

        {/* contact pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <a
            href={CONTACT.hackerone}
            target="_blank"
            rel="noreferrer"
            className="mono-chip inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <BadgeCheck className="size-3.5 text-primary" aria-hidden />
            hackerone.com/<span className="text-primary">{CONTACT.handle}</span>
            <ExternalLink className="size-3 text-muted-foreground" aria-hidden />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono-chip inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink className="size-3.5 text-primary" aria-hidden />
            linkedin.com/in/lakshmi-vignesh-s
          </a>
          <span className="inline-flex items-center gap-1 rounded-full border border-border pl-4 text-foreground">
            <Mail className="size-3.5 text-primary" aria-hidden />
            <a
              href={`mailto:${CONTACT.email}`}
              className="mono-chip py-2 text-foreground hover:text-primary"
            >
              {CONTACT.email}
            </a>
            <CopyButton
              value={CONTACT.email}
              copyKey="email"
              copied={copied}
              onCopy={copy}
              label="email"
            />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border pl-4 text-foreground">
            <Phone className="size-3.5 text-primary" aria-hidden />
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="mono-chip py-2 text-foreground hover:text-primary"
            >
              {CONTACT.phone}
            </a>
            <CopyButton
              value={CONTACT.phone}
              copyKey="phone"
              copied={copied}
              onCopy={copy}
              label="phone"
            />
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href="#cves">
              Explore 12 CVEs
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent font-semibold text-foreground hover:border-primary hover:text-primary"
          >
            <a href="#hall-of-fame">40+ Hall of Fame orgs</a>
          </Button>
          <button
            type="button"
            onClick={onOpenPalette}
            className="mono-chip text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-primary"
          >
            or press ⌘K to jump anywhere
          </button>
        </div>

        {/* expertise */}
        <div className="mt-12 flex flex-wrap gap-1.5">
          {EXPERTISE.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
