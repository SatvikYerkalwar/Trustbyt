import {
  Brain,
  Lock,
  Radar,
  Zap,
  Network,
  Fingerprint,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Multi-model AI engine",
    body: "Ensemble of fine-tuned LLMs and graph models cross-check identity, behavior, and on-chain signals in under 200 ms.",
  },
  {
    icon: Radar,
    title: "Real-time threat radar",
    body: "Streaming detection of impersonation, phishing kits, synthetic reviews and coordinated networks the moment they appear.",
  },
  {
    icon: Network,
    title: "Reputation graph",
    body: "A living graph across 180+ sources — domains, wallets, marketplaces, social — to score actors with full provenance.",
  },
  {
    icon: Fingerprint,
    title: "Identity verification",
    body: "Verify humans, businesses and AI agents with zero-knowledge proofs. No identity data ever sits on our servers.",
  },
  {
    icon: Lock,
    title: "Privacy by default",
    body: "End-to-end encrypted pipelines, regional data residency, and SOC 2 / GDPR / CCPA-aligned controls from day one.",
  },
  {
    icon: Zap,
    title: "One API, every surface",
    body: "Drop in a script, hit one REST endpoint, or use our browser extension — protection follows your users everywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Platform"
          title={
            <>
              A trust layer built like<br />
              <span className="text-gradient">critical infrastructure.</span>
            </>
          }
          desc="Every signal scored, every decision auditable. TrustByt plugs into your stack the same way Stripe plugged into payments."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/40 p-6 hover-lift backdrop-blur"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/25">
                <f.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 flex items-center gap-1.5 text-[15px] font-semibold tracking-tight">
                {f.title}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-2xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${
          align === "center" ? "" : ""
        }`}
      >
        <span className="h-1 w-1 rounded-full bg-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-balance text-[15px] leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}
