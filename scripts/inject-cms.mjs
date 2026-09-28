import { readFileSync, writeFileSync } from 'node:fs';
const file='index.html';
let html=readFileSync(file,'utf8');
const tag='<script src="scripts/site-data.js"></script>';
if(!html.includes(tag)){
  const marker='  <script>\n';
  if(!html.includes(marker)) throw new Error('Inline script marker not found in index.html');
  html=html.replace(marker,`  ${tag}\n${marker}`);
  writeFileSync(file,html);
}
