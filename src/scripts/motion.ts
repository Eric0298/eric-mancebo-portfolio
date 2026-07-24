import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    document.documentElement.classList.remove("motion-loading");
    document.documentElement.classList.add("motion-ready");
    document.querySelectorAll<HTMLElement>(".words__word").forEach((el) => {
      el.classList.add("words__word--visible", "words__word--lit");
    });
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

  // Hero marquee is now driven entirely by CSS keyframes so that base and
  // clip-clone tracks stay perfectly in sync and each row can be paused
  // independently via :hover on its own hit area.

  // Portrait — appear + parallax
  const portrait = document.querySelector<HTMLElement>("[data-motion='portrait']");
  if (portrait) {
    gsap.fromTo(
      portrait,
      { y: 40, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.2 },
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

  // Rise-in generic
  gsap.utils.toArray<HTMLElement>("[data-motion='rise']").forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 1,
      delay: parseFloat(el.dataset.delay ?? "0"),
      ease: "power3.out",
    });
  });

  // Giant section titles — char-by-char rise
  gsap.utils.toArray<HTMLElement>("[data-motion='title']").forEach((el) => {
    const visibleSpan = Array.from(el.querySelectorAll<HTMLElement>("span[data-i18n]")).find(
      (s) => getComputedStyle(s).display !== "none",
    );
    const source = visibleSpan ?? el;
    const text = (source.textContent ?? "").trim();
    if (!text) return;

    // Rebuild both language spans with per-char structure
    el.querySelectorAll<HTMLElement>("span[data-i18n]").forEach((span) => {
      const raw = (span.textContent ?? "").trim();
      span.innerHTML = "";
      for (const ch of raw) {
        const wrap = document.createElement("span");
        wrap.className = "section-title__char";
        wrap.style.display = "inline-block";
        wrap.style.willChange = "transform, opacity";
        if (ch === " ") {
          wrap.innerHTML = "&nbsp;";
          wrap.style.whiteSpace = "pre";
        } else {
          wrap.textContent = ch;
        }
        span.appendChild(wrap);
      }
    });

    const chars = el.querySelectorAll<HTMLElement>(".section-title__char");
    gsap.from(chars, {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      stagger: 0.02,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
    });
  });

  // Summary — words appear from nothing AND illuminate as scroll progresses
  document
    .querySelectorAll<HTMLElement>("[data-motion='words']")
    .forEach((container) => {
      const words = container.querySelectorAll<HTMLElement>(".words__word");
      if (!words.length) return;

      // Phase 1: pop in from nothing, staggered by scroll position
      const appearTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "top 40%",
          scrub: 0.6,
        },
      });
      words.forEach((word) => {
        appearTl.to(
          word,
          {
            onStart: () => word.classList.add("words__word--visible"),
            onReverseComplete: () =>
              word.classList.remove("words__word--visible", "words__word--lit"),
            duration: 0.3,
          },
          "+=0.08",
        );
      });

      // Phase 2: illuminate as scroll continues past the appear range
      const litTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 45%",
          end: "bottom 45%",
          scrub: 0.4,
        },
      });
      words.forEach((word) => {
        litTl.to(
          word,
          {
            onStart: () => word.classList.add("words__word--lit"),
            onReverseComplete: () => word.classList.remove("words__word--lit"),
            duration: 0.3,
          },
          "+=0.08",
        );
      });
    });

  // Experience — cinematic pinned reveal: year → detail → next year → ...
  const experience = document.querySelector<HTMLElement>("[data-motion='experience']");
  if (experience) {
    const pin = experience.querySelector<HTMLElement>(".experience__pin");
    const slides = experience.querySelectorAll<HTMLElement>(".experience__slide");
    if (pin && slides.length > 0) {
      // Init: only first slide visible
      gsap.set(slides, { opacity: 0, y: 40 });
      gsap.set(slides[0], { opacity: 1, y: 0 });

      const perSlide = 700; // px of scroll per transition
      const total = (slides.length - 1) * perSlide;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experience,
          start: "top top",
          end: `+=${total}`,
          pin: pin,
          pinSpacing: true,
          scrub: 0.6,
        },
      });

      for (let i = 0; i < slides.length - 1; i++) {
        tl.to(slides[i], { opacity: 0, y: -40, duration: 1, ease: "power2.inOut" }, i)
          .fromTo(
            slides[i + 1],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
            i,
          );
      }
    }
  }

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

  // Stack cells — appear + independent float
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

  // Row lists
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
