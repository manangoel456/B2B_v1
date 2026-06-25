import type { Metadata } from "next";
import { Award, Factory, Globe, Rocket, Heart, Users, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd, { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Barekyne — India's Clinical Derma Skincare Brand for B2B Partners",
  description:
    "Barekyne is a WHO-GMP certified clinical derma skincare brand empowering distributors, franchise partners, and dermatology clinics across India with high-margin, scientifically formulated products.",
  alternates: { canonical: "/about" },
};

const aboutPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://barekyne.in/about#aboutpage",
    url: "https://barekyne.in/about",
    name: "About Barekyne",
    description:
      "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
    isPartOf: {
      "@id": "https://barekyne.in/#website",
    },
    about: {
      "@id": "https://barekyne.in/#organization",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://barekyne.in/images/og-image.jpg",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://barekyne.in/#organization",
    name: "Barekyne",
    url: "https://barekyne.in",
    description:
      "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
    logo: "https://barekyne.in/images/og-image.jpg",
    image: "https://barekyne.in/images/og-image.jpg",
    email: "info@barekyne.in",
    telephone: "+917027572757",
    address: {
      "@type": "PostalAddress",
      streetAddress: "471, Sector 17 HUDA, Jagadhri",
      addressLocality: "Yamunanagar",
      addressRegion: "Haryana",
      postalCode: "135001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/barekyne.skin/",
      "https://x.com/barekyne_skin",
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Clinical Skincare",
      "Dermatology Products",
      "Skincare Distribution",
      "PCD Franchise",
      "B2B Skincare Supply",
    ],
    priceRange: "₹₹",
    mainEntityOfPage: {
      "@id": "https://barekyne.in/about#aboutpage",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://barekyne.in/#website",
    url: "https://barekyne.in",
    name: "Barekyne",
    publisher: {
      "@id": "https://barekyne.in/#organization",
    },
  },
];

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Clinical Excellence",
    description: "Every formulation undergoes rigorous testing to ensure safety, efficacy, and visible results that dermatologists trust.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Quality Obsession",
    description: "We source premium ingredients globally, from Kakadu Plum Extract to Dermawhite™ technology, never compromising on quality.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partner First",
    description: "Our B2B model is built around our partners' success. We provide tools, training, and support for sustainable growth.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation Driven",
    description: "Continuous R&D ensures our product line evolves with the latest advances in dermatological science.",
  },
];

const aboutFaqs = [
  {
    question: "Where is Barekyne headquartered and what is its business model?",
    answer:
      "Barekyne is headquartered in Yamunanagar, Haryana, and operates strictly as a B2B pharmaceutical manufacturer and distributor. We are not a local aesthetic clinic or patient-facing center. We offer a high-yield B2B PCD franchise, doctor clinic supply programs, and wholesale distribution across India.",
  },
  {
    question: "Are Barekyne clinical skincare products WHO-GMP certified and CDSCO approved?",
    answer:
      "Yes. Every Barekyne formulation complies strictly with the Drugs and Cosmetics Act, 1940. All products are manufactured in state-of-the-art WHO-GMP and ISO 9001:2015 certified facilities with full CDSCO approvals for active ingredient concentrations.",
  },
  {
    question: "What is the minimum investment required to secure exclusive monopoly rights?",
    answer:
      "The minimum investment for an exclusive district-level Barekyne franchise is INR 50,000, which goes 100% into sellable inventory. We charge zero franchise fees, zero security deposits, and zero royalty fees, enabling partners to secure up to 58% net margins.",
  },
  {
    question: "What makes Barekyne's skincare formulation science unique?",
    answer:
      "Barekyne is engineered specifically for melanin-rich Indian skin (Fitzpatrick Scale IV-VI) under high-humidity climates. We utilize a multi-pathway depigmentation approach (tyrosinase inhibition and melanosome blocking) combined with barrier-first hydration (using Polyglutamic Acid, which holds 4-10x more moisture than Hyaluronic Acid) and climate-stable active ingredients.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <FAQJsonLd faqs={aboutFaqs} />
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gold/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                About Barekyne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Crafting the Future of{" "}
              <span className="text-gold">Clinical Skincare</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray leading-relaxed max-w-2xl">
              Born from a vision to bridge the gap between pharmaceutical-grade
              efficacy and luxury skincare experience, Barekyne stands as
              India&apos;s emerging force in clinical derma luxury skincare.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center shadow-lg shadow-gold/10">
                    <span className="text-4xl font-heading font-bold text-gold">B</span>
                  </div>
                  <p className="text-sm text-warm-gray font-medium">The Vision Behind Barekyne</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionHeading title="Our Vision" centered={false} />
              <p className="mt-6 text-warm-gray leading-relaxed">
                At Barekyne, we believe that exceptional skincare should be
                accessible through India&apos;s vast network of pharmacies,
                clinics, and retail outlets. Our founder&apos;s vision was
                clear: create products that dermatologists would proudly
                recommend, and build a distribution model that empowers local
                entrepreneurs.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Every Barekyne product is a testament to this philosophy —
                combining cutting-edge dermatological actives with luxurious
                textures and modern packaging that stands out on any shelf.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                We don&apos;t just supply products; we build partnerships. From
                monopoly territorial rights to comprehensive marketing support,
                every aspect of our B2B model is designed for mutual
                prosperity.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every formulation, partnership, and business decision."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group p-7 bg-white rounded-2xl border border-beige/50 hover:border-gold/20 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading title="Manufacturing Excellence" centered={false} />
              <p className="mt-6 text-warm-gray leading-relaxed">
                Our manufacturing partners maintain the highest standards of
                pharmaceutical-grade production. Every batch undergoes rigorous
                quality control, stability testing, and dermatological safety
                assessments.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <Factory className="w-5 h-5" />, label: "GMP Certified" },
                  { icon: <Award className="w-5 h-5" />, label: "Quality Tested" },
                  { icon: <Globe className="w-5 h-5" />, label: "PAN India Supply" },
                  { icon: <Rocket className="w-5 h-5" />, label: "Modern Facilities" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <span className="text-gold">{item.icon}</span>
                    <span className="text-sm font-medium text-charcoal">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl font-heading font-bold text-gold/20">GMP</span>
                  <p className="text-sm text-warm-gray mt-2">Certified Manufacturing</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PAN India */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="PAN India Presence"
            subtitle="Building a nationwide network of trusted skincare partners."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "28+", label: "States Targeted" },
              { number: "100+", label: "Cities Covered" },
              { number: "5", label: "Product Lines" },
              { number: "500+", label: "Partner Goal" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-beige/50">
                  <p className="text-3xl font-heading font-bold text-gold">{stat.number}</p>
                  <p className="text-sm text-warm-gray mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* ── AEO FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory border-t border-beige/30" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Barekyne FAQs"
            subtitle="Get quick answers regarding our clinical science, corporate background, and franchise models."
          />
          <div className="mt-12 space-y-4">
            {aboutFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-beige/50 hover:border-gold/20 transition-all duration-300 overflow-hidden">
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

      <FinalCTA />
    </>
  );
}
