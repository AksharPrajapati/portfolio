# Portfolio Audit — Issues, Enhancements & New Features

> Audited: 2026-06-06 | Branch: main | Stack: Next.js 16 · React 19 · Framer Motion 12 · Tailwind CSS 4
> **Last updated: 2026-06-06** — B-1, B-2, B-5 · E-1, E-5 · F-1, F-2, F-3, F-5 · all M · all P implemented ✓

---

## BUGS / CURRENT ISSUES

### B-1 · Dead TypeScript path alias
**File:** `tsconfig.json` line 22
`@/*` maps to `./src/*` but no `src/` directory exists. The alias is completely broken. All files use relative imports, so nothing breaks at runtime, but IDE auto-imports and any future `@/` usage will fail silently.
**Fix:** Change to `"@/*": ["./*"]` or remove the paths entry entirely.

### B-2 · Placeholder site URL never updated
**File:** `data/site.ts` line 12
`siteConfig.url` = `"https://example.com"` — this will produce wrong canonical URLs and broken Open Graph `og:url` tags once you add proper metadata.
**Fix:** Replace with the real deployed URL.

### B-3 · Profile image zooms OUT on hover (counterintuitive)
**File:** `components/hero/hero-profile-orbit.tsx` line 171
`className="... scale-110 group-hover:scale-100"` — the image starts at 110% and shrinks to 100% on hover. A viewer expects the photo to zoom IN on hover, not out.
**Fix:** Swap to `scale-100 group-hover:scale-110` for the natural magnify-on-hover feel.

### B-4 · Mobile menu does not trap keyboard focus
**File:** `components/layout/navbar.tsx` line 139–191
When the mobile menu is open, keyboard users can `Tab` past the menu into hidden page content behind it. The menu uses `pointer-events-none` and `aria-hidden` when closed but has no focus-trap when open.
**Fix:** Add a focus-trap (via `focus-trap-react` or a small manual implementation) that keeps focus inside the menu while it's open and returns focus to the toggle button on close.

### B-5 · No custom 404 page
No `app/not-found.tsx` exists. Next.js shows its bare default error page on any unmatched route.
**Fix:** Create `app/not-found.tsx` with the same design language (dark background, nav, accent colours, "Go home" button).

### B-6 · `section-reveal.tsx` is dead code
**File:** `components/ui/section-reveal.tsx`
This component is defined but imported nowhere — every section implements its own Framer Motion reveal inline. It will cause confusion for anyone adding a new section.
**Fix:** Either adopt it consistently across sections or delete it.

### B-7 · Duplicate heading component patterns across sections
`AboutSection` (inline `<h2>` + `<p>`) and `ProjectsSection`/`ExperienceSection` (use `<SectionTitle>`) differ. `section-header.tsx` also exists but is unused. The inconsistency makes the codebase harder to maintain.
**Fix:** Pick one heading component (`SectionTitle` or `SectionHeader`) and use it in every section, then delete the other.

### B-8 · Scroll-down arrow hidden on mobile
**File:** `sections/hero.tsx` line 178
`className="... hidden md:flex"` — the bounce arrow pointing to the About section is completely hidden on mobile. Mobile users get no visual cue to scroll.
**Fix:** Show a smaller version on mobile (e.g., `flex md:flex`), or use a different position so it doesn't overlap content.

---

## ENHANCEMENTS

### E-1 · Dark / Light theme toggle missing
`ThemeProvider` is wired up (`attribute: "class"`, `enableSystem: true`, `defaultTheme: "dark"`) but there is no toggle button anywhere in the UI. Users cannot switch themes manually — they are locked to their OS preference.
**Add:** A small sun/moon icon button in the navbar (desktop pill + mobile menu footer), using `useTheme()` from `next-themes`.

### E-2 · Projects section is too thin for 5+ years of experience
**File:** `data/projects.ts`
Only 2 projects are listed (HIRIN and Crypto Data Processing). For a senior engineer this is the weakest section of the portfolio — it suggests limited output.
**Add:** At minimum 2–3 more projects (even if smaller: personal tools, open-source contributions, side projects). Also add `github` and `live` URL fields per project so visitors can explore.

### E-3 · Project cards have no clickable links
**File:** `sections/projects.tsx`
The project cards have no links at all — no GitHub, no live demo, no case study. They are purely static text blocks.
**Add:** `github` and/or `liveUrl` fields to the project data type, with icon-link buttons at the bottom of each card.

### E-4 · Contact section is mailto-only (users leave the site)
**File:** `sections/contact.tsx`
The only action is a `mailto:` link. On mobile this often opens a mail app the user has never configured.
**Add:** A minimal inline contact form (Name, Email, Message) powered by Formspree, Resend, or a Next.js Route Handler. Keep the mailto as a fallback. This is the #1 conversion improvement.

### E-5 · No scroll progress indicator
Long single-page portfolios benefit from a thin accent-coloured progress bar at the top of the viewport that fills as the user scrolls. It orients the visitor and gives a polished feel. Implementable with ~30 lines using Framer Motion `useScroll` + `useSpring`.

### E-6 · Experience timeline could show/hide full descriptions
**File:** `sections/experience.tsx`
All four job descriptions are always fully expanded. Adding a collapsed-by-default state with an "expand" toggle would make the section scannable without losing detail. The current layout gets very tall on mobile.

### E-7 · Hero intro text is generic
**File:** `data/site.ts` line 6 (`tagline`)
"I build scalable fullstack products — from Next.js interfaces and NestJS APIs to cloud deployments and high-performance data systems." Every senior full-stack engineer says this. Add one concrete differentiator: a number (e.g. "3× API speedups"), a named product, or a specific domain angle.

### E-8 · Footer is near-empty
**File:** `components/layout/footer.tsx`
The footer only contains copyright + "Built with…" text. It should have at minimum: navigation links (or social links), a back-to-top button, and your email/location for quick scanning. It's prime real estate that currently adds nothing.

### E-9 · About section journey text truncated in card
**File:** `sections/about.tsx` line 63–71
Only `paragraphs[0]` is displayed with its highlight text. The second paragraph (`paragraphs[1]`) is shown in smaller muted text and there may be more paragraphs in the data. If there is more to your story, consider expanding the card height or adding a "Read more" toggle.

### E-10 · No "View source" or GitHub link near projects
Recruiters and senior engineers will want to see code. Add a subtle "View on GitHub" link or a link to your GitHub profile from the Projects section header.

---

## NEW FEATURES

### F-1 · Open Graph / Social sharing meta image
**File:** `app/layout.tsx`
There is no `og:image`, `og:url`, `twitter:card`, or `twitter:image` in the metadata. When someone shares your URL on LinkedIn or Slack, it shows a blank preview.
**Add:** An `opengraph-image.tsx` (Next.js static OG generation) or a static `/public/og.png` (1200×630, dark background, your name, role, accent colours). Also populate `openGraph` and `twitter` in the Metadata object.

### F-2 · robots.txt + sitemap.xml
No `robots.txt` or sitemap exists. Google cannot confirm it is allowed to crawl the site.
**Add:** `public/robots.txt` (allow all, point to sitemap) and `app/sitemap.ts` returning the single-page URL with `lastModified`.

### F-3 · Vercel Analytics (zero-config, free)
Since this is a Next.js project likely deployed on Vercel, you can add `@vercel/analytics` in one line (`<Analytics />` in `layout.tsx`). Gives you real visitor data — country, referrers, page views — with zero performance cost.

### F-4 · Command palette / keyboard navigation (Cmd+K)
Modern developer portfolios increasingly include a `Cmd+K` palette that lets visitors jump to any section, open social links, or download the resume without scrolling. Libraries like `cmdk` make this ~100 lines of code. It signals you care about developer experience.

### F-5 · "Currently available for work" availability banner or badge
Your status indicator (the emerald dot on the profile photo) is tiny and easy to miss. Add a subtle dismissible banner or a visible "Open to work" badge near the hero CTA that links to the Contact section. This is the most important signal for recruiters.

### F-6 · Project detail pages
For the 2 (or more) flagship projects, add individual pages (`/work/hirin`, `/work/crypto-data`) with: problem statement, your specific contributions, architecture diagram or screenshots, metrics/results, and tech stack breakdown. These are far more convincing than a two-line card.

### F-7 · Testimonials / social proof section
Even one or two short quotes from managers or colleagues (with names + LinkedIn links) dramatically increases trust for senior roles. Add a minimal "What people say" section between Projects and Experience.

### F-8 · Skills / proficiency breakdown (visual)
The tech stack grid in About shows 12 icons. It doesn't differentiate between "expert" (React, Node.js) and "proficient" (GraphQL, Redis). A simple grouping (e.g., Primary, Secondary, Tools) would give recruiters clearer signal.

---

## PERFORMANCE

### P-1 · All sections load eagerly with no dynamic imports
**File:** `app/page.tsx`
All 5 sections + Footer are imported statically. The below-fold sections (Projects, Experience, Contact) add to initial bundle even though the user sees only the hero first.
**Fix:** Use `dynamic(() => import('../sections/projects'), { ssr: false })` for sections below the fold.

### P-2 · Profile image is PNG, not WebP
**File:** `public/profile.png`
PNG for a profile photo is larger than necessary. Next.js `<Image>` auto-converts to WebP/AVIF when served, but the source file should still be a high-quality but reasonably sized image.
**Check:** Ensure `profile.png` is ≤ 300KB. If larger, compress or convert to WebP at source.

### P-3 · Cursor background has two always-animating motion.divs
**File:** `components/layout/page-cursor-background.tsx` lines 30–55
Two large blurred `motion.div` elements update `left` and `top` on every mouse move. This is fine on desktop but on lower-end devices triggers constant layout recalculation. 
**Fix:** Use `transform: translate()` via Framer Motion's `x`/`y` style props instead of `left`/`top` to keep this on the compositor thread.

### P-4 · No `preconnect` to Google Fonts
**File:** `app/layout.tsx`
Next.js font optimisation handles this automatically for `next/font/google`, but verify no extra `<link rel="stylesheet">` calls to fonts.googleapis.com are added manually anywhere, which would bypass optimisation.

### P-5 · Hero orbit animation performance on low-end devices
**File:** `components/hero/hero-profile-orbit.tsx`
Three simultaneously rotating `motion.div` rings + 3 floating particles + ambient glow breathing animation = up to 7 concurrent animations running permanently. `useReducedMotion` handles accessibility but not low-power Android/old iOS.
**Consider:** Pausing orbit animations when the document is not visible (`document.visibilitychange`), or simplifying to 2 rings and no particles on touch devices.

### P-6 · No image `sizes` attribute on profile image for larger screens
**File:** `components/hero/hero-profile-orbit.tsx` line 173
`sizes="(max-width: 768px) 128px, 176px"` — the image renders at `md:size-44` (176px) but the `sizes` attribute doesn't cover the `md:` breakpoint for the largest size (`176px` at `min-width: 768px`). While Next.js still serves an optimised image, adding the correct `sizes` helps it pick the right source set.

---

## MODERN FEEL / VISUAL UPGRADES

### M-1 · Add magnetic hover effect to CTA buttons
The primary "See my work" and "Let's work together" buttons are currently static with a simple scale animation. A magnetic cursor attraction (mouse position warps the button slightly toward the cursor) is a high-impact modern touch on 4–6 lines of Framer Motion code. Very common on award-winning developer portfolios.

### M-2 · Text reveal animation (word/character split) on hero heading
**File:** `sections/hero.tsx` line 111
The hero h1 fades up as a block. Splitting it into words or characters with staggered opacity+y reveals feels significantly more premium. Framer Motion supports this via `motion.span` on each word. Apply only to the h1, not body text, to avoid excess motion.

### M-3 · Parallax depth on scroll for hero section
As the user scrolls from hero to about, the profile orbit could drift upward slightly slower than the scroll speed (parallax). This creates a 3D depth illusion with ~10 lines using Framer Motion `useScroll` + `useTransform`. Very subtle; high visual impact.

### M-4 · Animated gradient border on card hover (not just color change)
**File:** `components/about/about-card.tsx`, `sections/projects.tsx`
Current hover shows `border-accent/25`. A rotating or "chasing" gradient border animation (conic-gradient animated via CSS `@property` or a border-gradient trick) would make cards feel alive. Used widely in 2025 design trends.

### M-5 · Hero section — ambient noise/grain texture overlay
A subtle CSS noise texture (SVG-based, ~500 bytes) over the hero background adds tactile depth without any JavaScript. Very common in premium dark-mode portfolios to break the flat black feel.

### M-6 · Stagger the About grid cards with slide-from-different-directions
**File:** `sections/about.tsx`
All 4 About cards currently animate the same way (fade-up). Giving the wide cards a `x: -24` slide and the narrow cards a `x: 24` slide from their respective sides gives a sense of the layout assembling itself — a visual upgrade that takes ~5 lines.

### M-7 · "Currently building" or activity strip near the hero
Show a small auto-scrolling ticker or a pinned card that says what you're currently working on (e.g., "Currently: HIRIN @ Growexx"). Adds personality and signals you're active. Can be as simple as a marquee-style strip below the hero heading.

### M-8 · Replace bounce-arrow with a more expressive scroll hint
**File:** `sections/hero.tsx` line 184
`animate-bounce` on a bare `<ArrowDown>` is the most overused scroll indicator in existence. Replace with a "scroll mouse" SVG (the classic outline of a mouse with an animated scroll wheel dot), or a vertical line that grows downward, or a text+line combination. Costs 20 minutes, noticeable quality jump.

### M-9 · Experience timeline — animated line draw on scroll enter
**File:** `sections/experience.tsx` line 32
The timeline's vertical gradient line is static. Animating its `scaleY` from 0→1 (origin top) as the section enters the viewport makes the timeline feel like it is being drawn in real time, which is visually cohesive with the staggered card reveals.

### M-10 · Light-mode polish pass
The light mode uses a white card / `#fafafa` background with amber/orange accents. The cursor background (radial gradient glow following mouse) uses the same accent but the `glass-card` `backdrop-filter: blur(16px)` doesn't have a visible glass effect on a white background — cards just look like plain white boxes. The light theme needs its own shadow/border approach (e.g. subtle drop shadows instead of glass blur) to look intentional rather than like an afterthought.

---

## SUMMARY PRIORITY LIST

| # | Item | Impact | Effort |
|---|------|--------|--------|
| B-1 | Fix tsconfig path alias | Low | 2 min |
| B-2 | Fix placeholder URL | High (SEO/OG) | 2 min |
| B-3 | Fix photo hover scale direction | Medium | 2 min |
| B-5 | Add 404 page | Medium | 30 min |
| E-1 | Dark/light theme toggle | High | 1 hr |
| E-2 | Add more projects | High | 2 hr |
| E-3 | Add project links | High | 30 min |
| E-4 | Add contact form | High | 2 hr |
| E-5 | Scroll progress bar | Medium | 30 min |
| F-1 | OG image + social meta | High (sharing) | 1 hr |
| F-2 | robots.txt + sitemap | Medium (SEO) | 30 min |
| F-3 | Vercel Analytics | Low effort / high value | 5 min |
| F-5 | Availability signal | High (recruiter) | 30 min |
| M-1 | Magnetic CTA buttons | High feel | 45 min |
| M-2 | Hero heading word reveal | High feel | 1 hr |
| M-3 | Hero parallax on scroll | Medium feel | 30 min |
| M-9 | Timeline line draw animation | Medium feel | 30 min |
| P-3 | Fix cursor bg to use transform | Perf | 15 min |
| P-5 | Pause animations on low-end/hidden | Perf | 30 min |
