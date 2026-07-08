import {
  Users,
  Store,
  Link as LinkIcon,
  CircleUser,
  CreditCard,
  Bot,
} from "lucide-react";
import { SectionHeader } from "./Features";

const cases = [
  {
    icon: Users,
    tag: "Marketplaces",
    title: "Detect fake freelancers",
    body: "Score sellers across Fiverr, Upwork, and Telegram in real time. Catch resold portfolios and AI-generated identities before a contract is signed.",
    stat: { v: "94%", l: "fake-profile recall" },
  },
  {
    icon: Store,
    tag: "Commerce",
    title: "Verify online sellers",
    body: "Cross-check storefronts against 180+ trust signals — domain age, payment processor, customer reviews, on-chain history.",
    stat: { v: "3.4×", l: "fewer chargebacks" },
  },
  {
    icon: LinkIcon,
    tag: "Browsing",
    title: "Analyze suspicious websites",
    body: "A one-click verdict on any URL, with explainable reasoning and the exact signals that triggered the score.",
    stat: { v: "<200ms", l: "verdict latency" },
  },
  {
    icon: CircleUser,
    tag: "Identity",
    title: "Check digital reputation",
    body: "See a person or company's public footprint distilled into a single trust score with full source citations.",
    stat: { v: "180+", l: "data sources" },
  },
  {
    icon: CreditCard,
    tag: "Payments",
    title: "Prevent scams before transactions",
    body: "Block risky payments at checkout with a single API call. Lower fraud loss without adding friction to good customers.",
    stat: { v: "-71%", l: "fraud loss (pilot)" },
  },
  {
    icon: Bot,
    tag: "AI agents",
    title: "AI-powered trust verification",
    body: "Give your AI agents a sense of who and what to trust. Programmable trust policies for the autonomous web.",
    stat: { v: "First", l: "agent-native API" },
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Use cases"
          title={
            <>
              Built for the moments
              <br />
              <span className="text-gradient">trust actually matters.</span>
            </>
          }
          desc="From marketplaces to checkouts to autonomous agents, TrustByt answers the same question millions of times a day: should I trust this?"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-surface-elevated/70 to-surface/40 p-6 hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/25">
                  <c.icon className="h-4.5 w-4.5 text-primary" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <h3 className="mt-5 text-[16px] font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                {c.body}
              </p>
              <div className="mt-6 flex items-end justify-between border-t border-border/60 pt-4">
                <div>
                  <div className="font-mono text-2xl font-semibold text-foreground">
                    {c.stat.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.stat.l}
                  </div>
                </div>
                <span className="text-[11px] text-muted-foreground transition group-hover:text-primary">
                  Learn more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
