import { cn } from "../../lib/utils";
import type { HTMLAttributes } from "react";

type TypographyProps = HTMLAttributes<HTMLElement>;

export function Display({
  className,
  children,
  ...props
}: TypographyProps & { as?: "h1" | "h2" }) {
  const Component = props.as ?? "h1";
  const { as: _, ...rest } = props;

  return (
    <Component
      className={cn(
        "text-display font-semibold tracking-tight text-balance text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function Heading({
  level = 2,
  className,
  children,
  ...props
}: TypographyProps & { level?: 1 | 2 | 3 }) {
  const styles = {
    1: "text-h1 font-semibold tracking-tight text-foreground",
    2: "text-h2 font-semibold tracking-tight text-foreground",
    3: "text-h3 font-semibold tracking-tight text-foreground",
  } as const;

  if (level === 1) {
    return (
      <h1 className={cn(styles[1], className)} {...props}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={cn(styles[3], className)} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={cn(styles[2], className)} {...props}>
      {children}
    </h2>
  );
}

export function Text({
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps & {
  variant?: "body" | "body-lg" | "muted" | "label" | "eyebrow";
  as?: "p" | "span";
}) {
  const variants = {
    body: "text-body text-foreground",
    "body-lg": "text-body-lg text-foreground",
    muted: "text-body text-muted",
    label: "text-sm text-muted-foreground",
    eyebrow:
      "text-xs font-medium uppercase tracking-widest text-accent font-mono",
  } as const;

  const Component = props.as ?? "p";
  const { as: _, ...rest } = props;

  return (
    <Component className={cn(variants[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
