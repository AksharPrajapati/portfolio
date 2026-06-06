import { Container } from "../components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <Container className="py-20 text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-lg font-light text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent-glow transition-shadow duration-300 hover:shadow-accent-glow-lg"
        >
          Go home
        </Link>
      </Container>
    </main>
  );
}
