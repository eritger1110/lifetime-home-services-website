module.exports = function(eleventyConfig) {
  // Simple Nunjucks "date" filter that supports the 'yyyy' format we use in the footer.
eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
  const d = value ? new Date(value) : new Date();
  if (format === "yyyy") return String(d.getFullYear());
  // Fallback: ISO date if other formats ever appear
  return d.toISOString();
});

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  return {
    dir: {
      input: "src/lifetime",
      includes: "../shared",
      output: "dist/lifetime"
    }
  };
};
