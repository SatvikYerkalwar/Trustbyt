import { useMemo, useState } from "react";
import { Mail, ShieldCheck, ShieldAlert, AlertTriangle, Flag } from "lucide-react";
import { SectionHeader } from "./Features";

const RED_FLAGS: { id: string; label: string; pattern: RegExp; weight: number }[] = [
  { id: "urgency", label: "Urgency / fear language", pattern: /\b(urgent|immediately|within 24 hours|account.*(suspend|block|lock)|final notice|act now|expire)\b/i, weight: 25 },
  { id: "money", label: "Money / prize bait", pattern: /\b(won|winner|lottery|prize|crore|lakh|cashback|refund|reward)\b/i, weight: 20 },
  { id: "kyc", label: "Fake KYC / verification ask", pattern: /\b(kyc|re-?verify|update.*(pan|aadhaar|account)|verify.*account)\b/i, weight: 22 },
  { id: "creds", label: "Asks for OTP / password / PIN", pattern: /\b(otp|one[- ]time password|pin|password|cvv|card number)\b/i, weight: 30 },
  { id: "link", label: "Suspicious shortened or odd link", pattern: /(bit\.ly|tinyurl|t\.co|cutt\.ly|http:\/\/|\.shop|\.xyz|\.top|-secure|-verify|-login)/i, weight: 22 },
  { id: "sender", label: "Fake / generic sender", pattern: /\b(from:?\s*(no.?reply|support|service|admin)@|gmail\.com\s*$)/i, weight: 12 },
  { id: "grammar", label: "Poor grammar / mass-mailer feel", pattern: /\b(dear (customer|user|sir\/madam)|kindly do the needful)\b/i, weight: 10 },
];

export function PhishingAnalyzer() {
  const [text, setText] = useState(
    "Dear Customer,\nYour bank account will be SUSPENDED within 24 hours.\nKindly re-verify your KYC and update your PAN by clicking: http://hdfc-secure-verify.shop/login\nShare the OTP sent to your phone to confirm. — Bank Support",
  );

  const result = useMemo(() => {
    if (!text.trim()) return null;
    const matched = RED_FLAGS.filter((f) => f.pattern.test(text));
    const score = Math.min(100, matched.reduce((s, f) => s + f.weight, 0));
    const level: "safe" | "suspicious" | "dangerous" =
      score >= 60 ? "dangerous" : score >= 25 ? "suspicious" : "safe";
    return { matched, score, level };
  }, [text]);

  const highlighted = useMemo(() => {
    if (!text) return null;
    const parts: { t: string; flag: boolean }[] = [{ t: text, flag: false }];
    RED_FLAGS.forEach((f) => {
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (p.flag) continue;
        const re = new RegExp(f.pattern.source, "gi");
        const split = p.t.split(re);
        if (split.length > 1) {
          const matches = p.t.match(re) ?? [];
          const rebuilt: { t: string; flag: boolean }[] = [];
          split.forEach((s, idx) => {
            if (s) rebuilt.push({ t: s, flag: false });
            if (idx < matches.length) rebuilt.push({ t: matches[idx], flag: true });
          });
          parts.splice(i, 1, ...rebuilt);
          i += rebuilt.length - 1;
        }
      }
    });
    return parts;
  }, [text]);

  const meta = result
    ? result.level === "safe"
      ? { label: "Safe", Icon: ShieldCheck, chip: "bg-success/15 text-success ring-success/40" }
      : result.level === "suspicious"
      ? { label: "Suspicious", Icon: AlertTriangle, chip: "bg-warning/15 text-warning ring-warning/40" }
      : { label: "Dangerous", Icon: ShieldAlert, chip: "bg-danger/15 text-danger ring-danger/40" }
    : null;

  return (
    <section id="phishing-analyzer" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Free tool · 02"
          title={<>Paste an email. We'll <span className="text-gradient">find the red flags.</span></>}
          desc="Got a strange email or WhatsApp message? Drop the text in and see exactly what tricks the scammer is using."
        />

        <div className="reveal mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border/70 bg-surface/40 p-5 sm:p-6 glow-card">
              <label className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" /> Paste the suspicious message
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, 4000))}
                rows={9}
                spellCheck={false}
                className="mt-2 w-full resize-y rounded-lg border border-border/70 bg-background/60 p-3 font-mono text-[13px] outline-none ring-primary/30 transition focus:border-primary/50 focus:ring-2"
              />
              <div className="mt-3 rounded-lg border border-border/60 bg-background/40 p-3 text-[13px] leading-relaxed">
                <div className="mb-1 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                  Highlighted preview
                </div>
                <p className="whitespace-pre-wrap break-words">
                  {highlighted?.map((p, i) =>
                    p.flag ? (
                      <mark
                        key={i}
                        className="rounded bg-danger/20 px-0.5 text-foreground decoration-danger underline underline-offset-2"
                      >
                        {p.t}
                      </mark>
                    ) : (
                      <span key={i}>{p.t}</span>
                    ),
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border/70 bg-surface/40 p-5 sm:p-6">
              {result && meta ? (
                <>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 ${meta.chip}`}
                    >
                      <meta.Icon className="h-3.5 w-3.5" />
                      {meta.label}
                    </span>
                    <span className="font-mono text-3xl font-semibold text-gradient">
                      {result.score}
                      <span className="text-[11px] text-muted-foreground"> /100</span>
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    Risk level
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Red flags detected
                    </div>
                    {result.matched.length === 0 ? (
                      <p className="text-[13px] text-success">
                        No common phishing patterns found. Still trust your gut — when in doubt, don't click.
                      </p>
                    ) : (
                      <ul className="space-y-1.5">
                        {result.matched.map((f) => (
                          <li key={f.id} className="flex items-start gap-2 text-[13px]">
                            <Flag className="mt-0.5 h-3.5 w-3.5 shrink-0 text-danger" />
                            <span>{f.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <p className="mt-6 text-[11.5px] text-muted-foreground">
                    Heuristic analysis runs locally. Always confirm with the real bank, brand, or sender.
                  </p>
                </>
              ) : (
                <p className="text-[13px] text-muted-foreground">Paste a message to analyze.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}