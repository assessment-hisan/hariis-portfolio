/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"selector",
  theme: {
    fontFamily:{
      rubik : ["Rubik"],
      robotoMono : ["Roboto Mono"]
    },
    extend: {},
  },
  plugins: [],
}

