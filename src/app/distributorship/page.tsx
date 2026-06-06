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
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { HowToJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Skincare Distributorship India — Exclusive Monopoly Rights",
  description:
    "Become a Barekyne skincare distributor with exclusive monopoly territory rights. Derma PCD franchise with WHO-GMP clinical products, high margins, and dedicated support. Apply now.",
  alternates: { canonical: "/distributorship" },
};

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
      <HowToJsonLd
        name="How to Start a Skincare Distributorship with Barekyne in India"
        description="Step-by-step guide to becoming an exclusive Barekyne clinical skincare distributor with monopoly territorial rights, WHO-GMP certified products, and 50%+ margins."
        totalTime="P7D"
        steps={[
          { name: "Submit Application", text: "Fill out the distributorship inquiry form with your business details, preferred territory, and investment capacity at barekyne.in/distributorship." },
          { name: "Consultation Call", text: "Our Business Development team discusses available territories, franchise terms, investment structure, and the partnership model." },
          { name: "Review & Approval", text: "Application review, territory finalization based on district-level exclusivity, and legal franchise agreement drafting." },
          { name: "Onboarding & Training", text: "Product training on the 6-SKU clinical ecosystem, marketing kit delivery, dermatologist detailing guides, and account setup." },
          { name: "Market Launch", text: "First order placement starting at INR 50,000, logistics setup, and dedicated market launch support with scientific visual aids." },
        ]}
      />
      <ServiceJsonLd
        name="Derma PCD Franchise & Skincare Distributorship"
        description="Exclusive district-level monopoly rights for clinical skincare distribution across India. WHO-GMP certified products, 50-58% margins, zero franchise fees. Starting investment INR 50,000."
        serviceType="Pharmaceutical Distribution Franchise"
      />
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Distributorship &{" "}
              <span className="text-gold">Monopoly Rights</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-2xl mx-auto">
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
              <p className="mt-6 text-warm-gray leading-relaxed">
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
