import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQs — Barekyne Derma PCD Franchise & Skincare Distributorship",
  description:
    "Everything you need to know about Barekyne's PCD franchise, distributorship, monopoly rights, product ingredients, certifications, and investment requirements. Expert answers.",
  keywords: [
    "barekyne FAQ",
    "derma PCD franchise questions",
    "skincare distributorship India FAQ",
    "how to become a barekyne distributor",
    "barekyne monopoly rights explained",
    "clinical skincare franchise investment",
    "WHO-GMP derma franchise India",
    "PCD pharma franchise profit margin",
    "barekyne certifications CDSCO",
    "barekyne franchise minimum investment",
  ],
  alternates: {
    canonical: "https://barekyne.in/faq",
  },
  openGraph: {
    title: "FAQs — Barekyne Derma PCD Franchise & Skincare Distributorship",
    description:
      "Comprehensive answers to all questions about Barekyne's PCD franchise, monopoly rights, product science, and investment requirements.",
    url: "https://barekyne.in/faq",
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
