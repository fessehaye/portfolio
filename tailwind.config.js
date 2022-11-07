const colors = require("tailwindcss/colors")

module.exports = {
  content: 
    ["dist/**/*.html", "./src/**/*.njk"],
  theme: {
    extend: {
      colors: {
        green: colors.teal,
      },
      screens: {
        "3xl": "2100px",
      },
    },
    fontFamily: {
      Overlock: ["Overlock", "sans-serif"],
      Mada: ["Mada", "serif"],
      default: ["Proza Libre", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
}
