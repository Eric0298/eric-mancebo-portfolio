import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const HOST = "127.0.0.1";
const VIEWPORTS = [
  [320, 568],
  [360, 640],
  [375, 667],
  [390, 844],
  [414, 896],
  [430, 932],
  [768, 1024],
  [820, 1180],
  [1024, 768],
  [1280, 720],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
  [390, 560],
];

const STRESS_VIEWPORTS = new Set(["390x844", "390x560", "1366x768"]);
const REDUCED_MOTION = process.env.REDUCED_MOTION === "1";
const CAPTURE_SCREENSHOTS = process.env.AUDIT_SCREENSHOTS === "1";
const QUICK_AUDIT = process.env.AUDIT_QUICK === "1";
const chromePath =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.on("error", reject);
    server.listen(0, HOST, () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitFor(url, timeout = 20_000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch (error) {
      lastError = error;
    }
    await delay(100);
  }
  throw lastError || new Error(`Timed out waiting for ${url}`);
}

async function stopProcess(child) {
  if (!child || child.exitCode !== null) return;
  const exited = new Promise((resolve) => child.once("exit", resolve));
  child.kill();
  await Promise.race([exited, delay(2_000)]);
}

class CdpClient {
  constructor(url) {
    this.url = url;
    this.id = 0;
    this.pending = new Map();
    this.listeners = new Map();
  }

  async connect() {
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }

      const listeners = this.listeners.get(message.method) || [];
      for (const listener of listeners) listener(message.params);
    });
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, 20_000);
      this.pending.set(id, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  once(method, timeout = 20_000) {
    return new Promise((resolve, reject) => {
      const listeners = this.listeners.get(method) || [];
      const timer = setTimeout(() => {
        this.listeners.set(
          method,
          listeners.filter((item) => item !== done),
        );
        reject(new Error(`CDP event timeout: ${method}`));
      }, timeout);
      const done = (params) => {
        clearTimeout(timer);
        this.listeners.set(
          method,
          listeners.filter((item) => item !== done),
        );
        resolve(params);
      };
      listeners.push(done);
      this.listeners.set(method, listeners);
    });
  }

  close() {
    this.socket?.close();
  }
}

function evaluate(client, expression, awaitPromise = true) {
  return client
    .send("Runtime.evaluate", {
      expression,
      awaitPromise,
      returnByValue: true,
      userGesture: true,
    })
    .then((result) => {
      if (result.exceptionDetails) {
        throw new Error(
          result.exceptionDetails.text || "Browser evaluation failed",
        );
      }
      return result.result.value;
    });
}

const instrumentation = `
  (() => {
    window.__scrollAudit = { longTasks: [], layoutShifts: [], errors: [], frames: [] };
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__scrollAudit.longTasks.push({ start: entry.startTime, duration: entry.duration });
        }
      }).observe({ type: "longtask", buffered: true });
    } catch {}
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__scrollAudit.layoutShifts.push(entry.value);
        }
      }).observe({ type: "layout-shift", buffered: true });
    } catch {}
    addEventListener("error", (event) => window.__scrollAudit.errors.push(String(event.error || event.message)));
    addEventListener("unhandledrejection", (event) => window.__scrollAudit.errors.push(String(event.reason)));
  })();
`;

const pageMetrics = `
  (() => {
    const root = document.documentElement;
    const body = document.body;
    const rails = [...document.querySelectorAll("[data-horizontal-rail]")];
    const stackCells = [...document.querySelectorAll("#stack .stack__grid:not(.stack__grid--ai) .stack__cell")];
    const firstStackTop = stackCells[0]?.getBoundingClientRect().top;
    const overflow = [...body.querySelectorAll("*")].flatMap((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return [];
      if (rect.left >= -1 && rect.right <= innerWidth + 1) return [];
      if (element.closest("[data-horizontal-rail], .hero")) return [];
      let ancestor = element.parentElement;
      while (ancestor && ancestor !== body) {
        const style = getComputedStyle(ancestor);
        if (["hidden", "clip", "auto", "scroll"].includes(style.overflowX)) return [];
        ancestor = ancestor.parentElement;
      }
      return [{
        tag: element.tagName.toLowerCase(),
        className: String(element.className || "").slice(0, 100),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
      }];
    }).slice(0, 8);
    const sections = [...document.querySelectorAll("main > section")].map((section) => ({
      id: section.id,
      height: Math.round(section.getBoundingClientRect().height),
    }));
    return {
      viewport: [innerWidth, innerHeight],
      document: {
        clientWidth: root.clientWidth,
        scrollWidth: root.scrollWidth,
        bodyScrollWidth: body.scrollWidth,
        scrollHeight: root.scrollHeight,
        horizontalScroll: root.scrollWidth > root.clientWidth + 1,
      },
      sections,
      overflow,
      rails: rails.map((rail) => ({
        id: rail.closest("section")?.id || "unknown",
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        scrollLeft: Math.round(rail.scrollLeft),
        tabIndex: rail.tabIndex,
        label: rail.getAttribute("aria-label"),
      })),
      stackColumns: stackCells.filter((cell) => Math.abs(cell.getBoundingClientRect().top - firstStackTop) < 2).length,
      activeAnimations: document.getAnimations().filter((animation) => animation.playState === "running").length,
      motionReady: root.classList.contains("motion-ready"),
    };
  })()
`;

async function navigate(client, url) {
  const loaded = client.once("Page.loadEventFired");
  await client.send("Page.navigate", { url });
  await loaded;
  await evaluate(
    client,
    `Promise.race([
    Promise.all([
      document.fonts?.ready || Promise.resolve(),
      new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    ]),
    new Promise((resolve) => setTimeout(resolve, 3000))
  ])`,
  );
}

async function runWheelStress(client, width, height) {
  await evaluate(
    client,
    `
    (() => {
      window.scrollTo(0, 0);
      window.__scrollAudit.frames = [];
      let last = performance.now();
      let active = true;
      window.__scrollAudit.stopFrames = () => { active = false; };
      function frame(now) {
        window.__scrollAudit.frames.push(now - last);
        last = now;
        if (active) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })()
  `,
  );

  for (let i = 0; i < 150; i += 1) {
    const direction = Math.floor(i / 25) % 2 === 0 ? 1 : -1;
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseWheel",
      x: Math.round(width / 2),
      y: Math.round(height / 2),
      deltaX: i % 17 === 0 ? direction * 90 : 0,
      deltaY: direction * (i % 9 === 0 ? 520 : 150),
    });
    await delay(7);
  }
  await delay(900);
  return evaluate(
    client,
    `
    (() => {
      window.__scrollAudit.stopFrames?.();
      const frames = window.__scrollAudit.frames.slice(2);
      const sorted = [...frames].sort((a, b) => a - b);
      const percentile = (p) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] || 0;
      const longTasks = window.__scrollAudit.longTasks;
      return {
        sampleCount: frames.length,
        p95FrameMs: Number(percentile(0.95).toFixed(2)),
        maxFrameMs: Number(Math.max(0, ...frames).toFixed(2)),
        slowFrames: frames.filter((value) => value > 24).length,
        scrollY: Math.round(scrollY),
        longTaskCount: longTasks.length,
        maxLongTaskMs: Math.max(0, ...longTasks.map((entry) => entry.duration)),
        totalLongTaskMs: longTasks.reduce((sum, entry) => sum + entry.duration, 0),
        cls: Number(window.__scrollAudit.layoutShifts.reduce((sum, value) => sum + value, 0).toFixed(4)),
        errors: window.__scrollAudit.errors,
      };
    })()
  `,
  );
}

async function runTouchIntentChecks(client) {
  const target = await evaluate(
    client,
    `
    (() => {
      const rail = document.querySelector("#experience [data-horizontal-rail]");
      const host = rail || document.querySelector("#experience");
      if (!host) return null;
      host.scrollIntoView({ block: "center" });
      const rect = host.getBoundingClientRect();
      return {
        x1: Math.round(Math.min(innerWidth - 24, rect.right - 24)),
        x2: Math.round(Math.max(24, rect.left + 24)),
        y: Math.round(Math.max(40, Math.min(innerHeight - 40, rect.top + Math.min(rect.height / 2, 220)))),
        viewportHeight: innerHeight,
      };
    })()
  `,
  );
  if (!target) return null;

  const before = await evaluate(
    client,
    `({ y: Math.round(scrollY), x: Math.round(document.querySelector("#experience [data-horizontal-rail]")?.scrollLeft || 0) })`,
  );
  await client.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x: target.x1, y: target.y }],
  });
  for (let i = 1; i <= 12; i += 1) {
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [
        {
          x: Math.round(target.x1 + ((target.x2 - target.x1) * i) / 12),
          y: target.y + Math.round(i * 0.35),
        },
      ],
    });
    await delay(10);
  }
  await client.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await delay(500);
  const afterHorizontal = await evaluate(
    client,
    `({ y: Math.round(scrollY), x: Math.round(document.querySelector("#experience [data-horizontal-rail]")?.scrollLeft || 0) })`,
  );

  await client.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [
      {
        x: Math.round((target.x1 + target.x2) / 2),
        y: Math.min(target.viewportHeight - 40, target.y + 120),
      },
    ],
  });
  for (let i = 1; i <= 10; i += 1) {
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [
        {
          x: Math.round((target.x1 + target.x2) / 2 + i * 0.25),
          y: Math.min(target.viewportHeight - 30, target.y + 120) - i * 18,
        },
      ],
    });
    await delay(10);
  }
  await client.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await delay(500);
  const afterVertical = await evaluate(
    client,
    `({ y: Math.round(scrollY), x: Math.round(document.querySelector("#experience [data-horizontal-rail]")?.scrollLeft || 0) })`,
  );
  return { before, afterHorizontal, afterVertical };
}

async function railPoint(client) {
  return evaluate(
    client,
    `
    (() => {
      const rail = document.querySelector("#experience [data-horizontal-rail]");
      if (!rail) return null;
      const rect = rail.getBoundingClientRect();
      return {
        x: Math.round(Math.max(30, Math.min(innerWidth - 30, rect.left + rect.width / 2))),
        y: Math.round(Math.max(50, Math.min(innerHeight - 50, rect.top + rect.height / 2))),
      };
    })()
  `,
  );
}

async function runDesktopRailChecks(client) {
  await evaluate(
    client,
    `
    (() => {
      const rail = document.querySelector("#experience [data-horizontal-rail]");
      rail?.scrollTo({ left: 0, behavior: "auto" });
      document.querySelector("#experience")?.scrollIntoView({ block: "center" });
    })()
  `,
  );
  await delay(250);
  const read = () =>
    evaluate(
      client,
      `({
    y: Math.round(scrollY),
    x: Math.round(document.querySelector("#experience [data-horizontal-rail]")?.scrollLeft || 0)
  })`,
    );
  const before = await read();
  let point = await railPoint(client);

  await client.send("Input.dispatchMouseEvent", {
    type: "mouseWheel",
    x: point.x,
    y: point.y,
    deltaX: 0,
    deltaY: 320,
  });
  await delay(300);
  const afterVertical = await read();

  await evaluate(
    client,
    `document.querySelector("#experience")?.scrollIntoView({ block: "center" })`,
  );
  await delay(150);
  point = await railPoint(client);
  const beforeShift = await read();
  await client.send("Input.dispatchMouseEvent", {
    type: "mouseWheel",
    x: point.x,
    y: point.y,
    deltaX: 0,
    deltaY: 360,
    modifiers: 8,
  });
  await delay(300);
  const afterShift = await read();

  point = await railPoint(client);
  const beforeDrag = await read();
  await client.send("Input.dispatchMouseEvent", {
    type: "mousePressed",
    x: point.x + 120,
    y: point.y,
    button: "left",
    buttons: 1,
    clickCount: 1,
  });
  for (let i = 1; i <= 10; i += 1) {
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: point.x + 120 - i * 24,
      y: point.y + i * 0.2,
      button: "left",
      buttons: 1,
    });
    await delay(12);
  }
  await client.send("Input.dispatchMouseEvent", {
    type: "mouseReleased",
    x: point.x - 120,
    y: point.y + 2,
    button: "left",
    buttons: 0,
    clickCount: 1,
  });
  await delay(450);
  const afterDrag = await read();

  await evaluate(
    client,
    `document.querySelector("#experience [data-horizontal-rail]")?.focus()`,
  );
  const beforeKeyboard = await read();
  await client.send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
    nativeVirtualKeyCode: 39,
  });
  await client.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
    nativeVirtualKeyCode: 39,
  });
  await delay(500);
  const afterKeyboard = await read();

  return {
    before,
    afterVertical,
    beforeShift,
    afterShift,
    beforeDrag,
    afterDrag,
    beforeKeyboard,
    afterKeyboard,
  };
}

async function captureSections(client, key) {
  const directory = join(tmpdir(), "portfolio-scroll-audit-screenshots");
  await mkdir(directory, { recursive: true });
  const paths = [];
  for (const id of ["about", "experience", "stack"]) {
    await evaluate(
      client,
      `document.getElementById(${JSON.stringify(id)})?.scrollIntoView({ block: "start" })`,
    );
    await delay(300);
    const screenshot = await client.send("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: false,
    });
    const path = join(directory, `${key}-${id}.png`);
    await writeFile(path, Buffer.from(screenshot.data, "base64"));
    paths.push(path);
  }
  return paths;
}

async function main() {
  const serverPort = await freePort();
  const debugPort = await freePort();
  const profile = await mkdtemp(join(tmpdir(), "portfolio-scroll-audit-"));
  const astroCli = join(
    process.cwd(),
    "node_modules",
    "astro",
    "bin",
    "astro.mjs",
  );
  const server = spawn(
    process.execPath,
    [astroCli, "preview", "--host", HOST, "--port", String(serverPort)],
    {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    },
  );
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${profile}`,
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-default-apps",
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  let client;
  try {
    const baseUrl = `http://${HOST}:${serverPort}`;
    await waitFor(baseUrl);
    const version = await (
      await waitFor(`http://${HOST}:${debugPort}/json/version`)
    ).json();
    const targets = await (
      await fetch(`http://${HOST}:${debugPort}/json/list`)
    ).json();
    const target = targets.find((item) => item.type === "page");
    if (!target) throw new Error(`No Chrome page target (${version.Browser})`);

    client = new CdpClient(target.webSocketDebuggerUrl);
    await client.connect();
    await Promise.all([
      client.send("Page.enable"),
      client.send("Runtime.enable"),
      client.send("Log.enable"),
    ]);
    await client.send("Page.addScriptToEvaluateOnNewDocument", {
      source: instrumentation,
    });
    await client.send("Emulation.setEmulatedMedia", {
      features: [
        {
          name: "prefers-reduced-motion",
          value: REDUCED_MOTION ? "reduce" : "no-preference",
        },
      ],
    });

    const results = [];
    const activeViewports =
      REDUCED_MOTION || CAPTURE_SCREENSHOTS || QUICK_AUDIT
        ? [
            [390, 844],
            [1366, 768],
          ]
        : VIEWPORTS;
    for (const [width, height] of activeViewports) {
      const mobile = width <= 430;
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: mobile ? 2 : 1,
        mobile,
      });
      await client.send("Emulation.setTouchEmulationEnabled", {
        enabled: mobile,
        maxTouchPoints: mobile ? 5 : 1,
      });
      await navigate(client, baseUrl);
      const metrics = await evaluate(client, pageMetrics);
      const key = `${width}x${height}`;
      const screenshots = CAPTURE_SCREENSHOTS
        ? await captureSections(client, key)
        : null;
      const stress =
        !CAPTURE_SCREENSHOTS && STRESS_VIEWPORTS.has(key)
          ? await runWheelStress(client, width, height)
          : null;
      const hasHorizontalRails = metrics.rails.length > 0;
      const touch =
        !CAPTURE_SCREENSHOTS && hasHorizontalRails && key === "390x844"
          ? await runTouchIntentChecks(client)
          : null;
      const desktopRail =
        !CAPTURE_SCREENSHOTS && hasHorizontalRails && key === "1366x768"
          ? await runDesktopRailChecks(client)
          : null;
      results.push({ key, metrics, screenshots, stress, touch, desktopRail });
    }

    const failures = results.flatMap(
      ({ key, metrics, stress, touch, desktopRail }) => {
        const items = [];
        if (metrics.document.horizontalScroll)
          items.push(`${key}: document horizontal overflow`);
        if (metrics.overflow.length)
          items.push(
            `${key}: ${metrics.overflow.length} uncontained overflowing elements`,
          );
        if (!metrics.motionReady)
          items.push(`${key}: motion-ready was not reached`);
        if (REDUCED_MOTION && metrics.activeAnimations > 0)
          items.push(`${key}: active animations with reduced motion`);
        if (stress?.errors?.length)
          items.push(`${key}: ${stress.errors.length} browser errors`);
        if (touch && touch.afterHorizontal.x - touch.before.x < 100) {
          items.push(`${key}: horizontal touch swipe did not advance rail`);
        }
        if (touch && touch.afterVertical.y - touch.afterHorizontal.y < 100) {
          items.push(`${key}: vertical touch swipe was captured by rail`);
        }
        if (desktopRail) {
          if (desktopRail.afterVertical.y - desktopRail.before.y < 100) {
            items.push(`${key}: vertical wheel was captured by rail`);
          }
          if (desktopRail.afterShift.x - desktopRail.beforeShift.x < 50) {
            items.push(`${key}: Shift + wheel did not advance rail`);
          }
          if (desktopRail.afterDrag.x - desktopRail.beforeDrag.x < 50) {
            items.push(`${key}: mouse drag did not advance rail`);
          }
          if (desktopRail.afterKeyboard.x - desktopRail.beforeKeyboard.x < 50) {
            items.push(`${key}: keyboard did not advance rail`);
          }
        }
        return items;
      },
    );

    console.log(
      JSON.stringify({ ok: failures.length === 0, failures, results }, null, 2),
    );
    process.exitCode = failures.length ? 1 : 0;
  } finally {
    client?.close();
    await Promise.all([stopProcess(server), stopProcess(chrome)]);
    for (let attempt = 0; attempt < 5; attempt += 1) {
      try {
        await rm(profile, { recursive: true, force: true });
        break;
      } catch (error) {
        if (attempt === 4) throw error;
        await delay(250 * (attempt + 1));
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
