const pluginPWA = require("eleventy-plugin-pwa")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTailwindCSS)
  eleventyConfig.addPlugin(pluginPWA)

  eleventyConfig.addPassthroughCopy("src/img")
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("manifest.json")

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
