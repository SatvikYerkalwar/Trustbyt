import {
  Shield,
  Lock,
  Server,
  FileCheck2,
  Eye,
  KeyRound,
} from "lucide-react";
import { SectionHeader } from "./Features";

export function Stats() {
  const stats = [
    { v: "Day 1", l: "Building in public" },
    { v: "Early", l: "Concept stage" },
    { v: "1", l: "Founder · 15 y/o" },
    { v: "100%", l: "Free during beta" },
  ];
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-8">
          <div className="pointer-events-none absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <dl className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.l}
                </dt>
                <dd className="mt-1 font-mono text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Security() {
  const items = [
    {
      icon: Lock,
      title: "End-to-end encryption",
      body: "AES-256 in transit and at rest. Per-tenant keys rotated automatically every 30 days.",
    },
    {
      icon: KeyRound,
      title: "Zero-knowledge identity",
      body: "Verify without storing. Identity data is hashed client-side; we never see raw PII.",
    },
    {
      icon: Server,
      title: "Regional data residency",
      body: "Pin workloads to US, EU, or APAC. Customer data never leaves the region you choose.",
    },
    {
      icon: Eye,
      title: "Full audit trail",
      body: "Every decision is reproducible with versioned model weights and signal snapshots.",
    },
    {
      icon: FileCheck2,
      title: "SOC 2 · ISO 27001",
      body: "SOC 2 Type I complete, Type II underway. ISO 27001 controls mapped from day one.",
    },
    {
      icon: Shield,
      title: "Bug bounty + red team",
      body: "Continuous third-party offensive testing and a public bounty starting at $20k.",
    },
  ];

  return (
    <section id="security" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Security & privacy"
              title={
                <>
                  Privacy-first by architecture,
                  <br />
                  <span className="text-gradient">not by promise.</span>
                </>
              }
              desc="TrustByt was built by ex-security engineers from cloud and fintech. Encryption, residency and minimization aren't features — they're the foundation."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {["SOC 2", "GDPR", "CCPA", "ISO 27001*", "HIPAA-ready"].map(
                (b) => (
                  <span
                    key={b}
                    className="rounded-md border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((it, i) => (
              <div
                key={it.title}
                className="reveal rounded-xl border border-border/70 bg-surface/50 p-5 hover-lift"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                  <it.icon className="h-4 w-4 text-primary" />
                </span>
                <h4 className="mt-4 text-sm font-semibold">{it.title}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
