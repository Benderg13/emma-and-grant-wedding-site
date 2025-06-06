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
        'nav-start': '#DBA395', // Your custom blue for the gradient start
        'nav-end': '#EFCFC7',   // Your custom indigo/purple for the gradient end
        'link-hover': '#282F4B', // Your custom lighter blue for text hover
        'button-hover-bg': '#DBA395', // White with 10% opacity (for hover background)
        // You can add more custom colors as needed
        // 'my-primary-blue': '#1a2b3c',
        // 'my-accent-green': '#abcde0',
      },
      fontFamily: {
        sans: ['var(--font-tan-pearl)', ...defaultTheme.fontFamily.sans], // Assuming you kept 'tan-pearl'
      },
    },
  },
  plugins: [],
};