import { cn } from "../../lib/utils";
import type { HTMLAttributes } from "react";

type ContainerSize = "default" | "narrow" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", className)}
      {...props}
    >
      {children}
    </section>
  );
}
