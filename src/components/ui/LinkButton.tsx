import type { AnchorHTMLAttributes } from "react";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "./button-styles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Abre em nova aba com rel seguro. */
  external?: boolean;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} className={buttonStyles(variant, size, className)} {...externalProps} {...props}>
      {children}
    </a>
  );
}
