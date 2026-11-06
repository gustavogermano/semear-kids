import { cn } from "@/utils/cn";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
      <h2
        id={id}
        className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{description}</p>
      )}
    </header>
  );
}
