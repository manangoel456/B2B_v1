import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern WebP/AVIF formats for all product images
    formats: ["image/avif", "image/webp"],
    // Stricter quality — 75 is Next.js default but 80 gives better visual quality for clinical products
    // Device sizes tuned to actual product card display widths
    deviceSizes: [375, 430, 640, 768, 1024, 1280, 1440],
    imageSizes: [64, 128, 256, 384, 512],
    // Minimize layout shift
    minimumCacheTTL: 604800, // 7 days
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Preconnect to Google Fonts to eliminate render-blocking latency
          {
            key: "Link",
            value: [
              "<https://fonts.googleapis.com>; rel=preconnect",
              "<https://fonts.gstatic.com>; rel=preconnect; crossorigin",
            ].join(", "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
      // Long-lived cache for static assets
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache product images aggressively
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Experimental: bundle Framer Motion only when needed
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
