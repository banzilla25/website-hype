"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { partnerBrands } from "@/lib/dummy-data";

export default function PartnerLogoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <p className="text-hype-gray text-xs uppercase tracking-widest font-medium">
              Brand yang sudah bekerjasama
            </p>
            <span className="bg-hype-yellow/10 border border-hype-yellow/20 text-hype-yellow text-xs font-bold px-2.5 py-0.5 rounded-full">
              {partnerBrands.length}+ Brand
            </span>
          </motion.div>

          {/* TikTok GO Official badge */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2.5 bg-hype-black border border-hype-yellow/25 rounded-xl px-4 py-2.5 shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-hype-white shrink-0">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.5a8.16 8.16 0 0 0 4.77 1.52V7.58a4.85 4.85 0 0 1-1-.89z" />
            </svg>
            <div>
              <p className="text-hype-white font-bold text-xs leading-none">TikTok GO</p>
              <p className="text-hype-yellow text-[10px] font-bold mt-0.5">Official Partner</p>
            </div>
          </motion.div>
        </div>

        {/* Brand pills */}
        <div className="flex flex-wrap gap-2.5">
          {partnerBrands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 + i * 0.04 }}
              className="bg-hype-black border border-hype-border hover:border-hype-white/20 rounded-xl px-4 py-2.5 transition-colors cursor-default"
            >
              <span className="text-hype-white text-sm font-semibold">{brand}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
