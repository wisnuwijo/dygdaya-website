import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vbg: {
          surface: {
            primary: "var(--vbg-surface-primary)",
            secondary: "var(--vbg-surface-secondary)",
            contrast: "var(--vbg-surface-contrast)",
          },
          text: {
            primary: "var(--vbg-text-primary)",
            secondary: "var(--vbg-text-secondary)",
            muted: "var(--vbg-text-muted)",
          },
          border: {
            subtle: "var(--vbg-border-subtle)",
            default: "var(--vbg-border-default)",
            strong: "var(--vbg-border-strong)",
          },
          chart: {
            1: "var(--vbg-chart-1)",
            2: "var(--vbg-chart-2)",
            3: "var(--vbg-chart-3)",
            4: "var(--vbg-chart-4)",
            5: "var(--vbg-chart-5)",
            6: "var(--vbg-chart-6)",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
