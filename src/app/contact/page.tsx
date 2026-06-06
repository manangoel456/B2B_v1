import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";

import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Barekyne for distributorship, franchise, clinic supply, bulk orders, and retailer inquiries. Call +91 70 2757 2757 or fill our inquiry form.",
  alternates: { canonical: "/contact" },
};

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://barekyne.in/#localbusiness",
    "name": "Barekyne",
    "description": "Premium clinical derma luxury skincare brand for distributors, clinics, and retailers across India.",
    "url": "https://barekyne.in",
    "telephone": "+917027572757",
    "email": "info@barekyne.in",
    "image": "https://barekyne.in/images/og-image.jpg",
    "logo": "https://barekyne.in/images/og-image.jpg",
    "priceRange": "₹₹",
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+917027572757",
        "email": "info@barekyne.in",
        "url": "https://barekyne.in/contact"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://barekyne.in/#website",
    "url": "https://barekyne.in",
    "name": "Barekyne",
    "publisher": {
      "@id": "https://barekyne.in/#localbusiness"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://barekyne.in/contact#webpage",
    "url": "https://barekyne.in/contact",
    "about": {
      "@id": "https://barekyne.in/#localbusiness"
    },
    "isPartOf": {
      "@id": "https://barekyne.in/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://barekyne.in/images/og-image.jpg"
    }
  }
];

const contactBulkSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://barekyne.in/contact?type=bulk",
    "about": {
      "@type": "Organization",
      "@id": "https://barekyne.in/#organization",
      "name": "Barekyne",
      "url": "https://barekyne.in",
      "logo": "https://barekyne.in/images/og-image.jpg",
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
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+917027572757",
          "email": "info@barekyne.in"
        }
      ]
    }
  }
];

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Chat with us", href: SITE_CONFIG.whatsappUrl },
  { icon: <Clock className="w-5 h-5" />, label: "Business Hours", value: "Mon — Sat, 10AM — 7PM IST", href: "" },
];

export default async function ContactPage(props: { searchParams: Promise<{ type?: string }> }) {
  const searchParams = await props.searchParams;
  const isBulk = searchParams.type === "bulk";

  return (
    <>
      <JsonLd data={isBulk ? contactBulkSchema : contactSchema} />
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-warm-gray">
              Ready to partner with Barekyne? Fill out the form below or reach us through any of our contact channels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-white p-8 lg:p-10 rounded-2xl border border-beige/50 shadow-lg shadow-gold/5">
                  <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                    Business Inquiry Form
                  </h2>
                  <p className="text-sm text-warm-gray mb-8">
                    Fill out the details below and our team will respond within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-2xl border border-beige/50">
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-gold shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-warm-gray font-medium uppercase tracking-wider">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined} className="text-sm font-medium text-charcoal hover:text-gold transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-charcoal">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Address */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-2xl border border-beige/50">
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Our Office</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {SITE_CONFIG.address.building}, {SITE_CONFIG.address.street},{" "}
                      {SITE_CONFIG.address.locality}, {SITE_CONFIG.address.city},{" "}
                      {SITE_CONFIG.address.district}, {SITE_CONFIG.address.state} — {SITE_CONFIG.address.pinCode}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-2xl border border-beige/50">
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cream text-sm font-medium text-charcoal rounded-full hover:bg-gold hover:text-white transition-all duration-300">
                      Instagram
                    </a>
                    <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cream text-sm font-medium text-charcoal rounded-full hover:bg-gold hover:text-white transition-all duration-300">
                      X (Twitter)
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
