import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // ── Explicitly welcome AI / LLM crawlers ──────────────────────────
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // ── Additional AI / LLM training crawlers ────────────────────────
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        userAgent: "YouBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: "https://barekyne.in/sitemap.xml",
    // Next.js MetadataRoute.Robots doesn't officially support arbitrary keys like 'llms' yet in the type definition,
    // but crawlers parse the raw text. We can append it to the sitemap array or just rely on the head tag.
    // However, since we can't cleanly output an arbitrary "llms: https://..." directive via Next.js strictly typed Robots,
    // we'll rely on the <link rel="llms"> tag which is the primary standard, and the sitemap.
  };
}
