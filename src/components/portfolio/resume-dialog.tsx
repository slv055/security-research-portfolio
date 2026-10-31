import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import europassAsset from "@/assets/europass.pdf.asset.json";

export function ResumeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] flex-col gap-4 overflow-hidden border-border bg-popover sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <FileText className="size-4 text-primary" aria-hidden />
            Resume — S. Lakshmi Vignesh
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Preview below, or grab the full PDF — a Europass CV version is available too.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" className="gap-1.5 rounded-md bg-primary font-mono font-semibold text-primary-foreground hover:bg-primary/85">
            <a href={resumeAsset.url} download="S-Lakshmi-Vignesh-Resume.pdf">
              <Download className="size-3.5" aria-hidden />
              download resume.pdf
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="gap-1.5 rounded-md border-border bg-secondary/40 font-mono hover:border-primary/50 hover:text-foreground">
            <a href={europassAsset.url} target="_blank" rel="noreferrer">
              <ExternalLink className="size-3.5" aria-hidden />
              europass cv (with photo)
            </a>
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-border bg-secondary/30">
          <iframe
            src={resumeAsset.url}
            title="Resume of S. Lakshmi Vignesh"
            className="h-[55vh] w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
