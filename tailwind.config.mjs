import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Platypi Variable"', ...defaultTheme.fontFamily.serif], 
      },
      colors: {
        brand: {
          primary: 'var(--brand-primary)', // Maps to --brand-primary
          secondary: 'var(--brand-secondary)', // Maps to --brand-secondary
          accent: 'var(--brand-accent)',
          secondaryDark: 'var(--brand-secondaryDark)', // Maps to --brand-accent
        },
        text: {
          light: 'var(--text-light)',
          medium: 'var(--text-medium)', // Maps to --text-light
          dark: 'var(--text-dark)', // Maps to --text-dark
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-blob': {
          maskImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -80 160 160"><path fill="black" d="M50,-58.8C64.4,-47.4,75.5,-31.4,78.1,-14.2C80.6,3,74.4,21.2,64.2,35.4C54,49.6,39.7,59.8,23.1,67.7C6.4,75.7,-12.7,81.4,-28.8,76.7C-45,71.9,-58.3,56.6,-67.7,39.5C-77,22.4,-82.4,3.5,-77.6,-11.9C-72.7,-27.2,-57.6,-38.9,-42.9,-50.2C-28.3,-61.5,-14.1,-72.5,1.8,-74.6C17.8,-76.8,35.5,-70.2,50,-58.8Z" transform="translate(0 0)" /></svg>')`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -80 160 160"><path fill="black" d="M50,-58.8C64.4,-47.4,75.5,-31.4,78.1,-14.2C80.6,3,74.4,21.2,64.2,35.4C54,49.6,39.7,59.8,23.1,67.7C6.4,75.7,-12.7,81.4,-28.8,76.7C-45,71.9,-58.3,56.6,-67.7,39.5C-77,22.4,-82.4,3.5,-77.6,-11.9C-72.7,-27.2,-57.6,-38.9,-42.9,-50.2C-28.3,-61.5,-14.1,-72.5,1.8,-74.6C17.8,-76.8,35.5,-70.2,50,-58.8Z" transform="translate(0 0)" /></svg>')`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
        },
      });
    },
  ],
};