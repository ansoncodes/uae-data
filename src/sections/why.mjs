import { about, whySmec } from "../content.mjs";
import { esc, icon, pad2, sectionHeader } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ why smec */
const whySection = `
<section id="why" class="bg-navy-soft section-y relative overflow-hidden text-white">
  <div class="pattern-arabesque absolute inset-0 [mask-image:radial-gradient(55%_45%_at_85%_0%,black,transparent)]" aria-hidden="true"></div>
  <div class="container-x relative">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Why SMEC", title: esc(about.whyLearnHeading), tone: "dark" })}
      </div>
      <p data-reveal data-delay="0.1" class="text-[14.5px] leading-[1.75] text-white/60 lg:col-span-5">${esc(about.whyLearn)}</p>
    </div>

    <div data-reveal-group data-stagger="0.08" class="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
      ${whySmec
        .map(
          (c, i) => `<div data-why-col="${i % 3}" class="${i % 3 === 1 ? "lg:mt-8" : i % 3 === 2 ? "lg:mt-14" : ""}">
        <article data-reveal-item data-spotlight class="spotlight group h-full rounded-[20px] bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-accent/40 sm:p-6 lg:p-7">
          <div class="flex items-start justify-end">
            <span class="inline-flex size-10 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10 transition-all duration-500 ease-out-expo group-hover:bg-accent group-hover:text-white group-hover:ring-accent">${icon(c.icon, "size-5")}</span>
          </div>
          <p class="text-outline -mt-4 font-display text-[44px] font-bold leading-none tracking-[-0.06em] text-white/15 transition-colors duration-500 group-hover:text-accent-300/70" aria-hidden="true">${pad2(i + 1)}</p>
          <h3 class="mt-6 font-display text-[17.5px] font-semibold tracking-[-0.025em] text-white">${esc(c.title)}</h3>
          <p class="mt-3 text-[14px] leading-relaxed text-white/60">${esc(c.text)}</p>
        </article>
      </div>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>`;

export const whyBlock = whySection;
