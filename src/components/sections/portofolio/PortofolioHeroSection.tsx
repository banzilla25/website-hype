"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function PortofolioHeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Portfolio
</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-6">
            Hasil Nyata dari{" "}
            <span className="text-hype-yellow italic">Campaign Kami</span>
          </h1>
          <p className="text-hype-gray text-lg sm:text-xl max-w-2xl leading-relaxed">
            Lihat bagaimana HYPE Media membantu bisnis lokal bertumbuh lewat
            kekuatan TikTok GO — dari views jadi pengunjung nyata.
          </p>
        </motion.div>

        {/* Mini stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-x-8 gap-y-4 mt-12 pt-12 border-t border-hype-border"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-black text-hype-yellow">
                {stat.value}
              </span>
              <span className="text-hype-gray text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
