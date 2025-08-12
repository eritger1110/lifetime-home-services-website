module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  return {
    dir: {
      input: "src/aih",
      includes: "../shared",
      output: "dist/aih"
    }
  };
};
