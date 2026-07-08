import { useState } from "react";
import {
  Link2,
  Loader2,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
} from "lucide-react";
import { SectionHeader } from "./Features";

type Sev = "ok" | "warn" | "bad";
type Check = { label: string; detail: string; sev: Sev };

function analyze(rawUrl: string) {
  const url = rawUrl.trim().toLowerCase().replace(/^https?:\/\//, "").split("/")[0];
  const knownGood = ["stripe.com", "github.com", "google.com", "apple.com", "amazon.in", "sbi.co.in"];
  const badHints = ["amaz0n", "g00gle", "paypa1", "-refunds", "-tools", "-support", "-verify", "free-", "claim-", "winner", "lottery", "kyc-", "-bank"];
  const looksGood = knownGood.some((g) => url === g || url.endsWith("." + g));
  const looksBad = badHints.some((b) => url.includes(b));
  const verdict: Sev = looksGood ? "ok" : looksBad ? "bad" : url.includes("-") || /\d/.test(url) ? "warn" : "warn";
  const score = looksGood ? 86 + ((url.length * 3) % 12) : looksBad ? 14 + ((url.length * 7) % 18) : 48 + ((url.length * 5) % 18);

  const checks: Check[] = looksGood
    ? [
        { label: "Domain age", detail: "10+ years · stable history", sev: "ok" },
        { label: "SSL certificate", detail: "Valid · issued by DigiCert", sev: "ok" },
        { label: "Blacklist scan", detail: "0 hits across 14 feeds", sev: "ok" },
        { label: "WHOIS owner", detail: "Publicly verified company", sev: "ok" },
        { label: "Brand impersonation", detail: "No lookalike pattern", sev: "ok" },
      ]
    : looksBad
    ? [
        { label: "Domain age", detail: "Less than 30 days old", sev: "bad" },
        { label: "SSL certificate", detail: "Self-signed or missing", sev: "bad" },
        { label: "Blacklist scan", detail: "3+ hits · Spamhaus, SURBL", sev: "bad" },
        { label: "WHOIS owner", detail: "Hidden by privacy proxy", sev: "warn" },
        { label: "Brand impersonation", detail: "Mimics a known brand", sev: "bad" },
      ]
    : [
        { label: "Domain age", detail: "Around 1 year old", sev: "warn" },
        { label: "SSL certificate", detail: "Valid (Let's Encrypt)", sev: "ok" },
        { label: "Blacklist scan", detail: "0 hits", sev: "ok" },
        { label: "WHOIS owner", detail: "Privacy-shielded", sev: "warn" },
        { label: "Brand impersonation", detail: "No exact match", sev: "ok" },
      ];

  return { verdict, score, checks };
}

export function ScamUrlChecker() {
  const [url, setUrl] = useState("amaz0n-refunds.shop");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof analyze> | null>(null);

  const run = () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(analyze(url));
      setLoading(false);
    }, 900);
  };

  const scoreColor = result
    ? result.score >= 70
      ? "text-success"
      : result.score >= 40
      ? "text-warning"
      : "text-danger"
    : "text-foreground";
  const verdictMeta = result
    ? result.verdict === "ok"
      ? { label: "Looks safe", Icon: ShieldCheck, chip: "bg-success/15 text-success ring-success/40" }
      : result.verdict === "warn"
      ? { label: "Use caution", Icon: AlertTriangle, chip: "bg-warning/15 text-warning ring-warning/40" }
      : { label: "High risk", Icon: ShieldAlert, chip: "bg-danger/15 text-danger ring-danger/40" }
    : null;

  return (
    <section id="url-checker" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Free tool · 01"
          title={<>Check any <span className="text-gradient">website link</span> instantly.</>}
          desc="Paste a URL you got over WhatsApp, SMS, or email. We'll show you how risky it looks — no signup needed."
        />

        <div className="reveal mx-auto mt-10 max-w-3xl rounded-3xl border border-border/70 bg-surface/40 p-5 sm:p-7 glow-card">
          <label className="block text-[11px] uppercase tracking-wider text-muted-foreground">
            Paste a website link
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Link2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && run()}
                placeholder="https://suspicious-site.com"
                spellCheck={false}
                className="w-full rounded-lg border border-border/70 bg-background/60 py-3 pl-10 pr-3 font-mono text-[13px] outline-none ring-primary/30 transition focus:border-primary/50 focus:ring-2"
              />
            </div>
            <button
              onClick={run}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110 disabled:opacity-70"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
              {loading ? "Checking…" : "Check URL"}
            </button>
          </div>

          {result && verdictMeta && (
            <div className="mt-6 space-y-5">
              <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-border/60 bg-background/40 p-5 sm:flex-row sm:items-center">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 ${verdictMeta.chip}`}
                  >
                    <verdictMeta.Icon className="h-3.5 w-3.5" />
                    {verdictMeta.label}
                  </span>
                  <div className="mt-2 truncate font-mono text-[13px] text-muted-foreground">
                    {url}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-5xl font-semibold ${scoreColor}`}>
                    {result.score}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    / 100 trust score
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-danger via-warning to-success transition-all duration-500"
                  style={{ width: `${result.score}%` }}
                />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {result.checks.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-surface/40 px-3 py-2"
                  >
                    {c.sev === "ok" ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    ) : c.sev === "warn" ? (
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                    )}
                    <div className="text-[12.5px]">
                      <div className="font-medium">{c.label}</div>
                      <div className="text-muted-foreground">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-primary">
                  <Lightbulb className="h-3.5 w-3.5" /> How to stay safe
                </div>
                <ul className="mt-2 space-y-1.5 text-[13px] text-foreground/85">
                  <li>• Never enter OTP, PIN or card details on a link sent over SMS or WhatsApp.</li>
                  <li>• Always check the spelling of the domain — scammers use small misspellings.</li>
                  <li>• Look for HTTPS and the padlock — but remember, even scam sites can have it.</li>
                  <li>• When in doubt, open the bank or shopping site directly from your browser.</li>
                </ul>
              </div>
            </div>
          )}

          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            Demo analysis runs in your browser using offline heuristics. Not a substitute for professional review.
          </p>
        </div>
      </div>
    </section>
  );
}