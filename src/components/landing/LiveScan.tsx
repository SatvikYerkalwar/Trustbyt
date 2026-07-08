import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  Loader2,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Globe,
  Mail,
  Wallet,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Cpu,
  Lock,
  Activity,
} from "lucide-react";
import { SectionHeader } from "./Features";

/** Realistic-feeling, fully client-side AI trust scan demo. */

type Severity = "ok" | "warn" | "bad";
type Step = { label: string; detail: string; sev: Severity };

const SAMPLES = [
  "stripe-payments-tools.io",
  "amaz0n-refunds.shop",
  "github.com",
  "satvik@trustbyte.io",
  "0x9a8B…f3C2",
];

const ENGINE_STEPS = [
  "Resolving entity",
  "Fetching WHOIS · DNS · SSL",
  "Cross-checking 180+ trust sources",
  "Running GPT-Trust 4.1 inference",
  "Scoring reputation signals",
  "Compiling verdict",
];

function classify(input: string) {
  const v = input.trim().toLowerCase();
  // Heuristic: known good vs anything with digits/dashes/typo brand words
  const knownGood = [
    "stripe.com",
    "github.com",
    "google.com",
    "apple.com",
    "trustbyte.io",
  ];
  if (knownGood.some((g) => v === g || v.endsWith("@" + g))) return "good";
  const badHints = [
    "amaz0n",
    "g00gle",
    "paypa1",
    "-refunds",
    "-tools",
    "-support",
    "-verify",
    "0x",
    "free-",
    "claim-",
  ];
  if (badHints.some((b) => v.includes(b))) return "bad";
  if (v.includes("-") || /\d/.test(v.split("@").pop() ?? v)) return "warn";
  return "warn";
}

function buildResult(input: string) {
  const verdict = classify(input);
  const score =
    verdict === "good"
      ? 88 + ((input.length * 3) % 11)
      : verdict === "warn"
      ? 48 + ((input.length * 5) % 17)
      : 18 + ((input.length * 7) % 18);

  const kind = input.includes("@")
    ? "email"
    : input.startsWith("0x")
    ? "wallet"
    : "domain";

  const baseSteps: Step[] =
    verdict === "good"
      ? [
          { label: "Domain age", detail: "11.4 years · stable", sev: "ok" },
          { label: "SSL issuer", detail: "DigiCert EV", sev: "ok" },
          { label: "Blacklists", detail: "0 hits across 14 feeds", sev: "ok" },
          { label: "Brand match", detail: "First-party verified", sev: "ok" },
          { label: "Review provenance", detail: "Natural distribution", sev: "ok" },
          { label: "On-chain signals", detail: "Long history, low risk", sev: "ok" },
        ]
      : verdict === "warn"
      ? [
          { label: "Domain age", detail: "1 year 2 months", sev: "warn" },
          { label: "SSL issuer", detail: "Let's Encrypt", sev: "ok" },
          { label: "Blacklists", detail: "0 hits", sev: "ok" },
          { label: "WHOIS", detail: "Privacy proxy", sev: "warn" },
          { label: "Review provenance", detail: "Mixed authenticity", sev: "warn" },
          { label: "Brand match", detail: "No collisions", sev: "ok" },
        ]
      : [
          { label: "Domain age", detail: "11 days · just registered", sev: "bad" },
          { label: "SSL issuer", detail: "Self-signed certificate", sev: "bad" },
          { label: "Blacklists", detail: "3 hits · Spamhaus, SURBL", sev: "bad" },
          { label: "Brand impersonation", detail: "92% similarity to a top brand", sev: "bad" },
          { label: "Synthetic reviews", detail: "47 reviews in 9 minutes", sev: "warn" },
          { label: "Hosting cluster", detail: "ASN shared with 14 flagged sites", sev: "warn" },
        ];

  const ai =
    verdict === "good"
      ? "This entity has consistent, multi-year, first-party trust signals across every dimension we checked. Safe to transact."
      : verdict === "warn"
      ? "Trust signals are inconclusive. Limited history and privacy-shielded ownership warrant human review before money or data is exchanged."
      : "Strong indicators of a coordinated impersonation campaign. Do NOT submit credentials, payments, or personal data to this entity.";

  return { verdict, score, kind, steps: baseSteps, ai };
}

export function LiveScan() {
  const [input, setInput] = useState("stripe-payments-tools.io");
  const [status, setStatus] = useState<"idle" | "scanning" | "done">("idle");
  const [stepIdx, setStepIdx] = useState(0);
  const [result, setResult] = useState<ReturnType<typeof buildResult> | null>(
    null,
  );
  const [animScore, setAnimScore] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const runScan = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (!input.trim()) return;
    setStatus("scanning");
    setStepIdx(0);
    setResult(null);
    setAnimScore(0);

    ENGINE_STEPS.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setStepIdx(i + 1), 380 * (i + 1)),
      );
    });
    const total = 380 * ENGINE_STEPS.length + 240;
    timers.current.push(
      setTimeout(() => {
        const r = buildResult(input);
        setResult(r);
        setStatus("done");
        // animate score
        const start = performance.now();
        const dur = 900;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setAnimScore(Math.round(r.score * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, total),
    );
  };

  const kindIcon = useMemo(() => {
    if (input.includes("@")) return Mail;
    if (input.startsWith("0x")) return Wallet;
    return Globe;
  }, [input]);
  const KindIcon = kindIcon;

  return (
    <section id="live-scan" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-glow" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Try it live"
          title={
            <>
              Run a real{" "}
              <span className="text-gradient">AI trust scan</span> right now.
            </>
          }
          desc="Type any domain, email, or wallet. Watch the engine pull 180+ signals, run the model, and return a verdict — in under two seconds."
        />

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/25 via-accent/15 to-transparent opacity-60 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-surface-elevated to-surface ring-glow">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-border/70 bg-background/40 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              </div>
              <div className="hidden items-center gap-2 rounded-md border border-border/60 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground sm:flex">
                <Lock className="h-3 w-3 text-success" />
                app.trustbyte.io/scan
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                Engine live
              </div>
            </div>

            {/* Input row */}
            <div className="p-5 sm:p-7">
              <label className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                Entity to verify
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <KindIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && runScan()}
                    placeholder="domain.com · you@email.com · 0xWallet…"
                    spellCheck={false}
                    className="w-full rounded-lg border border-border/70 bg-background/60 py-3 pl-10 pr-3 font-mono text-[13px] text-foreground outline-none ring-primary/30 transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2"
                  />
                </div>
                <button
                  onClick={runScan}
                  disabled={status === "scanning"}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110 disabled:opacity-70"
                >
                  {status === "scanning" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Scanning…
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Run trust scan
                    </>
                  )}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>

              {/* Sample chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Try
                </span>
                {SAMPLES.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setInput(s);
                      setStatus("idle");
                      setResult(null);
                    }}
                    className="rounded-full border border-border/60 bg-surface/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Scanning timeline */}
              {status !== "idle" && (
                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-5">
                  <div className="rounded-xl border border-border/70 bg-background/40 p-4 lg:col-span-2">
                    <div className="mb-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <Cpu className="h-3.5 w-3.5 text-primary" />
                      Engine pipeline
                    </div>
                    <ul className="space-y-2">
                      {ENGINE_STEPS.map((s, i) => {
                        const done = stepIdx > i;
                        const active = stepIdx === i && status === "scanning";
                        return (
                          <li
                            key={s}
                            className="flex items-center gap-2 text-[12.5px]"
                          >
                            {done ? (
                              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                            ) : active ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                            ) : (
                              <span className="h-3.5 w-3.5 rounded-full border border-border/60" />
                            )}
                            <span
                              className={
                                done
                                  ? "text-foreground"
                                  : active
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }
                            >
                              {s}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300"
                        style={{
                          width: `${Math.min(
                            100,
                            (stepIdx / ENGINE_STEPS.length) * 100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Verdict panel */}
                  <div className="rounded-xl border border-border/70 bg-background/40 p-4 lg:col-span-3">
                    {!result ? (
                      <SkeletonVerdict />
                    ) : (
                      <Verdict
                        animScore={animScore}
                        result={result}
                        input={input}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Idle hint */}
            {status === "idle" && (
              <div className="border-t border-border/60 bg-background/30 px-5 py-3 text-center text-[11.5px] text-muted-foreground sm:px-7">
                <Sparkles className="mr-1 inline h-3 w-3 text-primary" />
                Demo runs entirely in your browser — no data leaves your device.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkeletonVerdict() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-4 w-24 rounded bg-surface" />
      <div className="h-12 w-32 rounded bg-surface" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-surface" />
        <div className="h-3 w-5/6 rounded bg-surface" />
        <div className="h-3 w-4/6 rounded bg-surface" />
      </div>
    </div>
  );
}

function Verdict({
  animScore,
  result,
  input,
}: {
  animScore: number;
  result: ReturnType<typeof buildResult>;
  input: string;
}) {
  const isGood = result.verdict === "good";
  const isBad = result.verdict === "bad";
  const tone = isGood
    ? {
        chip: "bg-success/15 text-success ring-success/40",
        score: "text-success",
      }
    : isBad
    ? {
        chip: "bg-danger/15 text-danger ring-danger/40",
        score: "text-danger",
      }
    : {
        chip: "bg-warning/15 text-warning ring-warning/40",
        score: "text-warning",
      };
  const label = isGood ? "Trusted" : isBad ? "High risk" : "Caution";
  const Icon = isGood ? ShieldCheck : isBad ? ShieldAlert : AlertTriangle;

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Verdict
          </div>
          <div
            className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 ${tone.chip}`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </div>
          <div className="mt-2 truncate font-mono text-[12.5px] text-muted-foreground">
            {input}
          </div>
        </div>
        <div className="text-right">
          <div className={`font-mono text-5xl font-semibold ${tone.score}`}>
            {animScore}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            / 100 trust
          </div>
        </div>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-gradient-to-r from-danger via-warning to-success transition-all duration-300"
          style={{ width: `${animScore}%` }}
        />
      </div>

      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {result.steps.map((s) => (
          <div
            key={s.label}
            className="flex items-start gap-2 rounded-md border border-border/50 bg-surface/40 px-2.5 py-1.5"
          >
            {s.sev === "ok" ? (
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
            ) : s.sev === "warn" ? (
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" />
            ) : (
              <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-danger" />
            )}
            <div className="min-w-0 text-[11.5px]">
              <div className="font-medium text-foreground">{s.label}</div>
              <div className="truncate text-muted-foreground">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-primary/25 bg-primary/5 p-3">
        <div className="mb-1 flex items-center gap-1.5 text-[10.5px] uppercase tracking-wider text-primary">
          <Activity className="h-3 w-3" />
          GPT-Trust 4.1 · explanation
        </div>
        <p className="text-[12.5px] leading-relaxed text-foreground/90">
          {result.ai}
        </p>
      </div>
    </div>
  );
}
