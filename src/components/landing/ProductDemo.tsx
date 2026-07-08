import { DashboardPreview } from "./DashboardPreview";
import { SectionHeader } from "./Features";
import {
  ShieldCheck,
  ShieldAlert,
  Gauge,
  ScanSearch,
  Sparkles,
} from "lucide-react";

export function ProductDemo() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-glow" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The product"
          title={
            <>
              One workspace for every<br />
              <span className="text-gradient">trust decision you make.</span>
            </>
          }
          desc="Score any entity, drill into the signals, and ship the verdict to your stack. All from a single, fast, beautiful console."
        />

        <div className="relative mt-14">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-2xl" />
          <div className="relative rounded-3xl border border-border/70 bg-surface/40 p-1.5 sm:p-2 backdrop-blur ring-glow">
            <DashboardPreview />
          </div>
        </div>

        {/* Highlights row */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              i: Gauge,
              t: "Trust score",
              d: "A single 0–100 verdict per entity, recomputed every minute.",
            },
            {
              i: ScanSearch,
              t: "AI scam analysis",
              d: "Explainable detections with the exact signals that triggered them.",
            },
            {
              i: Sparkles,
              t: "Reputation panel",
              d: "Domain, social, on-chain, and review provenance — side-by-side.",
            },
            {
              i: ShieldAlert,
              t: "Risk + threat feed",
              d: "Real-time alerts on impersonation, phishing, and synthetic networks.",
            },
          ].map((h) => (
            <div
              key={h.t}
              className="reveal rounded-xl border border-border/70 bg-surface/50 p-5 hover-lift"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/25">
                <h.i className="h-4 w-4 text-primary" />
              </span>
              <h4 className="mt-3.5 text-[14px] font-semibold">{h.t}</h4>
              <p className="mt-1 text-[13px] text-muted-foreground">{h.d}</p>
            </div>
          ))}
        </div>

        {/* Identity comparison strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <IdentityCard
            verified
            name="stripe.com"
            score={98}
            tags={["14 years", "EV SSL", "0 blacklists", "Stable WHOIS"]}
          />
          <IdentityCard
            name="stripe-payments-tools.io"
            score={32}
            tags={["11 days", "Self-signed", "3 blacklists", "Privacy WHOIS"]}
          />
        </div>
      </div>
    </section>
  );
}

function IdentityCard({
  verified,
  name,
  score,
  tags,
}: {
  verified?: boolean;
  name: string;
  score: number;
  tags: string[];
}) {
  const good = verified;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 ${
        good
          ? "border-success/30 bg-success/5"
          : "border-danger/30 bg-danger/5"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
            good
              ? "bg-success/15 text-success ring-1 ring-success/40"
              : "bg-danger/15 text-danger ring-1 ring-danger/40"
          }`}
        >
          {good ? (
            <ShieldCheck className="h-3 w-3" />
          ) : (
            <ShieldAlert className="h-3 w-3" />
          )}
          {good ? "Verified" : "Suspicious"}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">
          score
        </span>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-[15px] font-semibold">{name}</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border/60 bg-background/40 px-1.5 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`font-mono text-4xl font-semibold ${
            good ? "text-success" : "text-danger"
          }`}
        >
          {score}
        </div>
      </div>
    </div>
  );
}
