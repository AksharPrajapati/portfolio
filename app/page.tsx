import dynamic from "next/dynamic";
import { PageShell } from "../components/layout/page-shell";
import { Footer } from "../components/layout/footer";
import { HeroSection } from "../sections/hero";

// P-1: Code-split below-fold sections for faster initial bundle
const AboutSection = dynamic(() =>
  import("../sections/about").then((m) => ({ default: m.AboutSection })),
);
const ProjectsSection = dynamic(() =>
  import("../sections/projects").then((m) => ({ default: m.ProjectsSection })),
);
const ExperienceSection = dynamic(() =>
  import("../sections/experience").then((m) => ({
    default: m.ExperienceSection,
  })),
);
const ContactSection = dynamic(() =>
  import("../sections/contact").then((m) => ({ default: m.ContactSection })),
);

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </PageShell>
  );
}
