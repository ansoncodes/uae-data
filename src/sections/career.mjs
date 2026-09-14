import { accreditations, careerPaths, careerRoadmap, course, media, milestones, salaryUae, testimonials } from "../content.mjs";
import { esc, flagUae, icon, logoImg, pad2, photo, sectionHeader } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ career */
const careerSection = `
<section id="career" class="relative bg-white">
  <div data-parallax-trigger class="relative isolate overflow-hidden bg-navy-950 text-white">
    <div data-parallax="44" class="absolute inset-0 -z-10 scale-[1.18]" aria-hidden="true">
      ${photo(media.careerBand, { sizes: "100vw", ratio: 16 / 9, widths: [960, 1400, 1920], cls: "size-full object-cover opacity-50" })}
    </div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25" aria-hidden="true"></div>
    <div class="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" aria-hidden="true"></div>
    <div class="container-x py-28 sm:py-36 lg:py-44">
      <p data-reveal class="eyebrow flex items-center gap-3 text-accent-300"><span class="h-px w-8 bg-accent-300/60" aria-hidden="true"></span>Career outcomes</p>
      <h2 data-reveal class="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em]">
        <span class="block">From learning</span><span class="text-gradient block">to career</span>
      </h2>
      <p data-reveal data-delay="0.1" class="lede mt-8 max-w-2xl text-white/70">This comprehensive data analytics program will help learners fast-track their careers in data analytics. It will help learners develop in-demand skills needed for a successful career.</p>
    </div>
  </div>

  <div class="container-x pb-24 pt-20 sm:pb-28 lg:pb-36 lg:pt-28">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Career paths", title: "Where your skills can take you", as: "h3" })}
      </div>
      <p data-reveal data-delay="0.1" class="lede text-muted lg:col-span-5">Roles your skills open up as you move through the curriculum, each one built on modules you will complete.</p>
    </div>

    <div class="relative mt-14 lg:mt-20">
      <div class="absolute left-[10%] right-[10%] top-[38px] hidden h-px bg-line-strong lg:block" aria-hidden="true">
        <div data-draw-x class="h-full bg-gradient-to-r from-brand via-accent to-brand"></div>
      </div>
      <ol data-reveal-group data-stagger="0.1" class="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        ${careerPaths
          .map(
            (p, i) => `<li data-reveal-item class="group relative flex flex-col">
          <div class="relative z-10 mx-auto flex size-[76px] items-center justify-center rounded-full bg-white ring-1 ring-line-strong transition-all duration-500 group-hover:ring-accent">
            <span class="inline-flex size-14 items-center justify-center rounded-full bg-ink text-white transition-colors duration-500 group-hover:bg-accent group-hover:text-white">${icon(p.icon, "size-6")}</span>
          </div>
          ${i < careerPaths.length - 1 ? `<span class="absolute -right-4 top-[26px] z-20 hidden size-6 items-center justify-center rounded-full bg-white text-accent ring-1 ring-line lg:flex" aria-hidden="true">${icon("chevron-right", "size-3.5")}</span>` : ""}
          <div class="mt-5 flex-1 rounded-[24px] bg-surface p-6 ring-1 ring-line transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-soft">
            <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">Path ${pad2(i + 1)}</p>
            <h4 class="mt-2 font-display text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink">${esc(p.role)}</h4>
            <p class="mt-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-2">Built on</p>
            <ul class="mt-2 flex flex-wrap gap-1.5">
              ${p.builtOn.map((b) => `<li class="rounded-full bg-white px-2.5 py-1 text-[12px] text-ink/80 ring-1 ring-line">${esc(b)}</li>`).join("")}
            </ul>
          </div>
        </li>`,
          )
          .join("\n        ")}
      </ol>
    </div>

    <div class="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12">
      <div data-reveal class="rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-line sm:p-9 lg:col-span-7">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="eyebrow inline-flex items-center gap-2 text-accent">${flagUae("h-[11px] w-[17px]")} ${esc(salaryUae.label)}</p>
            <h3 class="mt-3 font-display text-[clamp(1.5rem,2.3vw,1.9rem)] font-bold tracking-[-0.03em] text-ink">${esc(salaryUae.heading)}</h3>
          </div>
          <span class="rounded-full bg-surface px-3 py-1 text-[12px] font-medium text-muted ring-1 ring-line">${esc(salaryUae.unit)}</span>
        </div>
        <div data-bars class="mt-20 flex h-52 items-end gap-2 sm:gap-4">
          ${salaryUae.steps
            .map(
              (s) => `<div class="flex h-full flex-1 flex-col justify-end">
            <div class="relative w-full shrink-0" style="height:${s.pct}%">
              <span data-bar-label class="absolute inset-x-0 -top-11 text-center leading-tight">
                <span class="block font-display text-[12px] font-bold text-ink sm:text-[13.5px]">${esc(s.range)}</span>
                <span class="mt-0.5 block text-[10.5px] font-medium text-muted-2">AED / month</span>
              </span>
              <div data-bar class="h-full w-full origin-bottom rounded-t-lg bg-gradient-to-t from-brand to-accent"></div>
            </div>
          </div>`,
            )
            .join("\n          ")}
        </div>
        <div class="mt-3 flex gap-2 border-t border-line pt-3 sm:gap-4">
          ${salaryUae.steps
            .map(
              (s) => `<span class="flex-1 text-center">
            <span class="block font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink">${esc(s.stage)}</span>
            <span class="mt-1 block text-[11.5px] text-muted-2">${esc(s.role)}</span>
          </span>`,
            )
            .join("")}
        </div>
        <p class="mt-6 text-[12px] leading-relaxed text-muted-2">${esc(salaryUae.disclaimer)} Source: <a href="${salaryUae.sourceHref}" target="_blank" rel="noopener noreferrer nofollow" class="underline decoration-line-strong underline-offset-2 transition-colors hover:text-muted">${esc(salaryUae.sourceLabel)}</a>.</p>
      </div>

      <div data-reveal data-delay="0.1" class="bg-navy-soft relative overflow-hidden rounded-[28px] p-6 text-white sm:p-9 lg:col-span-5">
        <p class="eyebrow text-accent-300">Data Analyst</p>
        <h3 class="mt-3 font-display text-[clamp(1.5rem,2.3vw,1.9rem)] font-bold tracking-[-0.03em]">Your path with SMEC</h3>
        <ol data-milestones class="relative mt-8">
          ${milestones
            .map((m, i) => {
              const last = i === milestones.length - 1;
              return `<li data-milestone class="relative flex gap-4 pb-6 last:pb-0">
            ${last ? "" : '<span class="absolute left-[15px] top-8 h-[calc(100%-16px)] w-px bg-white/20" aria-hidden="true"></span>'}
            <span class="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[11.5px] font-semibold ${last ? "bg-accent text-white" : "bg-white/10 text-white/85 ring-1 ring-white/20"}">${i + 1}</span>
            <span class="pt-1.5 font-display text-[15.5px] font-semibold leading-snug ${last ? "text-accent-300" : "text-white/85"}">${esc(m)}</span>
          </li>`;
            })
            .join("\n          ")}
        </ol>
      </div>
    </div>

    <div class="mt-20 lg:mt-24">
      <div data-reveal class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="eyebrow text-accent">Career roadmap</p>
          <h3 class="mt-3 font-display text-[clamp(1.5rem,2.3vw,1.9rem)] font-bold tracking-[-0.03em] text-ink">Seven steps from first enquiry to first offer</h3>
        </div>
      </div>
      <div class="relative mt-10">
        <div class="absolute left-0 right-0 top-[22px] hidden h-px bg-line-strong lg:block" aria-hidden="true">
          <div data-draw-x class="h-full bg-gradient-to-r from-brand via-accent to-brand"></div>
        </div>
        <ol data-reveal-group data-stagger="0.07" class="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-7 lg:overflow-visible">
          ${careerRoadmap
            .map(
              (step, i) => `<li data-reveal-item class="group relative flex w-[230px] shrink-0 snap-start flex-col sm:w-[250px] lg:w-auto">
            <span class="relative z-10 inline-flex size-11 items-center justify-center rounded-full bg-white font-mono text-[13px] font-semibold text-ink ring-1 ring-line-strong transition-all duration-500 ease-out-expo group-hover:bg-ink group-hover:text-white group-hover:ring-ink">${i + 1}</span>
            <p class="mt-4 flex-1 rounded-[20px] bg-surface p-4 font-display text-[14px] font-semibold leading-snug text-ink ring-1 ring-line transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-soft">${esc(step)}</p>
          </li>`,
            )
            .join("\n          ")}
        </ol>
      </div>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ certification */
const certificationSection = `
<section id="certification" class="section-y bg-surface">
  <div class="container-x">
    <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-6">
        <div data-cert class="relative [perspective:1600px]">
          <div data-tilt class="relative aspect-[1.414] overflow-hidden rounded-xl border border-line bg-white shadow-lift transition-transform duration-300 ease-out [transform-style:preserve-3d]">
            <div data-shine class="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true"></div>
            <div class="absolute inset-3 rounded-lg border border-brand-100" aria-hidden="true"></div>
            <div class="absolute inset-4 rounded-md border border-line" aria-hidden="true"></div>
            <div class="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-brand via-brand-600 to-accent" aria-hidden="true"></div>
            <div class="relative flex h-full flex-col justify-between p-5 sm:p-9">
              <div class="flex items-start justify-between gap-3">
                ${logoImg("dark", 26, 'loading="lazy"')}
                <span class="hidden shrink-0 rounded-md border border-sand/50 bg-sand-50 px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-sand sm:inline-block">Professional Certificate</span>
              </div>
              <div class="text-center">
                <p class="font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-muted-2 sm:text-[10px]">This is to certify that</p>
                <p class="mx-auto mt-2 max-w-[70%] border-b border-line-strong pb-1.5 font-display text-base font-semibold text-ink/40 sm:mt-3 sm:pb-2 sm:text-xl">Learner name</p>
                <p class="mt-2.5 text-[10px] text-muted sm:mt-4 sm:text-[12px]">has successfully completed the</p>
                <p class="mt-1 font-display text-[0.95rem] font-bold leading-tight tracking-[-0.02em] text-brand sm:mt-1.5 sm:text-[1.35rem]">${esc(course.title)}</p>
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <div class="h-px w-32 bg-ink/40"></div>
                  <p class="mt-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">SMEC Technologies</p>
                </div>
                <div class="relative flex size-12 items-center justify-center rounded-full border-2 border-accent/50 sm:size-20">
                  <div class="absolute inset-1.5 rounded-full border border-dashed border-accent/60"></div>
                  ${icon("shield-check", "size-6 text-accent sm:size-7")}
                </div>
              </div>
            </div>
          </div>
          <p class="mt-4 text-center text-[12px] text-muted-2">Illustrative design — the issued certificate may differ.</p>
        </div>
      </div>
      <div class="lg:col-span-6">
        ${sectionHeader({
          eyebrow: "Certification",
          title: esc(course.certificationLine),
          description: "Earn the Professional Certificate in Data Analytics with Prompt Engineering from SMEC Technologies, Centre for Technology &amp; Professional Training.",
        })}
        <ul data-reveal data-delay="0.1" class="mt-8 space-y-3">
          ${[
            course.title,
            "Issued by SMEC Technologies — Centre for Technology & Professional Training",
            "Course Exam — a milestone on the Data Analyst pathway",
            "Assignments and projects are compulsory for all the students",
          ]
            .map((t) => `<li class="flex items-start gap-3 text-[15px] text-ink/85">${icon("badge-check", "mt-0.5 size-5 shrink-0 text-accent")}${esc(t)}</li>`)
            .join("\n          ")}
        </ul>
      </div>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ proof */
// Only genuine learner testimonials are rendered; entries marked `placeholder: true` never reach the page.
const realTestimonials = testimonials.filter((t) => !t.placeholder);
const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const testimonialsBlock = realTestimonials.length
  ? `<div class="mt-20 lg:mt-24">
      <h3 data-reveal class="font-display text-[clamp(1.5rem,2.3vw,1.9rem)] font-bold tracking-[-0.03em] text-ink">What learners say</h3>
      <div data-reveal-group data-stagger="0.08" class="mt-8 grid gap-5 md:grid-cols-2">
        ${realTestimonials
          .map(
            (t) => `<figure data-reveal-item class="rounded-[28px] bg-white p-7 ring-1 ring-line sm:p-9">
          ${icon("quote", "size-8 text-accent")}
          <blockquote class="mt-5 font-display text-[18px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">${esc(t.quote)}</blockquote>
          <figcaption class="mt-7 flex items-center gap-3">
            <span class="inline-flex size-11 items-center justify-center rounded-full bg-ink font-display text-[13px] font-bold text-white">${initials(t.name)}</span>
            <span><span class="block font-display text-[15px] font-semibold text-ink">${esc(t.name)}</span><span class="block text-[13.5px] text-muted">${esc(t.role)}</span></span>
          </figcaption>
        </figure>`,
          )
          .join("\n        ")}
      </div>
    </div>`
  : "";

const proofSection = `
<section id="proof" class="section-y bg-white">
  <div class="container-x">
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7">
        ${sectionHeader({ eyebrow: "Trust & recognition", title: "Trusted. Recognised. Industry-focused." })}
      </div>
      <p data-reveal data-delay="0.1" class="lede text-muted lg:col-span-5">Approvals and associations listed by SMEC Technologies, the training division of SMEC Automation Pvt. Ltd.</p>
    </div>
    <ul data-reveal-group data-stagger="0.07" class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${accreditations
        .map(
          (a) => `<li data-reveal-item class="group flex items-start gap-5 rounded-[24px] bg-surface p-6 ring-1 ring-line transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:p-7">
        <span class="relative inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-accent ring-1 ring-line transition-colors duration-500 group-hover:bg-ink group-hover:text-white group-hover:ring-ink">
          <span class="absolute inset-1 rounded-full border border-dashed border-accent/40" aria-hidden="true"></span>
          ${icon("shield-check", "size-6")}
        </span>
        <span>
          <span class="block font-display text-[16px] font-semibold leading-snug text-ink">${esc(a.title)}</span>
          <span class="mt-1.5 block text-[13.5px] leading-relaxed text-muted">${esc(a.detail)}</span>
        </span>
      </li>`,
        )
        .join("\n      ")}
    </ul>
    ${testimonialsBlock}
  </div>
</section>`;

export const careerBlock = `${careerSection}${certificationSection}${proofSection}`;
