/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./test/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        'xl': '20px'
      },
      colors: {
        'red': '#ff0000'
      }
    },
  },
  plugins: [],
}


