const TIMEZONE = "Europe/Madrid";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: TIMEZONE,
  }).format(date);
}

export function initClock() {
  const targets = document.querySelectorAll<HTMLElement>("[data-clock]");
  if (!targets.length) return;

  const tick = () => {
    const value = formatTime(new Date());
    targets.forEach((el) => {
      el.textContent = value;
    });
  };

  tick();
  // Align to the next full second to look precise
  const now = new Date();
  const drift = 1000 - now.getMilliseconds();
  window.setTimeout(() => {
    tick();
    window.setInterval(tick, 1000);
  }, drift);
}
