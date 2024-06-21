/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        rectangle1: "url('/public/images/rectangle1.png')",
        rectangle26: "url('/public/images/Rectangle 26.png')",
      },

      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],
        'montserrat-thin': ['"Montserrat"', "sans-serif"],
        'montserrat-extralight': ['"Montserrat"', "sans-serif"],
        'montserrat-light': ['"Montserrat"', "sans-serif"],
        'montserrat-regular': ['"Montserrat"', "sans-serif"],
        'montserrat-medium': ['"Montserrat"', "sans-serif"],
        'montserrat-semibold': ['"Montserrat"', "sans-serif"],
        'montserrat-bold': ['"Montserrat"', "sans-serif"],
        'montserrat-extrabold': ['"Montserrat"', "sans-serif"],
        'montserrat-black': ['"Montserrat"', "sans-serif"]
      },

      fontWeight: {
        'montserrat-thin': 100,
        'montserrat-extralight': 200,
        'montserrat-light': 300,
        'montserrat-regular': 400,
        'montserrat-medium': 500,
        'montserrat-semibold': 600,
        'montserrat-bold': 700,
        'montserrat-extrabold': 800,
        'montserrat-black': 900
      },
    },

  },

  plugins: [
    require('daisyui'),
  ],
}