// Copy this entire code into a new file named "tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#F472B6',
        'pink-light': '#FCE7F3',
        'pink-dark': '#DB2777',
        'pink-deep': '#BE185D',
      },
      fontFamily: {
        'cursive': ['"Dancing Script"', 'cursive'],
        'sans': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}