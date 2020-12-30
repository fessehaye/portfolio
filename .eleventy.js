const pluginPWA = require("eleventy-plugin-pwa")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTailwindCSS)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addPlugin(pluginPWA)
    eleventyConfig.addPassthroughCopy("manifest.json")
  }

  eleventyConfig.addPassthroughCopy("src/img")
  eleventyConfig.addPassthroughCopy("src/js")

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
  }
}
