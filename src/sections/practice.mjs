import { learningExperience, media, toolGroups, tools } from "../content.mjs";
import { esc, icon, pad2, photo, sectionHeader, toolMark } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ learning experience */
const expImages = { live: media.live, labs: media.labs, career: media.career };

const experienceSection = `
<section id="experience" class="section-y bg-white">
  <div class="container-x">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Learning experience", title: "Live sessions, integrated labs and career preparation" })}
      </div>
      <p data-reveal data-delay="0.1" class="lede text-muted lg:col-span-5">Career-focused, industry-ready training, with expert-led mentorship by industry professionals at every stage.</p>
    </div>
    <div data-reveal-group data-stagger="0.1" class="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-3">
      ${learningExperience
        .map(
          (item, i) => `<article data-reveal-item class="group flex flex-col overflow-hidden rounded-[20px] bg-surface ring-1 ring-line transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-lift">
        <div class="relative aspect-[4/3] overflow-hidden">
          ${photo(expImages[item.image], { sizes: "(min-width: 1024px) 30vw, 100vw", ratio: 4 / 3, widths: [480, 720, 960], cls: "absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]" })}
          <span class="absolute left-4 top-4 rounded-full bg-navy-950/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">${pad2(i + 1)}</span>
        </div>
        <div class="flex flex-1 flex-col p-5 sm:p-6">
          <p class="eyebrow text-accent">${esc(item.eyebrow)}</p>
          <h3 class="mt-3 font-display text-[16px] font-semibold leading-snug tracking-[-0.02em] text-ink">${esc(item.title)}</h3>
          <p class="mt-3 text-[14px] leading-relaxed text-muted">${esc(item.text)}</p>
          <ul class="mt-5 space-y-2">
            ${item.points.map((p) => `<li class="flex items-start gap-2.5 text-[13.5px] text-ink/85"><span class="mt-[3px] inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent">${icon("check", "size-3", 'stroke-width="3"')}</span>${esc(p)}</li>`).join("\n            ")}
          </ul>
        </div>
      </article>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ tools */
const groupsFor = (key) => toolGroups.filter((g) => g.tools.includes(key)).map((g) => g.id).join(" ");
const filterBtn = (id, label, pressed) =>
  `<button type="button" data-tool-filter="${id}" aria-pressed="${pressed}" class="filter-btn rounded-full border border-line-strong bg-white px-4 py-2 text-[13.5px] font-medium text-ink transition-all duration-300 hover:border-ink">${esc(label)}</button>`;

const toolsSection = `
<section id="tools" class="section-y relative overflow-hidden bg-surface">
  <div class="container-x">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({
          eyebrow: "Tools & technologies",
          title: "Learn with industry-relevant technologies",
          description: "Tools &amp; Technologies Covered — every platform below is part of the programme, from spreadsheets and SQL to Python, BI tools and Gen AI.",
        })}
      </div>
      <div data-reveal data-delay="0.1" role="group" aria-label="Filter tools by category" class="flex flex-wrap gap-2 lg:col-span-12">
        ${filterBtn("all", "All", true)}
        ${toolGroups.map((g) => filterBtn(g.id, g.label, false)).join("\n        ")}
      </div>
    </div>

    <ul data-reveal-group data-stagger="0.035" class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      ${tools
        .map(
          (t) => `<li data-reveal-item data-tool data-cat="${groupsFor(t.icon)}" class="group flex flex-col items-center gap-4 rounded-[16px] bg-white p-5 text-center ring-1 ring-line hover:-translate-y-1 hover:shadow-lift hover:ring-accent/50">
        <span class="inline-flex size-12 items-center justify-center rounded-2xl bg-surface p-3 transition-transform duration-500 ease-out-expo group-hover:scale-105">${toolMark(t.icon)}</span>
        <span>
          <span class="block font-display text-[14px] font-semibold text-ink">${esc(t.short)}</span>
          ${t.short !== t.name ? `<span class="mt-0.5 block text-[11.5px] leading-snug text-muted-2">${esc(t.name)}</span>` : ""}
        </span>
      </li>`,
        )
        .join("\n      ")}
    </ul>
  </div>
</section>`;

export const practiceBlock = `${experienceSection}${toolsSection}`;
