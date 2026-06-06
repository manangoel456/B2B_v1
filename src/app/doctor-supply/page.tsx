import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Shield, Package, Heart, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Clinical Skincare for Dermatology Clinics & Hospitals — Doctor Supply",
  description:
    "Barekyne supplies premium clinical derma products to dermatology clinics, doctors, and hospitals across India. WHO-GMP skincare with clinic pricing, patient materials & dedicated support.",
  alternates: { canonical: "/doctor-supply" },
};

const doctorSupplySchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://barekyne.in/doctor-supply#service",
    "name": "Doctor Supply",
    "serviceType": "Doctor supply",
    "url": "https://barekyne.in/doctor-supply",
    "provider": {
      "@type": "Organization",
      "name": "Barekyne",
      "url": "https://barekyne.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://barekyne.in/doctor-supply#webpage",
    "url": "https://barekyne.in/doctor-supply",
    "name": "Doctor Supply",
    "about": {
      "@id": "https://barekyne.in/doctor-supply#service"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://barekyne.in/images/og-image.jpg"
    },
    "breadcrumb": {
      "@id": "https://barekyne.in/doctor-supply#breadcrumb"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://barekyne.in/doctor-supply#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://barekyne.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Doctor Supply",
        "item": "https://barekyne.in/doctor-supply"
      }
    ]
  }
];

const benefits = [
  { icon: <Shield className="w-6 h-6" />, title: "Clinical-Grade Quality", description: "Products formulated with dermatology-backed active ingredients at clinically effective concentrations." },
  { icon: <Heart className="w-6 h-6" />, title: "Patient Trust", description: "Premium packaging and proven results that enhance your clinic's professional image." },
  { icon: <Package className="w-6 h-6" />, title: "Clinic Pricing", description: "Special pricing tiers for medical professionals with flexible ordering." },
  { icon: <Stethoscope className="w-6 h-6" />, title: "Professional Support", description: "Product training, ingredient education, and clinical use guidelines." },
];

export default function DoctorSupplyPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gold/20 rounded-full mb-6">
              <Stethoscope className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">For Healthcare Professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal leading-tight">
              Doctor & <span className="text-gold">Clinic Supply</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-2xl mx-auto">
              Premium clinical skincare products that dermatologists trust and patients love. Specially priced for medical professionals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Clinics Choose Barekyne" subtitle="Products designed to complement professional dermatological care." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Recommended Products */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recommended for Clinics" subtitle="Our most prescribed products by dermatologists across India." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <Link href={`/products/${product.slug}`} className="group block bg-white rounded-2xl border border-beige/50 overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[3/2] bg-gradient-to-br from-cream to-beige flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-gold">B</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-charcoal group-hover:text-gold transition-colors">{product.name}</h3>
                    <p className="text-sm text-warm-gray mt-1">{product.shortBenefit}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {product.ingredients.map((ing) => (
                        <span key={ing} className="px-2 py-0.5 bg-cream text-[10px] font-medium text-charcoal-light rounded-full">{ing}</span>
                      ))}
                    </div>
                    <p className="text-lg font-bold text-gold mt-3">MRP {formatPrice(product.mrp)}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Clinic Partners Get" />
          <div className="mt-10 space-y-3">
            {[
              "Dedicated clinic pricing with higher margins",
              "Patient education leaflets and product guides",
              "Professional product training sessions",
              "Priority order fulfillment and logistics",
              "Clinical evidence and ingredient data sheets",
              "Co-branded marketing materials",
              "Quarterly product updates and new launch access",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-ivory rounded-xl border border-beige/50">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-charcoal">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-cream" id="clinic-inquiry">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Clinic Supply Inquiry" subtitle="Get in touch with our medical partnerships team." />
          <div className="mt-10 bg-white p-8 rounded-2xl border border-beige/50 shadow-lg shadow-gold/5">
            <ContactForm defaultInquiryType="Clinic/Doctor Supply" />
          </div>
        </div>
      </section>
    </>
  );
}
