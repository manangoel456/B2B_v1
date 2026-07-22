import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  FileText,
  Download,
  MessageCircle,
  CheckCircle2,
  Building2,
  FlaskConical,
  Star,
} from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certifications & Compliance | Barekyne Clinical Skincare",
  description:
    "View Barekyne's WHO-GMP, CDSCO, and ISO 9001:2015 certifications. Pharmaceutical-grade compliance documentation for distributors, franchise partners, and dermatologists.",
  openGraph: {
    title: "Certifications & Compliance | Barekyne",
    description:
      "WHO-GMP certified, CDSCO approved, ISO 9001:2015 certified — complete compliance documentation for Barekyne clinical skincare products.",
    url: "https://barekyne.in/certifications",
  },
};

// ─── DOCUMENT CONFIG ─────────────────────────────────────────────────────────
// To add a document: drop the PDF into public/documents/ and set `file` below.
// When `file` is set, a "Download PDF" button appears.
// When `file` is null, a "Request via WhatsApp" button appears instead.
const CERTIFICATIONS = [
  {
    id: "who-gmp",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "WHO-GMP Certificate",
    issuingBody: "World Health Organization (WHO)",
    description:
      "Confirms our manufacturing facility meets World Health Organization Good Manufacturing Practices — the global gold standard for pharmaceutical-grade production.",
    scope: "All Barekyne product formulations",
    significance:
      "Required for institutional supply, export, and dermatologist prescription confidence.",
    file: "who-gmp-certificate.pdf",
  },
  {
    id: "cdsco",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Cosmetic Manufacturing License",
    issuingBody: "State Drugs / Cosmetic Licensing Authority, Haryana",
    description:
      "State-issued license authorizing Barekyne to legally manufacture and sell cosmetic and cosmeceutical skincare formulations across India. Issued under the Drugs \u0026 Cosmetics Act.",
    scope: "All 5 Barekyne SKUs \u2014 cosmetic formulations",
    significance:
      "Mandatory for legal distribution across India. Required by pharmacies and institutional buyers.",
    file: "cosmetic-license.pdf",
  },
  {
    id: "iso-9001",
    icon: Award,
    color: "from-gold to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "ISO 9001:2015 Certificate",
    issuingBody: "International Organization for Standardization",
    description:
      "Certifies our Quality Management System meets international standards for consistent product quality, traceability, and continuous improvement across all operations.",
    scope: "Manufacturing, QC, supply chain, and distribution processes",
    significance:
      "Demonstrates commitment to global quality benchmarks — preferred by institutional and export buyers.",
    file: null, // ISO 9001:2015 — not yet uploaded
  },
  {
    id: "drug-license",
    icon: Building2,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    badgeColor: "bg-violet-100 text-violet-700",
    title: "Drug Manufacturing License",
    issuingBody: "State Licensing Authority, Haryana",
    description:
      "State-issued drug manufacturing license authorizing production of regulated cosmeceutical formulations. Separate from the cosmetic license and required for prescription-grade products.",
    scope: "Manufacturing facility \u2014 Yamunanagar, Haryana",
    significance:
      "Required for wholesale drug license holders and institutional procurement.",
    file: null,
  },
  {
    id: "gst",
    icon: FileText,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "GST Registration Certificate",
    issuingBody: "Goods and Services Tax Network (GSTN), India",
    description:
      "GST registration confirming Barekyne is a legally registered business entity in India, eligible for B2B invoice generation with valid GSTIN for input tax credit.",
    scope: "All B2B transactions and distributor invoicing",
    significance: "Mandatory for distributors claiming GST input tax credit.",
    file: "gst-certificate.pdf",
  },
  {
    id: "msme",
    icon: Star,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    badgeColor: "bg-pink-100 text-pink-700",
    title: "MSME / Udyam Registration",
    issuingBody: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    description:
      "Udyam registration confirming Barekyne's MSME status — making franchise partners eligible for priority sector lending and government-backed MSME support schemes.",
    scope: "Entire business entity",
    significance:
      "Enables MSME-linked benefits for franchise partners and preferential bank financing.",
    file: "msme-certificate.pdf",
  },
];

const LAB_REPORTS = [
  {
    id: "stability",
    icon: FlaskConical,
    title: "Stability Test Reports",
    description:
      "Accelerated stability data confirming all 5 SKUs maintain potency and safety across India's extreme temperature and humidity ranges (40°C / 75% RH).",
    file: null as string | null,
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety & Patch Test Data",
    description:
      "Dermatologist-conducted patch test and HRIPT (Human Repeat Insult Patch Test) data confirming product safety for sensitive and melanin-rich Indian skin.",
    file: null as string | null,
  },
  {
    id: "efficacy",
    icon: CheckCircle2,
    title: "Clinical Efficacy Summaries",
    description:
      "In-vitro and clinical study summaries supporting key claims — including 90% melanin inhibition data for Bare-Hydra Lotion and tyrosinase inhibition data for night cream actives.",
    file: null as string | null,
  },
];

const waMessage = encodeURIComponent(
  "Hi Barekyne! I would like to request a copy of your compliance documentation (WHO-GMP, CDSCO, ISO certificates) for verification. Please share the relevant documents. Thank you!"
);
const waUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${waMessage}`;

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                Verified Compliance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
              Certifications &{" "}
              <span className="text-gold">Compliance</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
              Barekyne operates under the strictest pharmaceutical-grade quality
              standards. All products are manufactured in WHO-GMP certified
              facilities with full CDSCO and ISO 9001:2015 compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["WHO-GMP Certified", "CDSCO Approved", "ISO 9001:2015"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Request Banner ────────────────────────────────────────────────── */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-charcoal/70 text-center sm:text-left">
            <span className="font-semibold text-charcoal">
              Need documents immediately?
            </span>{" "}
            Request certified copies via WhatsApp for instant delivery.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Request via WhatsApp
          </a>
        </div>
      </div>

      {/* ── Certifications Grid ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal">
              Regulatory Certifications
            </h2>
            <p className="mt-2 text-warm-gray">
              Government and international body certifications covering manufacturing, quality, and legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className={`relative bg-white rounded-2xl border ${cert.borderColor} p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col`}
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        cert.file
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${cert.file ? "bg-emerald-500" : "bg-amber-500"}`}
                      />
                      {cert.file ? "Available" : "On Request"}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-sm`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-bold text-charcoal pr-20">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-warm-gray mt-1 mb-3 font-medium">
                    Issued by: {cert.issuingBody}
                  </p>
                  <p className="text-sm text-warm-gray leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {/* Scope & Significance */}
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2 text-xs">
                      <span className="font-semibold text-charcoal whitespace-nowrap">Scope:</span>
                      <span className="text-warm-gray">{cert.scope}</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="font-semibold text-charcoal whitespace-nowrap">Why it matters:</span>
                      <span className="text-warm-gray">{cert.significance}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-beige">
                    {cert.file ? (
                      <a
                        href={`/documents/${cert.file}`}
                        download
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-charcoal/80 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Certificate
                      </a>
                    ) : (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Request via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lab Reports ────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-cream/40 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal">
              Laboratory & Clinical Data
            </h2>
            <p className="mt-2 text-warm-gray">
              Scientific validation reports supporting product claims and ingredient efficacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LAB_REPORTS.map((report) => {
              const Icon = report.icon;
              return (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl border border-beige p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-charcoal">
                    {report.title}
                  </h3>
                  <p className="text-sm text-warm-gray mt-2 leading-relaxed flex-1">
                    {report.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-beige">
                    {report.file ? (
                      <a
                        href={`/documents/${report.file}`}
                        download
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-charcoal/80 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Report
                      </a>
                    ) : (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gold text-gold text-sm font-semibold rounded-full hover:bg-gold hover:text-white transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Request via WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to request section ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[80px]" />
            </div>
            <div className="relative flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white">
                  Need Complete Documentation?
                </h2>
                <p className="mt-3 text-white/60 max-w-xl">
                  Franchise partners, distributors, and institutional buyers can
                  request the full compliance documentation package — including
                  notarized copies, test batch records, and product dossiers.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "WHO-GMP certificate (notarized)",
                    "CDSCO approval letter",
                    "ISO 9001:2015 certificate",
                    "Product stability reports",
                    "Batch manufacturing records (on request)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request via WhatsApp
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Compliance%20Documentation%20Request&body=Hi%20Barekyne%2C%0A%0AI%20would%20like%20to%20request%20your%20complete%20compliance%20documentation%20package.%0A%0AName%3A%0ACompany%3A%0ACity%3A%0A%0AThank%20you!`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/10"
                >
                  <FileText className="w-4 h-4" />
                  Email Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back link ─────────────────────────────────────────────────────── */}
      <div className="pb-12 text-center">
        <Link
          href="/about"
          className="text-sm text-warm-gray hover:text-gold transition-colors"
        >
          ← Back to About Barekyne
        </Link>
      </div>
    </main>
  );
}
