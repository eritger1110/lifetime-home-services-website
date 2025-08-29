module.exports = function (eleventy) {
  eleventy.addLayoutAlias("base", "layout.njk");

  eleventy.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  eleventy.addPassthroughCopy({
    "public/assets": "assets"
  });

  return {
    dir: {
      input: "src/lifetime",
      output: "dist/lifetime",
      includes: "../_includes",
      layouts: "../_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"]
  };
};


