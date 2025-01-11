// import type { Config } from 'tailwindcss';

// const config: Config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         // 'gradient-conic':
//         //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       colors: {
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         chart: {
//           '1': 'hsl(var(--chart-1))',
//           '2': 'hsl(var(--chart-2))',
//           '3': 'hsl(var(--chart-3))',
//           '4': 'hsl(var(--chart-4))',
//           '5': 'hsl(var(--chart-5))',
//         },
//       },
//       keyframes: {
//         'accordion-down': {
//           from: {
//             height: '0',
//           },
//           to: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//         },
//         'accordion-up': {
//           from: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//           to: {
//             height: '0',
//           },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };
// export default config;


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
        background: 'rgb(0, 0, 0)', // Black
        foreground: 'rgb(38, 38, 66)', // Dark Blue
        card: {
          DEFAULT: 'rgb(30, 30, 30)', // Black variant
          foreground: 'rgb(36, 48, 57)', // Steel Blue
        },
        popover: {
          DEFAULT: 'rgb(40, 40, 40)', // Black variant
          foreground: 'rgb(65, 105, 225)', // Royal Blue
        },
        primary: {
          DEFAULT: 'rgb(0, 0, 255)', // Blue
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
