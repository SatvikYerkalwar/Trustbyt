import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Plus, Phone, LifeBuoy } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Everything about TrustByt · Frequently asked questions" },
      {
        name: "description",
        content:
          "Answers to common questions about TrustByt: how the free scam tools work, data privacy, accuracy, who's building it, and what to do if you've been scammed.",
      },
      { property: "og:title", content: "TrustByt — Frequently asked questions" },
      {
        property: "og:description",
        content:
          "How the free tools work, your privacy, accuracy, and what to do if you've lost money to a scam.",
      },
    ],
  }),
  component: FaqPage,
});

const groups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "About TrustByt",
    items: [
      {
        q: "Is TrustByt a real product I can use today?",
        a: "TrustByt is an early-stage concept product. The free URL checker, email analyzer, and scam-awareness quiz on the homepage work in your browser using offline heuristics, so you can try them right now. The full AI engine is still in development.",
      },
      {
        q: "Who is building this?",
        a: "TrustByt is built by Satvik Yerkalwar — a 15-year-old cybersecurity student from Nagpur, India, with certifications from Cisco, EC-Council, MKCL, and Edunox.",
      },
      {
        q: "How can I support TrustByt?",
        a: "Share these tools with your parents and grandparents, join the beta, and send feedback. Real reviews from real users matter more than anything else right now.",
      },
    ],
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "Do you store the URLs or emails I paste?",
        a: "No. Every tool on the homepage runs entirely in your browser. Nothing you paste leaves your device or reaches our servers.",
      },
      {
        q: "Do I need an account to use the tools?",
        a: "No account, no sign-up, no card. The free scam-checking tools are open to everyone.",
      },
    ],
  },
  {
    category: "Accuracy & how it works",
    items: [
      {
        q: "Is the URL checker accurate?",
        a: "The current version is a demo that uses common-sense rules — domain age patterns, lookalike spellings, and known scam keywords. It's a helpful first check, not a guarantee. Always trust your gut and call the real bank or brand if in doubt.",
      },
      {
        q: "What does the email analyzer look for?",
        a: "It scans pasted text for classic phishing signals: urgency, threats, reward bait, mismatched sender patterns, and requests for OTPs or payment details.",
      },
    ],
  },
  {
    category: "If you've been scammed",
    items: [
      {
        q: "What should I do if I've already lost money to a scam?",
        a: "Call India's official cybercrime helpline 1930 immediately and file a complaint at cybercrime.gov.in. The faster you report, the higher the chance your money can be frozen.",
      },
      {
        q: "The scammer is contacting me again offering to recover my money. Is that real?",
        a: "Almost certainly not. \"Recovery agents\" are a common follow-up scam. Never pay anyone who promises to get your lost money back — report them to 1930 too.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface/60"
      >
        <span className="text-[14.5px] font-medium">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border border-border/70 transition ${
            open ? "rotate-45 bg-primary/10 text-primary" : ""
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden px-5 text-[13.5px] leading-relaxed text-muted-foreground">
          {a}
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-radial-glow" />
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[12px] font-medium text-primary">
              <LifeBuoy className="h-3.5 w-3.5" /> Help center
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Frequently asked <span className="text-gradient">questions</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Everything about how TrustByt works, your privacy, and getting help fast.
            </p>
          </div>
        </section>

        <section className="relative pb-12">
          <div className="mx-auto max-w-3xl space-y-10 px-6">
            {groups.map((g) => (
              <div key={g.category} className="reveal">
                <h2 className="mb-3 px-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {g.category}
                </h2>
                <div className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
                  {g.items.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still need help */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal flex flex-col items-center gap-4 rounded-3xl border border-danger/30 bg-danger/10 p-8 text-center">
              <Phone className="h-6 w-6 text-danger" />
              <h3 className="text-xl font-semibold">Still need help right now?</h3>
              <p className="max-w-lg text-[14px] text-muted-foreground">
                If money is involved, don't wait for a reply — call the national cybercrime helpline.
              </p>
              <a
                href="tel:1930"
                className="inline-flex items-center gap-2 rounded-lg bg-danger px-5 py-2.5 text-sm font-semibold text-danger-foreground transition hover:brightness-110"
              >
                <Phone className="h-4 w-4" /> Call 1930
              </a>
            </div>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to TrustByt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
