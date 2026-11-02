import { useCallback, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Section shell                                                       */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  index,
  kicker,
  title,
  description,
  children,
  className,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("sec-pad topo-dark scroll-mt-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:mb-12">
          <div className="kicker flex items-center gap-3 text-muted-foreground">
            <span aria-hidden className="text-primary">◆</span>
            <span>
              {index} · {kicker}
            </span>
            <span
              aria-hidden
              className="h-px flex-1 bg-border"
            />
          </div>
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="serif-text max-w-2xl text-lg text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Copy-to-clipboard                                                   */
/* ------------------------------------------------------------------ */

export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API can be unavailable; fall back silently.
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1600);
  }, []);

  return { copied, copy };
}

export function CopyButton({
  value,
  copyKey,
  copied,
  onCopy,
  label,
  className,
  compact = false,
}: {
  value: string;
  copyKey: string;
  copied: string | null;
  onCopy: (value: string, key: string) => void;
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  const isCopied = copied === copyKey;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onCopy(value, copyKey);
      }}
      aria-label={isCopied ? "Copied" : `Copy ${label ?? value}`}
      className={cn(
        "mono-chip inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary",
        compact && "px-2 py-0.5",
        isCopied && "border-primary text-primary",
        className,
      )}
    >
      {isCopied ? (
        <Check className="size-3 text-primary" aria-hidden />
      ) : (
        <Copy className="size-3" aria-hidden />
      )}
      {label ? <span>{label}</span> : null}
      {isCopied ? <span className="text-primary">copied</span> : null}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Small tag / chip                                                    */
/* ------------------------------------------------------------------ */

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "mono-chip inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Smooth in-page scroll                                               */
/* ------------------------------------------------------------------ */

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
