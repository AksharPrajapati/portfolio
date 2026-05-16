export const siteConfig = {
  name: "Alex Morgan",
  shortName: "Alex",
  role: "Senior Fullstack Engineer",
  tagline:
    "I build end-to-end web products — scalable APIs, reliable data layers, and interfaces people enjoy using.",
  description:
    "Portfolio of a senior fullstack engineer focused on performance, maintainability, and thoughtful UX.",
  location: "San Francisco, CA",
  url: "https://example.com",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
    resume: "/resume.pdf",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const navSocials = [
  {
    href: siteConfig.links.github,
    label: "GitHub",
    icon: "github" as const,
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: "linkedin" as const,
  },
  {
    href: siteConfig.links.resume,
    label: "Resume",
    icon: "resume" as const,
    external: true,
  },
] as const;

export const sectionIds = navLinks.map((link) => link.id);

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
      href: "#work",
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
