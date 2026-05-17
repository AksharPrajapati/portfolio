"use client";

import { HeroProfileOrbit } from "../components/hero/hero-profile-orbit";
import { ButtonLink } from "../components/ui/button";
import { SectionNavLink } from "../components/ui/section-nav-link";
import { Container } from "../components/ui/container";
import { Text } from "../components/ui/typography";
import { heroContent, siteConfig } from "../data/site";
import { cn } from "../lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function RoleTypewriter({ roles }: { roles: readonly string[] }) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(roles[roleIndex] ?? "");
      return;
    }

    const current = roles[roleIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 55);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 32);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, reduceMotion, roleIndex, roles]);

  return (
    <p
      className="mt-4 font-mono text-sm text-muted sm:text-base"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="text-accent">&gt;</span>{" "}
      <span className="text-foreground/90">{displayed}</span>
      <span
        className={cn(
          "ml-0.5 inline-block w-[2px] bg-accent",
          reduceMotion ? "opacity-80" : "animate-pulse",
        )}
        aria-hidden
      >
        &nbsp;
      </span>
    </p>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: EASE };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center justify-center pt-16 md:pt-20"
    >
      <Container className="relative w-full py-16 sm:py-20">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} transition={itemTransition}>
            <HeroProfileOrbit
              imageSrc={siteConfig.profileImage}
              imageAlt={siteConfig.name}
              className="mb-4"
            />
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            transition={itemTransition}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{heroContent.greeting} </span>
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.div variants={fadeUp} transition={itemTransition}>
            <RoleTypewriter roles={heroContent.roles} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={itemTransition}
            className="mt-6 max-w-xl"
          >
            <Text variant="body-lg" className="text-muted text-pretty" as="p">
              {heroContent.intro}
            </Text>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={itemTransition}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
          >
            {heroContent.ctas.map((cta) => {
              const buttonClass = cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 sm:w-auto",
                cta.variant === "primary" &&
                  "border-0 bg-accent-gradient text-accent-foreground shadow-accent-glow hover:shadow-accent-glow-lg",
                cta.variant === "secondary" &&
                  "glass-card border-border/80 hover:border-accent/30",
              );

              if ("sectionId" in cta) {
                return (
                  <SectionNavLink
                    key={cta.label}
                    sectionId={cta.sectionId}
                    className={buttonClass}
                  >
                    {cta.label}
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                  </SectionNavLink>
                );
              }

              return (
                <ButtonLink
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  external={cta.external}
                  className={buttonClass}
                >
                  {cta.label}
                  <Download className="size-4" />
                </ButtonLink>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.45, ease: EASE }}
        >
          <SectionNavLink
            sectionId="about"
            className="text-muted transition-colors hover:text-accent"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="size-5 animate-bounce" />
          </SectionNavLink>
        </motion.div>
      </Container>
    </section>
  );
}
