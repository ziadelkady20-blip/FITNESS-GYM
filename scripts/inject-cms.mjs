import { readFileSync, writeFileSync } from 'node:fs';

const inject = (file, tag) => {
  let html = readFileSync(file, 'utf8');
  if (!html.includes(tag)) {
    const marker = '</head>';
    if (!html.includes(marker)) throw new Error(`Head marker not found in ${file}`);
    html = html.replace(marker, `  ${tag}\n${marker}`);
    writeFileSync(file, html);
  }
};

inject('index.html', '<link rel="stylesheet" href="styles/mobile-polish.css">');
inject('admin.html', '<link rel="stylesheet" href="styles/admin-mobile.css">');

let html = readFileSync('index.html', 'utf8');
const tag = '<script src="scripts/site-data.js"></script>';
if (!html.includes(tag)) {
  const marker = '  <script>\n';
  if (!html.includes(marker)) throw new Error('Inline script marker not found in index.html');
  html = html.replace(marker, `  ${tag}\n${marker}`);
  writeFileSync('index.html', html);
}
