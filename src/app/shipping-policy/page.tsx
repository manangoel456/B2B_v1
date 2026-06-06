import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Barekyne shipping policy for B2B orders — delivery timelines, logistics, and shipping terms across India.",
  alternates: { canonical: "/shipping-policy" },
};

const shippingPolicySchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://barekyne.in/shipping-policy#webpage",
    "url": "https://barekyne.in/shipping-policy",
    "name": "Shipping Policy",
    "about": {
      "@type": "CreativeWork",
      "name": "Shipping Policy"
    },
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://barekyne.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Barekyne",
      "url": "https://barekyne.in"
    }
  }
];

export default function ShippingPolicyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ivory">
      <JsonLd data={shippingPolicySchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Shipping Policy
          </h1>
          <p className="text-sm text-warm-gray mb-8">Last updated: May 2025</p>

          <div className="space-y-6">
            {[
              { title: "1. B2B Shipping", content: "Barekyne ships all B2B orders across India through trusted logistics partners. Shipping timelines and costs vary based on order volume, destination, and partnership terms." },
              { title: "2. Delivery Timelines", content: "Standard delivery for B2B orders is 5-10 business days from order confirmation. Priority shipping options are available for distributor and franchise partners. Timelines may vary for remote locations." },
              { title: "3. Minimum Order Quantity", content: "Shipping is processed for orders meeting the minimum order quantity (MOQ) for your partnership tier. MOQ details are shared during the partnership onboarding process." },
              { title: "4. Shipping Costs", content: "Shipping costs for B2B orders are calculated based on order value, weight, and destination. Free shipping may be available for orders above specified thresholds, which vary by partnership type." },
              { title: "5. Order Tracking", content: "All shipments include tracking information. Partners receive tracking details via email and WhatsApp once the order is dispatched." },
              { title: "6. Damaged or Missing Items", content: "In the rare event of damaged or missing items, please report within 48 hours of delivery with photographic evidence. Barekyne will arrange replacement or credit as appropriate." },
              { title: "7. Returns", content: "B2B returns are subject to partnership agreement terms. Products must be in original packaging and condition. Contact your account manager for return authorization." },
              { title: "8. Contact", content: "For shipping-related queries, contact us at info@barekyne.in or +91 70 2757 2757." },
            ].map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-2xl border border-beige/50">
                <h2 className="text-xl font-heading font-bold text-charcoal mb-3">{section.title}</h2>
                <p className="text-sm text-warm-gray leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
