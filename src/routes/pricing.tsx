import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, Sparkles, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Footer } from "@/components/landing/FAQ";
import { SectionHeader } from "@/components/landing/Features";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — TrustByt | Simple, transparent trust protection" },
      {
        name: "description",
        content:
          "TrustByt pricing: Starter, Professional, and Enterprise plans. No hidden fees, free trial on every tier, and a 30-day money-back guarantee.",
      },
      { property: "og:title", content: "TrustByt Pricing — No hidden fees" },
      {
        property: "og:description",
        content:
          "Three simple plans for real-time scam protection. Monthly or annual billing with up to 20% savings.",
      },
    ],
  }),
  component: PricingPage,
});

type Tier = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  popular?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "For individuals staying scam-safe.",
    monthly: 0,
    annual: 0,
    cta: "Start free",
    features: [
      "50 trust checks / month",
      "URL & email phishing analyzer",
      "Basic scam score",
      "Community support",
    ],
  },
  {
    name: "Professional",
    tagline: "For creators, sellers & small teams.",
    monthly: 29,
    annual: 23,
    cta: "Start free trial",
    popular: true,
    features: [
      "5,000 trust checks / month",
      "Real-time API access",
      "Reputation graph & audit trail",
      "Priority expert help",
      "Browser extension",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For platforms at scale.",
    monthly: 0,
    annual: 0,
    cta: "Talk to an expert",
    features: [
      "Unlimited trust checks",
      "Dedicated SLA & data residency",
      "SSO & custom compliance",
      "Dedicated success manager",
      "Custom model tuning",
    ],
  },
];

const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: "Monthly trust checks", values: ["50", "5,000", "Unlimited"] },
  { label: "URL & email analyzer", values: [true, true, true] },
  { label: "Real-time API", values: [false, true, true] },
  { label: "Reputation graph", values: [false, true, true] },
  { label: "Audit trail", values: [false, true, true] },
  { label: "Browser extension", values: [false, true, true] },
  { label: "Priority expert help", values: [false, true, true] },
  { label: "SSO & SAML", values: [false, false, true] },
  { label: "Data residency", values: [false, false, true] },
  { label: "Dedicated manager", values: [false, false, true] },
];

const faqs = [
  {
    q: "Is there really a free plan?",
    a: "Yes. Starter is free forever with 50 trust checks a month — no credit card required. During beta, paid features are heavily discounted too.",
  },
  {
    q: "Do you charge any hidden fees?",
    a: "Never. The price you see is the price you pay. No setup fees, no overage surprises — we'll always warn you before you hit a limit.",
  },
  {
    q: "Can I switch or cancel anytime?",
    a: "Absolutely. Upgrade, downgrade, or cancel from your dashboard at any time. Changes take effect immediately and we prorate the difference.",
  },
  {
    q: "What does the money-back guarantee cover?",
    a: "If TrustByt isn't right for you, email us within 30 days of any paid charge and we'll refund it in full — no questions asked.",
  },
  {
    q: "How does the free trial work?",
    a: "Every paid tier starts with a 14-day free trial of all its features. You won't be charged until the trial ends, and you can cancel before then.",
  },
];

function PriceValue({ tier, annual }: { tier: Tier; annual: boolean }) {
  if (tier.name === "Enterprise") {
    return <span className="text-3xl font-semibold text-foreground">Custom</span>;
  }
  const price = annual ? tier.annual : tier.monthly;
  if (price === 0) {
    return <span className="text-4xl font-semibold text-foreground">$0</span>;
  }
  return (
    <span className="flex items-baseline gap-1">
      <span className="text-4xl font-semibold text-foreground">${price}</span>
      <span className="text-sm text-muted-foreground">/mo</span>
    </span>
  );
}

function PricingPage() {
  useScrollReveal();
  const [annual, setAnnual] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main className="pt-28">
        {/* Header */}
        <section className="relative pb-6">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-40" />
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Pricing"
              title={
                <>
                  Simple, transparent pricing.{" "}
                  <span className="text-gradient">No hidden fees.</span>
                </>
              }
              desc="Start free, upgrade when you're ready, and cancel anytime. Every paid plan is backed by a 30-day money-back guarantee."
            />

            {/* Billing toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={annual ? "text-muted-foreground" : "text-foreground"}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual((v) => !v)}
                role="switch"
                aria-checked={annual}
                aria-label="Toggle annual billing"
                className={`relative h-6 w-11 rounded-full border border-border transition ${
                  annual ? "bg-primary" : "bg-surface"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all ${
                    annual ? "left-[22px]" : "left-1"
                  }`}
                />
              </button>
              <span className={annual ? "text-foreground" : "text-muted-foreground"}>
                Annual
              </span>
              <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                Save 20%
              </span>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="relative py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={`reveal relative flex flex-col rounded-2xl border bg-surface/50 p-7 backdrop-blur ${
                  t.popular
                    ? "border-primary/50 shadow-[0_0_40px_-12px_oklch(0.84_0.16_200_/_0.5)]"
                    : "border-border/70"
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold tracking-tight">{t.name}</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {t.tagline}
                </p>
                <div className="mt-5 min-h-[3rem]">
                  <PriceValue tier={t} annual={annual} />
                  {annual && t.name === "Professional" && (
                    <p className="mt-1 text-[11.5px] text-success">
                      Billed annually · save $72/yr
                    </p>
                  )}
                </div>
                <a
                  href={t.name === "Enterprise" ? "/experts" : "#waitlist"}
                  className={`group mt-5 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition ${
                    t.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-border bg-surface/60 text-foreground hover:border-primary/40"
                  }`}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13px] text-foreground/90"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 px-6 text-center text-[13px] text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            Every paid plan includes a 30-day money-back guarantee.
          </p>
        </section>

        {/* Comparison table */}
        <section className="relative py-16">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              eyebrow="Compare plans"
              title={<>Everything, side by side.</>}
              desc="Find the plan that fits how you use TrustByt."
            />
            <div className="reveal mt-10 overflow-x-auto rounded-2xl border border-border/70 bg-surface/40">
              <table className="w-full min-w-[560px] text-left text-[13.5px]">
                <thead>
                  <tr className="border-b border-border/70">
                    <th className="p-4 font-medium text-muted-foreground">
                      Feature
                    </th>
                    {tiers.map((t) => (
                      <th
                        key={t.name}
                        className="p-4 text-center font-semibold text-foreground"
                      >
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-border/50 last:border-0"
                    >
                      <td className="p-4 text-foreground/90">{row.label}</td>
                      {row.values.map((v, i) => (
                        <td key={i} className="p-4 text-center">
                          {typeof v === "boolean" ? (
                            v ? (
                              <Check className="mx-auto h-4 w-4 text-primary" />
                            ) : (
                              <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                            )
                          ) : (
                            <span className="text-foreground/90">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="relative py-16">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeader
              eyebrow="Pricing FAQ"
              title={<>Questions about billing?</>}
              desc="Straight answers — because trust starts with transparency."
            />
            <div className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  className="reveal group rounded-xl border border-border/70 bg-surface/40 p-5"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[14.5px] font-medium text-foreground">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-primary" />
                      {f.q}
                    </span>
                    <span className="text-muted-foreground transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
