module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets"
  });

  return {
    dir: {
      input: "src/lifetime",
      output: "dist/lifetime",
      includes: "../",
      layouts: "../",
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"],
    pathPrefix: "/lifetime/"
  };
};
