import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag, ChevronRight } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import JsonLd, { ProductJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/shared/ContactForm";
import Image from "next/image";
import ProductGallery from "@/components/products/ProductGallery";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCustomProductSchema(slug: string): any[] | null {
  switch (slug) {
    case "night-cream":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#org",
          "name": "Barekyne",
          "description": "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
          "url": "https://barekyne.in",
          "logo": "https://barekyne.in/images/og-image.jpg",
          "image": "https://barekyne.in/images/og-image.jpg",
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
          "foundingDate": "2024",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": "https://barekyne.in/products/night-cream#product",
          "url": "https://barekyne.in/products/night-cream",
          "name": "Night Cream",
          "description": "Barekyne Night Cream works while you sleep to repair, rejuvenate, and brighten your skin. Powered by Kojic Acid, Niacinamide, and Alpha Arbutin, this luxurious cream targets pigmentation, uneven tone, and dullness for a refreshed morning glow.",
          "image": "https://barekyne.in/images/products/night-cream-1.png",
          "sku": "3",
          "brand": {
            "@id": "https://barekyne.in/#org"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://barekyne.in/products/night-cream",
            "priceCurrency": "INR",
            "price": 499,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://barekyne.in/#org"
            }
          }
        }
      ];
    case "face-body-lotion":
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
          "@type": "Product",
          "@id": "https://barekyne.in/products/face-body-lotion#product",
          "name": "Face & Body Lotion",
          "description": "Barekyne Face & Body Lotion provides year-round hydration with the brightening power of Vitamin C and the advanced skin-lightening technology of Dermawhite™. This lightweight, fast-absorbing lotion keeps skin soft, supple, and radiant in every season.",
          "image": "https://barekyne.in/images/products/face-body-lotion-1.png",
          "sku": "5",
          "brand": {
            "@type": "Organization",
            "@id": "https://barekyne.in/#organization"
          },
          "url": "https://barekyne.in/products/face-body-lotion",
          "offers": {
            "@type": "Offer",
            "url": "https://barekyne.in/products/face-body-lotion",
            "priceCurrency": "INR",
            "price": 549,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "@id": "https://barekyne.in/#organization"
            }
          }
        }
      ];
    case "sunscreen-spf50":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#organization",
          "name": "Barekyne",
          "url": "https://barekyne.in",
          "logo": "https://barekyne.in/images/og-image.jpg",
          "description": "Premium clinical derma luxury skincare brand for distributors, clinics, and retailers across India.",
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
          "priceRange": "₹₹"
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": "https://barekyne.in/products/sunscreen-spf50#product",
          "name": "Sunscreen SPF 50 PA++++",
          "description": "Barekyne Sunscreen SPF 50 PA++++ provides broad-spectrum protection against UVA and UVB rays while keeping your skin hydrated and nourished. Formulated with Hyaluronic Acid and Kakadu Plum Extract for a lightweight, non-greasy finish that works as a perfect base for makeup.",
          "image": [
            "https://barekyne.in/images/products/sunscreen-1.png"
          ],
          "category": "Sun Protection",
          "brand": {
            "@id": "https://barekyne.in/#organization"
          },
          "url": "https://barekyne.in/products/sunscreen-spf50",
          "offers": {
            "@type": "Offer",
            "url": "https://barekyne.in/products/sunscreen-spf50",
            "priceCurrency": "INR",
            "price": 649,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://barekyne.in/#organization"
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://barekyne.in/products/sunscreen-spf50#breadcrumbs",
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
              "name": "Products",
              "item": "https://barekyne.in/products"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Sunscreen SPF 50 PA++++",
              "item": "https://barekyne.in/products/sunscreen-spf50"
            }
          ]
        }
      ];
    default:
      return null;
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: `${product.name} by Barekyne — ${product.tagline}. MRP ${formatPrice(product.mrp)}. Key ingredients: ${product.ingredients.join(", ")}. Available for distributors, clinics & bulk orders.`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} — Barekyne`,
      description: product.description,
      images: [{ url: product.images[0], alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug);
  const customSchema = getCustomProductSchema(slug);

  return (
    <>
      {customSchema ? (
        <JsonLd data={customSchema} />
      ) : (
        <ProductJsonLd
          name={product.name}
          description={product.description}
          image={product.images[0]}
          price={product.mrp}
          sku={product.id}
        />
      )}

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-warm-gray">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-medium">{product.shortName}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-10 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <AnimatedSection>
              <ProductGallery images={product.images} productName={product.name} />
            </AnimatedSection>

            {/* Details */}
            <AnimatedSection delay={0.15}>
              <span className="px-3 py-1.5 bg-gold/10 text-xs font-semibold text-gold uppercase tracking-wider rounded-full">
                {product.category}
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-charcoal">
                {product.name}
              </h1>

              <p className="mt-2 text-lg text-gold font-medium">{product.tagline}</p>

              <p className="mt-4 text-warm-gray leading-relaxed">{product.description}</p>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-3xl font-bold text-gold">MRP {formatPrice(product.mrp)}</span>
                <span className="text-sm text-warm-gray pb-1">(Inclusive of all taxes)</span>
              </div>

              {/* Key Ingredients */}
              <div className="mt-8">
                <h2 className="text-lg font-heading font-bold text-charcoal mb-4">Key Ingredients</h2>
                <div className="space-y-3">
                  {product.keyIngredients.map((ing) => (
                    <div key={ing.name} className="p-4 bg-white rounded-xl border border-beige/50">
                      <h3 className="text-sm font-semibold text-charcoal">{ing.name}</h3>
                      <p className="text-xs text-warm-gray mt-1">{ing.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="text-lg font-heading font-bold text-charcoal mb-4">Benefits</h2>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-warm-gray">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Directions */}
              <div className="mt-8">
                <h2 className="text-lg font-heading font-bold text-charcoal mb-3">How to Use</h2>
                <p className="text-sm text-warm-gray leading-relaxed p-4 bg-white rounded-xl border border-beige/50">
                  {product.directions}
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=bulk"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300"
                  id={`product-detail-bulk-${slug}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Request Bulk Pricing
                </Link>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Hi Barekyne, I'm interested in bulk ordering ${product.name}. Please share pricing and MOQ details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-all duration-300"
                  id={`product-detail-whatsapp-${slug}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Inquiry
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="py-16 bg-ivory">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-5 bg-white rounded-xl border border-beige/50">
                    <h3 className="text-sm font-semibold text-charcoal mb-2">{item.question}</h3>
                    <p className="text-sm text-warm-gray">{item.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bulk Inquiry Form */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-2">
            Bulk Order Inquiry
          </h2>
          <p className="text-warm-gray text-center mb-8">
            Interested in bulk pricing for {product.name}? Fill out the form below.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-beige/50">
            <ContactForm variant="compact" defaultInquiryType="Bulk Order Inquiry" />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-10">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rp, i) => (
              <AnimatedSection key={rp.id} delay={i * 0.1}>
                <Link
                  href={`/products/${rp.slug}`}
                  className="group block bg-white rounded-2xl border border-beige/50 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-cream to-beige overflow-hidden">
                    <Image 
                      src={rp.images[0]} 
                      alt={rp.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal group-hover:text-gold transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-warm-gray mt-1">{rp.shortBenefit}</p>
                    <p className="text-lg font-bold text-gold mt-2">MRP {formatPrice(rp.mrp)}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
