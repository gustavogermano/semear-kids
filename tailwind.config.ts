import type { Config } from "tailwindcss";

/**
 * As cores vêm de variáveis CSS geradas a partir de src/config/theme.config.ts.
 * Para um novo cliente, altere apenas o theme.config.ts.
 */
const channel = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: channel("primary"),
          dark: channel("primary-dark"),
          soft: channel("primary-soft"),
        },
        secondary: {
          DEFAULT: channel("secondary"),
          dark: channel("secondary-dark"),
          soft: channel("secondary-soft"),
        },
        accent: {
          DEFAULT: channel("accent"),
          soft: channel("accent-soft"),
        },
        surface: {
          DEFAULT: channel("surface"),
          alt: channel("surface-alt"),
        },
        ink: {
          DEFAULT: channel("ink"),
          soft: channel("ink-soft"),
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgb(var(--color-primary) / 0.25)",
        lift: "0 24px 60px -20px rgb(var(--color-primary) / 0.35)",
      },
      keyframes: {
        "bubble-rise": {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "50%": { transform: "translateY(-50vh) translateX(14px) scale(1.04)" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(-105vh) translateX(-10px) scale(0.96)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "bubble-rise": "bubble-rise var(--bubble-duration, 18s) linear var(--bubble-delay, 0s) infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
