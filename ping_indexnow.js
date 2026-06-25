const fs = require('fs');
const path = require('path');

// Helper to extract slugs using regex
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /slug:\s*"([^"]+)"/g;
  const slugs = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

function extractCitySlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /city:\s*"([^"]+)"/g;
  const cities = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    // Avoid duplicates
    if (!cities.includes(match[1])) {
      cities.push(match[1]);
    }
  }
  return cities;
}

async function pingIndexNow() {
  const baseUrl = "https://barekyne.in";
  
  // Extract dynamic slugs
  const products = extractSlugs(path.join(__dirname, 'src/lib/products.ts'));
  const blogs = extractSlugs(path.join(__dirname, 'src/lib/blog.ts'));
  const cities = extractCitySlugs(path.join(__dirname, 'src/lib/seo-data.ts'));
  
  const urlList = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/products`,
    `${baseUrl}/distributorship`,
    `${baseUrl}/contact-franchise`,
    `${baseUrl}/doctor-supply`,
    `${baseUrl}/bulk-orders`,
    `${baseUrl}/skincare-distributor`,
    `${baseUrl}/blog`,
    ...products.map(slug => `${baseUrl}/products/${slug}`),
    ...blogs.map(slug => `${baseUrl}/blog/${slug}`),
    ...cities.map(city => `${baseUrl}/skincare-distributor/${city}`)
  ];

  const payload = {
    host: "barekyne.in",
    key: "887dc84ab8d886c39a9468b887dc84ab",
    keyLocation: "https://barekyne.in/887dc84ab8d886c39a9468b887dc84ab.txt",
    urlList: urlList
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
  ];

  console.log(`Submitting ${urlList.length} IndexNow URLs for Barekyne...`);
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(payload)
      });
      
      console.log(`Endpoint: ${endpoint}`);
      console.log(`Status: ${response.status} ${response.statusText}`);
    } catch (error) {
      console.error(`Error pinging ${endpoint}:`, error.message);
    }
  }
}

pingIndexNow();
