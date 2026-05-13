import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fff8ea",
        folder: "#ebe8dc",
        ink: "#2f3437",
        muted: "#697174",
        coral: "#ff7f6e",
        lemon: "#f7cd4b",
        mint: "#6fd6a5",
        sky: "#71b8f0",
        lavender: "#b7a6f6",
      },
      boxShadow: {
        folder: "0 28px 70px rgba(71, 78, 88, 0.18)",
        paper: "0 16px 34px rgba(87, 91, 96, 0.14)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
