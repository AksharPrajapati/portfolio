"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideFrom = "left" | "right" | "bottom";

function getCardVariants(slideFrom: SlideFrom = "bottom") {
  const x = slideFrom === "left" ? -28 : slideFrom === "right" ? 28 : 0;
  const y = slideFrom === "bottom" ? 28 : 10;
  return {
    hidden: { opacity: 0, x, y, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
}

type AboutCardProps = {
  children: ReactNode;
  className?: string;
  slideFrom?: SlideFrom;
};

export function AboutCard({
  children,
  className,
  slideFrom = "bottom",
}: AboutCardProps) {
  return (
    <motion.div
      variants={getCardVariants(slideFrom)}
      className="gradient-border-hover flex flex-col rounded-2xl"
    >
      <div
        className={cn(
          "glass-card group relative flex-1 overflow-hidden rounded-2xl p-6 transition-colors duration-500 sm:p-8",
          className,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {children}
      </div>
    </motion.div>
  );
}

export function AboutCardLabel({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center gap-2 sm:mb-5">
      <span className="text-accent">{icon}</span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent/85 sm:text-sm">
        {children}
      </span>
    </div>
  );
}
