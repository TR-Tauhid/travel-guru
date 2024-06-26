/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'rectangle1' : "url('/public/images/rectangle1.png')",
        'rectangle26' : "url('/public/images/Rectangle 26.png')",
        'sreemongol' : "url('/public/images/sreemongol.png')",
        'sundorbon' : "url('/public/images/sundorbon.png')",
        'martin' : "url('/public/images/saint-martin.png')",
        'rangamati' : "url('/public/images/rangamati.jpg')",
        'bandorban' : "url('/public/images/bandorban.jpg')",
        'sylhet' : "url('/public/images/sylhet.jpg')",
        'kuakata' : "url('/public/images/kuakata.jpg')",
        'paharpur' : "url('/public/images/paharpur.jpg')",
        'baerehat' : "url('/public/images/baerehat.jpg')",

      },

      fontFamily: {

        BabesNeue: ["BabesNeue", 'sans-serif'],
        'babesNeue-thin': ['"BabesNeue"', "sans-serif"],
        'babesNeue-extralight': ['"BabesNeue"', "sans-serif"],
        'babesNeue-light': ['"BabesNeue"', "sans-serif"],
        'babesNeue-regular': ['"BabesNeue"', "sans-serif"],
        'babesNeue-medium': ['"BabesNeue"', "sans-serif"],
        'babesNeue-semibold': ['"BabesNeue"', "sans-serif"],
        'babesNeue-bold': ['"BabesNeue"', "sans-serif"],
        'babesNeue-extrabold': ['"BabesNeue"', "sans-serif"],
        'babesNeue-black': ['"BabesNeue"', "sans-serif"],

        Avenir: ["Avenir", 'sans-serif'],
        'avenir-thin': ['"Avenir"', "sans-serif"],
        'avenir-extralight': ['"Avenir"', "sans-serif"],
        'avenir-light': ['"Avenir"', "sans-serif"],
        'avenir-regular': ['"Avenir"', "sans-serif"],
        'avenir-medium': ['"Avenir"', "sans-serif"],
        'avenir-semibold': ['"Avenir"', "sans-serif"],
        'avenir-bold': ['"Avenir"', "sans-serif"],
        'avenir-extrabold': ['"Avenir"', "sans-serif"],
        'avenir-black': ['"Avenir"', "sans-serif"],

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
        'montserrat-black': 900,

        'avenir-thin': 100,
        'avenir-extralight': 200,
        'avenir-light': 300,
        'avenir-regular': 400,
        'avenir-medium': 500,
        'avenir-semibold': 600,
        'avenir-bold': 700,
        'avenir-extrabold': 800,
        'avenir-black': 900,

        'babesNeue-thin': 100,
        'babesNeue-extralight': 200,
        'babesNeue-light': 300,
        'babesNeue-regular': 400,
        'babesNeue-medium': 500,
        'babesNeue-semibold': 600,
        'babesNeue-bold': 700,
        'babesNeue-extrabold': 800,
        'babesNeue-black': 900
      },
    },

  },

  plugins: [
    require('daisyui'),
  ],
}