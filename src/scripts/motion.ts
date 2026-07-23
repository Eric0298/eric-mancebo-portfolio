import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      el.classList.add("reveal-ready");
    });
    document.documentElement.classList.remove("motion-loading");
    document.documentElement.classList.add("motion-ready");
    return;
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  document.documentElement.classList.remove("motion-loading");
  document.documentElement.classList.add("motion-ready");

  // Anchor links integrate with Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");
      if (!target || target === "#") return;
      const el = document.querySelector(target);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -32 });
    });
  });

  // Hero display: character-by-character reveal
  const displayEl = document.querySelector<HTMLElement>("[data-motion='display']");
  if (displayEl) {
    const raw = displayEl.textContent ?? "";
    displayEl.textContent = "";
    const chars: HTMLSpanElement[] = [];
    for (const ch of raw) {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.display = "inline-block";
      span.style.willChange = "transform, opacity";
      if (ch === " ") span.style.whiteSpace = "pre";
      displayEl.appendChild(span);
      chars.push(span);
    }
    gsap.from(chars, {
      yPercent: 110,
      opacity: 0,
      duration: 1.1,
      stagger: 0.025,
      ease: "power4.out",
      delay: 0.2,
    });
  }

  // Hero fade-in blocks
  gsap.utils.toArray<HTMLElement>("[data-motion='rise']").forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 1,
      delay: parseFloat(el.dataset.delay ?? "0"),
      ease: "power3.out",
    });
  });

  // Portrait parallax
  const portrait = document.querySelector<HTMLElement>("[data-motion='portrait']");
  if (portrait) {
    gsap.to(portrait, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: portrait,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // Section reveal — fade + rise on enter (once, no reverse)
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
        onStart: () => el.classList.add("reveal-ready"),
      },
    );
  });

  // Section-head eyebrow slide-in
  gsap.utils.toArray<HTMLElement>(".section-head").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 12,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        once: true,
      },
    });
  });

  // Row-by-row lists
  gsap.utils.toArray<HTMLElement>("[data-motion='row']").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        once: true,
      },
    });
  });

  // Refresh on font load (avoids offset drift)
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}
