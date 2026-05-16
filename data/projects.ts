export const projectsContent = {
  eyebrow: "Work",
  title: "Selected projects",
  description:
    "A few recent builds spanning developer tools, dashboards, and high-traffic consumer flows.",
} as const;

export const projects = [
  {
    title: "Atlas Commerce Platform",
    description:
      "Multi-tenant e-commerce backend with real-time inventory, Stripe billing, and an admin analytics suite.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    href: "#",
    year: "2025",
  },
  {
    title: "Pulse Observability Dashboard",
    description:
      "Unified monitoring UI for microservices with custom alert rules, log search, and team-based RBAC.",
    tags: ["React", "GraphQL", "TimescaleDB", "AWS"],
    href: "#",
    year: "2024",
  },
  {
    title: "Flowdesk Team Workspace",
    description:
      "Collaborative project hub with kanban boards, async comments, and calendar integrations for remote teams.",
    tags: ["TypeScript", "Prisma", "WebSockets", "Tailwind"],
    href: "#",
    year: "2024",
  },
  {
    title: "Nimbus Auth SDK",
    description:
      "Open-source authentication kit with OAuth providers, session refresh, and framework adapters for React and Express.",
    tags: ["TypeScript", "OAuth", "Security", "DX"],
    href: "#",
    year: "2023",
  },
] as const;
