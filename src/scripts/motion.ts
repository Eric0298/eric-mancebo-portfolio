import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
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

  // Anchor links via Lenis
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

  // Hero display: letter-by-letter reveal + subtle float
  const displayEl = document.querySelector<HTMLElement>("[data-motion='display']");
  if (displayEl) {
    const letters = Array.from(displayEl.children) as HTMLElement[];
    gsap.from(letters, {
      yPercent: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "power4.out",
      delay: 0.15,
    });
  }

  // Hero portrait: gentle parallax + slight scale as scroll
  const portrait = document.querySelector<HTMLElement>("[data-motion='portrait']");
  if (portrait) {
    gsap.fromTo(
      portrait,
      { y: 40, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.35 },
    );
    gsap.to(portrait, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: portrait,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // Generic rise-in blocks
  gsap.utils.toArray<HTMLElement>("[data-motion='rise']").forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 1,
      delay: parseFloat(el.dataset.delay ?? "0"),
      ease: "power3.out",
    });
  });

  // Section-head fade
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

  // Summary — illuminate words on scroll (scrub)
  document
    .querySelectorAll<HTMLElement>("[data-motion='words']")
    .forEach((container) => {
      const words = container.querySelectorAll<HTMLElement>(".words__word");
      if (!words.length) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      });
      words.forEach((word) => {
        tl.to(
          word,
          {
            onStart: () => word.classList.add("words__word--lit"),
            onReverseComplete: () => word.classList.remove("words__word--lit"),
            duration: 0.4,
          },
          "+=0.1",
        );
      });
    });

  // Project cards — alternating entry/exit with scale + rotate + slide (scrub)
  gsap.utils.toArray<HTMLElement>("[data-motion='card']").forEach((card) => {
    const side = card.dataset.side === "right" ? 1 : -1;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    tl.fromTo(
      card,
      {
        xPercent: side * 30,
        opacity: 0,
        scale: 0.78,
        rotation: side * 6,
      },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: "power2.out",
        duration: 1,
      },
    )
      .to(card, { duration: 0.4 })
      .to(card, {
        xPercent: -side * 30,
        opacity: 0,
        scale: 0.78,
        rotation: -side * 6,
        ease: "power2.in",
        duration: 1,
      });
  });

  // Stack cells — floating pills, independent motion per cell
  gsap.utils.toArray<HTMLElement>("[data-motion='float']").forEach((cell, i) => {
    gsap.fromTo(
      cell,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: i * 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cell,
          start: "top 95%",
          once: true,
        },
      },
    );

    const floatY = 6 + Math.random() * 6;
    const floatR = 0.8 + Math.random() * 1.2;
    const floatDur = 2.6 + Math.random() * 1.8;
    gsap.to(cell, {
      y: `-=${floatY}`,
      rotation: `+=${floatR}`,
      duration: floatDur,
      delay: 0.6 + i * 0.08,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  });

  // Experience rows
  gsap.utils.toArray<HTMLElement>("[data-motion='row']").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        once: true,
      },
    });
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}
