/**
 * Generates index.html from src/content.mjs.
 * Run: node src/generate.mjs   (then build CSS with Tailwind – see package.json)
 *
 * Page story: attract → build trust → explain the course → show the curriculum →
 * show career value → remove doubts → convert. Each block lives in src/sections/.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { testimonials } from "./content.mjs";
import { ROOT } from "./lib/ui.mjs";
import { head } from "./sections/head.mjs";
import { header } from "./sections/header.mjs";
import { heroBlock } from "./sections/hero.mjs"; //          hero · course facts bar · technology marquee
import { courseBlock } from "./sections/course.mjs"; //      course snapshot · about SMEC · why SMEC
import { learnBlock } from "./sections/learn.mjs"; //        what you will learn · curriculum explorer
import { practiceBlock } from "./sections/practice.mjs"; //  practical learning · learning experience · tools
import { careerBlock } from "./sections/career.mjs"; //      career outcomes · certification · trust
import { convertBlock, floating, footer } from "./sections/convert.mjs"; // FAQ · enquiry · final CTA

const html = `${head}
<body>
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-lift">Skip to content</a>
${header}
<main id="main">
${heroBlock}
${courseBlock}
${learnBlock}
${practiceBlock}
${careerBlock}
${convertBlock}
</main>
${footer}
${floating}

<script src="assets/vendor/gsap.min.js" defer></script>
<script src="assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="assets/vendor/lenis.min.js" defer></script>
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;

const placeholders = testimonials.filter((t) => t.placeholder).length;
if (placeholders) {
  console.warn(`NOTE: ${placeholders} placeholder testimonial(s) in src/content.mjs are not rendered. Add genuine learner quotes (without \`placeholder: true\`) to show a testimonials block.`);
}
writeFileSync(join(ROOT, "index.html"), html, "utf8");
console.log(`index.html written (${(html.length / 1024).toFixed(1)} KB)`);
