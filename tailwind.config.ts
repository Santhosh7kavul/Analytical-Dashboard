import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors: {
        background: 'rgb(49, 57, 69)', // Black
        foreground: 'rgb(38, 38, 66)', // Dark Blue
        card: {
          DEFAULT: 'rgb(30, 30, 30)', // Black variant
          foreground: 'rgb(36, 48, 57)', // Steel Blue
        },
        popover: {
          DEFAULT: 'rgb(40, 40, 40)', // Black variant
          foreground: 'rgb(40, 50, 84)', // Royal Blue
        },
        primary: {
          DEFAULT: 'rgb(39, 148, 206)', // Blue
          foreground: 'rgb(34, 39, 54)', // White
        },
        secondary: {
          DEFAULT: 'rgb(43, 48, 60)', // Black variant
          foreground: 'rgb(100, 149, 237)', // Cornflower Blue
        },
        border: 'rgb(57, 43, 43)', // Dim Gray
        input: 'rgb(70, 70, 70)', // Black variant
        ring: 'rgb(30, 144, 255)', // Dodger Blue
        chart: {
          '1': 'rgb(46, 46, 69)', // Blue
          '2': 'rgb(65, 105, 225)', // Royal Blue
          '3': 'rgb(135, 206, 250)', // Light Sky Blue
          '4': 'rgb(70, 130, 180)', // Steel Blue
          '5': 'rgb(30, 144, 255)', // Dodger Blue
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
