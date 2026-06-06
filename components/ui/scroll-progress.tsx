"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-accent-gradient"
      style={{ scaleX }}
    />
  );
}
