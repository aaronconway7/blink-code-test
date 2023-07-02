/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#e6edfb',
          DEFAULT: '#004bd6',
          dark: '#0030b5',
        },
        gold: '#f9b133',
      },
    },
  },
  plugins: [],
}
