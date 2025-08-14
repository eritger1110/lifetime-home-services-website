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

    // ✅ NEW LINE: copy from src/_redirects
    "src/_redirects": "_redirects",
  });

  return {
    dir: {
      input: "src/lifetime",
      includes: "../",
      output: "dist/lifetime",
    },
  };
};
