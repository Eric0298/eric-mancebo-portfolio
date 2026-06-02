import { useEffect, useState } from "react";
import { getDeviceTypeFromWidth, type DeviceType } from "../lib/responsive";

export function useDeviceType(initialDeviceType: DeviceType = "desktop") {
  const [deviceType, setDeviceType] = useState<DeviceType>(initialDeviceType);

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(getDeviceTypeFromWidth(window.innerWidth));
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
}
