import type { CSSProperties } from "react";
import { cn } from "@/utils/cn";

interface BubblesProps {
  count?: number;
  className?: string;
}

/** Valores determinísticos (sem Math.random) para evitar divergência de hidratação. */
function bubbleStyle(index: number): CSSProperties {
  const size = 18 + ((index * 37) % 62);
  const left = (index * 53 + 7) % 96;
  const duration = 14 + ((index * 5) % 14);
  const delay = -((index * 3) % 18);

  return {
    left: `${left}%`,
    bottom: "-80px",
    width: size,
    height: size,
    ["--bubble-duration" as string]: `${duration}s`,
    ["--bubble-delay" as string]: `${delay}s`,
  };
}

/** Bolhas de sabão subindo — animação 100% CSS, sem JavaScript no cliente. */
export function Bubbles({ count = 12, className }: BubblesProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          style={bubbleStyle(index)}
          className="absolute animate-bubble-rise rounded-full border border-white/80 opacity-0 will-change-transform
            bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.25)_28%,rgba(168,208,255,0.25)_60%,rgba(214,170,255,0.35)_100%)]
            shadow-[inset_-4px_-4px_10px_rgba(139,63,191,0.12)]"
        />
      ))}
    </div>
  );
}
