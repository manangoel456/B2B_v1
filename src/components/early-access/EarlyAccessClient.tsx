"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Lock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 200 + Math.random() * 300,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 4,
}));

export default function EarlyAccessClient() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated floating particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 2 === 0
              ? "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Secure Your Regional Monopoly
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
          >
            The Next Standard in Clinical Dermatology is{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Arriving.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-slate-300 mb-10 leading-relaxed"
          >
            Stop distributing low-margin, mass-market generics. Barekyne is introducing India&apos;s most advanced 5-SKU clinical skincare ecosystem engineered specifically for melanin-rich skin.
          </motion.p>

          {/* Territory Alert Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 mb-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-4 h-4 text-amber-400" />
              <h3 className="text-base font-bold text-amber-400">
                Territory Allocation Phase Active
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              We are currently allocating exclusive district-level PCD franchise rights across India.{" "}
              <strong className="text-white">Once a territory is locked, it is gone.</strong>{" "}
              No internal price wars, no distributor cross-selling.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: <Shield className="w-4 h-4" />, text: "WHO-GMP Certified" },
              { icon: <Zap className="w-4 h-4" />, text: "Dermatologist Formulated" },
              { icon: <Lock className="w-4 h-4" />, text: "High Margin ROI" },
            ].map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-medium text-slate-400"
              >
                <span className="text-emerald-400">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Glow behind form */}
          <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-amber-500/15 blur-2xl -z-10 rounded-3xl" />
          <motion.div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-amber-500/20 -z-10"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/20 relative">
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
              Your data is secure. Our B2B partnership team will contact you within 24 hours.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
