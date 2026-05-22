import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Barekyne terms and conditions governing the use of our website and B2B partnership services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Terms & Conditions
          </h1>
          <p className="text-sm text-warm-gray mb-8">Last updated: May 2025</p>

          <div className="space-y-6">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing and using the Barekyne website (barekyne.in), you accept and agree to be bound by these terms. If you do not agree, please do not use our website." },
              { title: "2. Business Inquiries", content: "All business inquiries submitted through our website are subject to review and approval by Barekyne. Submission of an inquiry does not guarantee partnership approval. Barekyne reserves the right to accept or decline any partnership application." },
              { title: "3. Pricing & Products", content: "All MRP prices listed on the website are indicative and subject to change. Wholesale, bulk, and distributor pricing will be communicated directly upon inquiry. Product formulations and packaging may be updated periodically." },
              { title: "4. Intellectual Property", content: "All content on this website, including text, images, logos, and branding, is the intellectual property of Barekyne. Unauthorized use, reproduction, or distribution is strictly prohibited." },
              { title: "5. Partnership Terms", content: "Specific terms for distributorship, franchise, monopoly rights, and supply agreements will be outlined in individual partnership agreements. These website terms are supplementary to partnership-specific agreements." },
              { title: "6. Limitation of Liability", content: "Barekyne shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on information provided herein." },
              { title: "7. Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Yamunanagar, Haryana." },
              { title: "8. Modifications", content: "Barekyne reserves the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms." },
              { title: "9. Contact", content: "For questions about these terms, contact us at info@barekyne.in or +91 70 2757 2757." },
            ].map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-2xl border border-beige/50">
                <h2 className="text-xl font-heading font-bold text-charcoal mb-3">{section.title}</h2>
                <p className="text-sm text-warm-gray leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
