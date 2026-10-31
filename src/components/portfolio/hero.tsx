import { CONTACT, EXPERTISE, LINKS } from "@/data/portfolio";
import { BadgeCheck, ExternalLink, Mail, Phone, Shield, ArrowDown } from "lucide-react";
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
      {/* backdrop: dot grid + soft green glow, very subtle */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 340px at 70% -8%, color-mix(in oklab, var(--glow) 11%, transparent), transparent 70%)",
        }}
      />
      <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        {/* status pill */}
        <div className="mono-chip mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">
          <Shield className="size-3.5" aria-hidden />
          security researcher · actively disclosing
        </div>

        <p className="mono-chip mb-3 text-muted-foreground">
          $ whoami <span className="text-primary">— verified researcher</span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {CONTACT.name}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="mono-chip glow-ring inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-primary">
            @{CONTACT.handle}
            <CopyButton
              value={CONTACT.handle}
              copyKey="handle"
              copied={copied}
              onCopy={copy}
              label={CONTACT.handle}
              className="border-transparent bg-transparent text-primary hover:text-foreground"
            />
          </span>
          <p className="text-lg text-muted-foreground sm:text-xl">{CONTACT.title}</p>
        </div>

        <p className="dense-text mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          I break things before attackers do — from low-level Intel firmware to cloud
          platforms and AI agents. 60+ disclosed vulnerabilities across 40+ organizations,
          12 public CVEs, and a #1 global rank in Intel's Q1 2026 researcher rankings.
        </p>

        {/* contact chips */}
        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          <a
            href={CONTACT.hackerone}
            target="_blank"
            rel="noreferrer"
            className="mono-chip inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50"
          >
            <BadgeCheck className="size-3.5 text-primary" aria-hidden />
            hackerone.com/<span className="text-primary">{CONTACT.handle}</span>
            <ExternalLink className="size-3 text-muted-foreground" aria-hidden />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono-chip inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50"
          >
            <ExternalLink className="size-3.5 text-primary" aria-hidden />
            linkedin.com/in/lakshmi-vignesh-s
          </a>
          <span className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 pl-3 text-foreground">
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
          <span className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 pl-3 text-foreground">
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
            className="rounded-md bg-primary font-mono font-semibold text-primary-foreground hover:bg-primary/85"
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
            className="rounded-md border-border bg-secondary/40 font-mono hover:border-primary/50 hover:text-foreground"
          >
            <a href="#hall-of-fame">40+ Hall of Fame orgs</a>
          </Button>
          <button
            type="button"
            onClick={onOpenPalette}
            className="mono-chip text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground"
          >
            or press ⌘K to jump anywhere
          </button>
        </div>

        {/* expertise */}
        <div className="mt-10 flex flex-wrap gap-1.5">
          {EXPERTISE.map((s) => (
            <Tag key={s} className="border-border/70">
              {s.toLowerCase()}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
