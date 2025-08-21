module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js":  "script.js"
  });

  return {
    dir: {
      input:  "src/lifetime",
      output: "dist/lifetime",
      includes: "../",       // shared templates in src/
      layouts:  "../",       // shared layouts in src/
      data:     "../_data"   // shared data in src/_data
    },
    templateFormats: ["njk", "html", "md"]
  };
};
