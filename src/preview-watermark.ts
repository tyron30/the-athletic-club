// PREVIEW WATERMARK (pending purchase).
// ON by default. To turn OFF: set VITE_PREVIEW_MODE=false (Vercel > Settings > Environment Variables), then redeploy.
// Optional: VITE_PREVIEW_CONTACT="Prepared by Your Name * 09xx xxx xxxx" shows your contact in the badge.
const env: any = (import.meta as any).env ?? {};
const ON = String(env.VITE_PREVIEW_MODE ?? "true").toLowerCase() !== "false";
const TEXT = "DESIGN PREVIEW \u2022 PENDING PURCHASE";
const CONTACT: string = env.VITE_PREVIEW_CONTACT ?? "";

if (ON && typeof document !== "undefined") {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='440' height='260'><text x='220' y='130' text-anchor='middle' transform='rotate(-24 220 130)' font-family='Arial,sans-serif' font-weight='700' font-size='17' letter-spacing='3' fill='#888' fill-opacity='.22'>" +
    TEXT + "</text></svg>";
  let wm: HTMLDivElement | null = null;
  let bd: HTMLDivElement | null = null;

  const mk = () => {
    wm = document.createElement("div");
    wm.id = "pv-wm";
    wm.setAttribute("aria-hidden", "true");
    wm.style.cssText =
      'position:fixed;inset:0;z-index:2147483000;pointer-events:none;background:url("data:image/svg+xml,' +
      encodeURIComponent(svg) + '")';

    bd = document.createElement("div");
    bd.id = "pv-badge";
    bd.setAttribute("aria-hidden", "true");
    bd.style.cssText =
      "position:fixed;left:12px;bottom:12px;z-index:2147483001;pointer-events:none;background:#000;color:#FFD60A;border:1px solid #FFD60A;font:700 11px/1.4 Inter,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;padding:8px 12px;max-width:250px";
    const a = document.createElement("div");
    a.textContent = "Design preview";
    const b = document.createElement("div");
    b.style.cssText = "color:#fff;font-weight:500;letter-spacing:.04em;text-transform:none";
    b.textContent = "Not for public use until purchased." + (CONTACT ? " " + CONTACT : "");
    bd.append(a, b);

    document.body.append(wm, bd);
  };

  const start = () => {
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex,nofollow";
    document.head.appendChild(m);
    mk();
    new MutationObserver(() => {
      if (!document.getElementById("pv-wm") || !document.getElementById("pv-badge")) {
        wm?.remove();
        bd?.remove();
        mk();
      }
    }).observe(document.body, { childList: true });
  };

  if (document.body) start();
  else addEventListener("DOMContentLoaded", start);
}
export {};
