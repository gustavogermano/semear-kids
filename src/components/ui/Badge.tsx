import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type BadgeTone = "primary" | "secondary" | "accent" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const tones: Record<BadgeTone, string> = {
  primary: "bg-primary-soft text-primary-dark",
  secondary: "bg-secondary-soft text-secondary-dark",
  accent: "bg-accent-soft text-[#7A5600]",
  neutral: "bg-white text-ink-soft border border-primary/10",
};

export function Badge({ tone = "primary", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
