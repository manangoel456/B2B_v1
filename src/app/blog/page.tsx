import type { Metadata } from "next";
import Link from "next/link";
import { Clock, User, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import AnimatedSection from "@/components/shared/AnimatedSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Derma Franchise & Skincare Distribution Blog — Guides & Insights",
  description:
    "Expert guides on derma PCD franchise, skincare distributorship, clinical skincare formulations, and pharma franchise business strategies in India. B2B insights from Barekyne.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://barekyne.in/blog#collection",
      "url": "https://barekyne.in/blog",
      "name": "Derma Franchise & Skincare Distribution Blog — Guides & Insights",
      "description": "Industry trends, business guides, and skincare knowledge for our partners and professionals.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://barekyne.in"
      },
      "breadcrumb": {
        "@id": "https://barekyne.in/blog#breadcrumb"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": blogPosts.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "headline": post.title,
            "url": `https://barekyne.in/blog/${post.slug}`,
            "datePublished": post.date
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://barekyne.in/blog#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://barekyne.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://barekyne.in/blog"
        }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={blogSchema} />
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Insights & <span className="text-gold">Resources</span>
            </h1>
            <p className="mt-4 text-lg text-warm-gray">
              Industry trends, business guides, and skincare knowledge for our partners and professionals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-beige/50 overflow-hidden hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-cream to-beige flex items-center justify-center relative">
                    <span className="text-4xl font-heading font-bold text-gold/20">B</span>
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gold uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-heading font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-warm-gray leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-warm-gray">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
