const fs = require('fs');
const path = require('path');

// Simple glob-like function to find HTML files
function findHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = findHtmlFiles('dist');
let errors = 0;

const must = p => fs.existsSync(p);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file,'utf8');
  const dir = path.dirname(file);

  // Check <img src>
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
  for (const src of imgs) {
    if (/^https?:\/\//.test(src) || src.startsWith('data:')) continue;
    const rel = src.startsWith('/') ? path.join('dist', src) : path.join(dir, src);
    if (!must(rel)) {
      console.error('Missing image:', src, 'referenced in', file);
      errors++;
    }
  }
}

if (errors) { process.exit(1); }
console.log('✅ Asset check passed');

