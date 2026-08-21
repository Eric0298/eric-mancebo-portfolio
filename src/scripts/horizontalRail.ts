type RailState = {
  pending: boolean;
  dragging: boolean;
  startX: number;
  startY: number;
  startScrollLeft: number;
  pointerId: number;
};

export function initHorizontalRails() {
  const rails = document.querySelectorAll<HTMLElement>(
    "[data-horizontal-rail]",
  );
  if (rails.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  rails.forEach((rail) => {
    const slides = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-rail-slide]"),
    );
    if (slides.length === 0) return;

    const scope = rail.parentElement ?? rail;
    const previous = scope.querySelector<HTMLButtonElement>("[data-rail-prev]");
    const next = scope.querySelector<HTMLButtonElement>("[data-rail-next]");
    const status = scope.querySelector<HTMLElement>("[data-rail-status]");
    const controller = new AbortController();
    const { signal } = controller;
    let slideCenters: number[] = [];
    let activeIndex = 0;
    let scrollRaf = 0;
    let suppressClick = false;
    let shiftWheelLocked = false;

    const state: RailState = {
      pending: false,
      dragging: false,
      startX: 0,
      startY: 0,
      startScrollLeft: 0,
      pointerId: -1,
    };

    const measure = () => {
      slideCenters = slides.map(
        (slide) => slide.offsetLeft - rail.offsetLeft + slide.offsetWidth / 2,
      );
      updateState();
    };

    const getClosestIndex = () => {
      const center = rail.scrollLeft + rail.clientWidth / 2;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      slideCenters.forEach((slideCenter, index) => {
        const nextDistance = Math.abs(slideCenter - center);
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = index;
        }
      });
      return closest;
    };

    const updateState = () => {
      activeIndex = getClosestIndex();
      if (status) status.textContent = `${activeIndex + 1} / ${slides.length}`;
      if (previous) previous.disabled = activeIndex === 0;
      if (next) next.disabled = activeIndex === slides.length - 1;
      slides.forEach((slide, index) => {
        if (index === activeIndex) slide.setAttribute("aria-current", "true");
        else slide.removeAttribute("aria-current");
      });
    };

    const goTo = (index: number) => {
      const targetIndex = Math.max(0, Math.min(slides.length - 1, index));
      const target = slides[targetIndex];
      rail.scrollTo({
        left: target.offsetLeft - rail.offsetLeft,
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    };

    const scheduleStateUpdate = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        updateState();
      });
    };

    previous?.addEventListener("click", () => goTo(activeIndex - 1), {
      signal,
    });
    next?.addEventListener("click", () => goTo(activeIndex + 1), { signal });

    rail.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(activeIndex - 1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(activeIndex + 1);
        } else if (event.key === "Home") {
          event.preventDefault();
          goTo(0);
        } else if (event.key === "End") {
          event.preventDefault();
          goTo(slides.length - 1);
        }
      },
      { signal },
    );

    // Shift + wheel is an explicit horizontal gesture. Ordinary vertical wheel
    // input is never cancelled, so the page remains in control of vertical flow.
    rail.addEventListener(
      "wheel",
      (event) => {
        if (!event.shiftKey) return;
        event.preventDefault();
        if (shiftWheelLocked) return;
        const distance = event.deltaX || event.deltaY;
        if (Math.abs(distance) < 1) return;
        shiftWheelLocked = true;
        goTo(activeIndex + Math.sign(distance));
        window.setTimeout(() => {
          shiftWheelLocked = false;
        }, 420);
      },
      { passive: false, signal },
    );

    // Mouse drag only captures after a clear horizontal threshold. Touch and
    // pen stay fully native, preserving browser direction-lock and momentum.
    rail.addEventListener(
      "pointerdown",
      (event) => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        state.pending = true;
        state.dragging = false;
        state.startX = event.clientX;
        state.startY = event.clientY;
        state.startScrollLeft = rail.scrollLeft;
        state.pointerId = event.pointerId;
      },
      { signal },
    );

    rail.addEventListener(
      "pointermove",
      (event) => {
        if (!state.pending || event.pointerId !== state.pointerId) return;
        const deltaX = event.clientX - state.startX;
        const deltaY = event.clientY - state.startY;

        if (!state.dragging) {
          if (Math.hypot(deltaX, deltaY) < 7) return;
          if (Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) {
            state.pending = false;
            return;
          }
          state.dragging = true;
          rail.classList.add("is-dragging");
          rail.setPointerCapture(event.pointerId);
        }

        event.preventDefault();
        rail.scrollLeft = state.startScrollLeft - deltaX;
      },
      { signal },
    );

    const finishDrag = (event: PointerEvent) => {
      if (event.pointerId !== state.pointerId) return;
      const dragged = state.dragging;
      state.pending = false;
      state.dragging = false;
      rail.classList.remove("is-dragging");
      if (rail.hasPointerCapture(event.pointerId))
        rail.releasePointerCapture(event.pointerId);
      if (!dragged) return;
      suppressClick = true;
      const dragDistance = event.clientX - state.startX;
      const targetIndex =
        Math.abs(dragDistance) >= 48
          ? activeIndex + (dragDistance < 0 ? 1 : -1)
          : getClosestIndex();
      goTo(targetIndex);
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    };

    rail.addEventListener("pointerup", finishDrag, { signal });
    rail.addEventListener("pointercancel", finishDrag, { signal });
    rail.addEventListener(
      "click",
      (event) => {
        if (!suppressClick) return;
        event.preventDefault();
        event.stopPropagation();
      },
      { capture: true, signal },
    );
    rail.addEventListener("scroll", scheduleStateUpdate, {
      passive: true,
      signal,
    });

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(rail);
    slides.forEach((slide) => resizeObserver.observe(slide));
    measure();

    window.addEventListener(
      "pagehide",
      () => {
        controller.abort();
        resizeObserver.disconnect();
        if (scrollRaf) cancelAnimationFrame(scrollRaf);
      },
      { once: true },
    );
  });
}
