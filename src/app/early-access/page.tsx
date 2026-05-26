import { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Early Access: Secure Your Regional Monopoly | Barekyne",
  description:
    "Barekyne is introducing India's most advanced clinical skincare ecosystem. We are currently allocating exclusive district-level PCD franchise rights.",
  alternates: { canonical: "/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-[0.03] pointer-events-none"
      />
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Copy */}
        <AnimatedSection className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-8">
            Secure Your Regional Monopoly
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            The Next Standard in Clinical Dermatology is Arriving.
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Stop distributing low-margin, mass-market generics. Barekyne is introducing India's most advanced 5-SKU clinical skincare ecosystem engineered specifically for melanin-rich skin.
          </p>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-amber-400 mb-2">
              Territory Allocation Phase Active
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              We are currently allocating exclusive district-level PCD franchise rights across India ahead of our final production run. <strong className="text-white">Once a territory is locked, it is gone.</strong> No internal price wars, no distributor cross-selling.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              WHO-GMP Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Dermatologist Formulated
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              High Margin ROI
            </span>
          </div>
        </AnimatedSection>

        {/* Right Column: Lead Capture Form */}
        <AnimatedSection delay={0.2} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-amber-500/20 blur-xl transform scale-[1.02] -z-10 rounded-3xl" />
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Apply for Early Access
              </h2>
              <p className="text-sm text-slate-500">
                Join the waitlist to secure the rights for your district before public launch.
              </p>
            </div>
            
            <ContactForm />
            
            <p className="mt-6 text-xs text-center text-slate-400">
              Your data is secure. Our B2B partnership team will contact you within 24 hours to discuss territory availability.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
