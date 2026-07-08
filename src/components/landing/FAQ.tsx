import { useState } from "react";
import { Plus, ArrowRight, Check, Shield } from "lucide-react";
import { SectionHeader } from "./Features";

const faqs = [
  {
    q: "Is TrustByt a real product I can use today?",
    a: "TrustByt is an early-stage concept product. The free URL checker, email analyzer, and scam-awareness quiz on this page work in your browser using offline heuristics, so you can try them now. The full AI engine is still in development.",
  },
  {
    q: "Who is building this?",
    a: "TrustByt is built by Satvik Yerkalwar — a 15-year-old cybersecurity student from Nagpur, India. He holds certifications from Cisco, EC-Council, MKCL, and Edunox.",
  },
  {
    q: "Is the URL checker accurate?",
    a: "The current version is a demo that uses common-sense rules — domain age patterns, lookalike spellings, known scam keywords. It's a helpful first check, not a guarantee. Always trust your gut and call the real bank or brand if in doubt.",
  },
  {
    q: "Do you store the URLs or emails I paste?",
    a: "No. Every tool on this page runs entirely in your browser. Nothing you paste leaves your device.",
  },
  {
    q: "What should I do if I've already lost money to a scam?",
    a: "Call India's official cybercrime helpline 1930 immediately and file a complaint at cybercrime.gov.in. The faster you report, the higher the chance your money can be frozen.",
  },
  {
    q: "How can I support TrustByt?",
    a: "Share these tools with your parents and grandparents. Join the beta. Send feedback. Real reviews from real users matter more than anything else right now.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions you'd ask<br />
              <span className="text-gradient">in a security review.</span>
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface/60"
                >
                  <span className="text-[14.5px] font-medium">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border border-border/70 transition ${
                      active ? "rotate-45 bg-primary/10 text-primary" : ""
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    active ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    "50,000 free verifications / month",
    "Direct Slack with the founding team",
    "Locked-in early pricing forever",
    "Shape the v1 roadmap with us",
  ];

  return (
    <section id="waitlist" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-surface-elevated/90 via-surface/70 to-surface/40 p-8 sm:p-12 glow-card">
          {/* background flourish */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[140%] -translate-x-1/2 bg-gradient-to-b from-primary/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />

          <div className="relative grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                <Shield className="h-3 w-3" /> Limited beta · 412 of 500 spots
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Get an early seat on the{" "}
                <span className="text-gradient">trust layer</span> of the
                internet.
              </h2>
              <p className="mt-4 max-w-lg text-[14.5px] text-muted-foreground">
                We're onboarding 5 new teams per week. Tell us where you'd use
                TrustByt and we'll get you in.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[13px] text-foreground/85"
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return;
                setSubmitted(true);
              }}
              className="relative lg:col-span-2"
            >
              <div className="rounded-2xl border border-border/70 bg-background/60 p-5 backdrop-blur">
                {submitted ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-success/15 ring-1 ring-success/40">
                      <Check className="h-5 w-5 text-success" />
                    </span>
                    <p className="mt-3 text-[15px] font-medium">
                      You're on the list.
                    </p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      We'll be in touch within 48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-[14px] outline-none ring-primary/40 transition focus:border-primary/50 focus:ring-2"
                    />
                    <button
                      type="submit"
                      className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[14px] font-medium text-primary-foreground glow-primary transition hover:brightness-110"
                    >
                      Request access
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      By submitting you agree to our terms &amp; privacy.
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/40">
                <Shield className="h-4 w-4 text-primary" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Trust<span className="text-primary">Byt</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] text-muted-foreground">
              A concept product helping Indian families spot scams before they
              lose money or data. Built in public, free during beta.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-md border border-border/70 bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                Building in public · early stage
              </span>
            </div>
          </div>

          {[
            {
              t: "Free tools",
              l: [
                { name: "URL checker", href: "#url-checker" },
                { name: "Email analyzer", href: "#phishing-analyzer" },
                { name: "Scam quiz", href: "#quiz" },
                { name: "Emergency helpline", href: "#helpline" },
              ],
            },
            {
              t: "About",
              l: [
                { name: "Founder", href: "/founder" },
                { name: "Blog", href: "/blog" },
                { name: "Pricing", href: "/pricing" },
                { name: "FAQ", href: "/faq" },
              ],
            },
            {
              t: "Report a scam",
              l: [
                { name: "Call 1930", href: "tel:1930" },
                { name: "cybercrime.gov.in", href: "https://cybercrime.gov.in" },
                { name: "Join beta", href: "#waitlist" },
              ],
            },
          ].map((c) => (
            <div key={c.t}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {c.t}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((i) => (
                  <li key={i.name}>
                    <a
                      href={i.href}
                      className="text-[13.5px] text-foreground/80 transition hover:text-primary"
                    >
                      {i.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-muted-foreground">
            © 2026 TrustByt · Built in Nagpur, India · This is a concept product in early development.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            Made with care for a safer Indian internet.
          </p>
        </div>
      </div>
    </footer>
  );
}
