import type { PropsWithChildren } from "react";
import { getMotionIntensity } from "../../lib/motion";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface DeviceMotionProps extends PropsWithChildren {
  className?: string;
}

export default function DeviceMotion({ children, className = "" }: DeviceMotionProps) {
  const deviceType = useDeviceType();
  const isReducedMotion = useReducedMotion();
  const motionIntensity = isReducedMotion ? "none" : getMotionIntensity(deviceType);

  return (
    <div className={className} data-device={deviceType} data-motion-intensity={motionIntensity}>
      {children}
    </div>
  );
}
