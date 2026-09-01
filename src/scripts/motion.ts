import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mobile browser chrome changes the visual viewport height while scrolling.
// The pinned sections use a stable viewport unit, so those height-only resizes
// should not interrupt an active gesture with a full ScrollTrigger refresh.
ScrollTrigger.config({ ignoreMobileResize: true });

const NEXT_SECTION_SELECTORS =
  "#top, #about, #projects, #experience, #stack, #links";

export function initMotion() {
  const root = document.documentElement;
  if (root.dataset.motionInitialized === "true") return;
  root.dataset.motionInitialized = "true";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initAnchorNavigation(reduce);
  initNextSectionButton(reduce);
  initHeroVisibility();

  root.classList.remove("motion-loading");
  root.classList.add("motion-ready");

  if (reduce) return;

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
  initAboutNarrative();
  initExperienceNarrative();
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

  let pauseTimer = 0;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (pauseTimer) window.clearTimeout(pauseTimer);
      if (entry.isIntersecting) {
        hero.classList.remove("hero--offscreen");
        return;
      }
      pauseTimer = window.setTimeout(() => {
        hero.classList.add("hero--offscreen");
        pauseTimer = 0;
      }, 180);
    },
    { rootMargin: "120px 0px" },
  );
  observer.observe(hero);
  window.addEventListener(
    "pagehide",
    () => {
      observer.disconnect();
      if (pauseTimer) window.clearTimeout(pauseTimer);
    },
    { once: true },
  );
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
        fastScrollEnd: 1200,
        once: true,
      },
    });
  });
}

function initAboutNarrative() {
  const about = document.querySelector<HTMLElement>("[data-motion='about']");
  if (!about) return;

  const pin = about.querySelector<HTMLElement>(".about__pin");
  const blocks = about.querySelectorAll<HTMLElement>(".about__block");
  const dots = about.querySelectorAll<HTMLElement>(".about__dot");
  if (!pin || blocks.length === 0) return;

  about.classList.add("about--enhanced");
  gsap.set(blocks, { opacity: 0, y: 10 });
  gsap.set(blocks[0], { opacity: 1, y: 0 });
  dots[0]?.classList.add("about__dot--active");

  const setActiveDot = (index: number) => {
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("about__dot--active", dotIndex === index);
    });
  };

  const scrollPerBlock = 820;
  const totalScroll = (blocks.length - 1) * scrollPerBlock;
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: "top top",
      end: `+=${totalScroll}`,
      pin,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      fastScrollEnd: 1200,
      invalidateOnRefresh: true,
    },
  });

  for (let index = 0; index < blocks.length - 1; index += 1) {
    timeline
      .to(blocks[index], {
        opacity: 0,
        y: -10,
        duration: 0.9,
        ease: "power2.in",
      })
      .to({}, { duration: 0.4 })
      .fromTo(
        blocks[index + 1],
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          onStart: () => setActiveDot(index + 1),
          onReverseComplete: () => setActiveDot(index),
        },
      );
  }
}

function initExperienceNarrative() {
  const experience = document.querySelector<HTMLElement>(
    "[data-motion='experience']",
  );
  if (!experience) return;

  const pin = experience.querySelector<HTMLElement>(".experience__pin");
  const slides = Array.from(
    experience.querySelectorAll<HTMLElement>(".experience__slide"),
  );
  if (!pin || slides.length === 0) return;

  const yearBlocks = slides.map((slide) =>
    slide.querySelector<HTMLElement>(".experience__year-block"),
  );
  const detailBlocks = slides.map((slide) =>
    slide.querySelector<HTMLElement>(".experience__detail-block"),
  );
  if (yearBlocks.some((block) => !block) || detailBlocks.some((block) => !block)) {
    return;
  }

  const years = yearBlocks as HTMLElement[];
  const details = detailBlocks as HTMLElement[];
  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const computeCenterOffset = (index: number) => {
    if (!desktopQuery.matches) return 0;
    return Math.max(0, (slides[index].offsetWidth - years[index].offsetWidth) / 2);
  };
  const setActive = (index: number) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  };

  gsap.set(slides, { opacity: 0 });
  gsap.set(details, {
    opacity: 0,
    x: desktopQuery.matches ? 30 : 0,
    y: desktopQuery.matches ? 0 : 20,
  });
  years.forEach((year, index) => {
    gsap.set(year, { x: computeCenterOffset(index), y: 0, opacity: 1 });
  });
  gsap.set(slides[0], { opacity: 1 });
  setActive(0);

  const stageDuration = 1;
  const scrollPerStage = 620;
  const totalStages = slides.length * 2 - 1;
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: experience,
      start: "top top",
      end: `+=${totalStages * scrollPerStage}`,
      pin,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      fastScrollEnd: 1200,
      invalidateOnRefresh: true,
    },
  });

  let time = 0;
  timeline.to(
    years[0],
    { x: 0, duration: stageDuration, ease: "power2.inOut" },
    time,
  );
  timeline.to(
    details[0],
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: stageDuration,
      ease: "power2.inOut",
    },
    time,
  );
  time += stageDuration;

  for (let index = 1; index < slides.length; index += 1) {
    timeline.to(
      slides[index - 1],
      { opacity: 0, duration: stageDuration, ease: "power2.inOut" },
      time,
    );
    timeline.to(
      slides[index],
      {
        opacity: 1,
        duration: stageDuration,
        ease: "power2.inOut",
        onStart: () => setActive(index),
        onReverseComplete: () => setActive(index - 1),
      },
      time,
    );
    time += stageDuration;

    timeline.to(
      years[index],
      { x: 0, duration: stageDuration, ease: "power2.inOut" },
      time,
    );
    timeline.to(
      details[index],
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: stageDuration,
        ease: "power2.inOut",
      },
      time,
    );
    time += stageDuration;
  }

  const refreshLayout = () => {
    years.forEach((year, index) => {
      gsap.set(year, { x: computeCenterOffset(index) });
    });
  };
  ScrollTrigger.addEventListener("refreshInit", refreshLayout);
  window.addEventListener(
    "pagehide",
    () => {
      ScrollTrigger.removeEventListener("refreshInit", refreshLayout);
    },
    { once: true },
  );
}

function initProjectCards() {
  gsap.utils.toArray<HTMLElement>("[data-motion='card']").forEach((card) => {
    const side = card.dataset.side === "right" ? 1 : -1;
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
        fastScrollEnd: 1200,
        once: true,
      },
    });
  });
}

function initBatchedReveals() {
  ScrollTrigger.batch("[data-motion='float']", {
    start: "top 94%",
    fastScrollEnd: 1200,
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
    fastScrollEnd: 1200,
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
