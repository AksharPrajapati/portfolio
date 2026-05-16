export const experienceContent = {
  title: "Experience",
  subtitle: "Where I've worked and what I've built.",
} as const;

export const experiences = [
  {
    company: "Growexx",
    role: "Senior Software Engineer (MERN L2)",
    period: "Nov 2024 — Present",
    location: "Ahmedabad, India",
    description:
      "Core member of HIRIN, a recruitment automation platform streamlining end-to-end hiring workflows. Delivered 15+ production-grade features across frontend and backend using Next.js and NestJS, designed 25+ REST APIs for complex workflows and integrations, and improved API response times up to 3x through query optimization, indexing, and caching. Integrated AWS, CDN, and image optimization, reducing frontend asset load times by nearly 40%.",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "REST APIs",
    ],
    current: true,
  },
  {
    company: "Redsoft Solutions Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Nov 2021 — Nov 2024",
    location: "Surat, India",
    description:
      "Owned backend architecture and contributed to frontend systems using NestJS, Next.js, and Vite across multiple production apps. Built automated cron pipelines processing large-scale crypto datasets into MongoDB, engineered 40+ scalable REST APIs with caching and pagination (cutting average execution time by ~60%), and managed AWS EC2, S3, CloudFront, SSL, and Nginx deployments.",
    tech: [
      "NestJS",
      "Next.js",
      "Vite",
      "MongoDB",
      "AWS",
      "Cron Jobs",
      "Nginx",
    ],
    current: false,
  },
  {
    company: "Loopnix",
    role: "Frontend Developer",
    period: "Jan 2021 — Nov 2021",
    location: "Surat, India",
    description:
      "Built scalable React applications with reusable components and Redux. Worked with Next.js, Gatsby, GraphQL, and Styled Components. Led migration from CRA to Gatsby with Kontent CMS, improving SEO and reducing initial page load time by approximately 35%.",
    tech: ["React", "Next.js", "Gatsby", "GraphQL", "Redux", "Styled Components"],
    current: false,
  },
  {
    company: "AiGrow.me",
    role: "React Native Developer",
    period: "Apr 2020 — Sep 2020",
    location: "Surat, India",
    description:
      "Built cross-platform mobile applications with React Native and REST API integrations. Delivered optimized, responsive experiences on Android and iOS with reusable UI architecture.",
    tech: ["React Native", "REST APIs", "JavaScript", "Mobile UI"],
    current: false,
  },
] as const;
