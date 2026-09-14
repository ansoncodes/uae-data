/* SMEC Technologies · UAE — site behaviour
   Dependencies (loaded before this file): gsap, ScrollTrigger, Lenis.
   Content is complete in the HTML; everything here is enhancement. */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const EASE = "expo.out";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof gsap !== "undefined";
  const hasST = hasGsap && typeof ScrollTrigger !== "undefined";
  const motion = hasGsap && !reduced;
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const HEADER_OFFSET = 76;

  if (hasST) gsap.registerPlugin(ScrollTrigger);
  const refresh = () => hasST && ScrollTrigger.refresh();
  const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

  /** Run `cb` once when `el` enters the viewport. */
  function onceInView(el, cb, rootMargin = "0px 0px -12% 0px") {
    if (!el) return;
    if (!("IntersectionObserver" in window)) return cb(el);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          cb(e.target);
        }),
      { rootMargin, threshold: 0 },
    );
    io.observe(el);
  }

  // Without GSAP (or with reduced motion) show every animated element in its final state.
  if (!motion) {
    $$("[data-reveal],[data-reveal-item],[data-hero-fade],[data-bar-label],[data-milestone],[data-cert]").forEach((el) => (el.style.opacity = "1"));
    $$("[data-hero-line],[data-bar],[data-draw-x]").forEach((el) => (el.style.transform = "none"));
  }

  /* ------------------------------------------------------------ smooth scroll */
  let lenis = null;
  if (motion && typeof Lenis !== "undefined") {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.95 });
    if (hasST) lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  function scrollToEl(el, onComplete) {
    if (lenis) return lenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.3, onComplete });
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    if (onComplete) setTimeout(onComplete, reduced ? 0 : 700);
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    // Links marked data-focus-form land on a form and focus its first field.
    const form = a.hasAttribute("data-focus-form") && (el.matches("[data-enquiry-form]") ? el : $("[data-enquiry-form]", el));
    scrollToEl(el, form ? () => $("[name='name']", form)?.focus({ preventScroll: true }) : undefined);
    history.replaceState(null, "", `#${id}`);
  });

  /* ------------------------------------------------------------ header */
  const header = $("[data-header]");
  const menu = $("[data-mobile-menu]");
  let menuOpen = false;

  const paintHeader = () => header?.classList.toggle("is-solid", window.scrollY > 40 || menuOpen);
  window.addEventListener("scroll", paintHeader, { passive: true });
  paintHeader();

  const navLinks = $$("[data-nav-link]");
  const navSections = navLinks.map((a) => document.getElementById(a.dataset.navLink)).filter(Boolean);
  if (navSections.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.navLink === e.target.id));
        }),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navSections.forEach((s) => io.observe(s));
  }

  function openMenu() {
    if (!menu || menuOpen) return;
    menuOpen = true;
    menu.hidden = false;
    $("[data-menu-open]")?.setAttribute("aria-expanded", "true");
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    paintHeader();
    if (motion) {
      gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo($$("[data-menu-item]", menu), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.05, delay: 0.08, clearProps: "transform" });
    }
    $("[data-menu-close]", menu)?.focus();
  }
  function closeMenu() {
    if (!menu || !menuOpen) return;
    menuOpen = false;
    $("[data-menu-open]")?.setAttribute("aria-expanded", "false");
    lenis?.start();
    document.documentElement.style.overflow = "";
    const done = () => {
      menu.hidden = true;
      paintHeader();
    };
    motion ? gsap.to(menu, { opacity: 0, duration: 0.25, onComplete: done }) : done();
  }
  $("[data-menu-open]")?.addEventListener("click", openMenu);
  $("[data-menu-close]")?.addEventListener("click", closeMenu);
  if (menu) $$("a", menu).forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

  /* ------------------------------------------------------------ hero */
  const hero = $("[data-hero]");
  if (hero && motion) {
    const staged = ["data-hero-form", "data-infobar"];
    const fades = $$("[data-hero-fade]").filter((el) => !staged.some((a) => el.hasAttribute(a)));
    const eyebrow = fades.shift();
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 0.1);
    // `y: 0` stops GSAP reading the CSS start offset as pixels on top of yPercent.
    tl.fromTo($$("[data-hero-line]", hero), { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.15, stagger: 0.1 }, 0.2)
      .fromTo(fades, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, clearProps: "transform" }, 0.55)
      .fromTo("[data-hero-form]", { opacity: 0, y: 40, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, clearProps: "transform" }, 0.35)
      .fromTo("[data-infobar]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.1, clearProps: "transform" }, 0.9);
  }

  /* ------------------------------------------------------------ scroll reveals */
  function reveal(el) {
    if (el.hasAttribute("data-reveal-group")) {
      const items = $$("[data-reveal-item]", el);
      if (!items.length) return;
      gsap.fromTo(
        items,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, ease: EASE, stagger: +(el.dataset.stagger || 0.08), delay: +(el.dataset.delay || 0), clearProps: "transform" },
      );
    } else {
      gsap.fromTo(el, { opacity: 0, y: +(el.dataset.y ?? 28) }, { opacity: 1, y: 0, duration: 0.9, ease: EASE, delay: +(el.dataset.delay || 0), clearProps: "transform" });
    }
  }
  if (motion) $$("[data-reveal], [data-reveal-group]").forEach((el) => onceInView(el, reveal));

  /* ------------------------------------------------------------ counters (real values are already in the markup) */
  if (motion) {
    $$("[data-counter]").forEach((el) =>
      onceInView(el, () => {
        const num = $(".tabular-nums", el);
        const target = +el.dataset.counter || 0;
        if (!num || !target) return;
        const o = { v: 0 };
        num.textContent = "0";
        gsap.to(o, { v: target, duration: 1.9, ease: EASE, onUpdate: () => (num.textContent = fmt(Math.round(o.v))) });
      }),
    );
  }

  /* ------------------------------------------------------------ parallax */
  if (motion && hasST) {
    $$("[data-parallax]").forEach((el) => {
      const d = +el.dataset.parallax || 30;
      const trigger = el.closest("[data-parallax-trigger]") || el;
      gsap.fromTo(el, { y: -d }, { y: d, ease: "none", scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }

  /* ------------------------------------------------------------ desktop-only scroll choreography */
  const journey = $("[data-journey]");
  const journeySteps = journey ? $$("[data-journey-step]", journey) : [];
  const lightSteps = (p) => journeySteps.forEach((s, i) => s.classList.toggle("is-lit", p >= i / Math.max(1, journeySteps.length - 1) - 0.001));

  if (motion && hasST) {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Why SMEC: columns drift at slightly different speeds.
      $$("[data-why-col]").forEach((el) => {
        const c = +el.dataset.whyCol;
        if (!c) return;
        gsap.fromTo(el, { y: c * 28 }, { y: -c * 28, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true } });
      });
      // What you'll learn: the rail fills with scroll and lights each stage as it passes.
      const line = journey && $("[data-journey-line]", journey);
      if (line) {
        gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left",
          scrollTrigger: { trigger: journey, start: "top 72%", end: "bottom 62%", scrub: 0.6 },
          onUpdate() { lightSteps(this.progress()); },
        });
      }
    });
    mm.add("(max-width: 1023.98px)", () => {
      journeySteps.forEach((s) => onceInView(s, () => s.classList.add("is-lit"), "0px 0px -30% 0px"));
    });
  } else {
    journeySteps.forEach((s) => s.classList.add("is-lit"));
  }

  $$("[data-draw-x]:not([data-journey-line])").forEach((el) =>
    onceInView(el, () => motion && gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: EASE, transformOrigin: "left" })),
  );

  /* ------------------------------------------------------------ card spotlight */
  if (fineHover) {
    $$("[data-spotlight]").forEach((el) =>
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }),
    );
  }

  /* ------------------------------------------------------------ accordions (units, FAQ) */
  function expand(panel, done) {
    if (!motion) return done?.();
    gsap.killTweensOf(panel);
    gsap.fromTo(panel, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.55, ease: EASE, onComplete: () => (gsap.set(panel, { clearProps: "height,opacity" }), done?.()) });
  }
  function collapse(panel, done) {
    if (!motion) return done?.();
    gsap.killTweensOf(panel);
    gsap.to(panel, { height: 0, opacity: 0, duration: 0.45, ease: EASE, onComplete: () => (done?.(), gsap.set(panel, { clearProps: "height,opacity" })) });
  }

  function setAcc(trigger, open) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    const item = trigger.closest("[data-acc-item]");
    if (!panel) return;
    trigger.setAttribute("aria-expanded", String(open));
    if (open) {
      item?.classList.add("is-open");
      panel.hidden = false;
      expand(panel, refresh);
      const chips = $$("li", panel).slice(0, 36);
      if (motion && chips.length) gsap.fromTo(chips, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45, ease: EASE, stagger: 0.012, delay: 0.08, clearProps: "opacity,transform" });
    } else {
      item?.classList.remove("is-open");
      collapse(panel, () => ((panel.hidden = true), refresh()));
    }
  }

  $$("[data-accordion]").forEach((group) => {
    const triggers = $$("[data-acc-trigger]", group).filter((t) => t.closest("[data-accordion]") === group);
    triggers.forEach((trigger) =>
      trigger.addEventListener("click", () => {
        const open = trigger.getAttribute("aria-expanded") !== "true";
        if (open && group.dataset.accordion === "single") triggers.forEach((t) => t !== trigger && t.getAttribute("aria-expanded") === "true" && setAcc(t, false));
        setAcc(trigger, open);
      }),
    );
  });

  /* ------------------------------------------------------------ curriculum explorer */
  const cur = $("[data-curriculum]");
  if (cur) {
    const modules = $$("[data-module]", cur);
    const tabs = $$("[data-module-tab]", cur);
    const progress = $("[data-module-progress]", cur);
    const count = $("[data-module-count]", cur);
    let active = 0;

    const paintTabs = () => {
      tabs.forEach((t) => {
        const on = +t.dataset.moduleTab === active;
        t.classList.toggle("is-active", on);
        on ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current");
      });
      if (progress) progress.style.width = `${((active + 1) / modules.length) * 100}%`;
      if (count) count.textContent = String(active + 1).padStart(2, "0");
    };

    function showModule(i, scroll) {
      if (i === active || !modules[i]) return;
      modules[active].classList.remove("is-active");
      active = i;
      const next = modules[i];
      next.classList.add("is-active");
      paintTabs();
      if (motion) gsap.fromTo(next, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: EASE, clearProps: "opacity,transform" });
      if (scroll && cur.getBoundingClientRect().top < 0) scrollToEl(cur);
      refresh();
    }

    tabs.forEach((t) => t.addEventListener("click", () => showModule(+t.dataset.moduleTab)));
    $$("[data-module-go]", cur).forEach((b) => b.addEventListener("click", () => showModule(+b.dataset.moduleGo, true)));

    // Below lg each module is an accordion (several can be open).
    modules.forEach((m) => {
      const toggle = $("[data-module-toggle]", m);
      const body = $("[data-module-body]", m);
      toggle?.addEventListener("click", () => {
        const open = !m.classList.contains("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        if (open) {
          m.classList.add("is-open");
          expand(body, refresh);
        } else {
          collapse(body, () => (m.classList.remove("is-open"), refresh()));
        }
      });
    });
  }

  /* ------------------------------------------------------------ data visuals */
  $$("[data-bars]").forEach((el) =>
    onceInView(el, () => {
      if (!motion) return;
      gsap.fromTo($$("[data-bar]", el), { scaleY: 0 }, { scaleY: 1, duration: 0.95, ease: EASE, stagger: 0.08, delay: 0.1, transformOrigin: "bottom" });
      const labels = $$("[data-bar-label]", el);
      if (labels.length) gsap.fromTo(labels, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: EASE, stagger: 0.08, delay: 0.45 });
    }),
  );

  onceInView($("[data-milestones]"), (el) => {
    if (motion) gsap.fromTo($$("[data-milestone]", el), { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.6, ease: EASE, stagger: 0.09, delay: 0.1, clearProps: "transform" });
  });

  // Code cards "type" in line by line.
  if (motion) {
    $$("[data-typing]").forEach((pre) => {
      const lines = $$(".code-line", pre);
      if (!lines.length) return;
      gsap.set(lines, { clipPath: "inset(0 100% 0 0)" });
      onceInView(pre, () => gsap.to(lines, { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "steps(26)", stagger: 0.32, delay: 0.25 }));
    });
  }

  /* ------------------------------------------------------------ tools filter */
  const filters = $$("[data-tool-filter]");
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      const cat = btn.dataset.toolFilter;
      filters.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      $$("[data-tool]").forEach((t) => t.classList.toggle("is-dim", cat !== "all" && !(t.dataset.cat || "").split(" ").includes(cat)));
    }),
  );

  /* ------------------------------------------------------------ certificate */
  onceInView($("[data-cert]"), (el) => {
    if (!motion) return;
    gsap.fromTo(el, { opacity: 0, y: 40, rotateX: 14 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.1, ease: EASE, clearProps: "transform" });
    const shine = $("[data-shine]", el);
    if (shine) gsap.fromTo(shine, { xPercent: -100, x: 0, rotate: 12 }, { xPercent: 420, x: 0, rotate: 12, duration: 1.6, ease: EASE, delay: 0.6 });
  });
  const tilt = $("[data-tilt]");
  if (tilt && motion && fineHover) {
    tilt.addEventListener("pointermove", (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    tilt.addEventListener("pointerleave", () => (tilt.style.transform = ""));
  }

  onceInView($("[data-kenburns]"), (el) => motion && gsap.to(el, { scale: 1.1, duration: 28, ease: "none" }), "0px");

  /* ------------------------------------------------------------ demo-class forms (hero + enquiry section) */
  const VALIDATORS = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your full name"),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address"),
    phone: (v) => (/^[0-9\s-]{6,15}$/.test(v.trim()) ? "" : "Please enter a valid phone number"),
    location: (v) => (v.trim().length >= 2 ? "" : "Please enter your location"),
  };

  function initForm(form) {
    const block = form.closest("[data-form-block]") || form.parentElement;
    const success = $("[data-form-success]", block);
    const errorBox = $("[data-form-error]", form);
    const submitBtn = $("[data-submit]", form);
    const fields = $$("[data-validate]", form);

    const messageFor = (el) => {
      const value = el.value || "";
      if (!value.trim()) return el.required ? el.dataset.emptyMessage || VALIDATORS[el.dataset.validate]?.("") || "This field is required" : "";
      return VALIDATORS[el.dataset.validate]?.(value) ?? "";
    };

    function setError(el, msg) {
      const box = $(`[data-error-for="${el.id}"]`, form);
      msg ? el.setAttribute("aria-invalid", "true") : el.removeAttribute("aria-invalid");
      if (!box) return;
      box.textContent = msg;
      box.hidden = !msg;
      if (msg && motion) gsap.fromTo(box, { opacity: 0, y: -4 }, { opacity: 1, y: 0, duration: 0.3, clearProps: "transform" });
    }

    fields.forEach((el) => {
      const revalidate = () => el.getAttribute("aria-invalid") && setError(el, messageFor(el));
      el.addEventListener("input", revalidate);
      el.addEventListener("change", revalidate);
    });

    function showSuccess(firstName) {
      if (!success) return;
      const nameEl = $("[data-success-name]", success);
      if (nameEl) nameEl.textContent = firstName ? `, ${firstName}` : "";
      success.style.minHeight = `${form.offsetHeight}px`; // keep the card the same height

      const done = () => {
        form.hidden = true;
        success.hidden = false;
        refresh();
        if (!motion) return;
        gsap.fromTo(success, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, ease: EASE, clearProps: "transform" });
        const check = $("[data-success-check]", success);
        if (check) {
          const len = check.getTotalLength();
          gsap.fromTo(check, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 0.7, ease: EASE, delay: 0.2 });
        }
        const ring = $("[data-success-ring]", success);
        if (ring) gsap.timeline().fromTo(ring, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 0.6, duration: 0.6, ease: "power2.out" }).to(ring, { scale: 1.35, opacity: 0, duration: 0.6, ease: "power2.out" });
        const dots = $$("[data-burst] span", success);
        dots.forEach((d, i) => {
          const a = (i / dots.length) * Math.PI * 2;
          gsap.fromTo(d, { x: 0, y: 0, opacity: 1, scale: 1 }, { x: Math.cos(a) * 64, y: Math.sin(a) * 64, opacity: 0, scale: 0.4, duration: 1, ease: "power3.out", delay: 0.3 });
        });
      };
      motion ? gsap.to(form, { opacity: 0, y: -8, duration: 0.35, onComplete: () => (gsap.set(form, { clearProps: "opacity,transform" }), done()) }) : done();
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (errorBox) errorBox.hidden = true;

      let firstBad = null;
      fields.forEach((el) => {
        const msg = messageFor(el);
        setError(el, msg);
        if (msg && !firstBad) firstBad = el;
      });
      if (firstBad) return firstBad.focus();

      const data = Object.fromEntries(new FormData(form).entries());
      if (data.company) return; // honeypot

      const payload = {
        ...data,
        phone: `${data.dialCode || ""} ${data.phone || ""}`.trim(),
        form: form.dataset.formName || "enquiry",
        region: "UAE",
        receivedAt: new Date().toISOString(),
        source: "uae-landing-page",
      };
      delete payload.company;

      const label = submitBtn && $("[data-btn-label]", submitBtn);
      const labelText = label?.textContent;
      if (submitBtn) {
        submitBtn.disabled = true;
        if (label) label.textContent = "Sending…";
      }

      try {
        const endpoint = form.dataset.endpoint;
        if (endpoint) {
          const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
          if (!res.ok) throw new Error(`Request failed (${res.status})`);
        } else {
          // No endpoint configured yet: simulate delivery so the flow can be reviewed.
          await new Promise((r) => setTimeout(r, 1100));
          console.info("[enquire] lead (no data-endpoint configured):", payload);
        }
        showSuccess((data.name || "").trim().split(" ")[0]);
        form.reset();
      } catch (err) {
        console.error(err);
        if (errorBox) errorBox.hidden = false;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (label) label.textContent = labelText;
        }
      }
    });

    $("[data-form-reset]", block)?.addEventListener("click", () => {
      if (success) {
        success.hidden = true;
        success.style.minHeight = "";
      }
      form.hidden = false;
      refresh();
      if (motion) gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      fields[0]?.focus();
    });
  }

  $$("[data-enquiry-form]").forEach(initForm);

  /* ------------------------------------------------------------ floating CTA */
  const bar = $("[data-floating-bar]");
  const pill = $("[data-floating-pill]");
  if (bar || pill) {
    let pastHero = false;
    let blocked = false;
    let shown = null;

    const paintFloating = () => {
      const show = pastHero && !blocked;
      if (show === shown) return;
      shown = show;
      [bar, pill].forEach((el) => el?.classList.toggle("is-visible", show));
      if (!motion) {
        if (bar) bar.style.transform = show ? "none" : "translateY(90px)";
        if (pill) {
          pill.style.opacity = show ? "1" : "0";
          pill.style.transform = show ? "none" : "translateY(16px) scale(0.96)";
        }
        return;
      }
      if (bar) gsap.to(bar, { y: show ? 0 : 90, duration: 0.5, ease: EASE, overwrite: "auto" });
      if (pill) gsap.to(pill, { opacity: show ? 1 : 0, y: show ? 0 : 16, scale: show ? 1 : 0.96, duration: 0.5, ease: EASE, overwrite: "auto" });
    };

    window.addEventListener("scroll", () => ((pastHero = window.scrollY > 700), paintFloating()), { passive: true });

    const targets = [$("[data-hero-form]"), document.getElementById("enquire"), $("footer")].filter(Boolean);
    if (targets.length && "IntersectionObserver" in window) {
      const visible = new Set();
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
          blocked = visible.size > 0;
          paintFloating();
        },
        { threshold: 0.05 },
      );
      targets.forEach((t) => io.observe(t));
    }
    paintFloating();
  }

  /* ------------------------------------------------------------ misc */
  const year = $("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
  window.addEventListener("load", refresh);
})();
