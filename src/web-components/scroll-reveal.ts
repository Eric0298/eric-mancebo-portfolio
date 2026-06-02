import { animate, inView } from "motion";
import { motionDurations, motionEasings, prefersReducedMotion } from "../lib/motion";

class PortfolioMotionRoot extends HTMLElement {
  private stopCallbacks: Array<() => void> = [];

  connectedCallback() {
    if (prefersReducedMotion()) {
      this.dataset.motionReady = "reduced";
      return;
    }

    const revealTargets = Array.from(this.querySelectorAll<HTMLElement>('[data-motion="reveal"]'));

    revealTargets.forEach((target) => {
      target.dataset.motionState = "pending";

      const stop = inView(
        target,
        () => {
          target.dataset.motionState = "visible";
          animate(
            target,
            {
              opacity: [0, 1],
              transform: ["translateY(16px)", "translateY(0px)"],
            },
            {
              duration: motionDurations.deliberate,
              easing: motionEasings.standard,
            },
          );

          return () => undefined;
        },
        { margin: "0px 0px -12% 0px" },
      );

      this.stopCallbacks.push(stop);
    });

    this.dataset.motionReady = "true";
  }

  disconnectedCallback() {
    this.stopCallbacks.forEach((stop) => stop());
    this.stopCallbacks = [];
  }
}

if (!customElements.get("portfolio-motion-root")) {
  customElements.define("portfolio-motion-root", PortfolioMotionRoot);
}
