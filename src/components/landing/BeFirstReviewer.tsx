import { Star, MessageSquarePlus, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Features";

export function BeFirstReviewer() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Reviews"
          title={<>Be our <span className="text-gradient">first reviewer</span>.</>}
          desc="TrustByt is brand new. We'd rather show no reviews than fake ones — join the beta and tell the world what you actually think."
        />

        <div className="reveal mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 bg-surface/30 p-6 text-center"
            >
              <div className="flex gap-1 text-muted-foreground/40">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-3 text-[14px] text-muted-foreground">
                Your honest review could go here.
              </p>
              <a
                href="#waitlist"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-3 py-1.5 text-[12.5px] font-medium text-foreground transition hover:border-primary/40"
              >
                <MessageSquarePlus className="h-3.5 w-3.5" />
                Join beta to review
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}