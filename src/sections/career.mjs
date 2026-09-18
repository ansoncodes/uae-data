import { course, milestones, salaryUae, testimonials } from "../content.mjs";
import { esc, flagUae, icon, logoImg, sectionHeader } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ career */
const careerSection = `
<section id="career" class="section-y relative bg-white" aria-label="Career outcomes">
  <div class="container-x">
    <div class="grid gap-6 lg:grid-cols-12">
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

/* ------------------------------------------------------------------ testimonials */
// Only genuine learner testimonials are rendered; entries marked `placeholder: true` never reach the page,
// so this section stays empty until real quotes are added. It continues the certification background.
const realTestimonials = testimonials.filter((t) => !t.placeholder);
const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const testimonialsSection = realTestimonials.length
  ? `
<section id="testimonials" class="bg-surface pb-24 sm:pb-28 lg:pb-36">
  <div class="container-x">
    ${sectionHeader({ eyebrow: "Learners", title: "What learners say" })}
    <div data-reveal-group data-stagger="0.08" class="mt-12 grid gap-5 md:grid-cols-2">
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
        .join("\n      ")}
    </div>
  </div>
</section>`
  : "";

export const careerBlock = `${careerSection}${certificationSection}${testimonialsSection}`;
