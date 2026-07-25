import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    document.documentElement.classList.remove("motion-loading");
    document.documentElement.classList.add("motion-ready");
    initNextSectionButton(null);
    return;
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  initNextSectionButton(lenis);

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
    // Parallax removed: it shifts the photo while the row 1 silhouette pin
    // (a ::after pseudo-element outside .hero__stage) stays put, causing
    // the silhouette overlay to fall out of register with the actual body.
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

  // Giant section titles — char-by-char rise (per word, so words don't decompose)
  gsap.utils.toArray<HTMLElement>("[data-motion='title']").forEach((el) => {
    // Split chars *inside* each pre-rendered word wrapper. Keeping words as
    // block-level containers prevents the browser from breaking a word across
    // lines at the inline-block char boundaries.
    el.querySelectorAll<HTMLElement>(".section-title__word").forEach((wordSpan) => {
      const raw = (wordSpan.textContent ?? "").trim();
      if (!raw) return;
      wordSpan.innerHTML = "";
      for (const ch of raw) {
        const wrap = document.createElement("span");
        wrap.className = "section-title__char";
        wrap.style.display = "inline-block";
        wrap.style.willChange = "transform, opacity";
        wrap.textContent = ch;
        wordSpan.appendChild(wrap);
      }
    });

    const chars = el.querySelectorAll<HTMLElement>(".section-title__char");
    if (chars.length === 0) return;
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

  // About — narrative pinned reveal: current block fades out completely,
  // brief hold, next block fades in. No two paragraphs are legible at once.
  const about = document.querySelector<HTMLElement>("[data-motion='about']");
  if (about) {
    const pin = about.querySelector<HTMLElement>(".about__pin");
    const blocks = about.querySelectorAll<HTMLElement>(".about__block");
    const dots = about.querySelectorAll<HTMLElement>(".about__dot");
    if (pin && blocks.length > 0) {
      about.classList.add("about--enhanced");

      gsap.set(blocks, { opacity: 0, y: 10 });
      gsap.set(blocks[0], { opacity: 1, y: 0 });
      dots[0]?.classList.add("about__dot--active");

      const setActiveDot = (index: number) => {
        dots.forEach((dot, i) => {
          dot.classList.toggle("about__dot--active", i === index);
        });
      };

      // Each transition = fade-out (0.9) + hold (0.4) + fade-in (0.9)
      // = 2.2 timeline units. Scale total scroll accordingly.
      const perBlock = 820;
      const total = (blocks.length - 1) * perBlock;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: "top top",
          end: `+=${total}`,
          pin: pin,
          pinSpacing: true,
          scrub: 0.8,
        },
      });

      for (let i = 0; i < blocks.length - 1; i++) {
        tl.to(blocks[i], {
          opacity: 0,
          y: -10,
          duration: 0.9,
          ease: "power2.in",
        })
          .to({}, { duration: 0.4 }) // clean hold: both blocks fully hidden
          .fromTo(
            blocks[i + 1],
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              onStart: () => setActiveDot(i + 1),
              onReverseComplete: () => setActiveDot(i),
            },
          );
      }
    }
  }

  // Experience — cinematic pinned reveal: for each stage the year enters
  // centered, then slides to its column while the detail fades in.
  const experience = document.querySelector<HTMLElement>("[data-motion='experience']");
  if (experience) {
    const pin = experience.querySelector<HTMLElement>(".experience__pin");
    const slides = Array.from(
      experience.querySelectorAll<HTMLElement>(".experience__slide"),
    );
    if (pin && slides.length > 0) {
      const yearBlocks = slides.map(
        (s) => s.querySelector<HTMLElement>(".experience__year-block")!,
      );
      const detailBlocks = slides.map(
        (s) => s.querySelector<HTMLElement>(".experience__detail-block")!,
      );

      const desktopQuery = window.matchMedia("(min-width: 901px)");

      const computeCenterOffset = (index: number) => {
        if (!desktopQuery.matches) return 0;
        const slide = slides[index];
        const yb = yearBlocks[index];
        // How far right must the year-block travel so its center matches the
        // slide's center. Guard against sub-pixel negatives.
        return Math.max(0, (slide.offsetWidth - yb.offsetWidth) / 2);
      };

      const setActive = (index: number) => {
        slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      };

      // Initial state: only slide 0 visible, its year sitting in the visual
      // center, its detail hidden. Other slides are fully hidden with their
      // years already pre-positioned so they enter centered too.
      gsap.set(slides, { opacity: 0 });
      gsap.set(detailBlocks, { opacity: 0, x: desktopQuery.matches ? 30 : 0, y: desktopQuery.matches ? 0 : 20 });
      yearBlocks.forEach((yb, i) => {
        gsap.set(yb, { x: computeCenterOffset(i), y: 0, opacity: 1 });
      });
      gsap.set(slides[0], { opacity: 1 });
      setActive(0);

      const stageDur = 1;
      const perStage = 620; // scroll px per timeline unit
      const totalStages = slides.length * 2 - 1;
      const total = totalStages * perStage;

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

      let t = 0;

      // Stage: expand slide 0 (year center → left, detail in)
      tl.to(yearBlocks[0], {
        x: 0,
        duration: stageDur,
        ease: "power2.inOut",
      }, t);
      tl.to(detailBlocks[0], {
        opacity: 1,
        x: 0,
        y: 0,
        duration: stageDur,
        ease: "power2.inOut",
      }, t);
      t += stageDur;

      for (let i = 1; i < slides.length; i++) {
        const prev = slides[i - 1];
        const next = slides[i];

        // Stage: cross-fade — previous slide out, next slide in (year already
        // pre-positioned at center so it enters centered).
        tl.to(prev, {
          opacity: 0,
          duration: stageDur,
          ease: "power2.inOut",
        }, t);
        tl.to(next, {
          opacity: 1,
          duration: stageDur,
          ease: "power2.inOut",
          onStart: () => setActive(i),
          onReverseComplete: () => setActive(i - 1),
        }, t);
        t += stageDur;

        // Stage: expand next slide.
        tl.to(yearBlocks[i], {
          x: 0,
          duration: stageDur,
          ease: "power2.inOut",
        }, t);
        tl.to(detailBlocks[i], {
          opacity: 1,
          x: 0,
          y: 0,
          duration: stageDur,
          ease: "power2.inOut",
        }, t);
        t += stageDur;
      }

      // Recompute centering offsets when the viewport width crosses the
      // desktop/mobile breakpoint or resizes materially.
      let resizeRaf = 0;
      const handleResize = () => {
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
          yearBlocks.forEach((yb, i) => {
            const offset = computeCenterOffset(i);
            // Only reset year-block position for slides that haven't been
            // "expanded" yet in the current scroll position. Simpler: refresh
            // ScrollTrigger which re-runs all sets from init.
            gsap.set(yb, { x: offset });
          });
          ScrollTrigger.refresh();
        });
      };
      window.addEventListener("resize", handleResize);
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

const NEXT_SECTION_SELECTORS = "#top, #about, #projects, #experience, #stack, #links";

function initNextSectionButton(lenis: Lenis | null) {
  const btn = document.querySelector<HTMLButtonElement>("[data-next-section]");
  if (!btn) return;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(NEXT_SECTION_SELECTORS),
  );
  if (sections.length === 0) return;

  const getCurrentIndex = () => {
    const viewportMid = window.scrollY + window.innerHeight / 2;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].getBoundingClientRect().top + window.scrollY;
      if (top <= viewportMid) idx = i;
    }
    return idx;
  };

  const updateState = () => {
    const isLast = getCurrentIndex() === sections.length - 1;
    btn.classList.toggle("next-section--at-end", isLast);
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
  window.addEventListener("resize", updateState);

  btn.addEventListener("click", () => {
    const idx = getCurrentIndex();
    const target =
      idx === sections.length - 1 ? sections[0] : sections[idx + 1];
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
