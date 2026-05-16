import { Heading, Text } from "./typography";
import { cn } from "../../lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <Text variant="eyebrow" as="p">
        {eyebrow}
      </Text>
      <Heading level={2} className="mt-3">
        {title}
      </Heading>
      {description ? (
        <Text variant="muted" className="mt-4 text-pretty" as="p">
          {description}
        </Text>
      ) : null}
    </div>
  );
}
