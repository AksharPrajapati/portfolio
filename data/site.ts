export const siteConfig = {
  name: "Your Name",
  role: "Senior Fullstack Engineer",
  tagline:
    "I build end-to-end web products — scalable APIs, reliable data layers, and interfaces people enjoy using.",
  description:
    "Portfolio of a senior fullstack engineer focused on performance, maintainability, and thoughtful UX.",
  url: "https://example.com",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
    resume: "/resume.pdf",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroContent = {
  greeting: "Hi, I'm",
  roles: [
    "Fullstack Engineer",
    "UI Architect",
    "Creative Developer",
  ] as const,
  intro: siteConfig.tagline,
  ctas: [
    {
      href: "#projects",
      label: "See my work",
      variant: "primary" as const,
      icon: "arrow" as const,
    },
    {
      href: siteConfig.links.resume,
      label: "Resume",
      variant: "secondary" as const,
      icon: "download" as const,
      external: true,
    },
  ],
  socials: [
    {
      href: siteConfig.links.github,
      label: "GitHub profile",
      icon: "github" as const,
    },
    {
      href: siteConfig.links.linkedin,
      label: "LinkedIn profile",
      icon: "linkedin" as const,
    },
    {
      href: siteConfig.links.email,
      label: "Send email",
      icon: "mail" as const,
    },
  ],
} as const;
