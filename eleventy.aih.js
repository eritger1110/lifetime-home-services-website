module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js":  "script.js"
  });

  return {
    dir: {
      input:  "src/aih",
      output: "dist/aih",
      includes: "../",
      layouts:  "../",
      data:     "../_data"
    },
    templateFormats: ["njk", "html", "md"]
  };
};
