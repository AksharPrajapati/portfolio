"use client";

import { PageCursorBackground } from "./page-cursor-background";
import { useRef, type ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="relative">
      <PageCursorBackground containerRef={pageRef} />
      {children}
    </div>
  );
}
