// eleventy.lifetime.js
module.exports = function (eleventyConfig) {
  // Static passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js": "script.js"
  });

  // optional alias; using 'layout.njk' directly is fine too
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
