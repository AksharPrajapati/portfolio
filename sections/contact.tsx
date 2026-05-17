"use client";

import { SocialIcon } from "../components/icons/social-icons";
import { Container, Section } from "../components/ui/container";
import { contactContent } from "../data/contact";
import { heroContent } from "../data/site";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="contact"
      className="scroll-mt-28"
    >
      <Container className="max-w-3xl text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {contactContent.titleLine1}
            <br />
            <span className="text-gradient">{contactContent.titleLine2}.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-lg font-light text-muted">
            {contactContent.description}
          </p>

          <motion.a
            href={`mailto:${contactContent.email}`}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="shadow-accent-glow mt-10 inline-flex items-center gap-3 rounded-full bg-accent-gradient px-10 py-4 text-base font-semibold text-accent-foreground transition-shadow duration-500 hover:shadow-accent-glow-lg"
          >
            {contactContent.ctaLabel}
            <ArrowUpRight className="size-[18px]" />
          </motion.a>

          <ul className="mt-10 flex items-center justify-center gap-3">
            {heroContent.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  className="glass-card flex size-12 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:border-accent/25 hover:text-accent"
                >
                  <SocialIcon icon={social.icon} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
