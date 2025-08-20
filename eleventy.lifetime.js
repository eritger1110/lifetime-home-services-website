module.exports = function (eleventyConfig) {
  // Useful filter (OK to keep)
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = new Date(value || new Date());
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  // Static passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js": "script.js",
    "src/_redirects": "_redirects",
  });

  // Support templates that say `layout: base` or `layout: base.njk`
  eleventyConfig.addLayoutAlias("base", "layout.njk");
  eleventyConfig.addLayoutAlias("base.njk", "layout.njk");

  return {
    dir: {
      input: "src/lifetime",      // build the Lifetime site
      output: "dist/lifetime",
      includes: "../",            // allow {% include "header.njk" %} etc. from src/
      layouts: "../",             // allow layout: layout.njk (or base via alias)
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
