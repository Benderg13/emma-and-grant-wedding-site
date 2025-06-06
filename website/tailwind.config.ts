// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here using hex codes
        'nav-start': '#DBA395',
        'nav-end': '#EFCFC7',
        'link-hover': '#DBA395',
        'button-hover-bg': '#DBA395',
        'navy-blue': '#282F4B',
        'dark-pink': '#DBA395',
        'light-pink': '#EFCFC7',
      },
      fontFamily: {
        local: ['var(--font-tanPearl)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-montserrat)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};