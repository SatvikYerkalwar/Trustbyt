import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Lock,
  Bot,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Verified Experts only",
    body: "Every alert and verdict is grounded in signals from credentialed sources — no anonymous, unverifiable claims.",
  },
  {
    icon: Zap,
    title: "<200 ms scam detection",
    body: "AI scoring is fast enough to run at checkout, on click, before a single rupee or byte leaves your side.",
  },
  {
    icon: Eye,
    title: "Always-on monitoring",
    body: "Continuous trust tracking across 180+ sources — domains, sellers, reviews, wallets — for everyone you transact with.",
  },
  {
    icon: Lock,
    title: "Privacy-first by design",
    body: "Zero-knowledge identity, end-to-end encryption and regional residency. We never store raw personal data.",
  },
  {
    icon: Bot,
    title: "Built for the AI internet",
    body: "Programmable trust for autonomous agents and synthetic identities — the protection web2 never had.",
  },
  {
    icon: HeartHandshake,
    title: "Mission, not just a product",
    body: "Built by a founder whose mission is to make India — and the wider internet — safer for ordinary people.",
  },
];

export function FounderCTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-surface-elevated/90 via-surface/70 to-surface/40 p-8 sm:p-12 glow-card">
          {/* Background flourishes */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[140%] -translate-x-1/2 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30" />
          <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative grid items-start gap-10 lg:grid-cols-5">
            {/* Left: headline + CTA */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-3 w-3" />
                Join the journey
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Be on the inside of the{" "}
                <span className="text-gradient">trust layer</span> Satvik is
                building.
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                Beta is hand-picked and capped. Get early API access, founder
                Slack, and locked-in pricing for life — and help shape how AI
                trust verification works for millions of people.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  hash="waitlist"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110"
                >
                  Join the beta waitlist
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
                <Link
                  to="/"
                  hash="product"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/40"
                >
                  See live demo
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                <span>412 of 500 beta seats</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>No credit card</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>GDPR · CCPA ready</span>
              </div>

              {/* Capacity bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface ring-1 ring-border/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary shimmer"
                  style={{ width: "82%" }}
                />
              </div>
            </div>

            {/* Right: reasons grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="reveal group relative rounded-xl border border-border/70 bg-background/40 p-4 backdrop-blur transition hover:border-primary/40"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                    <r.icon className="h-4 w-4 text-primary" />
                  </span>
                  <h4 className="mt-3 text-[13.5px] font-semibold">
                    {r.title}
                  </h4>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
