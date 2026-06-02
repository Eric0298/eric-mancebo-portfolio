export type MotionIntensity = "none" | "reduced" | "standard" | "expressive";

export const motionDurations = {
  quick: 0.18,
  standard: 0.36,
  deliberate: 0.56,
} as const;

export const motionEasings = {
  standard: [0.22, 1, 0.36, 1],
  subtle: [0.16, 1, 0.3, 1],
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getMotionIntensity(deviceType: "mobile" | "tablet" | "desktop"): MotionIntensity {
  if (prefersReducedMotion()) {
    return "none";
  }

  if (deviceType === "mobile") {
    return "reduced";
  }

  if (deviceType === "tablet") {
    return "standard";
  }

  return "expressive";
}
