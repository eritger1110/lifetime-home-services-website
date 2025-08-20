module.exports = function (eleventyConfig) {
  // Build ONLY the Lifetime brand
  eleventyConfig.ignores.add("src/aih/**");
  eleventyConfig.ignores.add("src/cc/**");

  // Static passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "styles.css": "styles.css",
    "script.js": "script.js",
    "src/_redirects": "_redirects",
  });

  // Let templates use `layout: base` to map to `layout.njk` at project root
  eleventyConfig.addLayoutAlias("base", "layout.njk");

  return {
    dir: {
      input: "src",          // <— build from the entire /src tree
      output: "dist/lifetime",
      includes: ".",         // look for includes in /src
      layouts: ".",          // look for layouts in /src
      data: "_data",         // use /src/_data
    },
    templateFormats: ["njk", "md", "html"],
  };
};
