import { Heart, Sparkles } from "lucide-react";

export function MissionBanner() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-2">
        <div className="reveal relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-5 py-4 sm:px-7 sm:py-5">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_50%,oklch(0.84_0.16_200_/_0.18),transparent_50%),radial-gradient(circle_at_80%_50%,oklch(0.7_0.18_285_/_0.18),transparent_50%)]" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                <Heart className="h-4 w-4 text-primary" />
              </span>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary">
                  Our mission
                </div>
                <p className="mt-0.5 text-[14px] leading-snug text-foreground/90 sm:text-[14.5px]">
                  Built so that no Indian family ever has to lose money or peace of mind to an online scam again.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground sm:self-auto">
              <Sparkles className="h-3 w-3 text-primary" /> Concept · early development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}