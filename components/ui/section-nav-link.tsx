"use client";

import { handleSectionNav } from "../../lib/scroll-to-section";
import { cn } from "../../lib/utils";
import type { ComponentProps } from "react";

type SectionNavLinkProps = ComponentProps<"button"> & {
  sectionId: string;
};

export function SectionNavLink({
  sectionId,
  className,
  children,
  onClick,
  ...props
}: SectionNavLinkProps) {
  return (
    <button
      type="button"
      className={cn(className)}
      onClick={(event) => {
        handleSectionNav(event, sectionId);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
