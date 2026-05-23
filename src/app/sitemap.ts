import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";
import { SEO_CITIES, PROGRAMMATIC_ROUTES, PRODUCT_SEO_ROUTES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barekyne.in";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/distributorship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/doctor-supply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/bulk-orders`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/shipping-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Programmatic SEO: City-specific distributor & franchise pages
  const programmaticPages: MetadataRoute.Sitemap = [];

  for (const route of PROGRAMMATIC_ROUTES) {
    for (const city of SEO_CITIES) {
      programmaticPages.push({
        url: `${baseUrl}/${route.routePrefix}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Programmatic SEO: Product-specific city pages (future-ready)
  // Uncomment below when product city pages are created:
  // for (const route of PRODUCT_SEO_ROUTES) {
  //   for (const city of SEO_CITIES) {
  //     programmaticPages.push({
  //       url: `${baseUrl}/${route.routePrefix}-${city.slug}`,
  //       lastModified: new Date(),
  //       changeFrequency: "monthly",
  //       priority: 0.6,
  //     });
  //   }
  // }

  return [...staticPages, ...productPages, ...blogPages, ...programmaticPages];
}
