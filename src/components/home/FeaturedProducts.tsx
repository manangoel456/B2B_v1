import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-ivory" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Premium Range"
          subtitle="Clinical-grade skincare formulations designed for modern dermatology markets and discerning consumers."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl border border-beige/50 overflow-hidden hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-1">
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-cream to-beige overflow-hidden">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    fill
                    className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-gold uppercase tracking-wider rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-charcoal text-sm leading-snug mb-1 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xs text-warm-gray mb-3 line-clamp-2">
                    {product.shortBenefit}
                  </p>

                  {/* Ingredients */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="px-2 py-0.5 bg-cream text-[10px] font-medium text-charcoal-light rounded-full"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-gold">
                      MRP {formatPrice(product.mrp)}
                    </span>
                    <span className="text-xs text-warm-gray">
                      {product.size}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-charcoal text-white text-xs font-semibold rounded-full hover:bg-gold transition-colors duration-300"
                      id={`product-view-${product.slug}`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </Link>
                    <Link
                      href="/contact?type=bulk"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 border border-gold/30 text-gold text-xs font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
                      id={`product-bulk-${product.slug}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Bulk Price
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            id="featured-view-all"
          >
            View All Products
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
