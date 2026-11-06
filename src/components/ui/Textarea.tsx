import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import { fieldStyles } from "./Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      <textarea id={id} name={id} rows={4} className={cn(fieldStyles, "resize-y", className)} {...props} />
    </div>
  );
}
