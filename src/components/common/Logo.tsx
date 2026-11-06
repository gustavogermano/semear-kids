import { siteConfig } from "@/config/site.config";
import { AppImage } from "./AppImage";

interface LogoProps {
  size?: number;
  priority?: boolean;
  className?: string;
}

export function Logo({ size = 120, priority = false, className }: LogoProps) {
  return (
    <AppImage
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={className}
    />
  );
}
