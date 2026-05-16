export const siteConfig = {
  name: "Akshar Prajapati",
  shortName: "Akshar",
  role: "Senior Software Engineer (MERN)",
  tagline:
    "I build scalable fullstack products — from Next.js interfaces and NestJS APIs to cloud deployments and high-performance data systems.",
  description:
    "Portfolio of Akshar Prajapati — senior software engineer specializing in MERN stack, recruitment platforms, and production-grade web systems.",
  location: "Ahmedabad, India",
  phone: "+91 8980697242",
  url: "https://example.com",
  links: {
    linkedin: "https://www.linkedin.com/in/akshar-prajapati",
    email: "mailto:aksharpp369@gmail.com",
    resume: "/resume.pdf",
  },
} as const;

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export const navSocials = [
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: "linkedin" as const,
    external: true,
  },
  {
    href: siteConfig.links.email,
    label: "Email",
    icon: "mail" as const,
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
    "Senior Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
  ] as const,
  intro: siteConfig.tagline,
  ctas: [
    {
      sectionId: "work",
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
