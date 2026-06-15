import type { Metadata } from "next";
import Link from "next/link";
import { Eye, ShoppingBag, ChevronDown } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";
import JsonLd, { FAQJsonLd, SpeakableWebPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Buy Wholesale Skincare Products India — Clinical Range | Barekyne",
  description:
    "Sourcing wholesale skincare products in India? Settle for nothing less than WHO-GMP certified clinical-grade. Explore our 5-SKU ecosystem with 50%+ margins.",
  alternates: { canonical: "/products" },
};

const productsFaqs = [
  {
    question: "What wholesale skincare products does Barekyne offer?",
    answer:
      "Barekyne offers a focused 5-SKU clinical ecosystem: Sunscreen SPF 50 PA++++ (₹649), 20% Vitamin C Serum (₹749), Night Cream with Kojic Acid Dipalmitate (₹499), Multi-Acid Face Wash with Polyglutamic Acid (₹499), and Face & Body Lotion with Dermawhite™ WF (₹549). All products are WHO-GMP certified and CDSCO approved.",
  },
  {
    question: "What makes Barekyne products different from other wholesale skincare brands?",
    answer:
      "Barekyne products are engineered specifically for melanin-rich Indian skin (Fitzpatrick IV-VI) using multi-pathway active ingredient strategies. Unlike generic formulations, Barekyne uses climate-stable actives (Ethyl Ascorbic Acid instead of L-Ascorbic Acid), targets melanin at every biological level, and uses barrier-first hydration technology.",
  },
  {
    question: "What are the wholesale margins on Barekyne skincare products?",
    answer:
      "Barekyne distributors earn 50% to 58% net margins on MRP through direct-from-manufacturer pricing. The minimum wholesale order is INR 15,000, and PCD franchise partners with monopoly rights invest a minimum of INR 50,000 in initial inventory.",
  },
  {
    question: "Are Barekyne products suitable for all skin types?",
    answer:
      "Yes, Barekyne products are suitable for all skin types but are specifically optimized for melanin-rich Indian skin (Fitzpatrick Scale IV-VI). They address common Indian skin concerns including hyperpigmentation, post-inflammatory hyperpigmentation (PIH), excess sebum production, and UV damage in high-humidity climates.",
  },
] as const;

// Note: 'face-body-lotion-pcd-franchise' and 'face-wash-pcd-franchise'
// are the current slugs (renamed from previous brand-specific names).

const productsSchema = [
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
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://barekyne.in/#website",
    "url": "https://barekyne.in",
    "name": "Barekyne",
    "publisher": {
      "@id": "https://barekyne.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://barekyne.in/products#webpage",
    "url": "https://barekyne.in/products",
    "name": "Products",
    "isPartOf": {
      "@id": "https://barekyne.in/#website"
    },
    "about": {
      "@id": "https://barekyne.in/#organization"
    },
    "breadcrumb": {
      "@id": "https://barekyne.in/products#breadcrumb"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://barekyne.in/products#breadcrumb",
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
      }
    ]
  }
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productsSchema} />
      <FAQJsonLd faqs={productsFaqs} />
      <SpeakableWebPageJsonLd
        name="Buy Wholesale Skincare Products India — Clinical Range | Barekyne"
        url="https://barekyne.in/products"
        description="Sourcing wholesale skincare products in India? WHO-GMP certified clinical-grade 5-SKU ecosystem with 50%+ margins."
      />
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Our <span className="text-gold">Product Range</span>
            </h1>
            <p className="mt-4 text-lg text-warm-gray" data-speakable="true">
              Clinical-grade skincare formulations crafted with premium
              ingredients for modern dermatology markets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-beige/50 overflow-hidden hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-cream to-beige overflow-hidden">
                    <Image 
                      src={product.images[0]} 
                      alt={product.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gold uppercase tracking-wider rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-heading font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm text-warm-gray mb-3">{product.tagline}</p>
                    <p className="text-sm text-warm-gray leading-relaxed mb-4 line-clamp-2">
                      {product.shortBenefit}
                    </p>

                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.ingredients.map((ing) => (
                        <span key={ing} className="px-2.5 py-1 bg-cream text-xs font-medium text-charcoal-light rounded-full">
                          {ing}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-gold">
                          MRP {formatPrice(product.mrp)}
                        </span>
                        <span className="text-sm text-warm-gray">{product.size}</span>
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-gold transition-colors duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                        <Link
                          href="/contact?type=bulk"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gold/30 text-gold text-sm font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Bulk Price
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AEO FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Range FAQs"
            subtitle="Common questions about Barekyne's wholesale skincare products."
          />
          <div className="mt-12 space-y-4">
            {productsFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group bg-ivory rounded-2xl border border-beige/50 hover:border-gold/20 transition-all duration-300 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                    <h3 className="text-base font-heading font-bold text-charcoal pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gold shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-warm-gray leading-relaxed faq-answer" data-speakable="true">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Need Bulk Pricing?"
            subtitle="Get competitive wholesale rates for all our products. Minimum order quantities apply."
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Request Bulk Pricing
            </Link>
            <Link
              href="/bulk-orders"
              className="px-8 py-3.5 bg-white border border-charcoal/10 text-charcoal font-semibold rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Learn About Bulk Orders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
