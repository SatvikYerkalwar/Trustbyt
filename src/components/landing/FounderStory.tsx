import {
  Shield,
  Award,
  GraduationCap,
  Heart,
  Quote,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./Features";
import founderPhoto from "@/assets/founder-satvik.jpg";

const certifications = [
  { name: "Cisco", color: "from-cyan-400 to-blue-500" },
  { name: "EC-Council", color: "from-rose-500 to-orange-500" },
  { name: "Edunox", color: "from-emerald-400 to-green-600" },
  { name: "MKCL", color: "from-fuchsia-400 to-purple-600" },
];

const milestones = [
  {
    icon: GraduationCap,
    title: "8th Grade",
    year: "The spark",
    description:
      "Started learning computer basics and discovered the world of hacking — and the responsibility that comes with it.",
  },
  {
    icon: Shield,
    title: "MKCL Course",
    year: "Foundations",
    description:
      "Joined a state-recognized cybersecurity fundamentals program to learn the field the right way.",
  },
  {
    icon: Award,
    title: "Global Certifications",
    year: "Mastery",
    description:
      "Earned credentials from Cisco, EC-Council, Edunox and more — turning curiosity into expertise.",
  },
  {
    icon: Heart,
    title: "TrustByt",
    year: "Today",
    description:
      "Founded TrustByt to protect everyday people from scams and online threats with AI.",
  },
];

/**
 * Real founder section — Satvik Yerkalwar.
 * `variant="page"` renders the extended version used on the /founder route.
 */
export function FounderStory({
  variant = "section",
}: {
  variant?: "section" | "page";
}) {
  const isPage = variant === "page";
  return (
    <section
      id="founder"
      className={`relative overflow-hidden ${isPage ? "pt-32 pb-24 sm:pt-40" : "py-24 sm:py-32"}`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-radial-glow" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={isPage ? "Founder" : "Meet the founder"}
          title={
            <>
              The story behind{" "}
              <span className="text-gradient">TrustByt.</span>
            </>
          }
          desc={
            isPage
              ? "From an 8th-grade curiosity about hacking to building India's AI trust-verification platform — the journey of TrustByt's founder."
              : undefined
          }
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          {/* Portrait card */}
          <div className="reveal relative">
            {/* Outer glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-accent/30 to-transparent opacity-50 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-6 sm:p-8 backdrop-blur glow-card">
              {/* Corner flourishes */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-accent/20 to-transparent" />

              {/* Photo */}
              <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
                <span className="absolute -inset-1 rounded-full border border-primary/30 animate-pulse-glow" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 ring-1 ring-border">
                  <img
                    src={founderPhoto}
                    alt="Satvik Yerkalwar — founder of TrustByt"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="pointer-events-none absolute inset-3 rounded-full border border-primary/20" />
                <span className="pointer-events-none absolute inset-6 rounded-full border border-accent/10" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Satvik Yerkalwar
                </h3>
                <p className="mt-1 text-[13px] font-medium text-primary">
                  Founder &amp; CEO · TrustByt
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {certifications.map((c) => (
                    <span
                      key={c.name}
                      className={`rounded-full bg-gradient-to-r ${c.color} px-2.5 py-1 text-[11px] font-medium text-white shadow-[0_4px_20px_-6px_oklch(0.84_0.16_200_/_0.4)]`}
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mission strip */}
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span className="text-[12px] font-medium text-primary">
                  Mission: Making India safer online
                </span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="reveal reveal-delay-2 relative">
            <Quote className="absolute -left-2 -top-3 h-10 w-10 text-primary/15" />
            <div className="relative space-y-4 rounded-2xl border border-border/70 bg-surface/50 p-6 backdrop-blur sm:p-7">
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                I started my cybersecurity journey in{" "}
                <span className="font-medium text-primary">8th grade</span>{" "}
                when I was learning the basics of computers. One day, I heard
                the word{" "}
                <span className="font-medium text-foreground">"hacking,"</span>{" "}
                and it instantly made me curious about the world of
                cybersecurity.
              </p>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                To explore this field, I joined a{" "}
                <span className="font-medium text-primary">
                  state-recognized course by MKCL
                </span>
                , where I learned the fundamentals of cybersecurity for the
                first time. Over the next few years, I earned certifications
                from global organizations such as{" "}
                <span className="font-medium text-foreground">
                  Cisco, EC-Council, and Edunox
                </span>
                , along with many others.
              </p>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                My vision is to help make{" "}
                <span className="font-semibold text-gradient">
                  India safer on the internet
                </span>{" "}
                by spreading cybersecurity awareness and protecting innocent
                people from scammers and online threats.
              </p>
              <p className="pt-1 text-[14.5px] font-medium italic text-foreground/90">
                Thank you for being a part of my journey.
              </p>

              {/* Signature row */}
              <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-border">
                  <Sparkles className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold">
                    — Satvik Yerkalwar
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Founder, TrustByt · Nagpur, India
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { v: "5+", l: "Years in security" },
                { v: "10+", l: "Global certifications" },
                { v: "1", l: "Mission" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-border/70 bg-surface/40 p-3 text-center"
                >
                  <div className="font-mono text-xl font-semibold text-gradient">
                    {s.v}
                  </div>
                  <div className="mt-0.5 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h3 className="text-center text-2xl font-semibold tracking-tight">
            The journey
          </h3>
          <p className="mx-auto mt-2 max-w-md text-center text-[13.5px] text-muted-foreground">
            Four moments that shaped where TrustByt is today.
          </p>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <li
                key={m.title}
                className="reveal relative"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Connector */}
                {i < milestones.length - 1 && (
                  <span className="pointer-events-none absolute left-1/2 top-9 hidden h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent lg:block" />
                )}
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-surface/50 p-6 text-center hover-lift">
                  <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30">
                    <m.icon className="h-6 w-6 text-primary" />
                  </span>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {m.year}
                  </div>
                  <h4 className="mt-1 text-[15px] font-semibold">{m.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Extended page-only content */}
        {isPage && (
          <div className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-surface/50 p-6">
              <h4 className="text-[15px] font-semibold">What I'm building</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                TrustByt is an AI verification layer for the modern internet.
                It scores any person, website or seller in real time, so people
                can make safer decisions before they pay, share data, or trust
                someone they've never met.
              </p>
              <ul className="mt-4 space-y-2 text-[13px]">
                {[
                  "Real-time AI scam analysis",
                  "Live reputation graph across 180+ sources",
                  "Browser extension + simple API",
                  "Privacy-first, zero-knowledge identity",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Satvik Yerkalwar", "Cybersecurity Enthusiast", "Ethical Hacking", "Security Research"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-surface/50 p-6">
              <h4 className="text-[15px] font-semibold">Why this matters</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                Every day, ordinary people lose money and data to online scams
                that look more convincing than ever. I built TrustByt so my
                family, my friends, and millions of strangers don't have to
                guess who's real on the internet.
              </p>
              <div className="mt-5 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 to-accent/10 p-4">
                <p className="text-[13px] italic text-foreground/90">
                  "If TrustByt stops even one scam in someone's life — that's
                  worth every late night building it."
                </p>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-wider text-primary">
                  — Satvik Yerkalwar
                </p>
              </div>
              <p className="mt-4 text-[12.5px] leading-relaxed text-muted-foreground">
                This is my cybersecurity portfolio — a place where I share my work
                in security research and ethical hacking to help make India safer online.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
