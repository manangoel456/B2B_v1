// src/app/skincare-distributor/[city]/page.tsx
// Barekyne Programmatic SEO — City Franchise Landing Pages
// Drop-in component for Next.js App Router. Global <Layout> is applied by parent layout.tsx.

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCitySEOData, getAllCitySlugs } from "@/lib/seo-data";

// ─── Static Generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllCitySlugs();
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const data = getCitySEOData(params.city);
  if (!data) return {};

  const urgencyLabel =
    data.territoryStatus === "filling_fast"
      ? " ⚠ Filling Fast"
      : data.territoryStatus === "limited"
      ? " · Limited Slots"
      : "";

  return {
    title: `${data.metaTitle}${urgencyLabel}`,
    description: data.metaDescription,
    alternates: { canonical: data.canonicalUrl },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonicalUrl,
      siteName: "Barekyne",
      images: [{ url: data.ogImage, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.ogImage],
    },
  };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function CityFranchisePage({
  params,
}: {
  params: { city: string };
}) {
  const data = getCitySEOData(params.city);
  if (!data) notFound();

  const urgencyBadgeColor =
    data.territoryStatus === "filling_fast"
      ? "bg-red-100 text-red-700 border-red-200"
      : data.territoryStatus === "limited"
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-emerald-100 text-emerald-700 border-emerald-200";

  const urgencyText =
    data.territoryStatus === "filling_fast"
      ? "⚠ Filling Fast — Limited Territories Remaining"
      : data.territoryStatus === "limited"
      ? "⚡ Limited Territories Available"
      : "✅ Open Territory — First-Mover Advantage";

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Barekyne — Derma PCD Franchise ${data.cityDisplay}`,
    description: data.metaDescription,
    url: data.canonicalUrl,
    image: `https://barekyne.in${data.ogImage}`,
    areaServed: {
      "@type": "State",
      name: data.state,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: data.state,
    },
    makesOffer: {
      "@type": "Offer",
      name: "Derma PCD Franchise — Exclusive Territory Rights",
      description: `Exclusive monopoly territory rights for Barekyne clinical skincare distribution in ${data.cityDisplay}, ${data.state}.`,
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 px-6 overflow-hidden">
        {/* Decorative background grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-[0.04]"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Territory Status Badge */}
          <div className="mb-6">
            <span
              className={`inline-block border text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full ${urgencyBadgeColor}`}
            >
              {urgencyText}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            {data.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
            {data.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact-franchise"
              className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-lg shadow-amber-400/20"
            >
              Apply for {data.cityDisplay} Territory →
            </a>
            <a
              href="/franchise-info-pack"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200"
            >
              Download Franchise Pack
            </a>
          </div>
        </div>
      </section>

      {/* ── MARKET INSIGHT SECTION ───────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Market Analysis — {data.cityDisplay}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why {data.cityDisplay} Represents a High-ROI Derma Franchise
              Territory
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {data.marketInsight}
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              {data.regionalDermaFacts}
            </p>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <div className="text-3xl font-black text-slate-900 mb-1">
                {data.population}
              </div>
              <div className="text-sm text-slate-500">Metro Population</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <div className="text-3xl font-black text-slate-900 mb-1">
                {data.availableDistricts.length}
              </div>
              <div className="text-sm text-slate-500">Open Districts</div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <div className="text-xl font-black text-amber-700 mb-1">
                Monopoly Rights
              </div>
              <div className="text-sm text-slate-500">
                Exclusive territory — no internal price competition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE DISTRICTS ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Open Districts in {data.state}
          </h2>
          <p className="text-slate-500 mb-10 text-sm">
            Territories marked open are available for exclusive franchise
            allocation. First-confirmed partner takes the territory.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.availableDistricts.map((district) => (
              <div
                key={district}
                className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                {district}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PORTFOLIO ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-3 block">
            The Clinical Portfolio
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Five WHO-GMP Clinical SKUs Engineered for Indian Skin
          </h2>
          <p className="text-slate-500 mb-12 max-w-2xl">
            Not 200 generic products. A focused, high-velocity clinical range
            where every SKU has a dermatologist prescription rationale and a
            defensible active concentration.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Vitamin C 20% Serum",
                actives: "20% Vit C · 2% Niacinamide · Hyaluronic Acid",
                indication: "Hyperpigmentation · PIH · Dull Skin",
                mechanism: "Tyrosinase inhibition + melanosome transfer blockade",
              },
              {
                name: "Hybrid Invisible Sunscreen SPF 50",
                actives: "Physical + Chemical dual-filter system",
                indication: "Photoprotection · PIH Prevention",
                mechanism: "Zero white cast on Fitzpatrick III–VI · Sweat resistant",
              },
              {
                name: "Tricid Face Wash",
                actives: "Glycolic Acid · Salicylic Acid · Vitamin C · Cica",
                indication: "Acne · Oily Skin · Comedonal Acne",
                mechanism: "AHA + BHA dual exfoliation with anti-inflammatory modulation",
              },
              {
                name: "Advanced Night Cream",
                actives: "Retinol · Ceramides · Peptides",
                indication: "Barrier Repair · Anti-Ageing · TEWL Reduction",
                mechanism: "Collagen synthesis + ceramide barrier restoration",
              },
              {
                name: "OL-Season Face & Body Lotion",
                actives: "Vitamin C · Dermawhite™ Technology",
                indication: "Year-round Hydration · Brightening",
                mechanism: "Advanced depigmentation technology · 100ml",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="border border-slate-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-bold text-slate-900 mb-2 text-base">
                  {product.name}
                </h3>
                <p className="text-xs text-amber-700 font-mono mb-3">
                  {product.actives}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  <strong className="text-slate-700">Indication:</strong>{" "}
                  {product.indication}
                </p>
                <p className="text-xs text-slate-400">{product.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-400 to-amber-500 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Secure Your {data.cityDisplay} Franchise Territory Today
          </h2>
          <p className="text-slate-800 text-lg mb-10 leading-relaxed">
            Once a territory is allocated, it is closed. Exclusive monopoly
            rights are granted to the first confirmed franchise partner in each
            district. Our B2B partnership team reviews applications within 48
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-franchise"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-lg text-base transition-all duration-200"
            >
              Apply for {data.cityDisplay} Territory →
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold px-10 py-4 rounded-lg text-base transition-all duration-200"
            >
              Call B2B Team Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
