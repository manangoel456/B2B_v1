import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import DistributorHubClient from "@/components/distributor/DistributorHubClient";
import { FAQJsonLd, SpeakableWebPageJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Skincare Distributor & Derma PCD Franchise Opportunities | Barekyne",
  description:
    "Explore exclusive Barekyne clinical skincare distributor and Derma PCD franchise opportunities across 15 high-growth Indian cities. Secure your monopoly territory.",
  alternates: { canonical: "https://barekyne.in/skincare-distributor" },
};

const distributorHubFaqs = [
  {
    question: "Which cities have Barekyne franchise territories available?",
    answer:
      "Barekyne has active franchise territory allocation in 15+ cities across India, including major markets in Haryana, Punjab, Rajasthan, Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, and Gujarat. Each city page shows available districts and territory status (Open, Limited, or Filling Fast).",
  },
  {
    question: "Can I secure multiple district territories with Barekyne?",
    answer:
      "Yes, qualified partners can secure multiple district-level monopoly territories. Multi-territory partners receive enhanced volume discounts and priority marketing support. Contact our B2B team to discuss multi-district allocation.",
  },
  {
    question: "What is the difference between a PCD franchise and a distributorship?",
    answer:
      "In a PCD (Propaganda Cum Distribution) franchise, you receive exclusive monopoly rights for a territory and handle both promotion and distribution. A standard distributorship may not include monopoly rights. Barekyne offers PCD franchise with 100% district-level monopoly, meaning zero internal competition in your territory.",
  },
  {
    question: "How quickly can I start selling Barekyne products after onboarding?",
    answer:
      "Most partners begin selling within 7-10 days of completing the onboarding process. This includes product training, marketing kit delivery, initial inventory receipt, and account setup. Our logistics team ensures first shipment reaches you within 3-5 business days of order confirmation.",
  },
] as const;

export default function SkincareDistributorHub() {
  return (
    <>
      <FAQJsonLd faqs={distributorHubFaqs} />
      <SpeakableWebPageJsonLd
        name="Skincare Distributor & Derma PCD Franchise Opportunities | Barekyne"
        url="https://barekyne.in/skincare-distributor"
        description="Explore exclusive Barekyne clinical skincare distributor and Derma PCD franchise opportunities across 15 high-growth Indian cities."
      />
      <DistributorHubClient />

      {/* ── AEO FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Distributor Hub FAQs"
            subtitle="Common questions about Barekyne territory selection and franchise setup."
          />
          <div className="mt-12 space-y-4">
            {distributorHubFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300/60 transition-all duration-300 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                    <h3 className="text-base font-bold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-amber-500 shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-slate-500 leading-relaxed faq-answer" data-speakable="true">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
