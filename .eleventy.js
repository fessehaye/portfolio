const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTailwindCSS)

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
