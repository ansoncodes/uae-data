import { course, hero, infoBar, marqueeWords } from "../content.mjs";
import { button, esc, flagUae, icon, marquee } from "../lib/ui.mjs";
import { enquiryFormCard } from "./convert.mjs";

const heroSection = `
<section id="top" data-hero class="hero-wash relative isolate overflow-hidden">
  <svg class="pointer-events-none absolute inset-x-0 top-[30%] -z-10 h-[50%] w-full opacity-40 [mask-image:linear-gradient(to_right,transparent_38%,black_62%)]" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="hero-line" x1="0" x2="1"><stop offset="0" stop-color="#0071bc" stop-opacity="0"/><stop offset=".55" stop-color="#0071bc" stop-opacity=".6"/><stop offset="1" stop-color="#2e3192" stop-opacity="0"/></linearGradient></defs>
    <path d="M0 300 C 180 280 260 180 420 210 S 700 320 860 220 S 1140 80 1440 120" fill="none" stroke="url(#hero-line)" stroke-width="1.5"/>
    <path d="M0 350 C 200 336 300 262 480 272 S 760 352 940 282 S 1200 170 1440 196" fill="none" stroke="url(#hero-line)" stroke-width="1" opacity=".6"/>
  </svg>

  <div class="container-x relative grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-12 lg:pb-20 lg:pt-32 xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-20">
    <div>
      <p data-hero-fade class="inline-flex items-center gap-3 rounded-full bg-white/85 py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_-14px_rgba(11,16,38,0.3)] ring-1 ring-line backdrop-blur">
        <span class="rounded-full bg-ink px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white">${esc(hero.eyebrow)}</span>
        <span class="text-line-strong" aria-hidden="true">|</span>
        <span class="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">${flagUae("h-[10px] w-[15px]")} UAE</span>
      </p>

      <h1 class="mt-7 font-display text-[clamp(2.3rem,4vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-ink">
        ${hero.titleLines
          .map(
            (line) =>
              `<span class="-mb-[0.1em] block overflow-hidden pb-[0.1em]"><span data-hero-line class="block ${line === hero.highlight ? "text-gradient-deep" : ""}">${esc(line)}</span></span>`,
          )
          .join("\n        ")}
      </h1>

      <p data-hero-fade class="mt-7 max-w-xl font-display text-[17px] font-semibold leading-snug text-ink sm:text-[17px]">${esc(course.title)}</p>
      <p data-hero-fade class="mt-3 max-w-xl text-[15.5px] leading-[1.7] text-muted sm:text-[16.5px]">${esc(hero.valueProp)}</p>

      <div data-hero-fade class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        ${button({ href: "#hero-form", label: "Enquire Now", size: "lg", attrs: "data-focus-form" })}
        ${button({ href: "#curriculum", label: "View Curriculum", variant: "outline", size: "lg" })}
      </div>

      <ul data-hero-fade class="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px] font-medium text-muted" aria-label="Recognition">
        <li class="inline-flex items-center gap-2">${icon("award", "size-4 text-accent")} ${esc(hero.proof[0])}</li>
        <li class="inline-flex items-center gap-2">${icon("shield-check", "size-4 text-accent")} ${esc(hero.proof[1])}</li>
      </ul>
    </div>

    <div data-hero-fade data-hero-form class="w-full max-w-[560px] lg:max-w-none">
      ${enquiryFormCard("hero", "hero-demo", { id: "hero-form" })}
    </div>
  </div>
</section>`;

/* Animated info-bar icons (CSS keyframes in styles.css, disabled for reduced motion). */
const INFO_ICONS = {
  clock: `<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line class="ico-hand" x1="12" y1="12" x2="12" y2="6.5"/><line x1="12" y1="12" x2="15.6" y2="13.6"/></svg>`,
  cap: `<span class="ico-bob inline-flex">${icon("graduation-cap", "size-6", 'stroke-width="1.8"')}</span>`,
  badge: `<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8l2.4 1.7 2.9-.2.9 2.8 2.4 1.7-1 2.7 1 2.7-2.4 1.7-.9 2.8-2.9-.2L12 21.2l-2.4-1.7-2.9.2-.9-2.8-2.4-1.7 1-2.7-1-2.7 2.4-1.7.9-2.8 2.9.2z"/><path class="ico-draw" d="M8.5 12.2l2.4 2.4 4.6-4.8"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><circle class="ico-ping" cx="12" cy="10" r="3"/><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.4" fill="currentColor" stroke="none"/></svg>`,
};

const INFO_BORDERS = [
  "border-b border-line sm:border-r lg:border-b-0",
  "border-b border-line lg:border-b-0 lg:border-r",
  "border-b border-line sm:border-b-0 sm:border-r",
  "",
];

const infoBarSection = `
<div class="relative z-10 bg-white pt-2">
  <div class="container-x">
    <ul data-hero-fade data-infobar class="-mt-6 grid overflow-hidden rounded-[28px] bg-white text-ink shadow-[0_30px_70px_-40px_rgba(11,16,38,0.4)] ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4" aria-label="Course facts">
      ${infoBar
        .map(
          (f, i) => `<li class="flex items-center gap-4 p-6 sm:p-7 xl:px-9 ${INFO_BORDERS[i] ?? ""}">
        <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent ring-1 ring-accent-100">${INFO_ICONS[f.icon] ?? ""}</span>
        <span class="min-w-0">
          <span class="flex items-center gap-2 font-display text-[16.5px] font-bold uppercase leading-tight tracking-[-0.01em] text-ink xl:text-[17px]">${f.value === "UAE" ? flagUae("h-[12px] w-[18px]") : ""}${esc(f.value)}</span>
          <span class="mt-1 block text-[13px] font-medium leading-snug text-muted">${esc(f.label)}</span>
        </span>
      </li>`,
        )
        .join("\n      ")}
    </ul>
  </div>
</div>`;

const marqueeSection = `
<div class="relative bg-white pb-4 pt-16 sm:pt-20">
  <p class="sr-only">Technologies covered: ${esc(marqueeWords.join(", "))}</p>
  <div aria-hidden="true">
    ${marquee(
      marqueeWords
        .map(
          (w, i) =>
            `<span class="flex items-center gap-10 whitespace-nowrap font-display text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold uppercase leading-none tracking-[-0.035em] ${i % 2 ? "text-outline text-ink/30" : "text-ink"}">${esc(w)}<span class="size-2.5 rotate-45 rounded-[2px] bg-accent" aria-hidden="true"></span></span>`,
        )
        .join(""),
      { gap: "gap-10 pr-10" },
    )}
  </div>
</div>`;

export const heroBlock = `${heroSection}${infoBarSection}${marqueeSection}`;
