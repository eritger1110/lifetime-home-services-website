module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js":  "script.js"
  });

  return {
    dir: {
      input:  "src/cc",
      output: "dist/cc",
      includes: "../",
      layouts:  "../",
      data:     "../_data"
    },
    templateFormats: ["njk", "html", "md"]
  };
};
