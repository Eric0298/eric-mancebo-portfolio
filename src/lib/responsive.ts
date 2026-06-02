export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export type DeviceType = "mobile" | "tablet" | "desktop";

export function getDeviceTypeFromWidth(width: number): DeviceType {
  if (width >= breakpoints.desktop) {
    return "desktop";
  }

  if (width >= breakpoints.tablet) {
    return "tablet";
  }

  return "mobile";
}
