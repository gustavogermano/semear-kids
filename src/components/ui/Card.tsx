import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-primary/10 bg-white shadow-soft",
        interactive && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        className,
      )}
      {...props}
    />
  );
}
