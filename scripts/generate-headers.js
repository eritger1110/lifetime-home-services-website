const fs = require('fs');
const path = require('path');

const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
if (!isDeployPreview) {
  console.log('Not a Deploy Preview; skipping _headers');
  process.exit(0);
}

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const headers = `/*\n  X-Robots-Tag: noindex, nofollow\n`;
fs.writeFileSync(path.join(publicDir, '_headers'), headers, 'utf8');
console.log('Wrote DP-only _headers');
