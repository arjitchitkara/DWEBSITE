//  src/tailwind.config.ts
//  --------------------------------------------------------------
//  Vite + TS projects are ESM by default → use import, not require
// ----------------------------------------------------------------

import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'   // ✅ ES-module import

const config: Config = {
  darkMode: ['class'],

  /* Tell Tailwind where to scan for class-names */
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  /* ---------- NEW ---------- */
  safelist: [
    'bg-light',
    'text-dark',
    'bg-primary/10',
  ],

  prefix: '',

  theme: {
    container: {
      center : true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },

    extend: {
      /* ========== FULL COLOUR MAP ========== */
      colors: {
        /* site-wide neutral + accent palette for the white theme */
        site: {
          base        : 'hsl(var(--site-base))',
          panel       : 'hsl(var(--site-panel))',
          text        : 'hsl(var(--site-text))',
          line        : 'hsl(var(--site-line))',
          accent      : 'hsl(var(--site-accent))',
          'accent-dark': 'hsl(var(--site-accent-dark))',
        },

        /* existing design-system tokens */
        primary: {
          DEFAULT    : 'hsl(var(--primary))',
          foreground : 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT    : 'hsl(var(--secondary))',
          foreground : 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT    : 'hsl(var(--destructive))',
          foreground : 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT    : 'hsl(var(--muted))',
          foreground : 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT    : 'hsl(var(--accent))',
          foreground : 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT    : 'hsl(var(--popover))',
          foreground : 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT    : 'hsl(var(--card))',
          foreground : 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT             : 'hsl(var(--sidebar-background))',
          foreground          : 'hsl(var(--sidebar-foreground))',
          primary             : 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent              : 'hsl(var(--sidebar-accent))',
          'accent-foreground' : 'hsl(var(--sidebar-accent-foreground))',
          border              : 'hsl(var(--sidebar-border))',
          ring                : 'hsl(var(--sidebar-ring))',
        },
        construction: {
          dark  : '#0A0A0A',
          light : '#F9F9F9',
          accent: '#FFFFFF',
          muted : '#111111',
          border: '#222222',
        },
      },

      /* radius helpers */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* ---------- NEW SHADOW & BG IMAGE ---------- */
      boxShadow: {
        elevated: '0 4px 24px rgba(0,0,0,.05)',      // subtle float shadow
      },

      backgroundImage: {
        shine: 'linear-gradient(120deg,#ffffff 0%,#f3f3f3 50%,#ffffff 100%)',
      },

      /* keyframes (unchanged) */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to  : { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to  : { height: '0' },
        },
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%':   { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'cursor-follow': {
          '0%':   { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(var(--mouse-x), var(--mouse-y))' },
        },
        'text-reveal': {
          '0%':   { width: '0' },
          '100%': { width: '100%' },
        },
        'bg-pan': {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'rotate-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up'  : 'accordion-up 0.2s ease-out',
        'fade-in'       : 'fade-in 0.5s ease-out',
        'fade-out'      : 'fade-out 0.5s ease-out',
        'cursor-follow' : 'cursor-follow 0.2s ease-out forwards',
        'text-reveal'   : 'text-reveal 0.5s ease-out forwards',
        'bg-pan-slow'   : 'bg-pan 15s infinite alternate linear',
        'rotate-slow'   : 'rotate-slow 20s linear infinite',
      },

      /* font stacks */
      fontFamily: {
        body   : ['Inter',   'sans-serif'],
        sans   : ['Inter',   'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },

  /* 3rd-party plugins */
  plugins: [animate],
} satisfies Config

export default config
