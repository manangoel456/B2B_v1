const fetch = globalThis.fetch;
const params = new URLSearchParams();
params.append('entry.1090593032', 'Test User');
params.append('entry.501772', 'Test Company');
params.append('entry.1137390534', 'Other');
params.append('entry.1339654133', 'Distributor Inquiry');
params.append('entry.933756849', 'Delhi');
params.append('entry.1669741464', 'New Delhi');
params.append('entry.26839480', '9999999999');
params.append('entry.1291691220', 'test@example.com');

fetch('https://docs.google.com/forms/d/e/1FAIpQLSfsfJPsFXWJOiPHptioz5P8_Tcr__h7ax-mJLBWL328TK4G0A/formResponse', {
  method: 'POST',
  body: params
}).then(res => {
  return res.text();
}).then(text => {
  const fs = require('fs');
  fs.writeFileSync('form_resp.html', text);
  console.log("Status:", text.includes('Your response has been recorded.'));
  console.log("HTML length:", text.length);
  const match = text.match(/<div class="freebirdFormviewerViewFormErrorMessage".*?>(.*?)<\/div>/);
  if (match) {
    console.log("Error:", match[1]);
  } else {
    console.log("No specific error message found.");
  }
});
