"use client";

import { SectionTitle } from "../components/ui/section-title";
import { Container, Section } from "../components/ui/container";
import { projects, projectsContent } from "../data/projects";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function ProjectsSection() {
  const gridRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <Section id="work" className="scroll-mt-28 border-t border-border/40 bg-surface/20">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle
            title={projectsContent.title}
            subtitle={projectsContent.subtitle}
          />
        </motion.div>

        <ul
          ref={gridRef}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-accent/25 md:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                  <h3 className="mt-2 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-pretty font-light leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
