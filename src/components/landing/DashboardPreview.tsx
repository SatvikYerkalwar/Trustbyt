import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Fingerprint,
  Sparkles,
} from "lucide-react";

/**
 * Realistic in-product dashboard mockup used in hero + product section.
 * Pure presentational; no business logic.
 */
export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-surface-elevated to-surface glow-card ${
        compact ? "" : ""
      }`}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border/70 bg-background/40 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        <div className="flex items-center gap-2 rounded-md border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          <Globe className="h-3 w-3" />
          app.trustbyte.io/verify
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Live
        </div>
      </div>

      {/* App body */}
      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-border/60 bg-background/20 p-3 lg:block">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
              <Shield className="h-3 w-3 text-primary" />
            </span>
            <span className="text-xs font-semibold">TrustByt</span>
          </div>
          {[
            { i: Activity, label: "Overview", active: true },
            { i: Fingerprint, label: "Identities" },
            { i: ShieldAlert, label: "Threats", badge: "12" },
            { i: Eye, label: "Monitoring" },
            { i: TrendingUp, label: "Reputation" },
          ].map((it) => (
            <div
              key={it.label}
              className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[12px] transition ${
                it.active
                  ? "bg-primary/10 text-foreground ring-1 ring-primary/25"
                  : "text-muted-foreground hover:bg-surface"
              }`}
            >
              <span className="flex items-center gap-2">
                <it.i className="h-3.5 w-3.5" />
                {it.label}
              </span>
              {it.badge && (
                <span className="rounded bg-danger/15 px-1.5 py-0.5 font-mono text-[10px] text-danger">
                  {it.badge}
                </span>
              )}
            </div>
          ))}
          <div className="mt-4 rounded-lg border border-border/60 bg-surface/60 p-2.5">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              AI Engine
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-success">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              Operational · 142 ms
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 space-y-4 p-4 lg:col-span-9">
          {/* Header row */}
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Live verification
              </div>
              <div className="text-sm font-semibold">
                stripe-payments-tools.io
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-danger/30 bg-danger/10 px-2.5 py-1 text-[11px] text-danger">
              <AlertTriangle className="h-3 w-3" />
              High risk detected
            </div>
          </div>

          {/* Trust score gauge */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative col-span-1 overflow-hidden rounded-xl border border-border/70 bg-background/40 p-4 md:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Trust score
                </span>
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-semibold text-danger">
                  32
                </span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-danger via-warning to-success"
                  style={{ width: "32%" }}
                />
              </div>
              <div className="mt-2 text-[11px] text-muted-foreground">
                ↓ 41 points · last 24h
              </div>
            </div>

            {/* Reputation panel */}
            <div className="col-span-1 rounded-xl border border-border/70 bg-background/40 p-4 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Reputation signals
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  18 sources
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] sm:grid-cols-3">
                {[
                  { l: "Domain age", v: "11 days", bad: true },
                  { l: "SSL issuer", v: "Self-signed", bad: true },
                  { l: "Blacklists", v: "3 hits", bad: true },
                  { l: "WHOIS", v: "Privacy proxy", warn: true },
                  { l: "On-chain", v: "0 tx", warn: true },
                  { l: "Mirrors Stripe", v: "92% match", bad: true },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <span className="text-muted-foreground">{s.l}</span>
                    <span
                      className={`font-medium ${
                        s.bad
                          ? "text-danger"
                          : s.warn
                          ? "text-warning"
                          : "text-success"
                      }`}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Threat feed + identity compare */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <div className="col-span-1 overflow-hidden rounded-xl border border-border/70 bg-background/40 p-4 md:col-span-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  AI scam analysis
                </span>
                <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] text-primary">
                  GPT-Trust 4.1
                </span>
              </div>
              <ul className="space-y-2 text-[12px]">
                {[
                  {
                    sev: "high",
                    t: "Brand impersonation",
                    d: "Logo & color match to Stripe with 92% similarity.",
                  },
                  {
                    sev: "high",
                    t: "Phishing payload",
                    d: "Form posts credentials to unverified endpoint.",
                  },
                  {
                    sev: "med",
                    t: "Synthetic reviews",
                    d: "47 reviews authored within a 9-minute window.",
                  },
                  {
                    sev: "low",
                    t: "Hosting cluster",
                    d: "Server shares ASN with 14 flagged domains.",
                  },
                ].map((r) => (
                  <li
                    key={r.t}
                    className="flex items-start gap-2 rounded-md border border-border/50 bg-surface/40 p-2"
                  >
                    <span
                      className={`mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full ${
                        r.sev === "high"
                          ? "bg-danger shadow-[0_0_8px_oklch(0.7_0.21_22)]"
                          : r.sev === "med"
                          ? "bg-warning"
                          : "bg-muted-foreground"
                      }`}
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-foreground">{r.t}</div>
                      <div className="truncate text-muted-foreground">
                        {r.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 rounded-xl border border-border/70 bg-background/40 p-4 md:col-span-2">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Identity comparison
              </div>
              <div className="mt-3 space-y-2.5">
                <div className="flex items-center gap-3 rounded-lg border border-success/25 bg-success/5 p-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-success/15 ring-1 ring-success/40">
                    <ShieldCheck className="h-4 w-4 text-success" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[12px] font-medium">
                      stripe.com
                      <CheckCircle2 className="h-3 w-3 text-success" />
                    </div>
                    <div className="text-[11px] text-success">
                      Verified · score 98
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    14y
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-danger/30 bg-danger/5 p-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-danger/15 ring-1 ring-danger/40">
                    <ShieldAlert className="h-4 w-4 text-danger" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[12px] font-medium">
                      stripe-payments-tools.io
                    </div>
                    <div className="text-[11px] text-danger">
                      Suspicious · score 32
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    11d
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          style={{ animation: "scan 6s linear infinite" }}
        />
      </div>
    </div>
  );
}
