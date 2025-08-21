// Decides how brand links behave in production vs previews.
const isProd = process.env.CONTEXT === "production";

module.exports = {
  lifetime: {
    // Where to link brand logo/nav *within this brand*
    base: isProd ? "/" : "/lifetime/",
    // Where to link when switching brands
    root: isProd ? "https://www.lifetimehomeservices.com/" : "/lifetime/",
    canonicalBase: "https://www.lifetimehomeservices.com"
  },
  aih: {
    base: isProd ? "/" : "/aih/",
    root: isProd ? "https://www.americainhome.com/" : "/aih/",
    canonicalBase: "https://www.americainhome.com"
  },
  cc: {
    base: isProd ? "/" : "/cc/",
    root: isProd ? "https://www.closetconcepts.com/" : "/cc/",
    canonicalBase: "https://www.closetconcepts.com"
  }
};
