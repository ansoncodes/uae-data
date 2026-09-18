# SMEC Technologies · UAE — Data Analytics with Prompt Engineering (static HTML)

Plain HTML / CSS / JavaScript version of the UAE course landing page. No framework and no build step is needed to host it:
upload the folder to any static host (cPanel, Netlify, Vercel static, S3, GitHub Pages, Nginx) and open `index.html`.

## Design direction

Premium SaaS + modern EdTech + UAE corporate: **deep navy + white + SMEC blue** (`#0071BC`, with SMEC indigo `#2E3192`
in gradients), Geist / Geist Mono typography, GCC photography, data-visualisation UI and restrained motion. The hero is
light; dark and light sections alternate further down to give the long course content breathing room. Colour tokens
(`accent`, `brand`, `navy`) and component styles live in `src/styles.css`.

Page story — attract → build trust → explain the course → show the curriculum → show career value → remove doubts → convert:

| # | Section | Id | Notes |
| --- | --- | --- | --- |
| 1 | Hero | `#top` | "Become a Data-Driven Professional", Enquire Now + View Curriculum, and the Book a Free Demo Class form |
| 2 | Course facts bar | — | Duration · Eligibility · Certification · UAE admissions, with small animated icons |
| 3 | Technology marquee | — | Python · SQL · Excel · R · Power BI · Tableau · Machine Learning · Gen AI |
| 4 | Curriculum explorer | `#curriculum` | Desktop: module navigation + panel with progress. Mobile: module accordions |
| 5 | Why SMEC | `#why` | Six large interactive cards in a staggered layout |
| 6 | What you will learn | `#learn` | Collect → Analyse → Visualise → Predict → Automate roadmap (all 9 course outcomes) |
| 7 | Learning experience | `#experience` | Live sessions, labs & projects, career preparation |
| 8 | Tools & technologies | `#tools` | 18 tools with category filter |
| 9 | Career outcomes | `#career` | UAE salary chart with source and disclaimer, your path with SMEC |
| 10 | Certification | `#certification` | Illustrative certificate with tilt + shine |
| 11 | FAQ | `#faq` | Accordion |
| 12 | Enquiry | `#enquire` | Navy panel: next-step copy and contact links beside the same demo-class form |
| 13 | Final CTA + footer | — | Dubai dusk skyline |

The page length is deliberately close to competing UAE course pages: each section answers a different question, and
nothing is repeated. Data kept in `src/content.mjs` but not currently rendered (the course overview and snapshot
counts, the ten key features, the About SMEC editorial and its statistics, the analytics pipeline, the seven-step
career roadmap, the job-role list, the accreditation list) is marked as such in the comments, so any of it can be
brought back without rewriting copy.

```
index.html                 the generated page (all content, semantic markup, JSON-LD, Open Graph)
assets/css/styles.css      compiled stylesheet (Tailwind utilities + design tokens, minified)
assets/js/main.js          behaviour: smooth scroll, header, hero sequence, reveals, counters,
                           roadmap, curriculum explorer, accordions, tools filter, forms, floating CTA
assets/vendor/             gsap.min.js, ScrollTrigger.min.js, lenis.min.js (local copies, no CDN)
assets/brand/              official logo (+ white variant), favicon, Open Graph image
src/content.mjs            ALL copy and data — edit this, then rebuild
src/sections/*.mjs         one file per page block (head, header, hero, learn, why, practice, career, convert)
src/lib/ui.mjs             shared markup helpers (buttons, icons, photos, section headers, counters)
src/generate.mjs           assembles the sections into index.html
src/styles.css             Tailwind v4 input: tokens, utilities, components, motion states
```

## Editing content

Edit `src/content.mjs` (or the section files), then rebuild:

```bash
npm install
```

```bash
npm run build
```

`npm run build:html` and `npm run build:css` run the two steps separately. Tailwind is used only at build time.
You can also edit `index.html` directly, but a rebuild overwrites hand edits.

## Lead forms

Two copies of the same **Book a Free Demo Class** form (`data-enquiry-form`): one in the hero (`hero-demo`) and one in
the enquiry section (`enquiry`). Both are rendered by `enquiryFormCard()` in `src/sections/convert.mjs`, so their fields
never drift apart. Copy (notice, pill, heading, text, button) lives in `heroForm` in `src/content.mjs`.

| Field | Input | Required |
| --- | --- | --- |
| Full Name | text | yes |
| Email | email | no |
| Contact Number | country-code select (+971 UAE first) + number | yes |
| Location | text | yes |

The page covers one programme, so there is no course selector: the course title is sent as a hidden `course` field.
Validation, a loading state and a success animation are built in.

To deliver leads, set `data-endpoint` on the form (in `src/sections/convert.mjs`, or in `index.html`) to a URL that
accepts a JSON POST — Formspree/Basin, a Zapier or Make webhook, or your CRM. The payload carries the field values plus
`course`, `form` (`hero-demo` or `enquiry`), `phone` prefixed with the dial code, `region`, `receivedAt` and `source`.
While the endpoint is empty the form simulates a successful send and logs the lead to the browser console.

## Motion & accessibility

- GSAP + ScrollTrigger + Lenis: hero text reveal, fade/slide section reveals, count-up statistics, subtle parallax,
  3–5 px card hover lift, smooth accordions, infinite marquee, button arrow movement, solid sticky header.
- `prefers-reduced-motion` disables all animation and smooth scrolling; content is shown in its final state.
- Content is complete without JavaScript: statistics are rendered with their real values, every curriculum module and
  accordion panel is readable, and motion is layered on top.
- Semantic landmarks, skip link, labelled form fields, `aria-expanded` / `aria-controls` / `aria-pressed` on controls.

## Before launch — decisions to confirm

- **"Book a Free Demo Class"** is carried over from the existing SMEC course site. Confirm free demo classes apply to
  this programme, or change `heroForm.heading` / `heroForm.text`.
- **Testimonials are not shown.** The four quotes in `src/content.mjs` are placeholders (`placeholder: true`) and are
  never rendered. Add genuine learner quotes, with consent and without `placeholder`, and a testimonials block appears
  after the certification section automatically. `npm run build` prints a note while placeholders remain.
- **Career roles** are named only in the FAQ, and only the ones this curriculum supports: Data Analyst, Business
  Analyst, Data Scientist, Machine Learning Specialist and AI Specialist. SMEC's full list stays in `jobRoles`,
  unused — roles needing MLOps, Hadoop/Spark, NLP or computer vision are deliberately left out.
- **Statistics** (`about.stats`: 25 years, 2,000+ learning students, 50,000+ placed students, 50+ mentors,
  200+ employees, 50+ courses) come from existing SMEC material. They are no longer shown as a section; the hero keeps
  "25 Years of Excellence" and "NSDC Approved Training Partner". Confirm both are current.
- **"Admissions open for UAE learners"** (facts bar and forms) is editorial; replace it with the real batch date once
  SMEC confirms one (`infoBar` and `heroForm.notice`).
- **Module durations** are not specified, so none are shown. Add `duration: "…"` to a module in `curriculum` to show one.
- **Illustrative visuals** — the salary chart carries its source and disclaimer, and the certificate is marked as an
  illustrative design.
- **Salary range** — the original Indian LPA figures are kept in `salaryProgressionIndia` but not shown. The chart uses
  `salaryUae` (gross AED per month, Elite Recruitments' *UAE Data Analytics Salary Guide 2026*), with source and
  disclaimer under the chart. Self-reported aggregators report lower averages (roughly AED 5,300–5,900 per month);
  edit `salaryUae` if SMEC prefers the conservative view.
- **Photography** — all photos are from Pexels (free for commercial use, no attribution required), listed in `media`
  in `src/content.mjs`. Replace with SMEC's own photography when available.
- **UAE cues** are deliberately subtle: small flags in the hero eyebrow, facts bar, forms and footer, emirate names in
  sample data, and a faint eight-point-star motif in two dark sections.
- **Site URL** for canonical / Open Graph tags: `SITE_URL` in `src/sections/head.mjs`.
- **Privacy Policy / Terms** footer links point to `#` until real pages exist.
- **Logos** are the official SMEC lockups (`assets/brand/`). Tool logos are simplified inline SVG marks.
