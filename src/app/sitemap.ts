import { MetadataRoute } from "next";
import { CITY_SEO_DATA } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barekyne.in";

  const cityPages = CITY_SEO_DATA.map((city) => ({
    url: `${baseUrl}/skincare-distributor/${city.city}`,
    lastModified: new Date(city.structuredData.dateModified),
    changeFrequency: "monthly" as const,
    priority: city.tier === 1 ? 0.9 : 0.8,
  }));

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/skincare-distributor`, priority: 0.9 },
    { url: `${baseUrl}/products`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/contact-franchise`, priority: 0.9 },
    { url: `${baseUrl}/blog/derma-pcd-franchise-india-guide`, priority: 0.95 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...cityPages,
  ];
}
