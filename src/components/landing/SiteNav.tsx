import { Link, useRouterState } from "@tanstack/react-router";
import { Shield, Menu, X, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string; sectionId?: string; route?: boolean }[] = [
    { href: "#url-checker", label: "URL checker", sectionId: "url-checker" },
    { href: "#how-it-works", label: "How it works", sectionId: "how-it-works" },
    { href: "/pricing", label: "Pricing", route: true },
    { href: "/experts", label: "Expert Help", route: true },
    { href: "/blog", label: "Blog", route: true },
    { href: "/faq", label: "FAQ", route: true },
    { href: "/founder", label: "Founder", route: true },
  ];

  const sectionIds = useMemo(
    () => links.filter((l) => l.sectionId).map((l) => l.sectionId as string),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const active = useActiveSection(sectionIds);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/40">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2.4} />
            <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Trust<span className="text-primary">Byt</span>
          </span>
          <span className="ml-1 hidden rounded-md border border-border/80 bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
            v0.9 · BETA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = l.route
              ? path === l.href
              : path === "/" && active === l.sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-md px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:1930"
            className="inline-flex items-center gap-1.5 rounded-md border border-danger/40 bg-danger/10 px-2.5 py-1.5 text-[12px] font-mono font-semibold text-danger transition hover:bg-danger/20"
          >
            <Phone className="h-3 w-3" /> 1930
          </a>
          <a
            href="#waitlist"
            className="group relative overflow-hidden rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            <span className="relative z-10">Join the beta</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  (l.route ? path === l.href : path === "/" && active === l.sectionId)
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:1930"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md border border-danger/40 bg-danger/10 px-3 py-2 font-mono text-sm font-semibold text-danger"
            >
              <Phone className="h-4 w-4" /> Emergency · 1930
            </a>
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Join the beta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
