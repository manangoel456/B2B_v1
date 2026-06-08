"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Shield, TrendingUp, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function BlogCTA() {
  return (
    <div className="my-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light border border-gold/20">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-[60px]" />

      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 border border-gold/25 rounded-full mb-5">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-gold-light uppercase tracking-wider">
            Franchise Opportunity
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
          Want to Distribute Clinical Skincare{" "}
          <span className="text-gold">in Your City?</span>
        </h3>

        <p className="mt-3 text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
          Join Barekyne&apos;s exclusive PCD franchise network. Secure district-level
          monopoly rights with 50-58% margins on WHO-GMP clinical skincare.
        </p>

        {/* Value Props */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: <TrendingUp className="w-4 h-4" />, text: "50-58% Net Margins" },
            { icon: <Shield className="w-4 h-4" />, text: "Monopoly Territory Rights" },
            { icon: <MapPin className="w-4 h-4" />, text: "14+ Cities Available" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
            >
              <span className="text-gold">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact-franchise"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 text-sm"
          >
            Apply for Franchise
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-all duration-300 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href="tel:+917027572757"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
