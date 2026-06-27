"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ivory/80 backdrop-blur-sm">
      <motion.div
        className="relative flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-16 h-16">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold/20 border-t-gold"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Inner pulsing circle */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gold/10"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-sm font-heading font-medium tracking-widest text-charcoal-light uppercase">
          Loading...
        </span>
      </motion.div>
    </div>
  );
}
