import { about, course, enquiry, faqs, heroForm, legal, media, nav, site } from "../content.mjs";
import { button, esc, flagUae, icon, logoImg, pad2, photo, sectionHeader } from "../lib/ui.mjs";

/* ------------------------------------------------------------------ faq */
const faqSection = `
<section id="faq" class="section-y bg-white">
  <div class="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      <div class="lg:sticky lg:top-28">
        ${sectionHeader({ eyebrow: "FAQ", title: "Frequently asked questions", description: "Quick answers about eligibility, duration, tools, projects and certification." })}
        <div data-reveal data-delay="0.1" class="mt-8 rounded-[24px] bg-surface p-6 ring-1 ring-line sm:p-7">
          <p class="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">Still have questions?</p>
          <p class="mt-1.5 text-[14px] leading-relaxed text-muted">Talk to an SMEC advisor about the programme, batches and fees.</p>
          <div class="mt-5 flex flex-wrap gap-2.5">
            ${button({ href: "#enquire", label: "Talk to an Advisor", variant: "dark", size: "sm" })}
            ${button({ href: site.whatsapp, label: "WhatsApp", variant: "outline", size: "sm", arrow: false, attrs: 'target="_blank" rel="noopener noreferrer"', lead: icon("message-circle", "size-4 text-accent") })}
          </div>
        </div>
      </div>
    </div>

    <div data-reveal data-delay="0.05" class="lg:col-span-7">
      <div data-accordion="single" class="border-t border-line">
        ${faqs
          .map((f, i) => {
            const open = i === 0;
            return `<div data-acc-item class="border-b border-line ${open ? "is-open" : ""}">
          <button type="button" data-acc-trigger aria-expanded="${open}" aria-controls="faq-${i}" class="group flex w-full items-start gap-5 py-6 text-left">
            <span class="mt-1.5 w-7 shrink-0 font-mono text-[12px] text-muted-2">${pad2(i + 1)}</span>
            <span class="flex-1 font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-[18.5px]">${esc(f.q)}</span>
            <span class="acc-icon inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink">${icon("plus", "size-4")}</span>
          </button>
          <div id="faq-${i}" data-acc-panel ${open ? "" : "hidden"}>
            <p class="pb-7 pl-12 pr-2 text-[15.5px] leading-[1.75] text-muted sm:pr-14">${esc(f.a)}</p>
          </div>
        </div>`;
          })
          .join("\n        ")}
      </div>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ "Book a Free Demo Class" form */
const dialCodes = [
  { code: "+971", label: "UAE" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+974", label: "Qatar" },
  { code: "+968", label: "Oman" },
  { code: "+965", label: "Kuwait" },
  { code: "+973", label: "Bahrain" },
  { code: "+91", label: "India" },
  { code: "+44", label: "UK" },
  { code: "+1", label: "US / Canada" },
];

const INPUT =
  "h-11 w-full rounded-2xl border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-muted-2 outline-none transition-all duration-300 hover:border-line-strong focus:border-accent focus:ring-4 focus:ring-accent/10 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-red-500/10";
const LABEL =
  "mb-1.5 block font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-focus-within:text-accent";
const req = '<span class="text-red-500" aria-hidden="true">*</span>';

const field = (label, id, control) => `<div class="group">
      <label for="${id}" class="${LABEL}">${label}</label>
      ${control}
      <p data-error-for="${id}" class="mt-1.5 text-[12.5px] text-red-600" role="alert" hidden></p>
    </div>`;

/**
 * The demo-class lead form. Rendered in the hero and again in the enquiry section, so both always
 * carry the same fields. `p` prefixes every id so the two copies never collide.
 */
export function enquiryFormCard(p, formName, { id = "", headingLevel = "h2" } = {}) {
  const H = headingLevel;
  return `<div ${id ? `id="${id}" ` : ""}data-form-block class="relative rounded-3xl bg-white p-6 text-ink shadow-[0_34px_74px_-32px_rgba(11,16,38,0.38)] ring-1 ring-line/70 sm:p-7">
  <form data-enquiry-form data-form-name="${formName}" data-endpoint="" novalidate class="space-y-3.5">
    <div class="flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 ring-1 ring-brand-100">
      <span class="relative flex size-2 shrink-0">
        <span class="absolute inline-flex size-full rounded-full bg-accent animate-pulse-ring"></span>
        <span class="relative inline-flex size-2 rounded-full bg-accent"></span>
      </span>
      <span class="flex items-center gap-2 font-display text-[13.5px] font-semibold leading-snug text-ink">${flagUae("h-[10px] w-[15px]")} ${esc(heroForm.notice.title)}</span>
    </div>

    <div>
      <span class="inline-block rounded-md bg-brand-50 px-2.5 py-1 font-display text-[11.5px] font-semibold tracking-[0.01em] text-brand">${esc(heroForm.pill)}</span>
      <${H} class="mt-3 font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink">${esc(heroForm.heading)}</${H}>
      <p class="mt-2 text-[13.5px] leading-relaxed text-muted">${esc(heroForm.text)}</p>
    </div>

    <div class="hidden" aria-hidden="true">
      <label for="${p}-company">Company</label>
      <input id="${p}-company" name="company" type="text" tabindex="-1" autocomplete="off">
    </div>
    <input type="hidden" name="course" value="${esc(course.title)}">

    ${field(
      `Full Name ${req}`,
      `${p}-name`,
      `<input id="${p}-name" name="name" type="text" autocomplete="name" required data-validate="name" placeholder="Enter your name" class="${INPUT}">`,
    )}
    ${field(
      "Email",
      `${p}-email`,
      `<input id="${p}-email" name="email" type="email" autocomplete="email" data-validate="email" placeholder="Enter your email" class="${INPUT}">`,
    )}
    ${field(
      `Contact Number ${req}`,
      `${p}-phone`,
      `<div class="flex gap-2">
        <div class="relative w-[124px] shrink-0">
          <select id="${p}-dialCode" name="dialCode" aria-label="Country code" class="${INPUT} cursor-pointer appearance-none pl-3.5 pr-7 font-medium">
            ${dialCodes.map((d) => `<option value="${d.code}">${d.code} ${d.label}</option>`).join("")}
          </select>
          ${icon("chevron-down", "pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted")}
        </div>
        <input id="${p}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" required data-validate="phone" placeholder="50 123 4567" class="${INPUT}">
      </div>`,
    )}
    ${field(
      `Location ${req}`,
      `${p}-location`,
      `<input id="${p}-location" name="location" type="text" autocomplete="address-level2" required data-validate="location" placeholder="Enter your location" class="${INPUT}">`,
    )}

    <div class="pt-1">
      ${button({ label: esc(heroForm.cta), variant: "gradient", size: "form", type: "submit", cls: "w-full", attrs: "data-submit" })}
    </div>
    <p class="text-center text-[11.5px] leading-relaxed text-muted-2">By submitting, you agree to be contacted by SMEC Technologies about this programme.</p>
    <p data-form-error role="alert" class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700" hidden>Something went wrong sending your enquiry. Please try again, or reach us on WhatsApp or by phone.</p>
  </form>

  <div data-form-success class="flex min-h-[440px] flex-col items-center justify-center text-center" role="status" hidden>
    <div class="relative flex size-20 items-center justify-center rounded-full bg-accent-50">
      <span data-success-ring class="absolute inset-0 rounded-full border-2 border-accent opacity-0"></span>
      <span data-burst class="burst absolute inset-0" aria-hidden="true">${"<span></span>".repeat(10)}</span>
      <svg viewBox="0 0 48 48" class="size-9 text-accent" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path data-success-check d="M12 25l8 8 16-18"></path></svg>
    </div>
    <h3 class="mt-6 font-display text-[22px] font-bold tracking-[-0.03em] text-ink">Thank you<span data-success-name></span>.</h3>
    <p class="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">Your request has been received. An SMEC advisor will contact you shortly with course details and next steps.</p>
    <div class="mt-7 flex flex-col items-center gap-2">
      ${button({ href: site.whatsapp, label: "Continue on WhatsApp", variant: "outline", arrow: false, attrs: 'target="_blank" rel="noopener noreferrer"', lead: icon("message-circle", "size-4 text-accent") })}
      ${button({ label: "Send another request", variant: "ghost", size: "sm", arrow: false, attrs: "data-form-reset" })}
    </div>
  </div>
</div>`;
}

/* ------------------------------------------------------------------ enquiry section */
const contactPills = [
  { icon: "phone", label: site.phone, href: site.phoneHref },
  { icon: "mail", label: "Email us", href: `mailto:${site.email}` },
  { icon: "message-circle", label: "WhatsApp", href: site.whatsapp, external: true },
];

const enquirySection = `
<section id="enquire" class="section-y relative bg-white">
  <div class="container-x">
    <div class="relative isolate overflow-hidden rounded-[32px] text-white lg:rounded-[44px]">
      <div class="bg-navy-glow absolute inset-0 -z-10" aria-hidden="true">
        <div class="pattern-arabesque absolute inset-0 [mask-image:radial-gradient(60%_60%_at_15%_20%,black,transparent)]"></div>
        <div class="absolute -right-24 -top-24 size-[420px] rounded-full bg-accent/25 blur-[120px]"></div>
      </div>

      <div class="grid items-center gap-12 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14 xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-16 xl:p-16">
        <div>
          <p data-reveal class="eyebrow flex items-center gap-3 text-accent-300"><span class="h-px w-8 bg-accent-300/60" aria-hidden="true"></span>${esc(enquiry.eyebrow)}</p>
          <h2 data-reveal class="h-section mt-5 text-white">${esc(enquiry.heading)}</h2>
          <p data-reveal data-delay="0.05" class="lede mt-6 text-white/65">${esc(enquiry.text)}</p>
          <ul data-reveal data-delay="0.1" class="mt-8 space-y-3">
            ${enquiry.points.map((pt) => `<li class="flex items-start gap-3 text-[15.5px] text-white/85"><span class="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">${icon("check", "size-3.5", 'stroke-width="3"')}</span>${esc(pt)}</li>`).join("\n            ")}
          </ul>
          <div data-reveal data-delay="0.15" class="mt-8 flex flex-wrap gap-2">
            ${contactPills
              .map(
                (c) => `<a href="${c.href}" ${c.external ? 'target="_blank" rel="noopener noreferrer"' : ""} class="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2.5 text-[13.5px] font-medium text-white ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12]">${icon(c.icon, "size-4 text-accent-300")} ${esc(c.label)}</a>`,
              )
              .join("\n            ")}
          </div>
          <div data-reveal data-delay="0.2" class="relative mt-10 hidden overflow-hidden rounded-[24px] ring-1 ring-white/10 sm:block">
            <div class="relative aspect-[16/7]">
              ${photo(media.enquiry, { sizes: "(min-width: 1024px) 40vw, 90vw", ratio: 16 / 7, widths: [640, 960, 1280], cls: "absolute inset-0 size-full object-cover object-[50%_30%]" })}
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden="true"></div>
              <p class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy-950/60 px-3 py-1.5 text-[12.5px] font-medium text-white ring-1 ring-white/15 backdrop-blur-md">${flagUae("h-[10px] w-[15px] ring-white/20")} United Arab Emirates</p>
            </div>
          </div>
        </div>

        <div data-reveal data-delay="0.1" class="w-full max-w-[560px] lg:max-w-none">
          ${enquiryFormCard("enq", "enquiry", { headingLevel: "h3" })}
        </div>
      </div>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ final cta */
const finalCta = `
<section class="bg-navy-glow relative isolate overflow-hidden text-white">
  <div class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%] overflow-hidden" aria-hidden="true">
    ${photo(media.finalSkyline, { sizes: "100vw", ratio: 16 / 7, widths: [960, 1400, 1920], cls: "mask-skyline absolute inset-0 size-full object-cover object-bottom opacity-[0.22] saturate-[0.4]" })}
  </div>
  <div data-kenburns class="absolute inset-0 -z-10" aria-hidden="true">
    <div class="absolute -left-24 top-[-30%] size-[640px] rounded-full bg-accent/25 blur-[150px]"></div>
    <div class="absolute -right-24 bottom-[-30%] size-[600px] rounded-full bg-brand/40 blur-[150px]"></div>
  </div>
  <div class="container-x relative py-28 text-center sm:py-36 lg:py-44">
    <div data-reveal>
      <p class="eyebrow inline-flex items-center gap-3 text-white/70">
        <span class="size-1.5 rounded-full bg-accent-300" aria-hidden="true"></span>
        SMEC Technologies <span class="text-white/30" aria-hidden="true">|</span>
        <span class="inline-flex items-center gap-2">${flagUae("h-[11px] w-[17px] ring-white/25")} UAE</span>
      </p>
      <h2 class="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[0.98] tracking-[-0.045em]">Ready to become a <span class="text-gradient">data-driven professional?</span></h2>
      <p class="lede mx-auto mt-7 max-w-2xl text-white/70">This program is a great place to start your data analytics journey. Learn from experienced instructors through live interactive sessions and build your hands-on skills through projects and integrated labs.</p>
      <div class="mt-10 flex justify-center">
        ${button({ href: "#enquire", label: "Enquire Now", size: "lg" })}
      </div>
      <p class="mt-9 font-mono text-[11.5px] uppercase tracking-[0.16em] text-white/50">${esc(course.duration)} course · ${esc(course.certification)}</p>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ footer */
const socialIcons = {
  LinkedIn: `<svg viewBox="0 0 24 24" class="size-4" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>`,
  Instagram: `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>`,
  Facebook: `<svg viewBox="0 0 24 24" class="size-4" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4V14h2.8v8h3.3z"/></svg>`,
  YouTube: `<svg viewBox="0 0 24 24" class="size-4" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>`,
  X: `<svg viewBox="0 0 24 24" class="size-4" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.6L6 22H2.9l7.5-8.6L2.5 2h6.6l4.5 6L18.9 2zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20z"/></svg>`,
};

const courseLinks = [
  { label: "Course Snapshot", href: "#course" },
  { label: "What You Will Learn", href: "#learn" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Practical Learning", href: "#projects" },
  { label: "Tools & Technologies", href: "#tools" },
  { label: "Career Outcomes", href: "#career" },
  { label: "Certification", href: "#certification" },
];

const footerHeading = (t) => `<h3 class="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">${t}</h3>`;
const footerLink = (l) => `<li><a href="${l.href}" class="text-white/70 transition-colors hover:text-white">${esc(l.label)}</a></li>`;

export const footer = `
<footer class="relative bg-navy-950 text-white">
  <div class="container-x relative pb-10 pt-16 lg:pt-20">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-4">
        <a href="#top" aria-label="SMEC Technologies – home" class="inline-flex shrink-0 items-center">${logoImg("light", 36, 'loading="lazy"')}</a>
        <p class="mt-6 max-w-sm text-[14.5px] leading-relaxed text-white/60">${esc(about.paragraphs[0])}</p>
        <div class="mt-6 flex items-center gap-2">
          ${site.social
            .map(
              (s) =>
                `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" class="inline-flex size-10 items-center justify-center rounded-full text-white/70 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:ring-accent-300">${socialIcons[s.label] ?? socialIcons.X}</a>`,
            )
            .join("\n          ")}
        </div>
      </div>
      <div class="lg:col-span-2">
        ${footerHeading("Course")}
        <ul class="mt-5 space-y-3 text-[14.5px]">${courseLinks.map(footerLink).join("")}</ul>
      </div>
      <div class="lg:col-span-2">
        ${footerHeading("Important links")}
        <ul class="mt-5 space-y-3 text-[14.5px]">${nav.map(footerLink).join("")}${legal.map(footerLink).join("")}</ul>
      </div>
      <div class="lg:col-span-4">
        ${footerHeading("Contact")}
        <ul class="mt-5 space-y-3 text-[14.5px]">
          <li><a href="${site.phoneHref}" class="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white">${icon("phone", "size-4 text-accent-300")} ${esc(site.phone)}</a></li>
          <li><a href="mailto:${site.email}" class="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white">${icon("mail", "size-4 text-accent-300")} ${esc(site.email)}</a></li>
          <li><a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white">${icon("message-circle", "size-4 text-accent-300")} Chat on WhatsApp</a></li>
        </ul>
        <div class="mt-8">${button({ href: "#enquire", label: "Enquire Now", size: "sm" })}</div>
      </div>
    </div>
    <div class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
      <p>© <span data-year>${new Date().getFullYear()}</span> ${esc(site.name)}. All rights reserved.</p>
      <p class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <span class="size-1.5 rounded-full bg-accent-300" aria-hidden="true"></span>${esc(site.tagline)}
        <span class="inline-flex items-center gap-1.5 text-white/60">${flagUae("h-3 w-[18px] ring-white/25")} UAE</span>
      </p>
    </div>
  </div>
</footer>`;

/* ------------------------------------------------------------------ floating CTA */
export const floating = `
<div data-floating-bar class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_-12px_rgba(11,16,38,0.25)] backdrop-blur-xl md:hidden">
  <div class="flex items-center gap-2.5">
    ${button({ href: "#enquire", label: "Enquire Now", cls: "flex-1" })}
    <a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong text-accent transition-colors hover:bg-accent-50">${icon("message-circle", "size-5")}</a>
  </div>
</div>
<div data-floating-pill class="fixed bottom-6 right-6 z-40 hidden md:block">
  <div class="flex items-center gap-1.5 rounded-full bg-white/90 p-1.5 shadow-lift ring-1 ring-line backdrop-blur-xl">
    <a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="inline-flex size-11 items-center justify-center rounded-full text-accent transition-colors hover:bg-accent-50">${icon("message-circle", "size-5")}</a>
    ${button({ href: "#enquire", label: "Talk to an Advisor" })}
  </div>
</div>`;

export const convertBlock = `${faqSection}${enquirySection}${finalCta}`;
