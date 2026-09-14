import { course, faqs, hero, site } from "../content.mjs";
import { esc } from "../lib/ui.mjs";

export const SITE_URL = "https://smectechnologies.co.in"; // update to the deployed URL (used for canonical + Open Graph)

const TITLE = `${course.title} | SMEC Technologies UAE`;
const DESCRIPTION = `${hero.valueProp} ${course.certification}.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      sameAs: site.social.map((s) => s.href),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "admissions",
        areaServed: ["AE", "IN"],
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "Course",
      name: course.title,
      description: course.description,
      provider: { "@id": `${SITE_URL}/#org` },
      educationalCredentialAwarded: course.title,
      teaches: course.outcomes,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export const head = `<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(TITLE)}</title>
  <meta name="description" content="${esc(DESCRIPTION)}">
  <meta name="keywords" content="Data Analytics course UAE, Prompt Engineering course Dubai, Professional Certificate in Data Analytics, SMEC Technologies UAE, Power BI Tableau training UAE, Python data analytics certification">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0a0f2a">
  <link rel="canonical" href="${SITE_URL}/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_AE">
  <meta property="og:site_name" content="SMEC Technologies">
  <meta property="og:title" content="${esc(TITLE)}">
  <meta property="og:description" content="${esc(DESCRIPTION)}">
  <meta property="og:url" content="${SITE_URL}/">
  <meta property="og:image" content="${SITE_URL}/assets/brand/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(TITLE)}">
  <meta name="twitter:description" content="${esc(DESCRIPTION)}">
  <meta name="twitter:image" content="${SITE_URL}/assets/brand/og-image.png">
  <link rel="icon" type="image/png" href="assets/brand/favicon.png">
  <link rel="apple-touch-icon" href="assets/brand/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.pexels.com">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/styles.css">
  <script>document.documentElement.classList.replace("no-js", "js");</script>
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>`;
