import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gradient: {
          gold: "hsl(var(--gradient-gold))",
          amber: "hsl(var(--gradient-amber))",
          warm: "hsl(var(--gradient-warm))",
          silver: "hsl(var(--gradient-silver))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "grid-move": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(30px, 30px)" },
        },
        "particle-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translate(100px, -150px) scale(1.5)", opacity: "0.3" },
        },
        "particle-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(-80px, 120px) scale(0.8)", opacity: "0.8" },
        },
        "particle-3": {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.4" },
          "50%": { transform: "translate(60px, -80px)", opacity: "0.7" },
        },
        "particle-4": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(-50px, -100px) scale(1.2)", opacity: "0.3" },
        },
        "particle-5": {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.4" },
          "50%": { transform: "translate(40px, 60px)", opacity: "0.6" },
        },
        "ray-1": {
          "0%, 100%": { opacity: "0.15", transform: "scaleY(1)" },
          "50%": { opacity: "0.05", transform: "scaleY(0.8)" },
        },
        "ray-2": {
          "0%, 100%": { opacity: "0.1", transform: "scaleY(0.9)" },
          "50%": { opacity: "0.2", transform: "scaleY(1.1)" },
        },
        "ray-3": {
          "0%, 100%": { opacity: "0.1", transform: "scaleY(1)" },
          "50%": { opacity: "0.15", transform: "scaleY(0.7)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "grid-move": "grid-move 20s ease-in-out infinite",
        "particle-1": "particle-1 8s ease-in-out infinite",
        "particle-2": "particle-2 12s ease-in-out infinite",
        "particle-3": "particle-3 10s ease-in-out infinite",
        "particle-4": "particle-4 14s ease-in-out infinite",
        "particle-5": "particle-5 9s ease-in-out infinite",
        "ray-1": "ray-1 6s ease-in-out infinite",
        "ray-2": "ray-2 8s ease-in-out infinite",
        "ray-3": "ray-3 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
