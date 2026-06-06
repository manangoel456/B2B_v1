import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, ChevronRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import JsonLd, { ArticleJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/shared/AnimatedSection";

function getCustomSchemaForPost(slug: string): any[] | null {
  switch (slug) {
    case "anti-pigmentation-derma-franchise-solutions-india-2026":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://barekyne.in/blog/anti-pigmentation-derma-franchise-solutions-india-2026"
          },
          "headline": "Anti-Pigmentation Cosmeceuticals: The High-ROI Niche for Derma PCD Franchises in India",
          "description": "An in-depth look at why anti-pigmentation and skin-brightening solutions dominate the B2B derma franchise market. Explores advanced tyrosinase inhibitors, stable Vitamin C, and WHO-GMP compliance standards.",
          "url": "https://barekyne.in/blog/anti-pigmentation-derma-franchise-solutions-india-2026",
          "datePublished": "2026-06-01",
          "author": {
            "@type": "Organization",
            "name": "Dr. Barekyne Editorial Board"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://barekyne.in/images/og-image.jpg"
            }
          }
        }
      ];
    case "barekyne-tranexamic-acid-future-pigmentation-care":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Why Barekyne is Championing Tranexamic Acid as the Future of Pigmentation Care",
          "description": "Discover why top dermatologists are moving away from harsh bleaching agents like hydroquinone and embracing Tranexamic Acid (TXA) for safe, long-term pigmentation management.",
          "url": "https://barekyne.in/blog/barekyne-tranexamic-acid-future-pigmentation-care",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://barekyne.in/blog/barekyne-tranexamic-acid-future-pigmentation-care"
          },
          "datePublished": "2026-05-24",
          "image": [
            "https://barekyne.in/images/og-image.jpg"
          ],
          "author": {
            "@type": "Person",
            "name": "Barekyne Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://barekyne.in/images/og-image.jpg"
            }
          }
        }
      ];
    case "best-derma-products-indian-skin-b2b":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#organization",
          "name": "Barekyne",
          "url": "https://barekyne.in",
          "logo": "https://barekyne.in/images/og-image.jpg",
          "description": "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "knowsAbout": [
            "Clinical Skincare",
            "Dermatology Products",
            "Skincare Distribution",
            "PCD Franchise",
            "B2B Skincare Supply"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://barekyne.in/#localbusiness",
          "name": "Barekyne",
          "description": "Premium clinical derma luxury skincare brand for distributors, clinics, and retailers across India.",
          "url": "https://barekyne.in",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "priceRange": "₹₹",
          "image": "https://barekyne.in/images/og-image.jpg"
        },
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Best Derma Products for Indian Skin: A Clinical B2B Guide for Franchise Owners",
          "description": "A clinical breakdown of why Fitzpatrick III-VI skin requires specific formulation strategies, and which derma products offer the highest prescription velocity for distributors.",
          "url": "https://barekyne.in/blog/best-derma-products-indian-skin-b2b",
          "datePublished": "2025-02-10",
          "mainEntityOfPage": "https://barekyne.in/blog/best-derma-products-indian-skin-b2b",
          "author": {
            "@type": "Organization",
            "name": "Barekyne Clinical Division"
          },
          "publisher": {
            "@id": "https://barekyne.in/#organization"
          }
        }
      ];
    case "best-skincare-products-for-clinics":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Best Skincare Products for Clinics & Dermatology Practices",
          "description": "Discover the essential skincare products every dermatology clinic should stock, and how to choose professional-grade formulations that deliver real results.",
          "url": "https://barekyne.in/blog/best-skincare-products-for-clinics",
          "mainEntityOfPage": "https://barekyne.in/blog/best-skincare-products-for-clinics",
          "datePublished": "2025-05-10",
          "author": {
            "@type": "Person",
            "name": "Barekyne Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          }
        }
      ];
    case "complete-guide-starting-derma-pcd-franchise-india":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "The Complete Guide to Starting a Derma PCD Franchise in India: B2B Manual",
          "description": "A comprehensive, clinical, and data-backed manual on starting a high-margin Derma PCD franchise in India. Covers WHO-GMP compliance, CDSCO guidelines, 50%+ margins, and melanin-rich skin science.",
          "url": "https://barekyne.in/blog/complete-guide-starting-derma-pcd-franchise-india",
          "mainEntityOfPage": "https://barekyne.in/blog/complete-guide-starting-derma-pcd-franchise-india",
          "datePublished": "2026-06-01",
          "author": {
            "@type": "Organization",
            "name": "Dr. Barekyne Editorial Board"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          },
          "image": [
            "https://barekyne.in/images/og-image.jpg"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://barekyne.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "The Complete Guide to Starting a Derma PCD Franchise in India: B2B Manual",
              "item": "https://barekyne.in/blog/complete-guide-starting-derma-pcd-franchise-india"
            }
          ]
        }
      ];
    case "derma-pcd-franchise-india-guide":
      return [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": "https://barekyne.in/blog/derma-pcd-franchise-india-guide#blogposting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://barekyne.in/blog/derma-pcd-franchise-india-guide"
          },
          "headline": "Derma PCD Franchise in India 2025: The Complete Investor's Guide to Clinical Skincare Distribution",
          "description": "Everything a serious pharma investor needs to know before entering India's high-growth clinical skincare PCD franchise market. Product science, ROI models, territory strategy, and how to choose the right derma franchise partner.",
          "url": "https://barekyne.in/blog/derma-pcd-franchise-india-guide",
          "datePublished": "2025-01-15",
          "image": [
            "https://barekyne.in/images/og-image.jpg"
          ],
          "author": {
            "@type": "Organization",
            "name": "Barekyne Clinical Division"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://barekyne.in/images/og-image.jpg"
            }
          }
        }
      ];
    default:
      return null;
  }
}

function renderContent(markdown: string): string {
  // Process tables first (before other replacements break the pipe syntax)
  let html = markdown.replace(
    /(?:^|\n)((?:\|.*\|[ \t]*\n)+)/gm,
    (_match: string, tableBlock: string) => {
      const rows = tableBlock.trim().split("\n").filter((r: string) => r.trim());
      if (rows.length < 2) return tableBlock;

      // Check if second row is separator (|---|---|)
      const isSeparator = /^\|[\s:-]+\|/.test(rows[1]);
      if (!isSeparator) return tableBlock;

      const parseRow = (row: string) =>
        row
          .split("|")
          .slice(1, -1)
          .map((cell: string) => cell.trim());

      const headerCells = parseRow(rows[0]);
      const dataRows = rows.slice(2);

      let table = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-beige/50 text-sm">';
      table += "<thead><tr>";
      headerCells.forEach((cell: string) => {
        table += `<th class="border border-beige/50 bg-cream px-4 py-3 text-left font-semibold text-charcoal">${cell}</th>`;
      });
      table += "</tr></thead><tbody>";
      dataRows.forEach((row: string) => {
        const cells = parseRow(row);
        table += "<tr>";
        cells.forEach((cell: string) => {
          // Process bold and links within cells
          let processed = cell
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(
              /\[(.*?)\]\((.*?)\)/g,
              '<a href="$2" class="text-gold hover:text-gold-dark underline">$1</a>'
            );
          table += `<td class="border border-beige/50 px-4 py-3 text-warm-gray">${processed}</td>`;
        });
        table += "</tr>";
      });
      table += "</tbody></table></div>";
      return table;
    }
  );

  // Process the rest of the markdown
  html = html
    // Headings
    .replace(/### (.*)/g, "<h3>$1</h3>")
    .replace(/## (.*)/g, "<h2>$1</h2>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Links: [text](url)
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-gold hover:text-gold-dark underline">$1</a>'
    )
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-8 border-t border-beige" />')
    // Ordered lists: 1. Item
    .replace(/^\d+\.\s+(.*)/gm, "<li>$1</li>")
    // Unordered lists
    .replace(/^[\*\-] (.*)/gm, "<li>$1</li>")
    // Paragraphs
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>");

  return html;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const customSchema = getCustomSchemaForPost(slug);

  return (
    <>
      {customSchema ? (
        <JsonLd data={customSchema} />
      ) : (
        <ArticleJsonLd
          title={post.title}
          description={post.excerpt}
          url={`https://barekyne.in/blog/${slug}`}
          datePublished={post.date}
          author={post.author}
        />
      )}

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-warm-gray">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 lg:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Header */}
            <div className="text-center mb-12">
              <span className="px-3 py-1.5 bg-gold/10 text-xs font-semibold text-gold uppercase tracking-wider rounded-full">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-warm-gray">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-warm-gray prose-p:leading-relaxed prose-strong:text-charcoal prose-li:text-warm-gray prose-h2:text-2xl prose-h3:text-xl prose-a:text-gold hover:prose-a:text-gold-dark">
              <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-beige">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-cream text-xs font-medium text-charcoal-light rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block bg-white rounded-2xl border border-beige/50 p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-gold uppercase">{rp.category}</span>
                    <h3 className="mt-2 text-lg font-heading font-bold text-charcoal group-hover:text-gold transition-colors leading-snug">
                      {rp.title}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
