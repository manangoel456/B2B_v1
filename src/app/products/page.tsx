import type { Metadata } from "next";
import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Barekyne's premium clinical skincare range — Sunscreen SPF 50, Vitamin C Serum, Night Cream, Tricid Face Wash, and OL-Season Lotion. Wholesale and bulk pricing available.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Our <span className="text-gold">Product Range</span>
            </h1>
            <p className="mt-4 text-lg text-warm-gray">
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
