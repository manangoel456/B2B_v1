const fs = require('fs');
const path = require('path');

const replacements = [
  { find: /50% to 58% net margins/gi, replace: 'industry-leading net margins' },
  { find: /50-58% net margins/gi, replace: 'industry-leading net margins' },
  { find: /50% to 58% margins/gi, replace: 'industry-leading profit margins' },
  { find: /50-58% margins/gi, replace: 'industry-leading profit margins' },
  { find: /50%\+ distributor margins/gi, replace: 'industry-leading distributor margins' },
  { find: /50%\+ profit margin/gi, replace: 'industry-leading profit margin' },
  { find: /50%\+ gross margin/gi, replace: 'industry-leading gross margin' },
  { find: /50%\+ margins/gi, replace: 'high-yield profit margins' },
  { find: /50%\+ net margins/gi, replace: 'high-yield net margins' },
  { find: /50% to 58%/gi, replace: 'industry-leading ROI' },
  { find: /50% [–\-] 58%/gi, replace: 'industry-leading ROI' },
  { find: /50-58%/gi, replace: 'industry-leading ROI' },
  { find: /50%\+/gi, replace: 'industry-leading' },
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
console.log("Done replacing margins.");
