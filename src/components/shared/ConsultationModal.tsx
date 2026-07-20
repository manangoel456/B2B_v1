"use client";

import { useState, useEffect, useRef } from "react";
import { X, CalendarCheck, Send, Loader2, CheckCircle2 } from "lucide-react";
import { INDIAN_STATES, BUSINESS_TYPES, SITE_CONFIG } from "@/lib/constants";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form state when modal closes
      setTimeout(() => setIsSubmitted(false), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const city = data.get("city") as string;
    const state = data.get("state") as string;
    const businessType = data.get("businessType") as string;
    const remarks = data.get("remarks") as string;

    // Submit to the same Google Form as ContactForm (reuse existing sheet)
    const searchParams = new URLSearchParams();
    searchParams.append("entry.1042709168", name);          // Name
    searchParams.append("entry.1291691220", phone);         // Phone / Email
    searchParams.append("entry.897114892", city);           // City
    searchParams.append("entry.1616614484", state);         // State
    searchParams.append("entry.578432885", businessType);   // Business Type
    searchParams.append("entry.123456789", "Consultation"); // Inquiry type = Consultation
    searchParams.append("entry.2134560123", remarks);       // Remarks

    const formAction =
      "https://docs.google.com/forms/d/e/1FAIpQLSfsfJPsFXWJOiPHptioz5P8_Tcr__h7ax-mJLBWL328TK4G0A/formResponse";

    try {
      await fetch(formAction, {
        method: "POST",
        mode: "no-cors",
        body: searchParams,
      });
    } catch {
      // no-cors is opaque — ignore errors
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp with full details after a short delay
      const waMessage = encodeURIComponent(
        `Hi Barekyne! 👋 I'd like to book a consultation.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `City: ${city}, ${state}\n` +
        `Business Type: ${businessType}\n` +
        `Remarks: ${remarks || "—"}\n\n` +
        `Please let me know your available time slots. Thank you!`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${waMessage}`, "_blank");
      }, 800);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal to-charcoal/90 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h2 className="text-white font-heading font-bold text-lg leading-tight">
                Book a Consultation
              </h2>
              <p className="text-white/50 text-xs mt-0.5">
                We&apos;ll respond within 24 hours
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                Request Received!
              </h3>
              <p className="text-warm-gray text-sm mb-1">
                Opening WhatsApp to confirm your slot...
              </p>
              <p className="text-warm-gray text-xs">
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm placeholder:text-warm-gray/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                    Phone / WhatsApp <span className="text-gold">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm placeholder:text-warm-gray/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                    City <span className="text-gold">*</span>
                  </label>
                  <input
                    name="city"
                    type="text"
                    required
                    placeholder="Your city"
                    className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm placeholder:text-warm-gray/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                    State <span className="text-gold">*</span>
                  </label>
                  <select
                    name="state"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                  >
                    <option value="" disabled>Select state</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                  I am a / an <span className="text-gold">*</span>
                </label>
                <select
                  name="businessType"
                  required
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" disabled>Select your profile</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wide">
                  Remarks / Purpose of Consultation
                </label>
                <textarea
                  name="remarks"
                  rows={3}
                  placeholder="e.g. I want to understand territory availability in Jaipur, margin structure, and minimum investment details..."
                  className="w-full px-4 py-2.5 rounded-lg border border-beige bg-cream/30 text-charcoal text-sm placeholder:text-warm-gray/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Confirm Consultation Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-warm-gray/70">
                After submitting, WhatsApp will open to confirm your slot directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
