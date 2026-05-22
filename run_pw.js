const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('request', request => {
    if (request.method() === 'POST' && request.url().includes('formResponse')) {
      console.log('--- POST to formResponse ---');
      console.log(request.postData());
    }
  });

  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSfsfJPsFXWJOiPHptioz5P8_Tcr__h7ax-mJLBWL328TK4G0A/viewform');

  // Wait for the form to load
  await page.waitForSelector('form');
  
  console.log('Form loaded. We can try to click the submit button if it lets us without filling required fields to see the payload.');
  
  // Just try to click submit
  await page.click('div[role="button"][aria-label="Submit"]');
  
  await page.waitForTimeout(2000);
  await browser.close();
})();
