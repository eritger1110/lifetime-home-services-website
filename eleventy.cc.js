// eleventy.cc.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js": "script.js",
    "src/cc/_redirects": "_redirects"
  });

  return {
    dir: {
      input: "src/cc",
      includes: "src/Lifetime/_includes/shared",
      output: "dist/cc"
    }
  };
};
