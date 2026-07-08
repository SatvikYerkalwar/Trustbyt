import { Phone, Globe, AlertTriangle, Copy } from "lucide-react";
import { useState } from "react";

export function EmergencyHelpline() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("1930");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="helpline" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border-2 border-danger/50 bg-gradient-to-br from-danger/15 via-danger/5 to-background p-6 sm:p-10">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-danger/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-warning/10 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-danger/40 bg-danger/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-danger">
                <AlertTriangle className="h-3.5 w-3.5" /> Got scammed? Act in 24 hours
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                India's official <span className="text-gradient">cybercrime helpline</span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                If you've lost money or shared OTP/PIN, call the helpline immediately. The faster you report,
                the higher the chance your money is frozen before it leaves the country.
              </p>
            </div>

            <div className="w-full space-y-3 lg:w-auto">
              <a
                href="tel:1930"
                className="group flex items-center gap-4 rounded-2xl border-2 border-danger/60 bg-background/60 px-6 py-5 backdrop-blur transition hover:border-danger hover:bg-danger/10"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-danger text-white shadow-[0_0_30px_oklch(0.7_0.21_22_/_0.5)]">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-danger">
                    Call now · toll-free
                  </div>
                  <div className="font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    1930
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    copy();
                  }}
                  className="ml-2 grid h-9 w-9 place-items-center rounded-md border border-border/70 bg-surface/60 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                  aria-label="Copy number"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </a>
              {copied && (
                <p className="text-center text-[12px] text-success">Copied 1930 to clipboard</p>
              )}

              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/40 px-4 py-3 transition hover:border-primary/40 hover:bg-surface/60"
              >
                <Globe className="h-5 w-5 text-primary" />
                <div className="text-[14px]">
                  <div className="font-medium">cybercrime.gov.in</div>
                  <div className="text-[12px] text-muted-foreground">
                    File a written complaint with evidence
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative mt-8 grid gap-3 border-t border-danger/20 pt-6 sm:grid-cols-3">
            {[
              "Don't delete any messages — they are evidence",
              "Freeze your account by calling your bank too",
              "Tell your family so they aren't targeted next",
            ].map((t) => (
              <div key={t} className="text-[13.5px] text-foreground/85">
                • {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}