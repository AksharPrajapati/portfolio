"use client";

import { SocialIcon, type SocialIconKey } from "../components/icons/social-icons";
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

function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,color-mix(in_oklab,#6366f1_12%,transparent),transparent)]" />
      <motion.div
        className="absolute left-1/2 top-[38%] size-[min(90vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-3xl"
        animate={
          reduceMotion ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.04, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 75%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
    </div>
  );
}

function HeroAvatar() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative mx-auto size-24 sm:size-28">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-md"
      />
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full border border-accent/20"
      />
      <div
        className="relative flex size-full items-center justify-center rounded-full border border-border/80 bg-card/80 text-lg font-semibold tracking-tight text-foreground shadow-[0_0_40px_-12px] shadow-accent/30 backdrop-blur-sm sm:text-xl"
        role="img"
        aria-label={`${siteConfig.name} avatar`}
      >
        {initials}
      </div>
    </div>
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

function HeroSocialLinks() {
  return (
    <ul className="mt-10 flex items-center justify-center gap-2">
      {heroContent.socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.label}
              className="group flex size-11 items-center justify-center rounded-full border border-border/70 bg-card/40 text-muted backdrop-blur-sm transition-colors duration-200 hover:border-accent/40 hover:bg-card hover:text-foreground"
            >
              <SocialIcon
                icon={social.icon as SocialIconKey}
                className="size-[1.15rem] transition-transform duration-200 group-hover:scale-105"
              />
            </a>
          </li>
        ))}
    </ul>
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
      className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      <HeroBackground />

      <Container className="relative w-full py-16 sm:py-20">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} transition={itemTransition}>
            <HeroAvatar />
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            transition={itemTransition}
            className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
                "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 sm:w-auto",
                cta.variant === "primary" &&
                  "border-0 bg-accent-gradient text-accent-foreground shadow-accent-glow hover:shadow-accent-glow-lg",
                cta.variant === "secondary" &&
                  "border border-border/80 bg-card/30 backdrop-blur-sm hover:bg-card/60",
              );

              if ("sectionId" in cta) {
                return (
                  <SectionNavLink
                    key={cta.label}
                    sectionId={cta.sectionId}
                    className={buttonClass}
                  >
                    {cta.label}
                    <ArrowDown className="size-4" />
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

          <motion.div variants={fadeUp} transition={itemTransition}>
            <HeroSocialLinks />
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
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="size-5" />
          </SectionNavLink>
        </motion.div>
      </Container>
    </section>
  );
}
