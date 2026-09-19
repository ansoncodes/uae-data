import { nav, site } from "../content.mjs";
import { button, esc, icon, logoImg, pad2 } from "../lib/ui.mjs";

/** Fixed header: clear over the light hero, solid white once scrolled (see .site-header in styles.css). */
export const header = `
<header data-header class="site-header fixed inset-x-0 top-0 z-50 border-b border-transparent">
  <div class="header-inner container-x flex items-center justify-between gap-6">
    <a href="#top" aria-label="SMEC Technologies – home" class="inline-flex shrink-0 items-center">${logoImg("dark", 30, 'fetchpriority="high"')}</a>

    <nav aria-label="Primary" class="hidden items-center gap-0.5 lg:flex">
      ${nav
        .map(
          (n) =>
            `<a href="${n.href}" data-nav-link="${n.href.slice(1)}" class="nav-link relative whitespace-nowrap rounded-full px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-300">${esc(n.label)}<span class="nav-dot absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" aria-hidden="true"></span></a>`,
        )
        .join("\n      ")}
    </nav>

    <div class="flex items-center gap-2">
      <a href="${site.phoneHref}" class="nav-link hidden items-center gap-2 rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors duration-300 xl:inline-flex">${icon("phone", "size-3.5")} ${esc(site.phone)}</a>
      <div class="hidden sm:block">${button({ href: "#enquire", label: "Enquire Now", size: "sm" })}</div>
      <button type="button" data-menu-open aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-surface-2 lg:hidden">${icon("menu", "size-5")}</button>
    </div>
  </div>
</header>

<div id="mobile-menu" data-mobile-menu class="fixed inset-0 z-[60] flex flex-col bg-navy-950 text-white" role="dialog" aria-modal="true" aria-label="Menu" hidden>
  <div class="bg-navy-glow absolute inset-0" aria-hidden="true"></div>
  <div class="container-x relative flex h-[64px] items-center justify-between">
    <a href="#top" aria-label="SMEC Technologies – home" class="inline-flex shrink-0 items-center">${logoImg("light", 34)}</a>
    <button type="button" data-menu-close aria-label="Close menu" class="inline-flex size-9 items-center justify-center rounded-full text-white hover:bg-white/10">${icon("x", "size-5")}</button>
  </div>
  <nav aria-label="Mobile" class="container-x relative mt-4 flex flex-1 flex-col overflow-y-auto">
    ${nav
      .map(
        (n, i) => `<a href="${n.href}" data-menu-item class="flex items-center justify-between border-b border-white/10 py-4 font-display text-[19px] font-semibold tracking-[-0.03em]">
      <span>${esc(n.label)}</span><span class="font-mono text-[11px] text-white/40">${pad2(i + 1)}</span>
    </a>`,
      )
      .join("\n    ")}
  </nav>
  <div data-menu-item class="container-x relative flex flex-col gap-3 pb-8 pt-5">
    ${button({ href: "#enquire", label: "Enquire Now", size: "lg", cls: "w-full" })}
    <div class="mt-2 flex items-center justify-between text-sm text-white/65">
      <a href="${site.phoneHref}" class="hover:text-white">${esc(site.phone)}</a>
      <a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" class="hover:text-white">WhatsApp</a>
      <a href="mailto:${site.email}" class="hover:text-white">Email</a>
    </div>
  </div>
</div>`;
