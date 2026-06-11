"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function AngkaKamiSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            By the Numbers
</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
            Dibuktikan dengan{" "}
            <span className="text-hype-yellow italic">Angka Nyata</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.1 }}
              className="bg-hype-black-alt border border-hype-border rounded-2xl p-6 sm:p-8 text-center hover:border-hype-yellow/30 transition-colors"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-yellow mb-2">
                {stat.value}
              </p>
              <p className="text-hype-gray text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
