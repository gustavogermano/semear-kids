import localFont from "next/font/local";

/**
 * Tipografia do cliente, hospedada localmente em src/assets/fonts (sem depender do Google Fonts
 * no build). Baloo 2 ecoa o lettering arredondado do logotipo; Nunito garante leitura confortável.
 * Para trocar a fonte, substitua os arquivos .woff2 e ajuste os caminhos abaixo.
 */
export const displayFont = localFont({
  src: [
    { path: "../assets/fonts/baloo-2-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/baloo-2-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/baloo-2-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/baloo-2-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    {
      path: "../assets/fonts/nunito-latin-wght-normal.woff2",
      weight: "200 1000",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
