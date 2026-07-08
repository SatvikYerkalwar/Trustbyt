import { Lock, ShieldCheck, BadgeCheck, FileCheck2, Globe, Fingerprint } from "lucide-react";

const badges = [
  { icon: Lock, label: "SSL / TLS 1.3", sub: "Encrypted in transit" },
  { icon: ShieldCheck, label: "SOC 2 Type II", sub: "Audit in progress" },
  { icon: Globe, label: "GDPR & CCPA", sub: "Privacy compliant" },
  { icon: FileCheck2, label: "ISO 27001", sub: "Controls mapped" },
  { icon: Fingerprint, label: "AES-256", sub: "Encryption at rest" },
  { icon: BadgeCheck, label: "Bug bounty", sub: "Third-party tested" },
];

export function TrustBadges() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal rounded-2xl border border-border/70 bg-surface/40 p-6 sm:p-8">
          <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Security & compliance you can verify
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-background/40 px-3 py-4 text-center transition hover:border-primary/30"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/25">
                  <b.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </span>
                <span className="text-[12.5px] font-semibold text-foreground">
                  {b.label}
                </span>
                <span className="text-[10.5px] text-muted-foreground">
                  {b.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
