const fs = require('fs');
const path = require('path');

const THEME_DIR = 'node_modules/hexo-theme-minimalism';
const PATCHES_DIR = 'theme-patches';

const files = [
  'source/style/_core/night-node.styl',
  'source/style/_blocks/post.styl',
  'source/style/_blocks/list.styl',
  'layout/includes/footer.ejs',
  'layout/post.ejs',
  'layout/includes/head.ejs',
];

files.forEach(file => {
  const patchFile = path.join(PATCHES_DIR, path.basename(file));
  const targetFile = path.join(THEME_DIR, file);
  
  if (fs.existsSync(patchFile)) {
    fs.copyFileSync(patchFile, targetFile);
    console.log(`Patched: ${targetFile}`);
  } else {
    console.warn(`Patch not found: ${patchFile}`);
  }
});

console.log('All theme patches applied.');
