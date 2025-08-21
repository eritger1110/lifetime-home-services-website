// eleventy.lifetime.js
module.exports = function (eleventyConfig) {
  // Copy everything in /public/assets to /assets in the output
  eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

  // Optional alias; using 'layout.njk' directly is fine too
  eleventyConfig.addLayoutAlias("layout", "layout.njk");

  return {
    dir: {
      input: "src/lifetime",
      output: "dist/lifetime",
      // allow shared includes/layouts and shared data at the src/ root
      includes: "../",
      layouts: "../",
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
