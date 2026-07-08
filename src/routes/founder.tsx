import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, MapPin, Linkedin } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { FounderStory } from "@/components/landing/FounderStory";
import { Certifications } from "@/components/landing/Certifications";
import { FounderCTA } from "@/components/landing/FounderCTA";
import { Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Satvik Yerkalwar · TrustByt" },
      {
        name: "description",
        content:
          "Satvik Yerkalwar — Cybersecurity Enthusiast, Ethical Hacking expert, and Security Researcher. Founder of TrustByt, a cybersecurity portfolio building India's AI trust-verification platform.",
      },
      {
        property: "og:title",
        content: "Founder — Satvik Yerkalwar · TrustByt",
      },
      {
        property: "og:description",
        content:
          "From an 8th-grade spark about hacking to building TrustByt. The mission: make India safer on the internet.",
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        {/* About Hero */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-60" />
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-radial-glow" />
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-[13px] font-medium text-primary">
              <Shield className="h-3.5 w-3.5" />
              Founder &amp; CEO
            </div>
            <h1 className="reveal reveal-delay-1 mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Satvik Yerkalwar</span>
            </h1>
            <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              From 8th-grade curiosity about hacking to building India&apos;s AI trust-verification platform — protecting everyday people from scams and online threats.
            </p>
            <div className="reveal reveal-delay-3 mt-5 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Nagpur, India
            </div>
          </div>
        </section>

        <FounderStory variant="page" />
        <Certifications />
        <FounderCTA />

        {/* LinkedIn / Social */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="reveal rounded-2xl border border-border/70 bg-surface/50 p-6 sm:p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#0A66C2]/30 to-[#0A66C2]/10 ring-1 ring-[#0A66C2]/40">
                <Linkedin className="h-6 w-6 text-[#0A66C2]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">Connect on LinkedIn</h3>
              <p className="mt-2 mx-auto max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
                Follow Satvik Yerkalwar for updates on cybersecurity, ethical hacking, security research, and the latest from TrustByt.
              </p>
              <a
                href="https://www.linkedin.com/in/satvikyerkalwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0A66C2] to-[#0077B5] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110 shadow-lg shadow-[#0A66C2]/25"
              >
                <Linkedin className="h-4 w-4" />
                View LinkedIn Profile
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
