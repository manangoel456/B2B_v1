import { MetadataRoute } from "next";
import { CITY_SEO_DATA } from "@/lib/seo-data";
import { blogPosts } from "@/lib/blog";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barekyne.in";

  // ── City landing pages ────────────────────────────────────────────────
  const cityPages = CITY_SEO_DATA.map((city) => ({
    url: `${baseUrl}/skincare-distributor/${city.city}`,
    lastModified: new Date(city.structuredData.dateModified),
    changeFrequency: "monthly" as const,
    priority: city.tier === 1 ? 0.9 : 0.8,
  }));

  // ── Blog posts ────────────────────────────────────────────────────────
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Product pages ─────────────────────────────────────────────────────
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Static pages ──────────────────────────────────────────────────────
  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/skincare-distributor`, priority: 0.9 },
    { url: `${baseUrl}/distributorship`, priority: 0.9 },
    { url: `${baseUrl}/contact-franchise`, priority: 0.9 },
    { url: `${baseUrl}/early-access`, priority: 0.8 },
    { url: `${baseUrl}/products`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/doctor-supply`, priority: 0.7 },
    { url: `${baseUrl}/bulk-orders`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/about`, priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
    { url: `${baseUrl}/shipping-policy`, priority: 0.3 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...cityPages,
    ...blogPages,
    ...productPages,
  ];
}
