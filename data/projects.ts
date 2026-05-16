export const projectsContent = {
  title: "Work",
  subtitle: "Production platforms and systems I've helped design and ship.",
} as const;

export const projects = [
  {
    title: "HIRIN Recruitment Automation Platform",
    description:
      "Developed scalable recruitment workflows, automation systems, and optimized APIs for hiring operations. Implemented advanced filtering, workflow automation, and high-performance frontend modules for end-to-end hiring.",
    tags: ["Next.js", "NestJS", "MongoDB", "PostgreSQL", "AWS"],
    year: "2024 — Present",
  },
  {
    title: "Crypto Data Processing System",
    description:
      "Built automated cron pipelines for processing large-scale crypto datasets with optimized MongoDB operations. Designed fault-tolerant background jobs persisting millions of records with caching and pagination strategies.",
    tags: ["NestJS", "MongoDB", "AWS", "Cron Jobs", "REST APIs"],
    year: "2021 — 2024",
  },
] as const;
