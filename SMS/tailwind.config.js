/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        'darkBg': '#121420',
        'darkHeader': '#090c11',
        'darkWhite': '#fff',
        'bgColor': '#f9f9fa',
        'bgHeader': '#ffffff'
      }

    },
  },
  plugins: [require('tailwind-scrollbar')],
}