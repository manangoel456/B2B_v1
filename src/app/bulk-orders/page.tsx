import type { Metadata } from "next";
import { Package, TrendingDown, Truck, HeadsetIcon, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bulk Procurement",
  description:
    "Get competitive bulk pricing on Barekyne's premium skincare range. Volume discounts, priority logistics, and dedicated account management for bulk buyers.",
  alternates: { canonical: "/bulk-orders" },
};

const benefits = [
  { icon: <TrendingDown className="w-6 h-6" />, title: "Volume Discounts", description: "Significant price reductions on large-volume orders across all product lines." },
  { icon: <Truck className="w-6 h-6" />, title: "Priority Logistics", description: "Dedicated fulfillment with priority shipping and tracking for bulk orders." },
  { icon: <HeadsetIcon className="w-6 h-6" />, title: "Account Management", description: "Personal account manager for seamless order processing and support." },
  { icon: <Package className="w-6 h-6" />, title: "Custom Packaging", description: "Special packaging options for large orders with customization available." },
];

export default function BulkOrdersPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gold/20 rounded-full mb-6">
              <Package className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">Bulk Orders</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal leading-tight">
              Bulk <span className="text-gold">Procurement</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-2xl mx-auto">
              Access competitive wholesale rates on our entire premium skincare range. Perfect for large retailers, chains, and institutional buyers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="group p-6 bg-ivory rounded-2xl border border-beige/50 hover:border-gold/20 hover:shadow-lg transition-all duration-500 text-center h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-cream flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-heading font-bold text-charcoal mb-2">{b.title}</h3>
                  <p className="text-sm text-warm-gray">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Pricing Table */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Product Price List" subtitle="MRP pricing below. Contact us for bulk rates and volume discounts." />
          <AnimatedSection className="mt-10">
            <div className="bg-white rounded-2xl border border-beige/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-cream">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal-light uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal-light uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-charcoal-light uppercase tracking-wider">Size</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-charcoal-light uppercase tracking-wider">MRP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-beige/50">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-cream/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-charcoal">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-warm-gray">{product.category}</td>
                      <td className="px-6 py-4 text-sm text-warm-gray">{product.size}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gold text-right">{formatPrice(product.mrp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-warm-gray text-center">* Bulk pricing available on request. MOQ applies for volume discounts.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How Bulk Orders Work" />
          <div className="mt-10 space-y-4">
            {[
              { step: "1", title: "Submit Inquiry", desc: "Share your requirements through the form below or WhatsApp." },
              { step: "2", title: "Receive Quote", desc: "Get a customized bulk pricing quote within 24 hours." },
              { step: "3", title: "Confirm Order", desc: "Review terms, confirm quantities, and place your order." },
              { step: "4", title: "Delivery", desc: "Priority processing and delivery to your location." },
            ].map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="flex gap-5 items-start p-5 bg-ivory rounded-xl border border-beige/50">
                  <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm shrink-0">{s.step}</span>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal">{s.title}</h3>
                    <p className="text-sm text-warm-gray mt-1">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream" id="bulk-inquiry">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Bulk Order Inquiry" subtitle="Share your requirements and get a custom quote." />
          <div className="mt-10 bg-white p-8 rounded-2xl border border-beige/50 shadow-lg shadow-gold/5">
            <ContactForm defaultInquiryType="Bulk Order Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
