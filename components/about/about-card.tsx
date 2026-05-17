"use client";

import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type AboutCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export function AboutCard({ children, className, ...props }: AboutCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "glass-card group relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-accent/25 sm:p-8",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
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
