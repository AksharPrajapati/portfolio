"use client";

import { SectionReveal } from "../components/ui/section-reveal";
import { SectionHeader } from "../components/ui/section-header";
import { Container, Section } from "../components/ui/container";
import { Text } from "../components/ui/typography";
import { experiences, experienceContent } from "../data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" className="scroll-mt-24 border-t border-border/40">
      <Container>
        <SectionReveal>
          <SectionHeader
            eyebrow={experienceContent.eyebrow}
            title={experienceContent.title}
            description={experienceContent.description}
          />
        </SectionReveal>

        <ol className="relative space-y-8 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-border/80 md:before:left-[11px]">
          {experiences.map((job, index) => (
            <SectionReveal key={job.company} delay={index * 0.06}>
              <li className="relative pl-8 md:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-2 size-[15px] rounded-full border-2 border-background bg-accent shadow-[0_0_12px] shadow-accent/40 md:left-1 md:size-[19px]"
                />

                <div className="rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-sm md:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-h3 font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <Text variant="muted" className="mt-4 text-pretty" as="p">
                    {job.summary}
                  </Text>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </SectionReveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
