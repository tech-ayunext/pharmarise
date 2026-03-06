import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GlobalMotion = () => {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section, main article, .contact-section, .hero-section"
      )
    ).filter((el) => !el.closest("header") && !el.closest("footer"));

    sections.forEach((el) => {
      el.classList.add("gm-reveal");
      el.classList.remove("gm-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gm-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default GlobalMotion;
