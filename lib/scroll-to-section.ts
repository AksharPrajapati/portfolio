import type { MouseEvent } from "react";

export function scrollToSection(sectionId: string) {
  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

export function handleSectionNav(
  event: MouseEvent<HTMLElement>,
  sectionId: string,
) {
  event.preventDefault();
  scrollToSection(sectionId);
}
