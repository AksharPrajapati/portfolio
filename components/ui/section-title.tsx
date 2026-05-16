import { cn } from "../../lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl",
          align === "center" && "mx-auto",
        )}
      >
        {title}
        <span className="text-gradient">.</span>
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-lg font-light text-muted",
            align === "center" && "mx-auto max-w-lg",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
