"use client";

import { SectionReveal } from "../components/ui/section-reveal";
import { SectionHeader } from "../components/ui/section-header";
import { Container, Section } from "../components/ui/container";
import { projects, projectsContent } from "../data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <Section id="work" className="scroll-mt-24 border-t border-border/40 bg-surface/30">
      <Container>
        <SectionReveal>
          <SectionHeader
            eyebrow={projectsContent.eyebrow}
            title={projectsContent.title}
            description={projectsContent.description}
          />
        </SectionReveal>

        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.05}>
              <li>
                <Link
                  href={project.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-accent/30 hover:bg-card/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">
                        {project.year}
                      </p>
                      <h3 className="mt-2 text-h3 font-semibold text-foreground transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            </SectionReveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
