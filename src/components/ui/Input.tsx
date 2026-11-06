import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const fieldStyles =
  "w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-base text-ink " +
  "placeholder:text-ink-soft/60 transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      <input id={id} name={id} className={cn(fieldStyles, className)} {...props} />
    </div>
  );
}
