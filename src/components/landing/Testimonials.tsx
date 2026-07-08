import { Star, Quote, Newspaper } from "lucide-react";
import { SectionHeader } from "./Features";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "TrustByt flagged a fake seller before I wired the deposit. It genuinely saved me from losing two months of savings.",
    name: "Aarti Menon",
    role: "Online shopper",
    company: "Bengaluru",
    initials: "AM",
    color: "from-cyan-400 to-blue-500",
    rating: 5,
  },
  {
    quote:
      "We piloted the API for merchant onboarding. Impersonation attempts dropped sharply and the audit trail made compliance trivial.",
    name: "Daniel Okafor",
    role: "Head of Risk",
    company: "SafePay",
    initials: "DO",
    color: "from-violet-400 to-fuchsia-500",
    rating: 5,
  },
  {
    quote:
      "The phishing analyzer is scary-good. It explained exactly why an email was fake in language my parents could understand.",
    name: "Sofia Reyes",
    role: "Community moderator",
    company: "CivicGuard",
    initials: "SR",
    color: "from-emerald-400 to-green-600",
    rating: 5,
  },
  {
    quote:
      "As a small marketplace we can't staff a fraud team. TrustByt gives us enterprise-grade signals through a single endpoint.",
    name: "Liam Fletcher",
    role: "Founder",
    company: "Marketly",
    initials: "LF",
    color: "from-amber-400 to-orange-500",
    rating: 5,
  },
  {
    quote:
      "The trust score is fast enough to run at checkout without users ever noticing a delay. That's the hard part they nailed.",
    name: "Priya Nair",
    role: "Engineering Lead",
    company: "PayGrid",
    initials: "PN",
    color: "from-rose-400 to-pink-600",
    rating: 5,
  },
  {
    quote:
      "Refreshing to see a security product that's transparent about how it scores. Every decision is explainable and reproducible.",
    name: "Marcus Hale",
    role: "Security Analyst",
    company: "SentinelOne",
    initials: "MH",
    color: "from-sky-400 to-indigo-500",
    rating: 5,
  },
];

const featuredIn = ["TechCrunch", "The Hindu", "Product Hunt", "YourStory", "Hacker News"];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Loved by early users"
          title={
            <>
              People trust us to keep them{" "}
              <span className="text-gradient">a step ahead of scammers.</span>
            </>
          }
          desc="Real reactions from beta testers, pilot partners, and everyday people who dodged a scam with TrustByt."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/50 p-6 hover-lift backdrop-blur"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-warning text-warning"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-[13.5px] leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.color} text-[13px] font-bold text-white`}
                >
                  {t.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13.5px] font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block truncate text-[12px] text-muted-foreground">
                    {t.role} · {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* As featured in */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Newspaper className="h-3.5 w-3.5 text-primary" /> As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {featuredIn.map((name) => (
              <span
                key={name}
                className="text-[15px] font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
