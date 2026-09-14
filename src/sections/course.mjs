import { about, course, curriculum, keyFeatures, learningExperience, media, tools, whySmec } from "../content.mjs";
import { counter, esc, icon, pad2, photo, sectionHeader, topicCount } from "../lib/ui.mjs";

function splitLede(text, sentences = 2) {
  const parts = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text];
  return [parts.slice(0, sentences).join("").trim(), parts.slice(sentences).join("").trim()];
}

const readMore = (label, body) => `<details data-reveal class="group mt-6">
  <summary class="inline-flex cursor-pointer list-none items-center gap-2 rounded-full font-display text-[14.5px] font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
    ${esc(label)} ${icon("chevron-down", "size-4 transition-transform duration-300 group-open:rotate-180")}
  </summary>
  <div class="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted">${body}</div>
</details>`;

/* ------------------------------------------------------------------ course snapshot */
const [lede, rest] = splitLede(course.description, 2);
const totalTopics = curriculum.reduce((n, m) => n + topicCount(m), 0);
const projectCount = learningExperience.flatMap((x) => x.points).filter((p) => /project/i.test(p)).length;

const snapshotTiles = [
  { value: curriculum.length, label: "Modules", icon: "layers" },
  { value: totalTopics, label: "Topics", icon: "list-checks" },
  { value: tools.length, label: "Tools & technologies", icon: "code-xml" },
  { value: projectCount, label: "Hands-on projects", icon: "rocket" },
];

const featureIcons = {
  briefcase: "briefcase",
  sparkles: "sparkles",
  workflow: "workflow",
  layers: "layers",
  chart: "chart-bar-big",
  trending: "trending-up",
  target: "target",
  cpu: "cpu",
  users: "users",
  award: "award",
};

const snapshot = `
<section id="course" class="section-y relative bg-white">
  <div class="container-x">
    <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Course snapshot", title: esc(course.title), description: esc(lede) })}
        ${readMore("Read the full course overview", `<p>${esc(rest)}</p>`)}
      </div>
      <div class="lg:col-span-5 lg:pt-12">
        <div data-reveal-group data-stagger="0.07" class="grid grid-cols-2 gap-3">
          ${snapshotTiles
            .map(
              (t) => `<div data-reveal-item class="group relative overflow-hidden rounded-[24px] bg-surface p-6 ring-1 ring-line transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:p-7">
            <span class="inline-flex size-10 items-center justify-center rounded-xl bg-white text-accent ring-1 ring-line transition-colors duration-500 group-hover:bg-accent group-hover:text-white group-hover:ring-accent">${icon(t.icon, "size-[18px]")}</span>
            <p class="mt-8 font-display text-[clamp(2.4rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.05em] text-ink">${counter(t.value)}</p>
            <p class="mt-2 text-[14px] font-medium text-muted">${esc(t.label)}</p>
          </div>`,
            )
            .join("\n          ")}
        </div>
      </div>
    </div>

    <div class="mt-20 border-t border-line pt-14 lg:mt-28 lg:pt-16">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h3 data-reveal class="font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold tracking-[-0.035em] text-ink">Key features of the program</h3>
        <p data-reveal class="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-2">${pad2(keyFeatures.length)} features</p>
      </div>
      <ul data-reveal-group data-stagger="0.05" class="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        ${keyFeatures
          .map(
            (f) => `<li data-reveal-item class="group">
          <span class="inline-flex size-11 items-center justify-center rounded-2xl bg-ink text-white transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-white">${icon(featureIcons[f.icon] ?? "sparkles", "size-5")}</span>
          <h4 class="mt-5 font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">${esc(f.title)}</h4>
          <p class="mt-2 text-[14px] leading-relaxed text-muted">${esc(f.text)}</p>
        </li>`,
          )
          .join("\n        ")}
      </ul>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ about */
const aboutSection = `
<section id="about" class="section-y relative overflow-hidden bg-surface">
  <div class="container-x">
    <p data-reveal class="eyebrow flex items-center gap-3 text-accent"><span class="h-px w-8 bg-accent/50" aria-hidden="true"></span>About SMEC Technologies</p>
    <h2 data-reveal class="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-ink">
      ${about.heading
        .split(" ")
        .map((w, i) => `<span class="block ${i === 1 ? "text-gradient-deep" : ""}">${esc(w)}</span>`)
        .join("")}
    </h2>

    <div class="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <p data-reveal class="text-[clamp(1.15rem,1.5vw,1.35rem)] font-medium leading-[1.6] text-ink">${esc(about.intro)}</p>
        ${readMore("More about SMEC", about.paragraphs.slice(0, 2).map((p) => `<p>${esc(p)}</p>`).join(""))}
        <blockquote data-reveal class="mt-10 border-l-2 border-accent pl-5 font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-ink">${esc(about.paragraphs[2])}</blockquote>
      </div>

      <div class="lg:col-span-7" data-parallax-trigger>
        <div data-reveal class="relative overflow-hidden rounded-[32px] shadow-lift">
          <div data-parallax="26" class="relative aspect-[4/3] scale-[1.12]">
            ${photo(media.about, { sizes: "(min-width: 1024px) 55vw, 100vw", ratio: 4 / 3, widths: [640, 960, 1400], cls: "absolute inset-0 size-full object-cover" })}
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" aria-hidden="true"></div>
          <p class="absolute bottom-5 left-5 right-5 inline-flex w-fit items-center gap-2.5 rounded-full bg-white/90 py-2 pl-2 pr-4 text-[13px] font-medium text-ink backdrop-blur-md">
            <span class="inline-flex size-7 items-center justify-center rounded-full bg-ink text-white">${icon("building-2", "size-3.5")}</span>
            Training division of SMEC Automation Pvt. Ltd
          </p>
        </div>
      </div>
    </div>

    <dl data-reveal-group data-stagger="0.07" class="mt-20 grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:mt-24 lg:grid-cols-6">
      ${about.stats
        .map(
          (s) => `<div data-reveal-item class="flex flex-col-reverse border-t border-line-strong pb-4 pt-7">
        <dt class="mt-2 text-[13.5px] font-medium text-muted">${esc(s.label)}</dt>
        <dd class="font-display text-[clamp(2.1rem,3vw,2.9rem)] font-bold leading-none tracking-[-0.05em] text-ink">${counter(s.value, s.suffix)}</dd>
      </div>`,
        )
        .join("\n      ")}
    </dl>
  </div>
</section>`;

/* ------------------------------------------------------------------ why smec */
const whySection = `
<section id="why" class="bg-navy-soft section-y relative overflow-hidden text-white">
  <div class="pattern-arabesque absolute inset-0 [mask-image:radial-gradient(55%_45%_at_85%_0%,black,transparent)]" aria-hidden="true"></div>
  <div class="container-x relative">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Why SMEC", title: esc(about.whyLearnHeading), tone: "dark" })}
      </div>
      <p data-reveal data-delay="0.1" class="text-[15.5px] leading-[1.75] text-white/60 lg:col-span-5">${esc(about.whyLearn)}</p>
    </div>

    <div data-reveal-group data-stagger="0.08" class="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-6">
      ${whySmec
        .map(
          (c, i) => `<div data-why-col="${i % 3}" class="${i % 3 === 1 ? "lg:mt-16" : i % 3 === 2 ? "lg:mt-32" : ""}">
        <article data-reveal-item data-spotlight class="spotlight group h-full rounded-[28px] bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-accent/40 sm:p-8 lg:p-9">
          <div class="flex items-start justify-end">
            <span class="inline-flex size-12 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10 transition-all duration-500 ease-out-expo group-hover:bg-accent group-hover:text-white group-hover:ring-accent">${icon(c.icon, "size-5")}</span>
          </div>
          <p class="text-outline -mt-4 font-display text-[72px] font-bold leading-none tracking-[-0.06em] text-white/15 transition-colors duration-500 group-hover:text-accent-300/70" aria-hidden="true">${pad2(i + 1)}</p>
          <h3 class="mt-6 font-display text-[23px] font-semibold tracking-[-0.025em] text-white">${esc(c.title)}</h3>
          <p class="mt-3 text-[15px] leading-relaxed text-white/60">${esc(c.text)}</p>
        </article>
      </div>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>`;

export const courseBlock = `${snapshot}${aboutSection}${whySection}`;
