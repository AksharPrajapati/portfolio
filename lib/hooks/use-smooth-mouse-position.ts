"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, type RefObject } from "react";

const SPRING = { stiffness: 120, damping: 24, mass: 0.4 };

type SmoothMousePositionOptions = {
  enabled?: boolean;
  /** Use viewport coords for fixed full-page backgrounds */
  coordinateMode?: "container" | "viewport";
};

export function useSmoothMousePosition(
  containerRef: RefObject<HTMLElement | null>,
  {
    enabled = true,
    coordinateMode = "container",
  }: SmoothMousePositionOptions = {},
) {
  const [isActive, setIsActive] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    if (!enabled) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) return;

    const handleMove = (event: MouseEvent) => {
      if (coordinateMode === "viewport") {
        rawX.set(event.clientX);
        rawY.set(event.clientY);
      } else {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        rawX.set(event.clientX - rect.left);
        rawY.set(event.clientY - rect.top);
      }
      setIsActive(true);
    };

    const handleLeave = () => setIsActive(false);

    if (coordinateMode === "viewport") {
      window.addEventListener("mousemove", handleMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", handleLeave);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        document.documentElement.removeEventListener("mouseleave", handleLeave);
      };
    }

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMove, { passive: true });
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, [containerRef, coordinateMode, enabled, rawX, rawY]);

  return { x, y, isActive };
}
