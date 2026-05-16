"use client";

import { SectionReveal } from "../components/ui/section-reveal";
import { SectionHeader } from "../components/ui/section-header";
import { Container, Section } from "../components/ui/container";
import { Text } from "../components/ui/typography";
import { aboutContent } from "../data/about";

export function AboutSection() {
  return (
    <Section id="about" className="scroll-mt-24 border-t border-border/40">
      <Container>
        <SectionReveal>
          <SectionHeader
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
          />
        </SectionReveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <SectionReveal className="space-y-5" delay={0.05}>
            {aboutContent.paragraphs.map((paragraph) => (
              <Text key={paragraph} variant="muted" className="text-pretty" as="p">
                {paragraph}
              </Text>
            ))}
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {aboutContent.highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </Container>
    </Section>
  );
}
