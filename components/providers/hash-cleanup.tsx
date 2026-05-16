"use client";

import { scrollToSection } from "../../lib/scroll-to-section";
import { useEffect } from "react";

export function HashCleanup() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    scrollToSection(hash);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return null;
}
