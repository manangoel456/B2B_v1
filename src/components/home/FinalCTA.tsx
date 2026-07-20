"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CalendarCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import ConsultationModal from "@/components/shared/ConsultationModal";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden" id="final-cta">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold-light rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-gold-light uppercase tracking-wider">
                Join India&apos;s Premium Skincare Network
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Partner with Barekyne{" "}
              <span className="text-gold">Across India</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
              Join our growing network of distributors, clinics, and retail
              partners. Premium products, exceptional margins, and comprehensive
              support.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Request Catalogue → WhatsApp pre-filled */}
              <a
                href={SITE_CONFIG.whatsappCatalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
                id="final-cta-catalogue"
                title="Request Catalogue on WhatsApp"
              >
                Request Catalogue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Book Consultation → Opens modal form */}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10"
                id="final-cta-consultation"
                title="Book Consultation"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </button>

              {/* WhatsApp direct */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-all duration-300"
                id="final-cta-whatsapp"
                title="WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
