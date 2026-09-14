/**
 * Shared markup helpers for the page sections in src/sections/.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { toolIcons } from "../tool-icons.mjs";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const pad2 = (n) => String(n).padStart(2, "0");
export const slug = (s) => s.replace(/\W+/g, "-").replace(/^-|-$/g, "").toLowerCase();
export const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

/** Inline a lucide icon as SVG. */
export function icon(name, cls = "size-4", extra = "") {
  let svg = readFileSync(join(ROOT, "node_modules/lucide-static/icons", `${name}.svg`), "utf8");
  svg = svg.replace(/<!--.*?-->\s*/s, "");
  svg = svg.replace(/\s+width="24"/, "").replace(/\s+height="24"/, "");
  svg = svg.replace(/class="[^"]*"/, `class="${cls}" aria-hidden="true"${extra ? " " + extra : ""}`);
  return svg.replace(/\s+/g, " ").replace(/> </g, "><").trim();
}

/** Tool mark from tool-icons.mjs. Gradient ids are made unique so repeated marks never collide. */
let markCount = 0;
export function toolMark(key, cls = "size-full") {
  const svg = toolIcons[key];
  if (!svg) return "";
  const n = ++markCount;
  return svg
    .replace(/class="size-full"/, `class="${cls}"`)
    .replace(/id="(\w+)"/g, `id="$1-${n}"`)
    .replace(/url\(#(\w+)\)/g, `url(#$1-${n})`);
}

/**
 * Photography from Pexels (Pexels License — free for commercial use, no attribution
 * required). Photo ids and alt text live in `media` in src/content.mjs.
 */
export function photo(entry, { sizes, cls = "", ratio = 3 / 2, widths = [640, 960, 1400, 1800], priority = false, attrs = "" }) {
  const src = (w) =>
    `https://images.pexels.com/photos/${entry.id}/pexels-photo-${entry.id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${Math.round(w / ratio)}`;
  const srcset = widths.map((w) => `${src(w)} ${w}w`).join(", ");
  const loading = priority ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"';
  return `<img src="${src(widths[widths.length - 1])}" srcset="${srcset}" sizes="${sizes}" alt="${esc(entry.alt)}" class="${cls}" ${loading} ${attrs}>`;
}

/** UAE flag — a small market/location indicator only. */
export function flagUae(cls = "h-3 w-[18px]") {
  return `<span class="inline-flex shrink-0 overflow-hidden rounded-[3px] align-middle ring-1 ring-black/10 ${cls}"><svg viewBox="0 0 24 16" class="block size-full" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><rect x="6" width="18" height="5.34" fill="#00732F"/><rect x="6" y="10.66" width="18" height="5.34" fill="#000"/><rect width="6" height="16" fill="#EF3340"/></svg></span>`;
}

const LOGO_RATIO = 1043 / 160;
/** Official SMEC lockup. `light` is the white version supplied for dark surfaces. */
export function logoImg(tone, height, attrs = "") {
  const src = tone === "light" ? "assets/brand/smec-logo-white.png" : "assets/brand/smec-logo.png";
  const width = Math.round(height * LOGO_RATIO);
  return `<img src="${src}" alt="SMEC Technologies" width="${width}" height="${height}" style="height:${height}px;width:${width}px" ${attrs}>`;
}

const BTN_BASE =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-[-0.005em] whitespace-nowrap select-none transition-all duration-300 ease-out-expo active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";
const BTN_VARIANTS = {
  primary:
    "bg-accent text-white shadow-[0_12px_28px_-12px_rgba(0,113,188,0.7)] hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_18px_36px_-12px_rgba(46,49,146,0.6)]",
  gradient:
    "bg-gradient-to-r from-brand to-accent text-white shadow-[0_14px_30px_-14px_rgba(46,49,146,0.7)] hover:-translate-y-0.5 hover:from-brand-800 hover:to-brand hover:shadow-[0_18px_36px_-14px_rgba(46,49,146,0.75)]",
  dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-lift",
  outline: "border border-line-strong bg-white text-ink hover:-translate-y-0.5 hover:border-ink hover:shadow-soft",
  "outline-light": "border border-white/25 text-white hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/[0.08]",
  ghost: "text-ink hover:bg-surface-2",
};
const BTN_SIZES = {
  sm: "h-10 px-4 text-[13.5px]",
  md: "h-12 px-5 text-[14.5px]",
  lg: "h-14 px-7 text-[15.5px]",
  form: "h-[52px] px-7 text-[15px]",
};
const ARROW = icon("arrow-right", "size-4 shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1");

export function button({ href, label, variant = "primary", size = "md", arrow = true, cls = "", attrs = "", lead = "", type = "button" }) {
  const classes = [BTN_BASE, BTN_VARIANTS[variant], BTN_SIZES[size], cls].filter(Boolean).join(" ");
  const inner = `${lead}<span data-btn-label>${label}</span>${arrow ? ARROW : ""}`;
  return href
    ? `<a href="${href}" class="${classes}" ${attrs}>${inner}</a>`
    : `<button type="${type}" class="${classes}" ${attrs}>${inner}</button>`;
}

/** Section intro. `title` and `description` are HTML — escape plain text before passing it. */
export function sectionHeader({ eyebrow, title, description = "", tone = "light", align = "left", cls = "", as = "h2", titleCls = "" }) {
  const dark = tone === "dark";
  const center = align === "center";
  return `<div data-reveal class="max-w-3xl ${center ? "mx-auto text-center" : ""} ${cls}">
    <p class="eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${dark ? "text-accent-300" : "text-accent"}"><span class="h-px w-8 ${dark ? "bg-accent-300/60" : "bg-accent/50"}" aria-hidden="true"></span>${esc(eyebrow)}</p>
    <${as} class="h-section mt-5 ${dark ? "text-white" : "text-ink"} ${titleCls}">${title}</${as}>
    ${description ? `<p class="lede mt-6 ${dark ? "text-white/65" : "text-muted"}">${description}</p>` : ""}
  </div>`;
}

/** Infinite horizontal marquee; the duplicate group is hidden from assistive tech. */
export function marquee(items, { reverse = false, gap = "gap-10 pr-10", cls = "" } = {}) {
  return `<div class="relative flex w-full overflow-hidden mask-fade-x ${cls}">
    <div class="flex w-max shrink-0 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}">
      <div class="flex shrink-0 items-center ${gap}">${items}</div>
      <div class="flex shrink-0 items-center ${gap}" aria-hidden="true">${items}</div>
    </div>
  </div>`;
}

/** Count-up number. The real value is in the markup; JS only animates it once it scrolls into view. */
export function counter(value, suffix = "") {
  return `<span data-counter="${value}" aria-label="${fmt(value)}${esc(suffix)}"><span class="tabular-nums" aria-hidden="true">${fmt(value)}</span><span aria-hidden="true">${esc(suffix)}</span></span>`;
}

/** Topic count for a curriculum module (unit topics + group headings + group topics). */
export function topicCount(m) {
  return m.units.reduce((n, u) => {
    const t = u.topics?.length ?? 0;
    const g = u.groups?.reduce((s, gr) => s + 1 + gr.topics.length, 0) ?? 0;
    return n + t + g;
  }, 0);
}
