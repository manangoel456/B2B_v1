import { Metadata } from "next";
import Link from "next/link";
import { CITY_SEO_DATA } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Skincare Distributor & Derma PCD Franchise Opportunities | Barekyne",
  description:
    "Explore exclusive Barekyne clinical skincare distributor and Derma PCD franchise opportunities across 14 high-growth Indian cities. Secure your monopoly territory.",
  alternates: { canonical: "https://barekyne.in/skincare-distributor" },
};

export default function SkincareDistributorHub() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-[0.04]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block border border-amber-400/50 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            B2B Expansion 2025
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Secure Your Exclusive Clinical Skincare Territory
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Barekyne is granting exclusive monopoly rights to serious B2B pharma investors and distributors across India's highest-growth dermatology markets.
          </p>
        </div>
      </section>

      {/* ── CITY GRID SECTION ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Select Your Target Market
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click on a city to view detailed market insights, available districts, and territory status for our Derma PCD franchise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CITY_SEO_DATA.map((city) => {
              const statusColor =
                city.territoryStatus === "filling_fast"
                  ? "bg-red-100 text-red-700"
                  : city.territoryStatus === "limited"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-100 text-emerald-700";

              const statusText =
                city.territoryStatus === "filling_fast"
                  ? "Filling Fast"
                  : city.territoryStatus === "limited"
                  ? "Limited Slots"
                  : "Open Territory";

              return (
                <Link
                  key={city.city}
                  href={`/skincare-distributor/${city.city}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-amber-300 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {city.cityDisplay}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${statusColor}`}>
                      {statusText}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-slate-500">
                      <strong className="text-slate-700">Region:</strong> {city.state}
                    </p>
                    <p className="text-sm text-slate-500">
                      <strong className="text-slate-700">Open Districts:</strong> {city.availableDistricts.length}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-amber-600 group-hover:text-amber-500 flex items-center gap-1">
                    View Market Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
