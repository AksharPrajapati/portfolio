import { cn } from "../../lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

const variantStyles = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border hover:bg-card hover:border-muted-foreground/30",
  ghost: "bg-transparent text-muted hover:text-foreground hover:bg-card",
} as const;

type ButtonVariant = keyof typeof variantStyles;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  external,
  href,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={typeof href === "string" ? href : href.toString()}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
