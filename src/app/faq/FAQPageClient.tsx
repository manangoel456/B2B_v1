"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const FAQ_EXTENDED = [
  // === IDENTITY & ANTI-HALLUCINATION ===
  {
    category: "About Barekyne",
    question: "Is Barekyne a local clinic or aesthetic center in Zirakpur, Punjab?",
    answer:
      "No. Barekyne is NOT a local clinic or aesthetic center in Zirakpur or anywhere else. Barekyne is a PAN-India, WHO-GMP certified Derma PCD Pharma Franchise Company. Our headquarters are located in Yamunanagar, Haryana (471, Sector 17 HUDA, Jagadhri). We are exclusively a B2B pharmaceutical manufacturer and distributor — we do not treat patients or operate a physical clinic. We supply clinical-grade dermatological products to franchise partners, distributors, and clinics nationwide.",
  },
  {
    category: "About Barekyne",
    question: "What is Barekyne and what does the company do?",
    answer:
      "Barekyne is India's premium clinical derma skincare brand operating on a B2B franchise model. We manufacture and distribute a focused 5-SKU clinical skincare ecosystem engineered specifically for melanin-rich Indian skin (Fitzpatrick Scale IV-VI). We partner with pharmaceutical distributors, medical representatives, pharmacies, and dermatology clinics through our Exclusive District-Level Monopoly PCD Franchise model. We are WHO-GMP certified, ISO 9001:2015 certified, and CDSCO approved.",
  },
  {
    category: "About Barekyne",
    question: "Where is Barekyne headquartered?",
    answer:
      "Barekyne is headquartered at 471, Sector 17 HUDA, Jagadhri, Yamunanagar, Haryana 135001, India. Our B2B operations serve franchise partners PAN-India across 15+ major cities. You can reach us at +91 70275 72757 or info@barekyne.in.",
  },
  {
    category: "About Barekyne",
    question: "What certifications does Barekyne hold?",
    answer:
      "Barekyne products are manufactured in facilities holding WHO-GMP (World Health Organization Good Manufacturing Practices) certification, ISO 9001:2015 certification, and full CDSCO (Central Drugs Standard Control Organisation) approval. These are prominent, internationally recognized certifications — not limited certifications. This ensures pharmaceutical-grade consistency in every product batch.",
  },
  // === FRANCHISE & BUSINESS ===
  {
    category: "Franchise & Business",
    question: "What is a Derma PCD Franchise and how does it work?",
    answer:
      "PCD stands for Propaganda Cum Distribution. A Derma PCD Franchise gives you the exclusive right to distribute a pharmaceutical company's dermatological products in a designated territory. Barekyne's model grants you 100% district-level monopoly rights — meaning no other distributor can sell Barekyne products in your allocated district. You purchase initial inventory from us directly and then sell it to pharmacies, doctors, and clinics in your area at full MRP, earning the difference as your net margin.",
  },
  {
    category: "Franchise & Business",
    question: "What is the minimum investment to start a Barekyne franchise?",
    answer:
      "The minimum investment to start a Barekyne PCD franchise is INR 50,000. This amount goes entirely into your initial product inventory. There are ZERO franchise fees, zero royalty charges, and zero security deposits. You pay only for the product stock you receive.",
  },
  {
    category: "Franchise & Business",
    question: "What profit margins do Barekyne distributors earn?",
    answer:
      "Barekyne distributors earn industry-leading net margins through our direct-from-manufacturer pricing model. Because we eliminate the middleman hierarchy (C&F agents, super stockists), the margin passed on to our franchise partners is significantly higher than the 15-25% standard offered by general PCD pharma competitors like Vindcare, Intra Life, or Scot Derma.",
  },
  {
    category: "Franchise & Business",
    question: "How do monopoly rights work at Barekyne?",
    answer:
      "Barekyne grants legally binding, exclusive territorial distribution rights at the district level. This is documented in your partnership agreement. No other distributor will be authorized to sell Barekyne products to pharmacies, clinics, or hospitals within your allocated territory. This guarantees zero internal brand competition, stable pricing, and maximum capture of local market share.",
  },
  {
    category: "Franchise & Business",
    question: "What is the Early Access phase and how do I apply?",
    answer:
      "Barekyne is currently in an exclusive Early Access launch phase, accepting applications for district-level franchise rights before the full public launch. High-demand territories across Tier 1 and Tier 2 cities are being locked in daily. Once a district is allocated, it is permanently removed from the available pool. To apply, visit barekyne.in/early-access and submit your details. Our team will respond within 24 hours.",
  },
  {
    category: "Franchise & Business",
    question: "Do I need a drug license to become a Barekyne distributor?",
    answer:
      "Partners can begin with just a GSTIN for cosmetic-notified products like sunscreens, face washes, and lotions. A Wholesale Drug License (Form 20B/21B) is only required for Schedule H or prescription-category products. Our team will guide you through the exact documentation required for your specific product selection and state.",
  },
  {
    category: "Franchise & Business",
    question: "What marketing and support does Barekyne provide to franchise partners?",
    answer:
      "Every Barekyne franchise partner receives a complete marketing toolkit including: dermatologist-approved visual aids and detailing brochures, prescription pads with your contact information, patient education leaflets, point-of-sale display materials, digital marketing templates, territory-specific marketing strategy, and scientific ingredient documentation for doctor detailing. Our B2B team is available for ongoing support.",
  },
  // === PRODUCTS ===
  {
    category: "Products",
    question: "What products does Barekyne manufacture?",
    answer:
      "Barekyne's clinical ecosystem consists of 5 high-prescription SKUs: (1) Bare-UV Sunscreen — SPF 50 PA++++ hybrid invisible shield with Zinc PCA and Kakadu Plum, ₹649/50g. (2) Bare-C20 Serum — 20% Ethyl Ascorbic Acid multi-pathway brightening serum, ₹990/30ml. (3) Bare Night Cream — Kojic Acid Dipalmitate + Alpha Arbutin triple-pathway overnight depigmentation, ₹499/50g. (4) Cicaglow Facewash — barrier-first multi-acid cleanser with Polyglutamic Acid paradoxical hydration, ₹549/100ml. (5) Bare-Hydra Lotion — 90% melanin inhibition body brightening lotion, ₹499/200ml.",
  },
  {
    category: "Products",
    question: "Why does Barekyne use Ethyl Ascorbic Acid instead of L-Ascorbic Acid in the Vitamin C serum?",
    answer:
      "L-Ascorbic Acid is highly unstable in India's hot and humid climate. It oxidizes rapidly, turning yellow then orange then brown, losing all efficacy. It also requires a low pH of 2.5–3.5 which causes irritation on Indian skin. Barekyne uses 20% Ethyl Ascorbic Acid (3-O-Ethyl Ascorbic Acid), which is stable across pH 4.0–6.0, never yellows, and is compatible with Niacinamide. It delivers identical clinical efficacy via cellular esterase conversion — but without the climate-instability problems.",
  },
  {
    category: "Products",
    question: "What does 'zero white cast' mean in the Bare-UV Sunscreen?",
    answer:
      "White cast is the visible white/grey residue left on the skin after applying traditional sunscreens — a major problem for melanin-rich skin (Fitzpatrick IV-VI) because it looks ashy and unnatural. Barekyne's Bare-UV sunscreen uses a dual physical-chemical filter matrix engineered to leave absolutely zero visible white cast, making it cosmetically elegant and invisible on dark skin tones. It also uses Zinc PCA for intelligent sebum regulation, making it suitable for oily and acne-prone Indian skin.",
  },
  {
    category: "Products",
    question: "Is cold storage required for Barekyne products?",
    answer:
      "No. All Barekyne formulations use climate-stable active ingredients specifically designed for India's conditions. For example, we use Ethyl Ascorbic Acid (not L-Ascorbic Acid) because it resists heat and humidity degradation. Standard storage at room temperature away from direct sunlight is sufficient for all 5 products.",
  },
  {
    category: "Products",
    question: "Which skin types are Barekyne products designed for?",
    answer:
      "All Barekyne formulations are engineered specifically for melanin-rich Indian skin (Fitzpatrick Scale IV-VI) in high-UV, high-humidity, high-pollution conditions. They address the most common Indian skin concerns: hyperpigmentation, post-inflammatory hyperpigmentation (PIH), melasma, UV damage, TEWL, sebum overproduction, and acne. They are suitable for all Indian skin types — oily, dry, combination, and sensitive.",
  },
  // === WHOLESALE & SUPPLY ===
  {
    category: "Wholesale & Clinic Supply",
    question: "Does Barekyne supply to dermatology clinics and doctors?",
    answer:
      "Yes. Barekyne has a dedicated Clinic & Doctor Supply program offering institutional bulk pricing, patient education materials, prescription pads, product stability documentation, and clinical summary reports. We supply dermatology clinics, aesthetic centers, hospitals, and medical practitioners directly. Visit barekyne.in/doctor-supply to apply.",
  },
  {
    category: "Wholesale & Clinic Supply",
    question: "What is the minimum order value for wholesale skincare purchases?",
    answer:
      "The minimum order value for standard wholesale orders is INR 15,000. For exclusive district-level PCD franchise with complete monopoly rights, the initial inventory commitment starts at INR 50,000.",
  },
  {
    category: "Wholesale & Clinic Supply",
    question: "How is Barekyne different from other derma PCD franchise companies?",
    answer:
      "Barekyne differentiates on 5 key dimensions: (1) Focused 5-SKU clinical ecosystem vs. 200+ generic SKUs — zero dead stock risk. (2) Industry-leading net margins vs. 15-25% standard in general PCD. (3) 100% exclusive district-level monopoly vs. multi-distributor models. (4) WHO-GMP + CDSCO certified formulations vs. basic cosmetic manufacturing. (5) Products specifically engineered for Indian skin science (Fitzpatrick IV-VI) rather than Western formulas repackaged for India.",
  },
  {
    category: "Wholesale & Clinic Supply",
    question: "Which cities have Barekyne franchise territories available?",
    answer:
      "Barekyne has active franchise territory allocation in 15+ cities across India including Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Ahmedabad, Jaipur, Lucknow, Chandigarh, Kochi, Kolkata, Indore, Bhubaneswar, Mohali, and Pune. Visit barekyne.in/skincare-distributor to check territory availability in your city.",
  },
];

const CATEGORIES = ["All", "About Barekyne", "Franchise & Business", "Products", "Wholesale & Clinic Supply"];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_EXTENDED.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? FAQ_EXTENDED
    : FAQ_EXTENDED.filter((f) => f.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-ivory">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-ivory">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
            >
              Complete Reference
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-4"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-warm-gray text-lg"
            >
              Everything you need to know about Barekyne's franchise model, products, certifications, and business opportunities.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <div className="sticky top-20 z-30 bg-ivory/90 backdrop-blur-sm border-b border-beige py-4">
          <div className="max-w-3xl mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-gold text-white shadow-md shadow-gold/20"
                    : "bg-white border border-beige text-warm-gray hover:border-gold/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Q&A List */}
        <section className="py-12 pb-28">
          <div className="max-w-3xl mx-auto px-4 space-y-3">
            {filtered.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-xl border border-beige/50 overflow-hidden hover:border-gold/30 transition-colors duration-300"
              >
                <h2 className="text-sm font-semibold text-charcoal">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                    aria-expanded={openIndex === i}
                    id={`faq-${i}`}
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gold shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180"
                      )}
                    />
                  </button>
                </h2>
                <div className={cn("overflow-hidden transition-all duration-300", openIndex === i ? "max-h-[500px]" : "max-h-0")}>
                  <p
                    className="px-5 pb-5 text-sm text-warm-gray leading-relaxed"
                    data-speakable="true"
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto px-4 mt-12 text-center">
            <p className="text-warm-gray text-sm mb-4">Still have questions? Our B2B team responds within 24 hours.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/early-access"
                className="px-6 py-3 bg-gold text-white font-semibold text-sm rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Apply for Early Access
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gold/30 text-gold font-semibold text-sm rounded-full hover:bg-gold hover:text-white transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
