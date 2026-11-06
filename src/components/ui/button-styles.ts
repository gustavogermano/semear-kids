import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost" | "light";
export type ButtonSize = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold " +
  "transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lift",
  secondary:
    "bg-secondary text-white shadow-soft hover:-translate-y-0.5 hover:bg-secondary-dark hover:shadow-lift",
  whatsapp:
    "bg-whatsapp text-[#053b1c] shadow-[0_14px_34px_-12px_rgba(37,211,102,0.65)] hover:-translate-y-0.5 hover:brightness-105",
  ghost:
    "border border-primary/25 bg-white/60 text-primary-dark backdrop-blur hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white",
  light: "bg-white text-primary-dark shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}
