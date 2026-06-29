import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the Cerulean Commons brand: dove-on-navy logo,
        // bright azure building trim, gold subtitle, rose accents.
        navy: {
          DEFAULT: "#103A5C",
          deep: "#0B2A45",
          900: "#0B2A45",
          800: "#103A5C",
          700: "#184E76",
        },
        azure: {
          DEFAULT: "#1E8FCC",
          bright: "#2BA0E0",
          soft: "#7FC0E8",
          mist: "#D7EAF6",
        },
        gold: {
          DEFAULT: "#E7B23C",
          soft: "#F2D38A",
        },
        rose: {
          DEFAULT: "#D43E72",
          soft: "#F2C6D7",
        },
        paper: "#F2F7FB",
        linen: "#FBFCFE",
        ink: "#0F2A40",
        slate: {
          DEFAULT: "#33485A",
          soft: "#5C7287",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(16, 58, 92, 0.35)",
        lift: "0 28px 60px -28px rgba(16, 58, 92, 0.45)",
        ring: "0 0 0 1px rgba(16, 58, 92, 0.08)",
      },
      maxWidth: {
        wrap: "76rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
