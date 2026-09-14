import { learningExperience, media, pipeline, toolGroups, tools } from "../content.mjs";
import { esc, icon, pad2, photo, sectionHeader, toolMark } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ practical learning: data pipeline */
const windowDots = `<span class="flex items-center gap-1.5" aria-hidden="true"><span class="size-2.5 rounded-full bg-white/15"></span><span class="size-2.5 rounded-full bg-white/15"></span><span class="size-2.5 rounded-full bg-white/15"></span></span>`;

const codeCard = (file, mark, lines) => `<div data-reveal class="overflow-hidden rounded-[24px] bg-navy-950/80 ring-1 ring-white/10">
  <div class="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
    ${windowDots}
    <p class="font-mono text-[11.5px] text-white/55">${esc(file)}</p>
    <span class="inline-flex size-6 items-center justify-center rounded-md bg-white p-1">${toolMark(mark)}</span>
  </div>
  <pre data-typing class="code no-scrollbar overflow-x-auto p-5 text-white/85 sm:p-6"><code>${lines.map((l) => `<span class="code-line block min-h-[1.75em]">${l}</span>`).join("")}</code></pre>
</div>`;

const k = (s) => `<span class="tok-k">${s}</span>`;
const str = (s) => `<span class="tok-s">${esc(s)}</span>`;
const f = (s) => `<span class="tok-f">${s}</span>`;
const c = (s) => `<span class="tok-c">${esc(s)}</span>`;

const pythonLines = [
  `${k("import")} pandas ${k("as")} pd`,
  "",
  `df = pd.${f("read_csv")}(${str('"sales.csv"')})`,
  `df = df.${f("dropna")}().${f("drop_duplicates")}()`,
  `summary = df.${f("groupby")}(${str('"emirate"')})[${str('"revenue"')}].${f("sum")}()`,
  `${f("print")}(summary.${f("sort_values")}(ascending=${k("False")}))<span class="caret" aria-hidden="true"></span>`,
];

const sqlLines = [
  c("-- Business question → optimized SQL query"),
  `${k("SELECT")} emirate, ${f("SUM")}(revenue) ${k("AS")} total_revenue`,
  `${k("FROM")} sales`,
  `${k("GROUP BY")} emirate`,
  `${k("ORDER BY")} total_revenue ${k("DESC")};<span class="caret" aria-hidden="true"></span>`,
];

const DASH_BARS = [
  ["Dubai", 88],
  ["Abu Dhabi", 72],
  ["Sharjah", 54],
  ["Ajman", 36],
  ["RAK", 30],
];

const dashboardCard = `<div data-reveal class="overflow-hidden rounded-[24px] bg-white text-ink ring-1 ring-white/10">
  <div class="flex items-center justify-between gap-3 border-b border-line px-5 py-3">
    <p class="font-display text-[13.5px] font-semibold">Revenue by emirate</p>
    <span class="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-2">Sample data <span class="inline-flex size-6 items-center justify-center rounded-md bg-surface p-1">${toolMark("powerbi")}</span></span>
  </div>
  <div class="grid gap-6 p-5 sm:grid-cols-5 sm:p-6" aria-hidden="true">
    <div data-bars class="flex h-40 items-end gap-3 sm:col-span-3">
      ${DASH_BARS.map(
        ([label, h]) => `<div class="flex h-full flex-1 flex-col justify-end">
        <div class="relative w-full" style="height:${h}%"><div data-bar class="h-full w-full rounded-t-md bg-gradient-to-t from-brand to-accent"></div></div>
        <span class="mt-2 block truncate text-center text-[10.5px] text-muted">${label}</span>
      </div>`,
      ).join("")}
    </div>
    <div class="flex flex-col justify-between gap-4 sm:col-span-2">
      <svg viewBox="0 0 120 120" class="mx-auto size-24"><circle cx="60" cy="60" r="46" fill="none" stroke="#ebeff7" stroke-width="16"/><circle cx="60" cy="60" r="46" fill="none" stroke="#0071bc" stroke-width="16" stroke-dasharray="180 289" transform="rotate(-90 60 60)"/><circle cx="60" cy="60" r="46" fill="none" stroke="#2e3192" stroke-width="16" stroke-dasharray="70 289" stroke-dashoffset="-180" transform="rotate(-90 60 60)"/></svg>
      <svg viewBox="0 0 160 48" class="w-full"><path d="M0 40 L20 34 L40 36 L60 24 L80 28 L100 16 L120 20 L140 8 L160 12" fill="none" stroke="#2e3192" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </div>
</div>`;

const promptCard = `<div data-reveal class="flex flex-col overflow-hidden rounded-[24px] bg-navy-950/80 ring-1 ring-white/10">
  <div class="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
    ${windowDots}
    <p class="font-mono text-[11.5px] text-white/55">insight-narration</p>
    <span class="inline-flex size-6 items-center justify-center rounded-md bg-white p-1">${toolMark("genai")}</span>
  </div>
  <div class="flex flex-1 flex-col gap-4 p-5 sm:p-6">
    <div class="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-accent/15 px-4 py-3 text-[14px] leading-relaxed text-white/90 ring-1 ring-accent/30">
      <span class="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent-300">Prompt</span>
      Summarise the key trends in this sales dashboard for an executive audience, and suggest two KPIs to watch.
    </div>
    <div class="max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.05] px-4 py-3 ring-1 ring-white/10" aria-hidden="true">
      <span class="mb-2 flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/50">${icon("sparkles", "size-3.5 text-accent-300")} Executive summary</span>
      <span class="block h-2 w-[92%] rounded-full bg-white/15"></span>
      <span class="mt-2 block h-2 w-[78%] rounded-full bg-white/15"></span>
      <span class="mt-2 block h-2 w-[64%] rounded-full bg-white/10"></span>
    </div>
  </div>
</div>`;

const projects = learningExperience[1].points;
const projectIcons = ["clipboard-check", "chart-bar-big", "brain", "rocket"];

const projectsSection = `
<section id="projects" class="bg-navy-glow section-y relative overflow-hidden text-white">
  <div class="container-x relative">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Practical learning", title: "Build real analytics workflows, end to end", tone: "dark" })}
      </div>
      <p data-reveal data-delay="0.1" class="lede text-white/60 lg:col-span-5">Learn from experienced instructors through live interactive sessions and build your hands-on skills through projects and integrated labs.</p>
    </div>

    <div data-reveal class="mt-16 rounded-[32px] bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8 lg:mt-20 lg:p-10">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <p class="font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/50">An analytics workflow</p>
        <p class="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent-300">
          <span class="relative flex size-2"><span class="absolute inline-flex size-full rounded-full bg-accent animate-pulse-ring"></span><span class="relative inline-flex size-2 rounded-full bg-accent"></span></span>
          Data in motion
        </p>
      </div>
      <p class="sr-only">Workflow stages: ${pipeline.map((p) => esc(p.label)).join(", ")}.</p>
      <div class="mt-8 flex flex-col items-center lg:flex-row lg:items-stretch" aria-hidden="true">
        ${pipeline
          .map(
            (p, i) => `${
              i
                ? `<div class="pipe-track pipe-track-v h-10 w-px shrink-0 bg-white/15 lg:h-px lg:w-10 lg:self-center xl:w-14"><span class="pipe-packet" style="--dur:2.6s;--delay:-${(i * 0.5).toFixed(1)}s"></span><span class="pipe-packet" style="--dur:2.6s;--delay:-${(i * 0.5 + 1.3).toFixed(1)}s"></span></div>`
                : ""
            }
        <div class="w-full max-w-[280px] rounded-2xl bg-navy-900/80 p-5 text-center ring-1 ring-white/10 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:ring-accent/40 lg:w-auto lg:max-w-none lg:flex-1">
          <span class="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-white p-2.5">${toolMark(p.icon)}</span>
          <p class="mt-4 font-display text-[15px] font-semibold uppercase tracking-[0.04em] text-white">${esc(p.label)}</p>
          <p class="mt-1 text-[12.5px] leading-snug text-white/50">${esc(p.sub)}</p>
        </div>`,
          )
          .join("")}
      </div>
    </div>

    <div class="mt-5 grid gap-5 lg:grid-cols-2">
      ${codeCard("clean_sales.py", "python", pythonLines)}
      ${codeCard("revenue_by_emirate.sql", "sql", sqlLines)}
      ${dashboardCard}
      ${promptCard}
    </div>
    <p class="mt-4 text-[12.5px] text-white/40">Illustrative workflow with sample data, reflecting curriculum topics such as pandas data wrangling, SQL for business questions, Power BI dashboards and executive summaries from analytics outputs.</p>

    <div class="mt-20 lg:mt-24">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h3 data-reveal class="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-bold tracking-[-0.03em]">Assignments &amp; projects</h3>
        <p data-reveal class="font-mono text-[12px] uppercase tracking-[0.16em] text-white/45">Compulsory for all the students</p>
      </div>
      <ol data-reveal-group data-stagger="0.08" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        ${projects
          .map(
            (p, i) => `<li data-reveal-item data-spotlight class="spotlight group rounded-[24px] bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:ring-accent/40 sm:p-7">
          <div class="flex items-center justify-between">
            <span class="font-mono text-[12.5px] text-accent-300">${pad2(i + 1)}</span>
            <span class="inline-flex size-11 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">${icon(projectIcons[i] ?? "rocket", "size-5")}</span>
          </div>
          <p class="mt-10 font-display text-[18px] font-semibold leading-snug tracking-[-0.02em] text-white">${esc(p)}</p>
        </li>`,
          )
          .join("\n        ")}
      </ol>
    </div>
  </div>
</section>`;

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
    <div data-reveal-group data-stagger="0.1" class="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      ${learningExperience
        .map(
          (item, i) => `<article data-reveal-item class="group flex flex-col overflow-hidden rounded-[28px] bg-surface ring-1 ring-line transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-lift">
        <div class="relative aspect-[4/3] overflow-hidden">
          ${photo(expImages[item.image], { sizes: "(min-width: 1024px) 30vw, 100vw", ratio: 4 / 3, widths: [480, 720, 960], cls: "absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]" })}
          <span class="absolute left-4 top-4 rounded-full bg-navy-950/60 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">${pad2(i + 1)}</span>
        </div>
        <div class="flex flex-1 flex-col p-6 sm:p-7">
          <p class="eyebrow text-accent">${esc(item.eyebrow)}</p>
          <h3 class="mt-3 font-display text-[21px] font-semibold leading-snug tracking-[-0.02em] text-ink">${esc(item.title)}</h3>
          <p class="mt-3 text-[14.5px] leading-relaxed text-muted">${esc(item.text)}</p>
          <ul class="mt-5 space-y-2">
            ${item.points.map((p) => `<li class="flex items-start gap-2.5 text-[14px] text-ink/85"><span class="mt-[3px] inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent">${icon("check", "size-3", 'stroke-width="3"')}</span>${esc(p)}</li>`).join("\n            ")}
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

    <ul data-reveal-group data-stagger="0.035" class="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      ${tools
        .map(
          (t) => `<li data-reveal-item data-tool data-cat="${groupsFor(t.icon)}" class="group flex flex-col items-center gap-4 rounded-[22px] bg-white p-5 text-center ring-1 ring-line hover:-translate-y-1 hover:shadow-lift hover:ring-accent/50">
        <span class="inline-flex size-16 items-center justify-center rounded-2xl bg-surface p-3 transition-transform duration-500 ease-out-expo group-hover:scale-105">${toolMark(t.icon)}</span>
        <span>
          <span class="block font-display text-[14.5px] font-semibold text-ink">${esc(t.short)}</span>
          ${t.short !== t.name ? `<span class="mt-0.5 block text-[11.5px] leading-snug text-muted-2">${esc(t.name)}</span>` : ""}
        </span>
      </li>`,
        )
        .join("\n      ")}
    </ul>
  </div>
</section>`;

export const practiceBlock = `${projectsSection}${experienceSection}${toolsSection}`;
