"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/lib/constants";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-cream" id="faq">
      <FAQJsonLd faqs={FAQ_DATA} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with Barekyne."
        />

        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="bg-white rounded-xl border border-beige/50 overflow-hidden">
                <h3 className="text-sm font-semibold text-charcoal">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans"
                    id={`faq-toggle-${i}`}
                    aria-expanded={openIndex === i}
                  >
                    <span className="pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gold shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180"
                      )}
                    />
                  </button>
                </h3>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-5 pb-5 text-sm text-warm-gray leading-relaxed faq-answer" data-speakable="true">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
