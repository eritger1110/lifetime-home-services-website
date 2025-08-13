module.exports = function(eleventyConfig) {
  // date filter
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  // Passthrough assets and redirects
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/lifetime/_redirects": "_redirects" });

  return {
    dir: {
      input: "src/lifetime",
      includes: "../shared",
      output: "dist/lifetime"
    }
  };
};
