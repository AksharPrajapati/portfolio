"use client";

import { SocialIcon } from "../icons/social-icons";
import { SectionNavLink } from "../ui/section-nav-link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Container } from "../ui/container";
import { navLinks, navSocials, sectionIds, siteConfig } from "../../data/site";
import { useActiveSection } from "../../lib/hooks/use-active-section";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function Logo() {
  return (
    <SectionNavLink
      sectionId="home"
      className="group shrink-0 text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 sm:text-xl"
    >
      {siteConfig.shortName}
      <span className="text-accent transition-opacity group-hover:opacity-80">
        .
      </span>
    </SectionNavLink>
  );
}

function NavLinkItem({
  sectionId,
  label,
  isActive,
  onNavigate,
}: {
  sectionId: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <SectionNavLink
      sectionId={sectionId}
      onClick={onNavigate}
      className={cn(
        "relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
      aria-current={isActive ? "true" : undefined}
    >
      {isActive ? (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 -z-10 rounded-full bg-white/10 shadow-[0_0_20px_-4px] shadow-accent/30 ring-1 ring-white/10"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      ) : null}
      {label}
    </SectionNavLink>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <Container className="max-w-7xl px-0">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <nav
            className="hidden items-center lg:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-card/50 p-1.5 shadow-[0_8px_32px_-8px] shadow-black/50 backdrop-blur-xl">
              <ul className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLinkItem
                      sectionId={link.id}
                      label={link.label}
                      isActive={activeSection === link.id}
                    />
                  </li>
                ))}
              </ul>

              <span aria-hidden className="mx-1.5 h-5 w-px bg-border/80" />

              <ul className="flex items-center gap-1">
                {navSocials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target={
                        "external" in social && social.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        "external" in social && social.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-white/10 hover:text-foreground"
                    >
                      <SocialIcon icon={social.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>

              <span aria-hidden className="mx-1 h-5 w-px bg-border/80" />

              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/50 text-foreground backdrop-blur-md transition-colors hover:bg-card"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <motion.div
        id="mobile-menu"
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        className={cn(
          "mt-3 overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-xl backdrop-blur-xl lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <Container className="px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <SectionNavLink
                  sectionId={link.id}
                  onClick={closeMenu}
                  className={cn(
                    "block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                    activeSection === link.id
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {link.label}
                </SectionNavLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-4">
            {navSocials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target={
                  "external" in social && social.external ? "_blank" : undefined
                }
                rel={
                  "external" in social && social.external
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:text-foreground"
                onClick={closeMenu}
              >
                <SocialIcon icon={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </Container>
      </motion.div>
    </header>
  );
}
