export const experienceContent = {
  eyebrow: "Experience",
  title: "Where I've contributed",
  description:
    "Roles where I led delivery across the stack — from architecture decisions to production support.",
} as const;

export const experiences = [
  {
    company: "Northline Labs",
    role: "Senior Fullstack Engineer",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Led rebuild of the core product dashboard, cutting initial load time by 42% and improving release cadence with a modular monorepo.",
    highlights: [
      "Designed GraphQL API layer and caching strategy serving 120k+ daily active users.",
      "Mentored three engineers on React performance patterns and testing practices.",
    ],
  },
  {
    company: "Brightstack",
    role: "Fullstack Engineer",
    period: "2021 — 2023",
    location: "San Francisco, CA",
    summary:
      "Owned checkout and subscription flows for a B2B SaaS platform, integrating billing webhooks and usage-based pricing.",
    highlights: [
      "Shipped Stripe-based billing with proration and self-serve plan upgrades.",
      "Introduced CI pipelines that reduced deployment failures by 30%.",
    ],
  },
  {
    company: "Pixel & Code Agency",
    role: "Frontend Engineer",
    period: "2019 — 2021",
    location: "Remote",
    summary:
      "Delivered marketing sites and product prototypes for agency clients with animation-heavy, accessible interfaces.",
    highlights: [
      "Built reusable component libraries that cut project kickoff time in half.",
      "Collaborated with designers to ship 15+ client launches on schedule.",
    ],
  },
] as const;
