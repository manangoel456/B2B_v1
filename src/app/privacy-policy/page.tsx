import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Barekyne privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const privacyPolicySchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://barekyne.in/#website",
    "url": "https://barekyne.in/",
    "name": "Barekyne"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://barekyne.in/privacy-policy#webpage",
    "url": "https://barekyne.in/privacy-policy",
    "name": "Privacy Policy",
    "isPartOf": {
      "@id": "https://barekyne.in/#website"
    },
    "about": {
      "@id": "https://barekyne.in/privacy-policy#policy"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://barekyne.in/privacy-policy#policy",
    "name": "Privacy Policy",
    "url": "https://barekyne.in/privacy-policy",
    "mainEntityOfPage": {
      "@id": "https://barekyne.in/privacy-policy#webpage"
    }
  }
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ivory">
      <JsonLd data={privacyPolicySchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-warm-gray mb-8">Last updated: May 2025</p>

          <div className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-warm-gray prose-li:text-warm-gray space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">1. Information We Collect</h2>
              <p className="text-sm text-warm-gray leading-relaxed">We collect information you provide directly, including your name, company name, email address, phone number, business type, and inquiry details when you fill out our contact forms or communicate with us via WhatsApp, phone, or email.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">2. How We Use Your Information</h2>
              <p className="text-sm text-warm-gray leading-relaxed">We use the information to respond to your inquiries, process partnership applications, send product catalogues, provide business development support, and communicate about our products and opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">3. Information Sharing</h2>
              <p className="text-sm text-warm-gray leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">4. Data Security</h2>
              <p className="text-sm text-warm-gray leading-relaxed">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">5. Cookies</h2>
              <p className="text-sm text-warm-gray leading-relaxed">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-beige/50 space-y-4">
              <h2 className="text-xl font-heading font-bold text-charcoal">6. Contact</h2>
              <p className="text-sm text-warm-gray leading-relaxed">For privacy-related inquiries, contact us at info@barekyne.in or call +91 70 2757 2757.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
