module.exports = function (eleventyConfig) {
  // Simple Nunjucks "date" filter that supports the 'yyyy' format we use in the footer.
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    // Fallback: ISO date if other formats ever appear
    return d.toISOString();
  });

  // Copy static files that must live at the site root of the publish directory
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",                 // brand/shared assets folder
    "styles.css": "styles.css",             // root stylesheet -> dist/lifetime/styles.css
    "script.js": "script.js",               // root script     -> dist/lifetime/script.js
    "src/lifetime/_redirects": "_redirects" // brand-specific redirects -> dist/lifetime/_redirects
    // Optional if you add one:
    // "src/lifetime/robots.txt": "robots.txt",
  });

  return {
    dir: {
      input: "src/lifetime",
      includes: "../shared",
      output: "dist/lifetime",
    },
  };
};
