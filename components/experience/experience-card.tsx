"use client";

import { cn } from "../../lib/utils";
import { Briefcase } from "lucide-react";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: readonly string[];
  current?: boolean;
};

type ExperienceCardProps = {
  job: ExperienceItem;
  className?: string;
};

export function ExperienceCard({ job, className }: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "glass-card group relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-accent/25 md:p-8",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <Briefcase className="size-4 shrink-0 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
              {job.current ? (
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  Current
                </span>
              ) : null}
            </div>
            <p className="font-medium text-muted">{job.role}</p>
          </div>
          <time className="shrink-0 font-mono text-sm text-muted-foreground">
            {job.period}
          </time>
        </div>

        <p className="mb-4 text-pretty font-light leading-relaxed text-muted">
          {job.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {job.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
