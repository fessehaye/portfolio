const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
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
      Mada: ["Mada", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  variants: {},
  plugins: [],
}
