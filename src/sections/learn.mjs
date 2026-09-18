import { course, curriculum, learnJourney, moduleShortTitles } from "../content.mjs";
import { button, esc, icon, pad2, sectionHeader, slug, toolMark, topicCount } from "../lib/ui.mjs";

const check = (cls = "text-accent") =>
  `<span class="mt-[3px] inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-accent-50 ${cls}">${icon("check", "size-3", 'stroke-width="3"')}</span>`;

/* ------------------------------------------------------------------ what you will learn */
const stages = learnJourney.stages;

const journey = `
<section id="learn" class="section-y relative bg-surface">
  <div class="container-x">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "What you will learn", title: "From raw data to AI&#8209;powered decisions" })}
      </div>
      <p data-reveal data-delay="0.1" class="lede text-muted lg:col-span-5">By the end of the course you will collect, analyse, visualise, predict and automate — the complete analytics &amp; ML journey, from data to prediction.</p>
    </div>

    <div data-journey class="relative mt-16 lg:mt-24">
      <div class="absolute left-[10%] right-[10%] top-7 hidden h-px bg-line-strong lg:block" aria-hidden="true">
        <div data-journey-line data-draw-x class="h-full bg-gradient-to-r from-brand via-accent to-brand"></div>
      </div>
      <div class="absolute bottom-8 left-7 top-8 w-px bg-line-strong lg:hidden" aria-hidden="true"></div>

      <ol class="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
        ${stages
          .map((s, i) => {
            const items = [...(s.outcomes ?? []).map((o) => course.outcomes[o]), ...(s.points ?? [])];
            return `<li data-journey-step class="journey-step relative pl-20 lg:pl-0">
          <span class="journey-node absolute left-0 top-0 z-10 inline-flex size-14 items-center justify-center rounded-full border border-line-strong bg-white font-mono text-[14px] font-semibold text-muted lg:relative lg:mx-auto lg:flex">${pad2(i + 1)}</span>
          <div class="lg:mt-8 lg:text-center">
            <h3 class="journey-verb font-display text-[30px] font-bold leading-none tracking-[-0.045em] text-ink">${esc(s.verb)}</h3>
            <p class="mt-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-accent">${esc(s.sub)}</p>
            <div class="mt-5 flex flex-wrap items-center gap-2 lg:justify-center" aria-hidden="true">
              ${s.tools.map((t) => `<span class="inline-flex size-9 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-line">${toolMark(t)}</span>`).join("")}
            </div>
          </div>
          <ul class="mt-5 space-y-2.5">
            ${items.map((t) => `<li class="flex gap-2.5 text-[14px] leading-relaxed text-muted">${check()}<span>${esc(t)}</span></li>`).join("\n            ")}
          </ul>
        </li>`;
          })
          .join("\n        ")}
      </ol>
    </div>

    <div data-reveal class="mt-16 flex flex-col gap-6 rounded-[28px] bg-ink p-7 text-white sm:p-9 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
      <p class="font-display text-[20px] font-semibold tracking-[-0.02em]">Throughout the programme</p>
      <ul class="flex flex-col gap-3 lg:flex-row lg:gap-10">
        ${learnJourney.alwaysOutcomes
          .map((o) => `<li class="flex gap-2.5 text-[15px] leading-relaxed text-white/75">${check("text-accent")}<span>${esc(course.outcomes[o])}</span></li>`)
          .join("\n        ")}
      </ul>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ curriculum explorer */
const N = curriculum.length;
const totalTopics = curriculum.reduce((n, m) => n + topicCount(m), 0);
const short = (m) => moduleShortTitles[m.id] ?? m.title;
const unitCount = (u) => (u.topics?.length ?? 0) + (u.groups?.reduce((s, g) => s + 1 + g.topics.length, 0) ?? 0);
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

function unitBody(unit) {
  return `<div class="pb-6">
    ${unit.note ? `<p class="mb-4 inline-flex items-start gap-2 rounded-xl bg-accent-50 px-3.5 py-2.5 text-[14px] font-medium text-accent">${icon("rocket", "mt-0.5 size-4 shrink-0")}${esc(unit.note)}</p>` : ""}
    ${
      unit.topics
        ? `<ul class="flex flex-wrap gap-2">${unit.topics
            .map((t) => `<li class="rounded-full bg-surface px-3.5 py-1.5 text-[13.5px] text-ink/80 ring-1 ring-line transition-all duration-300 hover:-translate-y-px hover:bg-white hover:text-ink hover:ring-accent/50">${esc(t)}</li>`)
            .join("")}</ul>`
        : ""
    }
    ${
      unit.groups
        ? `<div class="grid gap-3 sm:grid-cols-2">${unit.groups
            .map(
              (g) => `<div class="rounded-2xl bg-surface p-4 ring-1 ring-line">
          <p class="font-display text-[14.5px] font-semibold leading-snug text-ink">${esc(g.heading)}</p>
          ${g.topics.length ? `<ul class="mt-2.5 space-y-1.5">${g.topics.map((t) => `<li class="flex gap-2 text-[13.5px] leading-snug text-muted"><span class="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>${esc(t)}</li>`).join("")}</ul>` : ""}
        </div>`,
            )
            .join("")}</div>`
        : ""
    }
  </div>`;
}

function unitAccordion(unit, j, m) {
  const id = `unit-${m.id}-${slug(unit.title)}`;
  const open = j === 0;
  return `<div data-acc-item class="border-t border-line first:border-t-0 ${open ? "is-open" : ""}">
    <button type="button" data-acc-trigger aria-expanded="${open}" aria-controls="${id}" class="flex w-full items-center gap-4 py-5 text-left">
      <span class="w-6 shrink-0 font-mono text-[12px] font-medium text-muted-2">${pad2(j + 1)}</span>
      <span class="flex-1 font-display text-[16px] font-semibold leading-snug text-ink sm:text-[17px]">${esc(unit.title)}</span>
      <span class="hidden shrink-0 font-mono text-[11.5px] text-muted-2 sm:inline">${plural(unitCount(unit), "topic")}</span>
      <span class="acc-icon inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink">${icon("plus", "size-4")}</span>
    </button>
    <div id="${id}" data-acc-panel ${open ? "" : "hidden"}>${unitBody(unit)}</div>
  </div>`;
}

function moduleArticle(m, i) {
  const active = i === 0;
  const topics = topicCount(m);
  const units = m.units.length;
  const pct = Math.round(((i + 1) / N) * 100);
  const prev = curriculum[i - 1];
  const next = curriculum[i + 1];
  const navBtn = "group inline-flex items-center gap-2 rounded-full px-1 py-2 text-[14px] font-semibold text-muted transition-colors hover:text-ink";

  return `<article id="module-${m.id}" data-module="${i}" class="overflow-hidden rounded-[24px] bg-white ring-1 ring-line lg:rounded-[32px] lg:shadow-soft ${active ? "is-active is-open" : ""}">
    <button type="button" data-module-toggle aria-expanded="${active}" aria-controls="module-body-${m.id}" class="module-toggle flex w-full items-center gap-4 p-5 text-left sm:p-6 lg:hidden">
      <span class="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink font-mono text-[13px] font-semibold text-white">${pad2(i + 1)}</span>
      <span class="min-w-0 flex-1">
        <span class="block font-display text-[16px] font-semibold leading-snug text-ink">${esc(short(m))}</span>
        <span class="mt-1 block text-[12.5px] text-muted-2">${plural(topics, "topic")} · ${plural(units, "unit")}</span>
      </span>
      <span class="acc-icon inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink">${icon("plus", "size-4")}</span>
    </button>

    <div id="module-body-${m.id}" data-module-body class="module-body">
      <div class="border-t border-line p-5 sm:p-7 lg:border-t-0 lg:p-10">
        <div class="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span class="rounded-full bg-ink px-3 py-1 text-white">Module ${pad2(i + 1)} / ${pad2(N)}</span>
          <span class="rounded-full bg-surface px-3 py-1 text-muted ring-1 ring-line">${plural(topics, "topic")}</span>
          <span class="rounded-full bg-surface px-3 py-1 text-muted ring-1 ring-line">${plural(units, "unit")}</span>
          ${m.duration ? `<span class="rounded-full bg-accent-50 px-3 py-1 text-accent ring-1 ring-accent-100">${esc(m.duration)}</span>` : ""}
        </div>
        ${m.kicker ? `<p class="mt-6 text-[14px] font-medium text-accent">${esc(m.kicker)}</p>` : ""}
        <h3 class="${m.kicker ? "mt-1.5" : "mt-6"} font-display text-[clamp(1.6rem,2.5vw,2.35rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">${esc(m.title)}</h3>
        <p class="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted">${esc(m.summary)}</p>
        <div class="mt-6 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true"><div class="h-full rounded-full bg-gradient-to-r from-accent to-brand" style="width:${pct}%"></div></div>

        ${
          units === 1
            ? `<div class="mt-8">${unitBody(m.units[0])}</div>`
            : `<div data-accordion="single" class="mt-8 rounded-2xl px-5 ring-1 ring-line sm:px-6">${m.units.map((u, j) => unitAccordion(u, j, m)).join("\n")}</div>`
        }

        <div class="mt-4 hidden items-center justify-between gap-4 border-t border-line pt-6 lg:flex">
          ${prev ? `<button type="button" data-module-go="${i - 1}" class="${navBtn}">${icon("arrow-left", "size-4 transition-transform duration-300 group-hover:-translate-x-1")} ${esc(short(prev))}</button>` : "<span></span>"}
          ${
            next
              ? `<button type="button" data-module-go="${i + 1}" class="${navBtn} text-ink">Next: ${esc(short(next))} ${icon("arrow-right", "size-4 transition-transform duration-300 group-hover:translate-x-1")}</button>`
              : `<a href="#enquire" class="${navBtn} text-ink">Enquire about the programme ${icon("arrow-right", "size-4 transition-transform duration-300 group-hover:translate-x-1")}</a>`
          }
        </div>
      </div>
    </div>
  </article>`;
}

const curriculumSection = `
<section id="curriculum" class="section-y relative bg-surface">
  <div class="container-x">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({
          eyebrow: "Curriculum",
          title: "A curriculum that moves from data to prediction",
          description:
            "Six modules covering Python, statistics, databases, prompt engineering, R, machine learning, BI tools and Gen AI-driven analytics.",
        })}
      </div>
      <ul data-reveal data-delay="0.1" class="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end">
        <li class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-ink ring-1 ring-line">${icon("layers", "size-4 text-accent")} ${pad2(N)} Modules</li>
        <li class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-ink ring-1 ring-line">${icon("list-checks", "size-4 text-accent")} ${totalTopics} Topics</li>
        <li class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-ink ring-1 ring-line">${icon("clock", "size-4 text-accent")} ${esc(course.duration)} Course</li>
      </ul>
    </div>

    <div data-curriculum data-reveal class="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
      <aside class="hidden lg:col-span-4 lg:block">
        <div class="sticky top-24">
          <div class="flex items-center justify-between font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted">
            <span>Module <span data-module-count>01</span> / ${pad2(N)}</span>
            <span>${totalTopics} topics</span>
          </div>
          <div class="mt-3 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
            <div data-module-progress class="h-full rounded-full bg-gradient-to-r from-accent to-brand transition-[width] duration-700 ease-out-expo" style="width:${Math.round(100 / N)}%"></div>
          </div>
          <ol class="mt-5 space-y-1">
            ${curriculum
              .map(
                (m, i) => `<li>
              <button type="button" data-module-tab="${i}" aria-controls="module-${m.id}" ${i === 0 ? 'aria-current="true"' : ""} class="module-tab group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left text-muted hover:text-ink ${i === 0 ? "is-active" : ""}">
                <span class="module-tab-num inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white font-mono text-[12.5px] font-semibold text-ink ring-1 ring-line">${pad2(i + 1)}</span>
                <span class="min-w-0 flex-1">
                  <span class="block font-display text-[15px] font-semibold leading-snug">${esc(short(m))}</span>
                  <span class="mt-0.5 block text-[12.5px] text-muted-2">${plural(topicCount(m), "topic")} · ${plural(m.units.length, "unit")}</span>
                </span>
                ${icon("chevron-right", "size-4 shrink-0 opacity-0 transition-opacity duration-300 group-[.is-active]:opacity-100")}
              </button>
            </li>`,
              )
              .join("\n            ")}
          </ol>
          <div class="mt-6 rounded-[24px] bg-ink p-6 text-white">
            <p class="font-display text-[17px] font-semibold tracking-[-0.02em]">Questions about the syllabus?</p>
            <p class="mt-1.5 text-[14px] leading-relaxed text-white/60">Talk to an SMEC advisor about the programme, batches and fees.</p>
            <div class="mt-5">${button({ href: "#enquire", label: "Talk to an Advisor", size: "sm" })}</div>
          </div>
        </div>
      </aside>

      <div class="space-y-3 lg:col-span-8 lg:space-y-6">
        ${curriculum.map(moduleArticle).join("\n        ")}
      </div>
    </div>
  </div>
</section>`;

export const journeyBlock = journey;
export const curriculumBlock = curriculumSection;
