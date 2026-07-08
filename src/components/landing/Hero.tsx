import { ArrowRight, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);

  // Animated trust score counter
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const target = 94;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setScore(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse-follow lighting
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      style={
        {
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 20%), oklch(0.84 0.16 200 / 0.12), transparent 60%)",
        } as React.CSSProperties
      }
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-glow" />
      {/* Floating particles */}
      <Particles />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#product"
            className="reveal inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-[12px] text-muted-foreground backdrop-blur transition hover:border-primary/40 hover:text-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span>Concept · early development · made in Nagpur, India</span>
            <ArrowRight className="h-3 w-3" />
          </a>

          <h1 className="reveal reveal-delay-1 mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">Trust, verified</span>
            <br />
            <span className="text-foreground/90">before you transact.</span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-balance text-[14.5px] leading-relaxed text-muted-foreground sm:text-base">
            TrustByt is the AI verification layer for the modern internet.
            Score people, sites, and sellers in real time — and stop scams
            before money or data ever leaves your side.
          </p>

          {/* Animated trust score counter */}
          <div className="reveal reveal-delay-2 mx-auto mt-8 flex w-full max-w-md items-center gap-4 rounded-2xl border border-border/70 bg-surface/50 p-4 backdrop-blur sm:gap-5 sm:p-5">
            <div className="relative grid h-20 w-20 shrink-0 place-items-center sm:h-24 sm:w-24">
              <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                <circle cx="50" cy="50" r="44" stroke="oklch(1 0 0 / 0.08)" strokeWidth="8" fill="none" />
                <circle
                  cx="50" cy="50" r="44" fill="none" strokeLinecap="round" strokeWidth="8"
                  stroke="url(#trust-grad)"
                  strokeDasharray={2 * Math.PI * 44}
                  strokeDashoffset={2 * Math.PI * 44 * (1 - score / 100)}
                  style={{ transition: "stroke-dashoffset 60ms linear" }}
                />
                <defs>
                  <linearGradient id="trust-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.84 0.16 200)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.18 285)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center">
                <div className="font-mono text-2xl font-semibold text-gradient sm:text-3xl">{score}</div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">trust</div>
              </div>
            </div>
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Live demo · stripe.com
              </div>
              <div className="mt-1 text-[13.5px] font-medium leading-snug">
                Verified safe · 0 blacklists · 14-year history
              </div>
              <div className="mt-1 text-[11.5px] text-muted-foreground">
                Try the free tools below to scan a link or email yourself.
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              Request beta access
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#url-checker"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/40 hover:bg-surface"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              Try free scam tools
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-medium text-primary">
              <Heart className="h-3 w-3" />
              Built by a 15-year-old on a mission to make India safer
            </span>
            <span className="rounded-full border border-border/70 bg-surface/60 px-2.5 py-1 uppercase tracking-wider text-muted-foreground">
              No signup
            </span>
            <span className="rounded-full border border-border/70 bg-surface/60 px-2.5 py-1 uppercase tracking-wider text-muted-foreground">
              100% free
            </span>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="reveal reveal-delay-5 relative mx-auto mt-16 max-w-6xl">
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/30 via-accent/20 to-transparent opacity-60 blur-2xl" />
          <div className="relative rounded-3xl border border-border/80 bg-surface/40 p-1.5 sm:p-2 backdrop-blur ring-glow">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function Particles() {
  // deterministic floating dots
  const dots = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {dots.map((i) => {
        const left = (i * 53) % 100;
        const top = (i * 31) % 100;
        const delay = (i % 6) * 0.6;
        const dur = 6 + (i % 5);
        return (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
              boxShadow: "0 0 12px oklch(0.84 0.16 200 / 0.6)",
            }}
          />
        );
      })}
    </div>
  );
}
