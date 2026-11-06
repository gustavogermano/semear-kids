/**
 * Paleta extraída do logotipo e das artes da Semear Kids.
 * Valores em HEX; as variáveis CSS são geradas em src/theme.
 */
export const themeConfig = {
  colors: {
    primary: "#8B3FBF", // roxo do logotipo
    primaryDark: "#5A2A8C",
    primarySoft: "#EBDDFA",
    secondary: "#3FA0E0", // azul do logotipo
    secondaryDark: "#1F78B8",
    secondarySoft: "#DCEFFC",
    accent: "#FFC93C", // amarelo do sol
    accentSoft: "#FFF3CC",
    surface: "#FBF8FF",
    surfaceAlt: "#F1EAFB",
    ink: "#2B1A4A",
    inkSoft: "#5E4D7E",
  },
} as const;

export type ThemeColors = typeof themeConfig.colors;
