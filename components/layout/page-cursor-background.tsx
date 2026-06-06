"use client";

import { useSmoothMousePosition } from "../../lib/hooks/use-smooth-mouse-position";
import { motion, useReducedMotion } from "framer-motion";
import type { RefObject } from "react";

type PageCursorBackgroundProps = {
  containerRef: RefObject<HTMLElement | null>;
};

export function PageCursorBackground({
  containerRef,
}: PageCursorBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const { x, y, isActive } = useSmoothMousePosition(containerRef, {
    enabled: !reduceMotion,
    coordinateMode: "viewport",
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_15%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_72%)]" />

      {/* Cursor glow — zero-size anchor moved via transform (compositor thread) */}
      {!reduceMotion && (
        <motion.div
          className="absolute left-0 top-0 size-0"
          style={{ x, y }}
        >
          <div
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 size-[min(120vw,48rem)] rounded-full transition-opacity duration-500"
            style={{
              opacity: isActive ? 0.45 : 0,
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 70%)",
              filter: "blur(56px)",
            }}
          />
          <div
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 size-[min(80vw,32rem)] rounded-full transition-opacity duration-500"
            style={{
              opacity: isActive ? 0.28 : 0,
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent-secondary) 6%, transparent) 0%, transparent 75%)",
              filter: "blur(72px)",
            }}
          />
        </motion.div>
      )}

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--border) 40%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--border) 40%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 5%, transparent 85%)",
        }}
      />
    </div>
  );
}
