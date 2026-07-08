export function LogoMarquee() {
  const names = [
    "STRIPE", "NORTON", "OKTA", "PLAID", "CLOUDFLARE",
    "1PASSWORD", "NOTION", "LINEAR", "VERCEL", "RAMP",
    "DUCKDUCKGO", "ARC",
  ];
  const row = [...names, ...names];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by security &amp; product teams piloting TrustByt
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max gap-12 [animation:marquee_32s_linear_infinite]">
            {row.map((n, i) => (
              <span
                key={i}
                className="select-none whitespace-nowrap font-mono text-sm font-semibold tracking-[0.18em] text-muted-foreground/70 transition hover:text-foreground"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
