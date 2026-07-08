import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, Search, CalendarCheck, Languages, BadgeCheck, FileCheck, UserCheck } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/experts")({
  head: () => ({
    meta: [
      { title: "Expert Help — Verified cybersecurity experts · TrustByt" },
      {
        name: "description",
        content:
          "Get help from KYC-verified ethical hackers and cybersecurity experts. Book a free 15-minute call in Hindi, Marathi, or English.",
      },
      { property: "og:title", content: "Expert Help — TrustByt" },
      {
        property: "og:description",
        content:
          "KYC-verified cybersecurity experts ready to help with scams, phishing, and account recovery in your own language.",
      },
    ],
  }),
  component: ExpertsPage,
});

const verificationSteps = [
  { icon: FileCheck, title: "Document KYC", body: "Government ID, address, and PAN verified against authoritative databases." },
  { icon: BadgeCheck, title: "Credential check", body: "Certifications (CEH, Cisco, EC-Council, etc.) validated directly with the issuing body." },
  { icon: UserCheck, title: "Background review", body: "Reference checks, ethics agreement, and a recorded mock session before going live." },
];

const howSteps = [
  { icon: Search, title: "Browse verified experts", body: "Filter by speciality — scams, phishing, account recovery, identity theft." },
  { icon: CalendarCheck, title: "Book a free 15 min call", body: "Pick a slot that works for you. No card required for the intro call." },
  { icon: Languages, title: "Get help in your language", body: "Hindi, Marathi, English and more — choose the language you're most comfortable in." },
];

function ExpertsPage() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[12px] font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> KYC-verified network
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Get help from a <span className="text-gradient">verified expert</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Real, accountable cybersecurity experts — not anonymous strangers on the internet. Every expert on TrustByt passes a strict KYC and credential check before they can take a single call.
            </p>
          </div>
        </section>

        {/* KYC verification */}
        <section className="relative py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal text-center">
              <p className="text-[12.5px] font-mono uppercase tracking-[0.18em] text-primary">Verification</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                How we verify every expert
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground">
                Trust is not a marketing word. Each expert clears a three-stage verification before their profile goes live on TrustByt.
              </p>
            </div>
            <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
              {verificationSteps.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border/70 bg-surface/40 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                    <s.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal text-center">
              <p className="text-[12.5px] font-mono uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Three steps to real help
              </h2>
            </div>
            <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
              {howSteps.map((s, i) => (
                <div key={s.title} className="relative rounded-2xl border border-border/70 bg-surface/40 p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 ring-1 ring-accent/30">
                      <s.icon className="h-5 w-5 text-accent" />
                    </span>
                    <span className="font-mono text-[11.5px] text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Are you an expert */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="reveal relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/40 to-accent/10 p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Are you a cybersecurity expert?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground">
                Help everyday Indians stay safe online and earn on your own schedule. We're onboarding our first cohort of verified experts in Q2 2026.
              </p>
              <a
                href="#waitlist"
                className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Apply to join
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to TrustByt
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}