"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight, Shield, TrendingUp, Sparkles } from "lucide-react";
import { CITY_SEO_DATA } from "@/lib/seo-data";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function DistributorHubClient() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-[0.03]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm bg-amber-400/5"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            B2B Expansion 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Secure Your Exclusive{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Clinical Skincare Territory
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Barekyne is granting exclusive monopoly rights to serious B2B pharma investors and distributors across India&apos;s highest-growth dermatology markets.
          </motion.p>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "15", label: "Cities" },
              { value: "100+", label: "Districts" },
              { value: "5", label: "SKUs" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-amber-400">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: <Shield className="w-5 h-5" />, text: "WHO-GMP Certified" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "50%+ Distributor Margins" },
            { icon: <Sparkles className="w-5 h-5" />, text: "Dermatologist Formulated" },
            { icon: <MapPin className="w-5 h-5" />, text: "District-Level Monopoly" },
          ].map((item) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <span className="text-amber-500">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CITY GRID SECTION ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Select Your Target Market
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Click on a city to view detailed market insights, available districts, and territory status.
            </p>
          </motion.div>

          <motion.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={gridInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {CITY_SEO_DATA.map((city) => {
              const statusConfig =
                city.territoryStatus === "filling_fast"
                  ? { color: "bg-red-50 text-red-600 border-red-200", dot: "bg-red-500", text: "Filling Fast" }
                  : city.territoryStatus === "limited"
                  ? { color: "bg-amber-50 text-amber-600 border-amber-200", dot: "bg-amber-500", text: "Limited" }
                  : { color: "bg-emerald-50 text-emerald-600 border-emerald-200", dot: "bg-emerald-500", text: "Open" };

              return (
                <motion.div key={city.city} variants={cardVariants}>
                  <Link
                    href={`/skincare-distributor/${city.city}`}
                    className="group block bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-300/60 transition-all duration-500 hover:-translate-y-1 h-full"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                          <MapPin className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {city.cityDisplay}
                        </h3>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusConfig.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} animate-pulse`} />
                        {statusConfig.text}
                      </span>
                    </div>

                    <div className="space-y-1.5 mb-5">
                      <p className="text-sm text-slate-500">
                        <span className="text-slate-400">Region</span> · {city.state}
                      </p>
                      <p className="text-sm text-slate-500">
                        <span className="text-slate-400">Open Districts</span> · <strong className="text-slate-700">{city.availableDistricts.length}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 group-hover:text-amber-500">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedCounter target={15} label="Cities Active" sublabel="Across India" suffix="+" />
            <AnimatedCounter target={100} label="Districts Open" sublabel="Monopoly territories" suffix="+" />
            <AnimatedCounter target={5} label="Clinical SKUs" sublabel="High-velocity portfolio" />
            <AnimatedCounter target={50} label="Distributor Margin" sublabel="Industry-leading ROI" suffix="%" prefix=">" />
          </div>
        </div>
      </section>
    </>
  );
}
