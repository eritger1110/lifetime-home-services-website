// eleventy.lifetime.js
module.exports = function (eleventyConfig) {
  // Simple Nunjucks "date" filter that supports 'yyyy' in the footer.
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString(); // fallback
  });

  // Copy assets needed by the built site into dist/lifetime
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",             // shared images/fonts/etc
    "styles.css": "styles.css",         // shared stylesheet at site root
    "script.js": "script.js",           // shared script at site root
    "index.html": "index.html",         // your big home page in repo root
    "src/lifetime/_redirects": "_redirects" // ensure _redirects lands in publish dir
  });

  return {
    dir: {
      input: "src/lifetime",
      includes: "../_includes", 
      layouts: "../_includes",
      output: "_site"
    }
  };
};
