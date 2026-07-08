import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[12px] font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Join 5,000+ people already protected
          </span>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Stop scams before they start.{" "}
            <span className="text-gradient">Start free today.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            No credit card required. Free during beta. Verify people, sites, and
            sellers in real time — and get expert help the moment something feels off.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:w-auto"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 sm:w-auto"
            >
              See pricing
            </Link>
          </div>
          <p className="relative mt-4 text-[12px] text-muted-foreground">
            Talk to an expert · No hidden fees · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
