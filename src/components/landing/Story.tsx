import { SectionHeader } from "./Features";
import { Quote, CheckCircle2, Circle, CircleDot } from "lucide-react";

export function Testimonials() {
  const items = [
    {
      q: "TrustByt cut our fraud losses by 71% in the first eight weeks. The API is genuinely the cleanest we've integrated since Stripe.",
      a: "Maya Chen",
      r: "Head of Risk, Northwind Pay",
    },
    {
      q: "We replaced three trust & safety vendors with TrustByt. The explanations are auditable — that's what got it past our compliance team.",
      a: "Daniel Okafor",
      r: "VP Trust, Lattice Markets",
    },
    {
      q: "It feels like a 2030 product. Real-time scoring, model provenance, residency — they thought about everything we'd ask in a security review.",
      a: "Sofia Bergström",
      r: "CISO, Helio Bank",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Loved by the people<br />
              <span className="text-gradient">paid to be paranoid.</span>
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal relative flex h-full flex-col rounded-2xl border border-border/70 bg-surface/50 p-6 hover-lift"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <Quote className="h-5 w-5 text-primary/70" />
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-foreground/90">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-[12px] font-semibold ring-1 ring-border">
                  {t.a
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div className="text-[13px]">
                  <div className="font-medium">{t.a}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founders() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeader
              align="left"
              eyebrow="Mission"
              title={
                <>
                  We're rebuilding<br />
                  <span className="text-gradient">trust for the AI internet.</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Half of all online interactions in 2026 involve an AI agent on
                at least one side. Reputation systems built for the social web
                weren't designed for synthetic identities, generated content,
                and autonomous economic actors.
              </p>
              <p>
                TrustByt is the verification layer that web3, AI agents, and
                everyday consumers will quietly depend on — the same way the
                web depends on TLS today.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[13px] text-muted-foreground">
              <span>
                <span className="text-foreground font-semibold">$6.2M</span>{" "}
                seed
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>
                Backed by{" "}
                <span className="text-foreground">a16z · South Park Commons</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>22 people · remote-first</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-surface-elevated to-surface p-6 glow-card">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Founders
              </p>
              <ul className="mt-4 space-y-4">
                {[
                  { n: "Amir Rahimi", r: "CEO · ex-Cloudflare Trust & Safety" },
                  { n: "Lina Park", r: "CTO · ex-OpenAI alignment infra" },
                  { n: "Marcus Boateng", r: "Head of Research · PhD, ML Security" },
                ].map((p) => (
                  <li key={p.n} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-accent/40 text-[12px] font-semibold ring-1 ring-border">
                      {p.n
                        .split(" ")
                        .map((x) => x[0])
                        .join("")}
                    </span>
                    <div>
                      <div className="text-[14px] font-medium">{p.n}</div>
                      <div className="text-[12px] text-muted-foreground">
                        {p.r}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const items = [
    {
      q: "Q1 2026",
      title: "Public beta",
      desc: "Launched the concept site with free URL checker, email analyzer, and scam-awareness quiz.",
      state: "done",
    },
    {
      q: "Q2 2026",
      title: "Real AI scoring engine",
      desc: "Wire the URL checker and email analyzer to a real backend with live threat feeds.",
      state: "current",
    },
    {
      q: "Q3 2026",
      title: "Hindi + Marathi support",
      desc: "Make every tool usable for Indian elders in their own language, with voice input.",
      state: "next",
    },
    {
      q: "Q4 2026",
      title: "Free WhatsApp scam-check bot",
      desc: "Forward any suspicious message to a TrustByt number and get an instant safety verdict.",
      state: "next",
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Roadmap"
          title={
            <>
              Where TrustByt<br />
              <span className="text-gradient">is going next.</span>
            </>
          }
        />
        <ol className="mx-auto mt-14 max-w-3xl">
          {items.map((it, i) => {
            const Icon =
              it.state === "done"
                ? CheckCircle2
                : it.state === "current"
                ? CircleDot
                : Circle;
            return (
              <li key={i} className="reveal relative flex gap-5 pb-8 last:pb-0">
                {i < items.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-full w-px bg-gradient-to-b from-border to-transparent" />
                )}
                <span
                  className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                    it.state === "current"
                      ? "border-primary/50 bg-primary/10 text-primary animate-pulse-glow"
                      : it.state === "done"
                      ? "border-success/40 bg-success/10 text-success"
                      : "border-border bg-surface text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1 rounded-xl border border-border/70 bg-surface/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {it.q}
                    </span>
                    {it.state === "current" && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                        In progress
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1.5 text-[15px] font-semibold">
                    {it.title}
                  </h4>
                  <p className="mt-1 text-[13.5px] text-muted-foreground">
                    {it.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
