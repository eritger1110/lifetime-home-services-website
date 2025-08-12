module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  return {
    dir: {
      input: "src/lifetime",
      includes: "../shared",
      output: "dist/lifetime"
    }
  };
};
