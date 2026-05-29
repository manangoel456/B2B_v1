"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-cream to-beige" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8964E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gold/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              Clinical Derma Luxury Skincare
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-charcoal leading-[1.1] tracking-tight"
          >
            Premium Derma PCD Franchise & Skincare{" "}
            <span className="text-gold">Distributorship Across India</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-warm-gray max-w-2xl leading-relaxed"
          >
            Barekyne delivers high-performance skincare formulations crafted for
            modern dermatology markets, distributors, wholesalers, pharmacies,
            and professional skincare networks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 text-sm lg:text-base"
              id="hero-cta-catalogue"
            >
              Get Product Catalogue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+917027572757"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-charcoal/10 text-charcoal font-semibold rounded-full hover:border-gold hover:text-gold transition-all duration-300 text-sm lg:text-base"
              id="hero-cta-call"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center gap-6 text-sm text-warm-gray"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              PAN India Supply
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Monopoly Rights Available
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              High-Margin Products
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
