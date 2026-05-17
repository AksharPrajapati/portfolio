import { PageShell } from "../components/layout/page-shell";
import { Footer } from "../components/layout/footer";
import { AboutSection } from "../sections/about";
import { ContactSection } from "../sections/contact";
import { ExperienceSection } from "../sections/experience";
import { HeroSection } from "../sections/hero";
import { ProjectsSection } from "../sections/projects";

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
