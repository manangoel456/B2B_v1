"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_INQUIRIES, SITE_CONFIG } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (message: string) => {
    window.open(generateWhatsAppUrl(message, SITE_CONFIG.phoneRaw), "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse-gold"
        id="whatsapp-floating-btn"
        aria-label="Open WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-beige overflow-hidden animate-scale-in">
            <div className="bg-[#25D366] px-6 py-4">
              <h3 className="text-white font-heading font-bold text-lg">
                How can we help you?
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Select your inquiry type to connect via WhatsApp
              </p>
            </div>
            <div className="p-4 space-y-2">
              {WHATSAPP_INQUIRIES.map((inquiry) => (
                <button
                  key={inquiry.id}
                  onClick={() => handleSelect(inquiry.message)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-charcoal bg-cream hover:bg-beige hover:text-gold transition-all duration-200 border border-transparent hover:border-gold/20"
                  id={`whatsapp-${inquiry.id}`}
                >
                  {inquiry.label}
                </button>
              ))}
            </div>
            <div className="px-6 pb-4">
              <p className="text-xs text-warm-gray text-center">
                You&apos;ll be redirected to WhatsApp with a pre-filled message
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
