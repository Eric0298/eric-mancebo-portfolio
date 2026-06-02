import { useMemo } from "react";
import { useDeviceType } from "./useDeviceType";
import { useReducedMotion } from "./useReducedMotion";
import { useScrollProgress } from "./useScrollProgress";

export function useParallax(depth = 1) {
  const deviceType = useDeviceType();
  const isReducedMotion = useReducedMotion();
  const progress = useScrollProgress();

  return useMemo(() => {
    if (isReducedMotion || deviceType === "mobile") {
      return {
        transform: "translate3d(0, 0, 0)",
      };
    }

    const multiplier = deviceType === "tablet" ? 12 : 24;
    const offset = (progress - 0.5) * multiplier * depth;

    return {
      transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
    };
  }, [depth, deviceType, isReducedMotion, progress]);
}
