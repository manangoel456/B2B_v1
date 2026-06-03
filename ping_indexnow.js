const fs = require('fs');

async function pingIndexNow() {
  const payload = {
    host: "barekyne.in",
    key: "887dc84ab8d886c39a9468b887dc84ab",
    keyLocation: "https://barekyne.in/887dc84ab8d886c39a9468b887dc84ab.txt",
    urlList: [
      "https://barekyne.in/",
      "https://barekyne.in/skincare-distributor",
      "https://barekyne.in/products",
      "https://barekyne.in/blog",
      "https://barekyne.in/skincare-distributor/mohali",
      "https://barekyne.in/skincare-distributor/delhi",
      "https://barekyne.in/blog/complete-guide-starting-derma-pcd-franchise-india",
      "https://barekyne.in/blog/anti-pigmentation-derma-franchise-solutions-india-2026",
      "https://barekyne.in/products/sunscreen-spf50",
      "https://barekyne.in/products/vitamin-c-serum",
      "https://barekyne.in/products/night-cream",
      "https://barekyne.in/products/tricid-face-wash",
      "https://barekyne.in/products/ol-season-lotion"
    ]
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
  ];

  console.log("Submitting IndexNow URLs for Barekyne...");
  
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
