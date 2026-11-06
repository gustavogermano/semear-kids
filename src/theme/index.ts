import type { CSSProperties } from "react";
import { themeConfig } from "@/config/theme.config";
import { hexToChannels, toKebab } from "@/utils/color";

/** Gera as variáveis CSS (--color-*) usadas pelo Tailwind a partir do theme.config. */
export function getThemeVariables(): CSSProperties {
  const vars: Record<string, string> = {};
  for (const [key, hex] of Object.entries(themeConfig.colors)) {
    vars[`--color-${toKebab(key)}`] = hexToChannels(hex);
  }
  return vars as CSSProperties;
}
