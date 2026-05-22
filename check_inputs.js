const fs = require('fs');
const html = fs.readFileSync('form_resp.html', 'utf8');
const names = html.match(/name="entry\.\d+"/g);
console.log('Inputs found in HTML:', [...new Set(names)]);
