"use client";

import { SocialIcon } from "../components/icons/social-icons";
import { ButtonLink } from "../components/ui/button";
import { SectionReveal } from "../components/ui/section-reveal";
import { SectionHeader } from "../components/ui/section-header";
import { Container, Section } from "../components/ui/container";
import { Text } from "../components/ui/typography";
import { contactContent } from "../data/contact";
import { siteConfig } from "../data/site";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" className="scroll-mt-24 border-t border-border/40 bg-surface/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <SectionHeader
              eyebrow={contactContent.eyebrow}
              title={contactContent.title}
              description={contactContent.description}
              className="mb-0"
            />

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail className="size-4 text-accent" />
                <a
                  href={`mailto:${contactContent.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {contactContent.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="size-4 text-accent" />
                {siteConfig.location}
              </li>
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              {contactContent.availability}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={`mailto:${contactContent.email}`}
                variant="primary"
                className="rounded-full border-0 bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:from-sky-400 hover:to-indigo-400 hover:text-white"
              >
                Send email
              </ButtonLink>
              <ButtonLink
                href={siteConfig.links.linkedin}
                variant="secondary"
                external
                className="rounded-full"
              >
                <SocialIcon icon="linkedin" className="size-4" />
                LinkedIn
              </ButtonLink>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <form
              className="rounded-2xl border border-border/70 bg-card/30 p-6 backdrop-blur-sm md:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </div>
              <Text variant="label" className="mt-4 text-center" as="p">
                Demo form — connect your API or form service later.
              </Text>
            </form>
          </SectionReveal>
        </div>
      </Container>
    </Section>
  );
}
