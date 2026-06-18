import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { FAQJsonLd, SpeakableWebPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Apply for Derma PCD Franchise | Secure Exclusive Monopoly Rights",
  description:
    "Secure your exclusive district monopoly rights with industry-leading ROI profit margins. Start a premium clinical skincare franchise in your region. Apply in 2 minutes.",
  alternates: { canonical: "/contact-franchise" },
};

const franchiseFaqs = [
  {
    question: "How long does the Barekyne franchise application process take?",
    answer:
      "The entire application process takes 3-5 business days. After submitting the form, our B2B team responds within 48 hours with territory details. Consultation, agreement signing, and onboarding typically complete within one week.",
  },
  {
    question: "Can I apply for a Barekyne franchise if I have no pharma experience?",
    answer:
      "Yes. Barekyne welcomes first-time franchise partners. We provide complete onboarding support including product training, marketing collateral, dermatologist detailing guides, and dedicated account management. Many of our successful partners started without prior pharma distribution experience.",
  },
  {
    question: "What documents are needed to apply for a Barekyne franchise?",
    answer:
      "To start, you need a valid GSTIN (GST registration). For cosmetic-notified formulations like cleansers and sunscreens, no drug license is required. A Wholesale Drug License (Form 20B/21B) is needed only for prescription-category products. No security deposit or franchise agreement fee is charged.",
  },
  {
    question: "How do I check if my district is available for Barekyne franchise?",
    answer:
      "Submit your inquiry via this form or contact us on WhatsApp at +91 70275 72757. Our territory management team will confirm district-level availability within 48 hours. You can also browse available cities at barekyne.in/skincare-distributor.",
  },
] as const;

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Chat with us", href: SITE_CONFIG.whatsappUrl },
  { icon: <Clock className="w-5 h-5" />, label: "Business Hours", value: "Mon — Sat, 10AM — 7PM IST", href: "" },
];

export default function ContactPage() {
  return (
    <>
      <FAQJsonLd faqs={franchiseFaqs} />
      <SpeakableWebPageJsonLd
        name="Apply for Derma PCD Franchise | Secure Exclusive Monopoly Rights"
        url="https://barekyne.in/contact-franchise"
        description="Secure your exclusive district monopoly rights with industry-leading ROI profit margins. Start a premium clinical skincare franchise in your region."
      />
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Apply for a <span className="text-gold">Franchise</span>
            </h1>
            <p className="mt-4 text-lg text-warm-gray" data-speakable="true">
              Secure your exclusive clinical skincare territory. Fill out the application form below and our B2B team will respond within 48 hours.
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

      {/* ── AEO FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Franchise Application FAQs"
            subtitle="Common questions about the Barekyne franchise application process."
          />
          <div className="mt-12 space-y-4">
            {franchiseFaqs.map((faq, i) => (
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
    </>
  );
}
