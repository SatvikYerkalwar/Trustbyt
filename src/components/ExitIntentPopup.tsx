import { useEffect, useState } from "react";
import { X, ShieldCheck, ArrowRight, Check } from "lucide-react";

const STORAGE_KEY = "trustbyt_exit_intent_seen";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 6000); // don't fire in the first few seconds

    const trigger = () => {
      if (!armed) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-surface p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[140%] -translate-x-1/2 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border/70 text-muted-foreground transition hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="relative flex flex-col items-center py-6 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-success/15 ring-1 ring-success/40">
              <Check className="h-5 w-5 text-success" />
            </span>
            <p className="mt-3 text-[16px] font-semibold">You're on the list.</p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              We'll send early access and safety tips — no spam, ever.
            </p>
          </div>
        ) : (
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="h-3 w-3" /> Before you go
            </span>
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">
              Get scam alerts <span className="text-gradient">before</span> they reach your family.
            </h3>
            <p className="mt-2 text-[13.5px] text-muted-foreground">
              Join the free beta and get early access plus a short monthly safety guide you can share with your parents.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return;
                setSubmitted(true);
              }}
              className="mt-5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-[14px] outline-none ring-primary/40 transition focus:border-primary/50 focus:ring-2"
              />
              <button
                type="submit"
                className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[14px] font-medium text-primary-foreground transition hover:brightness-110"
              >
                Join the free beta
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-center text-[12px] text-muted-foreground transition hover:text-foreground"
              >
                No thanks, I'll keep browsing
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
