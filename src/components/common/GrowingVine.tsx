"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GrowingVineProps {
  className?: string;
}

const LEAVES = [
  { x: 150, y: 52, rotate: -35, color: "rgb(var(--color-secondary))" },
  { x: 330, y: 86, rotate: 28, color: "rgb(var(--color-primary))" },
  { x: 520, y: 40, rotate: -30, color: "rgb(var(--color-accent))" },
  { x: 700, y: 82, rotate: 30, color: "rgb(var(--color-secondary))" },
  { x: 880, y: 44, rotate: -28, color: "rgb(var(--color-primary))" },
  { x: 1050, y: 80, rotate: 32, color: "rgb(var(--color-accent))" },
];

/** Raiz/trepadeira que cresce ao entrar na tela, com folhas que brotam em sequência. */
export function GrowingVine({ className }: GrowingVineProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 120"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={cn("h-16 w-full sm:h-20", className)}
    >
      <motion.path
        d="M0 62 C 100 20, 200 100, 330 70 S 540 20, 660 66 S 900 104, 1010 62 S 1140 30, 1200 58"
        stroke="rgb(var(--color-primary) / 0.45)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      {LEAVES.map((leaf, index) => (
        <motion.ellipse
          key={leaf.x}
          cx={leaf.x}
          cy={leaf.y}
          rx="16"
          ry="30"
          fill={leaf.color}
          fillOpacity="0.85"
          style={{ transformOrigin: `${leaf.x}px ${leaf.y + 26}px`, rotate: leaf.rotate }}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.5 + index * 0.28, type: "spring", damping: 12, stiffness: 140 }}
        />
      ))}
    </svg>
  );
}
