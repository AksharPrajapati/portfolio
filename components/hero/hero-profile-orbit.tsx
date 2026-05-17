"use client";

import { siteConfig } from "../../data/site";
import { cn } from "../../lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";

type HeroProfileOrbitProps = {
  imageSrc?: string;
  imageAlt?: string;
  tooltip?: string;
  className?: string;
};

function OrbitRing({
  inset,
  duration,
  reverse,
  borderClass,
  children,
  reduceMotion,
}: {
  inset: string;
  duration: number;
  reverse?: boolean;
  borderClass: string;
  children?: ReactNode;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className={cn("absolute rounded-full", inset, borderClass)}
      animate={reduceMotion ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={
        reduceMotion
          ? undefined
          : { repeat: Infinity, duration, ease: "linear" }
      }
    >
      {children}
    </motion.div>
  );
}

export function HeroProfileOrbit({
  imageSrc,
  imageAlt,
  tooltip = "That's me 👋",
  className,
}: HeroProfileOrbitProps) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const initials = useMemo(
    () =>
      siteConfig.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [],
  );

  return (
    <motion.div
      className={cn("group relative mx-auto mb-2 cursor-pointer", className)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hover tooltip */}
      <motion.div
        className="pointer-events-none absolute -top-11 left-1/2 z-30 -translate-x-1/2"
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 6,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-card whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium text-foreground/85 shadow-accent-glow">
          {tooltip}
        </div>
      </motion.div>

      {/* Outer ambient glow */}
      <motion.div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-accent-gradient opacity-30 blur-2xl"
        animate={
          reduceMotion
            ? undefined
            : { opacity: hovered ? [0.35, 0.55, 0.35] : [0.22, 0.38, 0.22] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: hovered ? 2.5 : 5, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Orbit rings */}
      <OrbitRing
        inset="-inset-3"
        duration={22}
        borderClass="border border-accent/25"
        reduceMotion={reduceMotion}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px] shadow-accent/80" />
        <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-secondary/70 shadow-[0_0_8px] shadow-accent/50" />
      </OrbitRing>

      <OrbitRing
        inset="-inset-6"
        duration={32}
        reverse
        borderClass="border border-white/[0.06]"
        reduceMotion={reduceMotion}
      >
        <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/50" />
        <span className="absolute left-0 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary/40" />
      </OrbitRing>

      <OrbitRing
        inset="-inset-9"
        duration={40}
        borderClass="border border-dashed border-accent/10"
        reduceMotion={reduceMotion}
      />

      {/* Floating particles */}
      {!reduceMotion
        ? [
            { className: "left-[8%] top-[18%] size-1 bg-accent/60", delay: 0 },
            { className: "right-[12%] top-[28%] size-1.5 bg-accent-secondary/50", delay: 0.4 },
            { className: "bottom-[20%] left-[20%] size-1 bg-accent/40", delay: 0.8 },
          ].map((particle) => (
            <motion.span
              key={particle.className}
              aria-hidden
              className={cn("absolute rounded-full", particle.className)}
              animate={{ y: [0, -6, 0], opacity: [0.35, 0.85, 0.35] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))
        : null}

      {/* Avatar */}
      <motion.div
        className="relative z-10 mx-auto size-32 overflow-hidden rounded-full border-2 border-white/10 bg-card shadow-[0_0_48px_-12px] shadow-accent/50 sm:size-40 md:size-44"
        animate={{
          scale: hovered ? 0.96 : 1,
          y: hovered ? 4 : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? siteConfig.name}
            fill
            className="object-cover object-[center_20%] transition-transform duration-700 scale-110 group-hover:scale-100"
            sizes="(max-width: 768px) 128px, 176px"
            priority
          />
        ) : (
          <div
            className="flex size-full items-center justify-center bg-gradient-to-br from-card via-card to-surface text-2xl font-semibold text-foreground sm:text-3xl"
            role="img"
            aria-label={imageAlt ?? siteConfig.name}
          >
            {initials}
          </div>
        )}
      </motion.div>

      {/* Status indicator */}
      <div className="absolute bottom-1 right-[18%] z-20 flex size-6 items-center justify-center rounded-full bg-background sm:right-[20%]">
        <motion.span
          aria-hidden
          className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/80"
          animate={
            reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </motion.div>
  );
}
