"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.35;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    const observer = new IntersectionObserver(
      () => updateActiveSection(),
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
