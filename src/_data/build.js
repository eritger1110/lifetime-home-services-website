// src/_data/build.js
module.exports = () => ({
  sha: process.env.COMMIT_REF || "",
  ts: new Date().toISOString(),
});

