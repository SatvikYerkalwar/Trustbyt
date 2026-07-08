import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Phone } from "lucide-react";
import { SiteNav } from "@/components/landing/SiteNav";
import { Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getPost, blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found · TrustByt" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} · TrustByt` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostNotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-semibold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">This article may have been moved or removed.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Back to blog
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function renderBlock(block: string, i: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={i} className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
        {block.slice(3)}
      </h2>
    );
  }
  if (block.startsWith("- ")) {
    return (
      <li key={i} className="ml-5 list-disc text-[15px] leading-relaxed text-muted-foreground">
        {block.slice(2)}
      </li>
    );
  }
  return (
    <p key={i} className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
      {block}
    </p>
  );
}

function BlogPostPage() {
  useScrollReveal();
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        <article className="relative pt-32 pb-16 sm:pt-40">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-radial-glow" />
          <div className="mx-auto max-w-3xl px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[12.5px] text-muted-foreground">
              <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readMinutes} min read
              </span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-[13.5px] text-muted-foreground">By {post.author}</p>

            <div className="mt-8">
              {post.content.map((b: string, i: number) => renderBlock(b, i))}
            </div>

            {/* Emergency callout */}
            <div className="mt-12 rounded-2xl border border-danger/40 bg-danger/10 p-5">
              <div className="flex items-center gap-2 text-danger">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold">Already been scammed?</span>
              </div>
              <p className="mt-2 text-[13.5px] text-foreground/80">
                Call India's cybercrime helpline{" "}
                <a href="tel:1930" className="font-mono font-semibold text-danger underline">1930</a>{" "}
                immediately and file a report at{" "}
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-danger underline">cybercrime.gov.in</a>.
              </p>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-lg font-semibold tracking-tight">Keep reading</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border/70 bg-surface/40 p-5 transition hover:border-primary/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{p.category}</span>
                  <h3 className="mt-2 text-[15.5px] font-semibold leading-snug group-hover:text-primary">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
