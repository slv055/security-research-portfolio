import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CVES, HALL_OF_FAME } from "@/data/portfolio";
import { scrollToId, useCopy } from "./shared";
import { Check, Copy } from "lucide-react";

const SECTIONS = [
  { id: "top", label: "Top / Hero", hint: "contact & handle" },
  { id: "highlights", label: "Highlights", hint: "key metrics" },
  { id: "cves", label: "CVE Explorer", hint: "12 credited CVEs" },
  { id: "hall-of-fame", label: "Hall of Fame", hint: "40+ organizations" },
  { id: "experience", label: "Experience", hint: "Veryon · Enten · paper" },
  { id: "education", label: "Education & CTF", hint: "SRM EEC · AnzenCTF" },
];

export function CommandPalette({
  open,
  onOpenChange,
  onCveSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCveSelect: (query: string) => void;
}) {
  const { copied, copy } = useCopy();

  // ⌘K / Ctrl+K opens the palette (also handled globally on the page).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (id: string) => {
    onOpenChange(false);
    window.setTimeout(() => scrollToId(id), 60);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden border-border bg-popover p-0 sm:max-w-xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Jump to a section, CVE, or organization</DialogDescription>
        </DialogHeader>
        <Command className="bg-transparent">
          <CommandInput placeholder="search sections, cves, orgs, contacts…" />
          <CommandList className="max-h-[60vh]">
            <CommandEmpty className="mono-chip py-6 text-center text-muted-foreground">
              no matches — try "intel", "nasa" or "cve"
            </CommandEmpty>

            <CommandGroup heading="Sections">
              {SECTIONS.map((s) => (
                <CommandItem
                  key={s.id}
                  value={`${s.label} ${s.hint}`}
                  onSelect={() => go(s.id)}
                >
                  <span className="text-foreground">{s.label}</span>
                  <span className="mono-chip ml-auto text-muted-foreground">{s.hint}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Copy contact">
              {[
                { key: "p-handle", value: "w3shi", label: "handle — @w3shi" },
                { key: "p-email", value: "Slvignesh05@gmail.com", label: "email" },
                { key: "p-phone", value: "+91 8807149187", label: "phone" },
                { key: "p-h1", value: "https://hackerone.com/w3shi", label: "HackerOne profile URL" },
                { key: "p-li", value: "https://linkedin.com/in/lakshmi-vignesh-s", label: "LinkedIn URL" },
              ].map((item) => (
                <CommandItem key={item.key} value={`copy ${item.label}`} onSelect={() => copy(item.value, item.key)}>
                  {copied === item.key ? (
                    <Check className="size-3.5 text-primary" aria-hidden />
                  ) : (
                    <Copy className="size-3.5 text-muted-foreground" aria-hidden />
                  )}
                  <span className="text-foreground">copy {item.label}</span>
                  {copied === item.key ? (
                    <span className="mono-chip ml-auto text-primary">copied ✓</span>
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="CVEs — jump & filter">
              {CVES.map((cve) => (
                <CommandItem
                  key={cve.id}
                  value={`${cve.id} ${cve.vendor} ${cve.tags.join(" ")}`}
                  onSelect={() => {
                    onCveSelect(cve.id);
                    go("cves");
                  }}
                >
                  <span className="mono-chip font-semibold text-foreground">{cve.id}</span>
                  <span className="mono-chip ml-auto text-muted-foreground">
                    {cve.vendor.toLowerCase()}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Organizations">
              {HALL_OF_FAME.map((org) => (
                <CommandItem
                  key={org.name}
                  value={`${org.name} ${org.category}`}
                  onSelect={() => go("hall-of-fame")}
                >
                  <span className="text-foreground">{org.name}</span>
                  <span className="mono-chip ml-auto text-muted-foreground">
                    {org.category.toLowerCase()}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
