const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layout.njk");

  // Copy assets
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "public/assets": "assets",
    "public/_headers": "_headers",
  });
  
  // Add HTML base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  
  // Global data
  eleventyConfig.addGlobalData("brand", "aih");
  eleventyConfig.addGlobalData("brandName", "America In-Home");
  eleventyConfig.addGlobalData("phone", "262-955-5701");
  eleventyConfig.addGlobalData("baseUrl", "/aih/");
  
  // Build data
  eleventyConfig.addGlobalData("build", () => {
    return {
      sha: process.env.COMMIT_REF || require("crypto").randomBytes(20).toString("hex"),
      ts: new Date().toISOString(),
      timestamp: Date.now()
    };
  });
  
  // Filters
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = value ? new Date(value) : new Date();
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });
  
  eleventyConfig.addFilter("slug", function(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  });
  
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  
  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  eleventyConfig.addShortcode("picture", function(src, alt, className = "") {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    return `<picture class="${className}">
      <source srcset="${webpSrc}" type="image/webp">
      <img src="${src}" alt="${alt}" loading="lazy">
    </picture>`;
  });
  
  eleventyConfig.addShortcode("video", function(src, poster = "", className = "") {
    return `<video class="${className}" autoplay muted loop playsinline poster="${poster}">
      <source src="${src}" type="video/mp4">
      Your browser does not support the video tag.
    </video>`;
  });

  return {
    dir: {
      input: "src/aih",
      output: "dist/aih",
      includes: "../_includes",
      layouts: "../_includes",
      data: "_data"
    },
    pathPrefix: "/aih/"
  };
};


