import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initHorizontalRails } from "./horizontalRail";

gsap.registerPlugin(ScrollTrigger);

const NEXT_SECTION_SELECTORS =
  "#top, #about, #projects, #experience, #stack, #links";

export function initMotion() {
  const root = document.documentElement;
  if (root.dataset.motionInitialized === "true") return;
  root.dataset.motionInitialized = "true";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initAnchorNavigation(reduce);
  initHorizontalRails();
  initNextSectionButton(reduce);
  initHeroVisibility();

  root.classList.remove("motion-loading");
  root.classList.add("motion-ready");

  if (reduce) return;

  // Dynamic mobile browser bars must not trigger global refreshes mid-gesture.
  // None of the remaining effects depend on pinning or viewport-height math.
  ScrollTrigger.config({ ignoreMobileResize: true });

  const portrait = document.querySelector<HTMLElement>(
    "[data-motion='portrait']",
  );
  if (portrait) {
    portrait.style.willChange = "transform, opacity";
    gsap.fromTo(
      portrait,
      { y: 40, opacity: 0, scale: 0.94 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2,
        clearProps: "transform,opacity,willChange",
      },
    );
  }

  gsap.utils.toArray<HTMLElement>("[data-motion='rise']").forEach((element) => {
    element.style.willChange = "transform, opacity";
    gsap.from(element, {
      y: 24,
      opacity: 0,
      duration: 1,
      delay: Number.parseFloat(element.dataset.delay ?? "0"),
      ease: "power3.out",
      clearProps: "transform,opacity,willChange",
    });
  });

  initSectionTitles();
  initProjectCards();
  initBatchedReveals();

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function initAnchorNavigation(reduce: boolean) {
  const controller = new AbortController();
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          const hash = link.getAttribute("href");
          if (!hash || hash === "#") return;
          const id = decodeURIComponent(hash.slice(1));
          const target = document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "start",
          });
        },
        { signal: controller.signal },
      );
    });
  window.addEventListener("pagehide", () => controller.abort(), { once: true });
}

function initHeroVisibility() {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) =>
      hero.classList.toggle("hero--offscreen", !entry.isIntersecting),
    { rootMargin: "120px 0px" },
  );
  observer.observe(hero);
  window.addEventListener("pagehide", () => observer.disconnect(), {
    once: true,
  });
}

function initSectionTitles() {
  gsap.utils.toArray<HTMLElement>("[data-motion='title']").forEach((title) => {
    title
      .querySelectorAll<HTMLElement>(".section-title__word")
      .forEach((word) => {
        const raw = (word.textContent ?? "").trim();
        if (!raw) return;
        word.innerHTML = "";
        for (const character of raw) {
          const wrapper = document.createElement("span");
          wrapper.className = "section-title__char";
          wrapper.style.display = "inline-block";
          wrapper.textContent = character;
          word.appendChild(wrapper);
        }
      });

    const characters = title.querySelectorAll<HTMLElement>(
      ".section-title__char",
    );
    if (characters.length === 0) return;
    characters.forEach((character) => {
      character.style.willChange = "transform, opacity";
    });
    gsap.from(characters, {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      stagger: 0.02,
      ease: "power4.out",
      clearProps: "transform,opacity,willChange",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        once: true,
      },
    });
  });
}

function initProjectCards() {
  gsap.utils.toArray<HTMLElement>("[data-motion='card']").forEach((card) => {
    const side = card.dataset.side === "right" ? 1 : -1;
    card.style.willChange = "transform, opacity";
    gsap.from(card, {
      x: side * 24,
      y: 44,
      opacity: 0,
      scale: 0.96,
      rotation: side * 1.2,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform,opacity,willChange",
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        once: true,
      },
    });
  });
}

function initBatchedReveals() {
  ScrollTrigger.batch("[data-motion='float']", {
    start: "top 94%",
    once: true,
    onEnter: (elements) => {
      gsap.fromTo(
        elements,
        { y: 24, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.035,
          ease: "power3.out",
          clearProps: "transform,opacity,willChange",
        },
      );
    },
  });

  ScrollTrigger.batch("[data-motion='row']", {
    start: "top 94%",
    once: true,
    onEnter: (elements) => {
      gsap.from(elements, {
        opacity: 0,
        y: 18,
        duration: 0.65,
        stagger: 0.04,
        ease: "power3.out",
        clearProps: "transform,opacity,willChange",
      });
    },
  });
}

function initNextSectionButton(reduce: boolean) {
  const button = document.querySelector<HTMLButtonElement>(
    "[data-next-section]",
  );
  if (!button) return;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(NEXT_SECTION_SELECTORS),
  );
  if (sections.length === 0) return;

  const controller = new AbortController();
  const { signal } = controller;
  let sectionTops: number[] = [];
  let updateRaf = 0;
  let measureRaf = 0;

  const measure = () => {
    measureRaf = 0;
    sectionTops = sections.map(
      (section) => section.getBoundingClientRect().top + window.scrollY,
    );
    update();
  };

  const getCurrentIndex = () => {
    const viewportMid = window.scrollY + window.innerHeight / 2;
    let index = 0;
    for (let i = 1; i < sectionTops.length; i += 1) {
      if (sectionTops[i] > viewportMid) break;
      index = i;
    }
    return index;
  };

  const update = () => {
    updateRaf = 0;
    button.classList.toggle(
      "next-section--at-end",
      getCurrentIndex() === sections.length - 1,
    );
  };

  const scheduleUpdate = () => {
    if (!updateRaf) updateRaf = requestAnimationFrame(update);
  };

  const scheduleMeasure = () => {
    if (!measureRaf) measureRaf = requestAnimationFrame(measure);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true, signal });
  window.addEventListener("resize", scheduleMeasure, { passive: true, signal });
  window.visualViewport?.addEventListener("resize", scheduleMeasure, {
    passive: true,
    signal,
  });
  window.addEventListener("load", scheduleMeasure, { once: true, signal });

  const resizeObserver = new ResizeObserver(scheduleMeasure);
  sections.forEach((section) => resizeObserver.observe(section));
  document.fonts?.ready.then(scheduleMeasure);

  button.addEventListener(
    "click",
    () => {
      const index = getCurrentIndex();
      const target =
        index === sections.length - 1 ? sections[0] : sections[index + 1];
      target?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    },
    { signal },
  );

  window.addEventListener(
    "pagehide",
    () => {
      controller.abort();
      resizeObserver.disconnect();
      if (updateRaf) cancelAnimationFrame(updateRaf);
      if (measureRaf) cancelAnimationFrame(measureRaf);
    },
    { once: true },
  );
  measure();
}
