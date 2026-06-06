"use client";

import { HeroProfileOrbit } from "../components/hero/hero-profile-orbit";
import { ButtonLink } from "../components/ui/button";
import { MagneticWrapper } from "../components/ui/magnetic-wrapper";
import { SectionNavLink } from "../components/ui/section-nav-link";
import { Container } from "../components/ui/container";
import { Text } from "../components/ui/typography";
import { heroContent, siteConfig } from "../data/site";
import { cn } from "../lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// M-8: Scroll mouse hint replaces the overused bounce arrow
function ScrollMouseHint() {
  const reduceMotion = useReducedMotion();
  return (
    <SectionNavLink
      sectionId="about"
      className="group flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-accent"
      aria-label="Scroll to about section"
    >
      <svg
        width="22"
        height="34"
        viewBox="0 0 22 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="1"
          y="1"
          width="20"
          height="32"
          rx="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {!reduceMotion ? (
          <motion.rect
            x="9.5"
            y="6"
            width="3"
            height="7"
            rx="1.5"
            fill="currentColor"
            animate={{ y: [6, 13, 6], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <rect x="9.5" y="6" width="3" height="7" rx="1.5" fill="currentColor" />
        )}
      </svg>
      <span className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-60 transition-opacity group-hover:opacity-100">
        scroll
      </span>
    </SectionNavLink>
  );
}

// M-7 + F-5: Availability strip with "currently building" context
function AvailabilityStrip() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs"
    >
      <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-emerald-400">
        <motion.span
          className="size-1.5 rounded-full bg-emerald-400"
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        Available for new opportunities
      </span>
      <span className="hidden items-center gap-1.5 font-mono text-muted-foreground sm:flex">
        <span className="text-accent/60">›</span>
        Currently: HIRIN @ Growexx
      </span>
    </motion.div>
  );
}

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
  const sectionRef = useRef<HTMLElement>(null);

  // M-3: Scroll-based parallax on the profile orbit
  const { scrollY } = useScroll();
  const orbitY = useTransform(scrollY, [0, 500], [0, -60]);

  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: EASE };

  // M-2: Split heading into individual words for staggered reveal
  const greetingWords = heroContent.greeting.split(" "); // ["Hi,", "I'm"]
  const nameWords = siteConfig.name.split(" "); // ["Akshar", "Prajapati"]

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center justify-center pt-16 md:pt-20"
    >
      <Container className="relative w-full py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* Profile orbit with M-3 parallax */}
          <motion.div
            style={reduceMotion ? undefined : { y: orbitY }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <HeroProfileOrbit
                imageSrc={siteConfig.profileImage}
                imageAlt={siteConfig.name}
                className="mb-0"
              />
            </motion.div>

            {/* M-7 + F-5: Availability strip */}
            {/* <AvailabilityStrip /> */}
          </motion.div>

          {/* M-2: Word-by-word h1 reveal */}
          <h1
            id="hero-heading"
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {greetingWords.map((word, i) => (
              <motion.span
                key={`g-${i}`}
                className="inline-block text-foreground"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + i * 0.08,
                  ease: EASE,
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            {nameWords.map((word, i) => (
              <motion.span
                key={`n-${i}`}
                className="inline-block text-gradient"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + (greetingWords.length + i) * 0.08,
                  ease: EASE,
                }}
              >
                {word}
                {i < nameWords.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...itemTransition, delay: 0.55 }}
          >
            <RoleTypewriter roles={heroContent.roles} />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...itemTransition, delay: 0.7 }}
            className="mt-6 max-w-xl"
          >
            <Text variant="body-lg" className="text-muted text-pretty" as="p">
              {heroContent.intro}
            </Text>
          </motion.div>

          {/* M-1: CTA buttons with magnetic wrapper */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...itemTransition, delay: 0.85 }}
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

              const button =
                "sectionId" in cta ? (
                  <SectionNavLink
                    key={cta.label}
                    sectionId={cta.sectionId}
                    className={buttonClass}
                  >
                    {cta.label}
                  </SectionNavLink>
                ) : (
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

              return (
                <MagneticWrapper
                  key={cta.label}
                  className="w-full sm:w-auto"
                  strength={0.25}
                >
                  {button}
                </MagneticWrapper>
              );
            })}
          </motion.div>
        </div>

        {/* M-8: Scroll mouse hint (visible sm+, fixes B-8) */}
        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.45, ease: EASE }}
        >
          {/* <ScrollMouseHint /> */}
        </motion.div>
      </Container>
    </section>
  );
}
