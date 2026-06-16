const fs = require('fs');
const path = require('path');

const replacements = [
  // Slugs
  { find: /sunscreen-spf50/g, replace: 'bare-uv-sunscreen' },
  { find: /vitamin-c-serum/g, replace: 'bare-c20-serum' },
  { find: /night-cream/g, replace: 'bare-night-cream' },
  { find: /face-wash/g, replace: 'cicaglow-facewash' },
  { find: /face-body-lotion/g, replace: 'bare-hydra-lotion' },
  
  // Names in text (case sensitive, exact phrases)
  { find: /Sunscreen SPF 50 PA\+\+\+\+/g, replace: 'Bare-UV sunscreen' },
  { find: /Sunscreen SPF 50/g, replace: 'Bare-UV sunscreen' },
  { find: /Vitamin C Serum/g, replace: 'Bare-C20 serum' },
  { find: /Vitamin C 20% Serum/g, replace: 'Bare-C20 serum' },
  { find: /Face Wash/g, replace: 'Cicaglow facewash' },
  { find: /Night Cream/g, replace: 'Bare night cream' },
  { find: /Advanced Night Cream/g, replace: 'Bare night cream' },
  { find: /Face & Body Lotion/g, replace: 'Bare-hydra lotion' },
  { find: /Ceramide Body Lotion/g, replace: 'Bare-hydra lotion' }
];

const directories = [
  'c:/Users/DELL/OneDrive - BENNETT UNIVERSITY/Desktop/B2B/website/src',
  'c:/Users/DELL/OneDrive - BENNETT UNIVERSITY/Desktop/B2B/website/public'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.txt')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const r of replacements) {
        if (content.match(r.find)) {
          content = content.replace(r.find, r.replace);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

for (const dir of directories) {
  processDirectory(dir);
}
console.log("Done replacing.");
