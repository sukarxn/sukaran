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
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
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
        vfd: {
          glow: "hsl(var(--vfd-glow))",
          "glow-bright": "hsl(var(--vfd-glow-bright))",
          "glow-dim": "hsl(var(--vfd-glow-dim))",
          screen: "hsl(var(--vfd-screen))",
          border: "hsl(var(--vfd-border))",
          accent: "hsl(var(--vfd-accent))",
        },
      },
      boxShadow: {
        'glow': 'var(--glow-shadow)',
        'glow-bright': 'var(--glow-shadow-bright)',
        'border-glow': 'var(--border-glow)',
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 98%': { opacity: '1' },
          '99%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        'glow-pulse': {
          'from': {
            textShadow: '0 0 3px currentColor, 0 0 6px currentColor',
          },
          'to': {
            textShadow: '0 0 6px currentColor, 0 0 12px currentColor, 0 0 18px currentColor',
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
