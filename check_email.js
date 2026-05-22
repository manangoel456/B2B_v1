const fs = require('fs');
const html = fs.readFileSync('form_resp.html', 'utf8');
console.log('Contains emailAddress input?', html.includes('name="emailAddress"'));
