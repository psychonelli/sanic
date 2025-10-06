/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
        'dark-blue': '#1E3A8A', // Custom blue color
      },
    },
  },
  plugins: [],
}