// eleventy.lifetime.js
module.exports = function (eleventyConfig) {
  // Copy assets folder → /assets in output
  eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

  // ALSO copy the DP-only _headers file to site root (needed for Deploy Previews)
  eleventyConfig.addPassthroughCopy({ "public/_headers": "_headers" });

  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  return {
    dir: {
      input: "src/lifetime",
      output: "dist/lifetime",
      includes: "../",
      layouts: "../",
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
