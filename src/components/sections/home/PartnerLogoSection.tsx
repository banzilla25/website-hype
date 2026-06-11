"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
  { label: "Restoran & F&B", emoji: "🍜" },
  { label: "Hotel & Resort", emoji: "🏨" },
  { label: "Kafe & Coffee", emoji: "☕" },
  { label: "Tempat Wisata", emoji: "🏖️" },
  { label: "Klinik & Beauty", emoji: "💆" },
  { label: "Bar & Lifestyle", emoji: "🍸" },
];

export default function PartnerLogoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* TikTok GO Official badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-hype-black border border-hype-yellow/25 rounded-xl px-5 py-3 shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-hype-white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.5a8.16 8.16 0 0 0 4.77 1.52V7.58a4.85 4.85 0 0 1-1-.89z" />
            </svg>
            <div>
              <p className="text-hype-white font-bold text-sm leading-none">TikTok GO</p>
              <p className="text-hype-yellow text-[10px] font-bold mt-0.5">Official Partner</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-hype-gray text-xs uppercase tracking-widest text-center sm:text-right"
          >
            Melayani berbagai industri lokal
          </motion.p>
        </div>

        {/* Industry pills */}
        <div className="flex flex-wrap gap-3">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex items-center gap-2.5 bg-hype-black border border-hype-border rounded-xl px-4 py-2.5 hover:border-hype-white/20 transition-colors cursor-default"
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-hype-gray text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}

          {/* More indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-2 bg-hype-black border border-hype-yellow/15 rounded-xl px-4 py-2.5"
          >
            <span className="text-hype-yellow text-sm font-bold">+ Bisnis Lokal Lainnya</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
