const fs = require('fs');
const html = fs.readFileSync('form_resp.html', 'utf8');

// The typical Google Forms error classes are "freebirdFormviewerViewItemsItemErrorMessage"
const errors = [...html.matchAll(/class="[^"]*ErrorMessage[^"]*"[^>]*>(.*?)<\/div>/gi)].map(m => m[1]);
console.log("Errors:", errors.filter(e => e.trim().length > 0));

// Also check for any validation messages:
const dataMatch = html.match(/FB_PUBLIC_LOAD_DATA_ = (.*?);/);
if (dataMatch) {
  const data = JSON.parse(dataMatch[1]);
  // Look for field validation errors which are often embedded in the data model
  console.log("Parsed FB_PUBLIC_LOAD_DATA_ successfully.");
}
