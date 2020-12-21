const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // enabled: true,
    content: ["dist/**/*.html", "./src/**/*.njk"],
  },
  theme: {
    extend: {
      colors: {
        green: colors.teal,
      },
      screens: {
        "3xl": "2100px",
        // => @media (orientation: portrait) { ... }
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
