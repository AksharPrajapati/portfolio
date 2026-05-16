import { siteConfig } from "./site";

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/icons";

export const aboutContent = {
  title: "About",
  subtitle: "A bit about who I am and what I work with.",
  journey: {
    label: "Journey",
    paragraphs: [
      {
        text: "With over ",
        highlight: "5+ years",
        rest: " of experience across fullstack and frontend engineering, I specialize in MERN applications — shipping production features with Next.js, NestJS, and cloud-backed systems.",
      },
      {
        text: "Bachelor of Applied Science in Computer Science from Veer Narmad South Gujarat University (2020). I focus on API design, database optimization, AWS infrastructure, and building reliable hiring and data-processing platforms.",
      },
    ],
  },
  experience: {
    value: "5+",
    label: "Years of Experience",
  },
  location: {
    place: siteConfig.location,
    note: "Available for remote work",
  },
  techStack: {
    label: "Tech Stack",
    items: [
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-plain.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
      { name: "Tailwind", icon: `${DEVICON}/tailwindcss/tailwindcss-plain.svg` },
    ],
  },
} as const;
