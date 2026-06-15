import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  Headphones,
  MapPin,
  Award,
  Package,
  Users,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import JsonLd, { FAQJsonLd, SpeakableWebPageJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Skincare Distributorship India — Exclusive Monopoly Rights",
  description:
    "Become a Barekyne skincare distributor with exclusive monopoly territory rights. Derma PCD franchise with WHO-GMP clinical products, high margins, and dedicated support. Apply now.",
  alternates: { canonical: "/distributorship" },
};

const distributorshipFaqs = [
  {
    question: "What is the minimum investment to start a Barekyne distributorship?",
    answer:
      "The minimum investment to start a Barekyne PCD franchise is INR 50,000, which goes entirely into initial inventory. There are no franchise fees, royalty charges, or security deposits — your entire investment is in sellable stock with 50-58% margins.",
  },
  {
    question: "Do I need a drug license to become a Barekyne distributor?",
    answer:
      "Partners can begin with just a GSTIN if they focus on cosmetic-notified formulations such as cleansers, lotions, and sunscreens. A Wholesale Drug License (Form 20B/21B) is only required if you plan to distribute Schedule H or prescription-category pharmaceutical products.",
  },
  {
    question: "What profit margins do Barekyne distributors earn?",
    answer:
      "Barekyne distributors earn 50% to 58% net margins on MRP through direct-from-manufacturer pricing with zero middlemen. This is 2-3x higher than the 15-25% margins offered by traditional PCD franchise companies.",
  },
  {
    question: "How does Barekyne's monopoly rights model work?",
    answer:
      "Barekyne grants legally binding, exclusive territorial distribution rights at the district level. No other distributor can supply Barekyne products within your allocated territory, guaranteeing zero internal competition and maximum ROI.",
  },
  {
    question: "Is cold storage required for Barekyne skincare products?",
    answer:
      "No cold storage is required. All Barekyne formulations use climate-stable active ingredients — for example, Ethyl Ascorbic Acid instead of heat-sensitive L-Ascorbic Acid — specifically designed for India's hot and humid conditions.",
  },
  {
    question: "What space or infrastructure do I need to start distributing?",
    answer:
      "Storage space as per stock volume is sufficient. There is no mandated minimum commercial space requirement — partners can start from their existing premises. No special equipment or cold chain infrastructure is needed.",
  },
] as const;

const distributorshipSchema = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://barekyne.in/distributorship#webpage",
        "url": "https://barekyne.in/distributorship",
        "isPartOf": {
          "@id": "https://barekyne.in/#website"
        },
        "about": {
          "@id": "https://barekyne.in/#organization"
        },
        "mentions": [
          {
            "@id": "https://barekyne.in/distributorship#service"
          }
        ],
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://barekyne.in/images/og-image.jpg"
        }
      },
      {
        "@type": [
          "Organization",
          "LocalBusiness"
        ],
        "@id": "https://barekyne.in/#organization",
        "name": "Barekyne",
        "url": "https://barekyne.in",
        "logo": "https://barekyne.in/images/og-image.jpg",
        "image": "https://barekyne.in/images/og-image.jpg",
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
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 10,
          "maxValue": 50
        },
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
        ],
        "priceRange": "₹₹"
      },
      {
        "@type": "Service",
        "@id": "https://barekyne.in/distributorship#service",
        "serviceType": "Skincare distributorship / PCD franchise",
        "provider": {
          "@id": "https://barekyne.in/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://barekyne.in/#website",
        "url": "https://barekyne.in",
        "name": "Barekyne",
        "publisher": {
          "@id": "https://barekyne.in/#organization"
        }
      }
    ]
  }
];

const benefits = [
  { icon: <Shield className="w-6 h-6" />, title: "Monopoly Rights", description: "Exclusive territory allocation with zero internal competition." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "High Margins", description: "Industry-leading margin structure for maximum profitability." },
  { icon: <Headphones className="w-6 h-6" />, title: "Dedicated Support", description: "Personal account manager and business development guidance." },
  { icon: <MapPin className="w-6 h-6" />, title: "Territory Exclusivity", description: "Protected geographical regions for focused market development." },
  { icon: <Award className="w-6 h-6" />, title: "Premium Brand", description: "Clinical-grade products that dermatologists recommend." },
  { icon: <Package className="w-6 h-6" />, title: "Marketing Support", description: "Complete marketing collateral, POS materials, and branding support." },
];

const steps = [
  { step: "01", title: "Submit Application", description: "Fill out the distributorship inquiry form with your business details." },
  { step: "02", title: "Consultation Call", description: "Our BD team discusses territory, terms, and partnership model." },
  { step: "03", title: "Review & Approval", description: "Application review, territory finalization, and agreement drafting." },
  { step: "04", title: "Onboarding", description: "Product training, marketing kit delivery, and account setup." },
  { step: "05", title: "Launch", description: "First order placement, logistics setup, and market launch support." },
];

export default function DistributorshipPage() {
  return (
    <>
      <JsonLd data={distributorshipSchema} />
      <FAQJsonLd faqs={distributorshipFaqs} />
      <SpeakableWebPageJsonLd
        name="Skincare Distributorship India — Exclusive Monopoly Rights"
        url="https://barekyne.in/distributorship"
        description="Become a Barekyne skincare distributor with exclusive monopoly territory rights. Derma PCD franchise with WHO-GMP clinical products, high margins."
      />
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Distributorship &{" "}
              <span className="text-gold">Monopoly Rights</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-2xl mx-auto" data-speakable="true">
              Secure exclusive territorial distribution rights for India&apos;s
              premium clinical skincare brand. High margins, growing demand,
              and comprehensive support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#apply"
                className="px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Apply for Distributorship
              </a>
              <Link
                href="/products"
                className="px-8 py-4 bg-white border border-charcoal/10 text-charcoal font-semibold rounded-full hover:border-gold hover:text-gold transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Distribute Barekyne"
            subtitle="A partnership model designed for your profitability and growth."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="group p-7 bg-ivory rounded-2xl border border-beige/50 hover:border-gold/20 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">{b.title}</h3>
                  <p className="text-sm text-warm-gray">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Monopoly Rights Explained */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading title="What are Monopoly Rights?" centered={false} />
              <p className="mt-6 text-warm-gray leading-relaxed" data-speakable="true">
                Monopoly rights grant you exclusive distribution authority for
                Barekyne products within a defined geographic territory. No
                other distributor can sell Barekyne products in your allocated
                region.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Zero competition from other Barekyne distributors",
                  "Complete market control in your territory",
                  "Higher margins due to exclusivity",
                  "Brand building value in your region",
                  "Long-term partnership with renewal rights",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-light">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="aspect-square bg-gradient-to-br from-white to-beige rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-gold/30 mx-auto" />
                  <p className="text-3xl font-heading font-bold text-charcoal mt-4">Exclusive</p>
                  <p className="text-lg text-gold mt-1">Territory Rights</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Onboarding Process"
            subtitle="From application to launch in 5 simple steps."
          />
          <div className="mt-14 space-y-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.08}>
                <div className="flex gap-6 items-start p-6 bg-ivory rounded-2xl border border-beige/50 hover:border-gold/20 hover:shadow-md transition-all duration-300">
                  <span className="text-3xl font-heading font-bold text-gold/30 shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-charcoal">{s.title}</h3>
                    <p className="text-sm text-warm-gray mt-1">{s.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AEO FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about becoming a Barekyne distributor."
          />
          <div className="mt-12 space-y-4">
            {distributorshipFaqs.map((faq, i) => (
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

      {/* Application Form */}
      <section className="py-20 bg-cream" id="apply">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Apply for Distributorship"
            subtitle="Fill out the form below and our team will contact you within 24 hours."
          />
          <div className="mt-10 bg-white p-8 rounded-2xl border border-beige/50 shadow-lg shadow-gold/5">
            <ContactForm defaultInquiryType="Distributor Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
