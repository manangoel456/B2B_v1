"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import ConsultationModal from "@/components/shared/ConsultationModal";

export default function FooterCTAButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-wrap gap-3">
        <a
          href={SITE_CONFIG.whatsappCatalogueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-gold font-semibold rounded-full hover:bg-ivory transition-all duration-300 hover:shadow-lg text-sm"
          id="footer-cta-catalogue"
          title="Request Catalogue on WhatsApp"
        >
          Request Catalogue
        </a>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 text-sm"
          id="footer-cta-consultation"
          title="Book Consultation"
        >
          Book Consultation
        </button>
      </div>
    </>
  );
}
