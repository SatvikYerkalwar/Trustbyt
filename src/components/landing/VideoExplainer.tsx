import { useState } from "react";
import { Play, X, ShieldCheck, Search, Users } from "lucide-react";
import { SectionHeader } from "./Features";
import posterImg from "@/assets/explainer-poster.jpg";

const steps = [
  { icon: Search, title: "Check anything", body: "Paste a link or a suspicious message and get an instant, plain-language risk read." },
  { icon: ShieldCheck, title: "Understand the risk", body: "See exactly which red flags tripped — no jargon, no guessing." },
  { icon: Users, title: "Get real help", body: "Escalate to a verified expert or the 1930 helpline when it matters." },
];

// Optional: set to a real YouTube/Vimeo embed URL when the explainer is produced.
const VIDEO_EMBED_URL = "";

export function VideoExplainer() {
  const [open, setOpen] = useState(false);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              See TrustByt work<br />
              <span className="text-gradient">in 90 seconds.</span>
            </>
          }
          desc="A quick walkthrough of how everyday people use TrustByt to stop scams before money or data leaves their side."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Video / poster */}
          <div className="reveal">
            <button
              onClick={() => setOpen(true)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-border/70 bg-surface/40 ring-1 ring-border/50 transition hover:border-primary/40"
              aria-label="Play explainer video"
            >
              <img
                src={posterImg}
                alt="TrustByt explainer video preview"
                width={1280}
                height={720}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-110">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                  <Play className="relative h-6 w-6 translate-x-0.5" fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-4 left-4 rounded-md border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
                Explainer · 1:30
              </span>
            </button>
          </div>

          {/* Steps */}
          <div className="reveal reveal-delay-1 space-y-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl border border-border/70 bg-surface/40 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-[16px] font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border/70 bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur transition hover:bg-background"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
            </button>
            {VIDEO_EMBED_URL ? (
              <div className="aspect-video w-full">
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="TrustByt explainer"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="grid aspect-video w-full place-items-center bg-gradient-to-br from-primary/10 via-surface to-accent/10 p-8 text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                    <Play className="h-6 w-6 translate-x-0.5 text-primary" fill="currentColor" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">Explainer video coming soon</h3>
                  <p className="mx-auto mt-2 max-w-md text-[14px] text-muted-foreground">
                    We're producing a short walkthrough of TrustByt. In the meantime, try the free
                    URL checker and email analyzer right here on this page.
                  </p>
                  <a
                    href="#url-checker"
                    onClick={() => setOpen(false)}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    Try the free tools
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
