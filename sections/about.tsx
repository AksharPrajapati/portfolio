"use client";

import { AboutCard, AboutCardLabel } from "../components/about/about-card";
import { Container, Section } from "../components/ui/container";
import { aboutContent } from "../data/about";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Calendar,
  Clock,
  Code2,
  Globe,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function AboutSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about" className="scroll-mt-28 border-t border-border/40">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {aboutContent.title}
            <span className="text-gradient">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-lg font-light text-muted">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Journey — wide */}
          <AboutCard className="md:col-span-2">
            <AboutCardLabel icon={<Sparkles className="size-[18px]" />}>
              {aboutContent.journey.label}
            </AboutCardLabel>
            <p className="text-base font-light leading-relaxed text-foreground/85 sm:text-lg">
              {aboutContent.journey.paragraphs[0].text}
              <span className="font-medium text-foreground">
                {aboutContent.journey.paragraphs[0].highlight}
              </span>
              {aboutContent.journey.paragraphs[0].rest}
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted sm:text-base">
              {aboutContent.journey.paragraphs[1].text}
            </p>
          </AboutCard>

          {/* Years */}
          <AboutCard className="flex flex-col items-center justify-center">
            <Clock
              className="pointer-events-none absolute -right-4 -bottom-4 size-32 -rotate-12 text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/10"
              aria-hidden
            />
            <div className="relative z-10 text-center">
              <Calendar className="mx-auto mb-3 size-5 text-accent" />
              <p className="text-gradient mb-2 text-5xl font-extrabold tracking-tight md:text-6xl">
                {aboutContent.experience.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {aboutContent.experience.label}
              </p>
            </div>
          </AboutCard>

          {/* Tech stack — wide */}
          <AboutCard className="md:col-span-2">
            <AboutCardLabel icon={<Code2 className="size-[18px]" />}>
              {aboutContent.techStack.label}
            </AboutCardLabel>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {aboutContent.techStack.items.map((tech) => (
                <li key={tech.name}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex cursor-default items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 transition-colors duration-300 hover:border-accent/25 hover:bg-white/[0.05] sm:px-4 sm:py-3"
                  >
                    <span className="relative flex size-5 shrink-0 items-center justify-center">
                      <Image
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        width={20}
                        height={20}
                        className="size-5 object-contain"
                      />
                    </span>
                    <span className="text-sm font-medium text-foreground/75">
                      {tech.name}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </AboutCard>

          {/* Location */}
          <AboutCard className="flex flex-col items-center justify-center">
            <Globe
              className="pointer-events-none absolute -right-6 -bottom-6 size-36 rotate-12 text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/10"
              aria-hidden
            />
            <div className="relative z-10 text-center">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <MapPin className="mx-auto mb-3 size-6 text-accent" />
              </motion.div>
              <p className="text-lg font-medium text-foreground">
                {aboutContent.location.place}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {aboutContent.location.note}
              </p>
            </div>
          </AboutCard>
        </motion.div>
      </Container>
    </Section>
  );
}
