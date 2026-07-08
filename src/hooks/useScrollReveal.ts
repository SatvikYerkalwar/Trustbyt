import { useEffect } from "react";

/**
 * Adds the `in-view` class to any element with the `.reveal` class
 * once it enters the viewport. Re-scans on route/content changes.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}