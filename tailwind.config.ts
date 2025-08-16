import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        bg: "var(--bg)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        card: "var(--card)",
      },
      fontFamily: {
        header: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
}
export default config;
