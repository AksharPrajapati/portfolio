"use client";

import { ExperienceCard } from "../components/experience/experience-card";
import { SectionTitle } from "../components/ui/section-title";
import { Container, Section } from "../components/ui/container";
import { experienceContent, experiences } from "../data/experience";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" className="scroll-mt-28">
      <Container className="max-w-4xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle
            title={experienceContent.title}
            subtitle={experienceContent.subtitle}
          />
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-accent/10 md:left-8"
          />

          <ol className="space-y-8">
            {experiences.map((job, index) => (
              <motion.li
                key={job.company}
                initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 md:pl-20"
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-8 size-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px] shadow-accent/60 md:left-8"
                />
                <ExperienceCard job={job} />
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
