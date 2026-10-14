import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#030504",
        terminal: "#00ff88",
        cyber: "#00e5ff",
        alert: "#ff2d4d",
        amber2: "#ffb800",
        fog: "#0a1410",
      },
      fontFamily: {
        display: ["'Rajdhani'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        condensed: ["'Saira Condensed'", "sans-serif"],
      },
      animation: {
        scanline: "scanline 8s linear infinite",
        sweep: "sweep 4s linear infinite",
        blink: "blink 1s step-end infinite",
        flicker: "flicker 4s linear infinite",
        rain: "rain 12s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: { "50%": { opacity: "0" } },
        flicker: {
          "0%,100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
          "97%": { opacity: "0.6" },
          "98%": { opacity: "1" },
        },
        rain: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 1000px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;