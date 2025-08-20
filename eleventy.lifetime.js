module.exports = function (eleventyConfig) {
  // Static passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js": "script.js",
    "src/_redirects": "_redirects",
  });

  // Allow templates to say layout: base.njk (maps to layout.njk at src/)
  eleventyConfig.addLayoutAlias("base", "layout.njk");

  return {
    dir: {
      // Build only the Lifetime site for this config
      input: "src/lifetime",
      output: "dist/lifetime",

      // Tell Eleventy where our shared includes/layout files live
      // (they’re at the src/ root, not inside src/lifetime/_includes)
      includes: "../", // so {% include "header.njk" %} works
      layouts: "../",  // so layout: layout.njk (or base.njk via alias) works
      data: "../_data" // use shared data files like src/_data/*.js
    },
    templateFormats: ["njk", "md", "html"],
  };
};
