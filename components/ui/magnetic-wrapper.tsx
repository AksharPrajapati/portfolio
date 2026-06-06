"use client";

import { cn } from "../../lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticWrapperProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticWrapper({
  children,
  className,
  strength = 0.3,
}: MagneticWrapperProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * strength);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
