module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "public/assets": "assets",
    "public/_headers": "_headers",
  });

  return {
    dir: {
      input: "src/cc",
      output: "dist/cc",
    },
    pathPrefix: "/cc/"
  };
};
