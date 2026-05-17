import { Container } from "../ui/container";
import { siteConfig } from "../../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · TypeScript · Tailwind
        </p>
      </Container>
    </footer>
  );
}
