import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Scam awareness & online safety guides · TrustByt" },
      {
        name: "description",
        content:
          "Practical, plain-language guides on spotting scams, phishing, and online fraud — and what to do if you've been targeted. From the TrustByt team.",
      },
      { property: "og:title", content: "TrustByt Blog — Stay safe online" },
      {
        property: "og:description",
        content:
          "Guides on spotting scam websites, phishing emails, and protecting your family online.",
      },
    ],
  }),
  component: BlogPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogPage() {
  useScrollReveal();
  const [featured, ...rest] = blogPosts;
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-radial-glow" />
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[12px] font-medium text-primary">
              <BookOpen className="h-3.5 w-3.5" /> The TrustByt blog
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Stay one step ahead of <span className="text-gradient">scammers</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Plain-language guides to spotting scams, phishing, and fraud — written for real people, not security experts.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="relative pb-8">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="reveal group grid gap-6 overflow-hidden rounded-3xl border border-border/70 bg-surface/40 p-6 transition hover:border-primary/40 sm:p-8 md:grid-cols-2 md:items-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-surface/40 to-accent/20 ring-1 ring-border/60">
                <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <BookOpen className="h-14 w-14 text-primary/70" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readMinutes} min read
                  </span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Grid */}
        <section className="relative py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="reveal group flex flex-col rounded-2xl border border-border/70 bg-surface/40 p-6 transition hover:border-primary/40"
                >
                  <div className="flex items-center gap-2 text-[11.5px] text-muted-foreground">
                    <span className="rounded-md border border-border/70 bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readMinutes} min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[17px] font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
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
