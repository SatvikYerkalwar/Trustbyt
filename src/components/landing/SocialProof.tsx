import { useEffect, useRef, useState } from "react";
import { ShieldCheck, TrendingUp, Globe2, Users } from "lucide-react";

/* ── Count-up hook (animates when scrolled into view) ────────── */
function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { value, ref };
}

const counters = [
  { icon: Users, target: 5000, suffix: "+", label: "People on the waitlist" },
  { icon: TrendingUp, target: 180, suffix: "+", label: "Signal sources scored" },
  { icon: Globe2, target: 42, suffix: "", label: "Countries reached" },
  { icon: ShieldCheck, target: 99, suffix: "%", label: "Scam-catch confidence" },
];

const logos = [
  "NeoBank",
  "Marketly",
  "SafePay",
  "VerifyLabs",
  "CivicGuard",
  "NimbusAI",
  "Kavach",
  "TrustFlow",
  "SentinelOne",
  "PayGrid",
  "OpenScore",
  "Aegis",
];

function Counter({
  icon: Icon,
  target,
  suffix,
  label,
}: (typeof counters)[number]) {
  const { value, ref } = useCountUp(target);
  return (
    <div className="text-center">
      <Icon className="mx-auto mb-2 h-5 w-5 text-primary" strokeWidth={1.8} />
      <div className="font-mono text-3xl font-semibold text-gradient sm:text-4xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Trusted-by counters */}
        <div className="reveal relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-surface-elevated/80 to-surface/40 p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <p className="relative mb-8 text-center text-sm font-medium text-muted-foreground">
            Trusted by a fast-growing community of scam-aware people & teams
          </p>
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {counters.map((c) => (
              <Counter key={c.label} {...c} />
            ))}
          </div>
        </div>

        {/* Logo wall */}
        <p className="mt-12 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Piloting with forward-thinking organizations
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-lg border border-border/50 bg-surface/30 px-3 py-3 text-center text-[13px] font-semibold tracking-tight text-muted-foreground/80 transition hover:border-primary/30 hover:text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
