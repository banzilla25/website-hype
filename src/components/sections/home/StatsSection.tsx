"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const statsWithContext = [
  {
    value: "10.000+",
    label: "Kreator Aktif",
    context: "tersebar di 50+ kota, siap campaign tiap bulan",
  },
  {
    value: "150+",
    label: "Merchant Partner",
    context: "dari F&B, hotel, hingga lifestyle — semua sudah merasakan hasilnya",
  },
  {
    value: "50+",
    label: "Kota Terjangkau",
    context: "jaringan kreator lokal yang tepat sasaran di tiap wilayah",
  },
  {
    value: "50 Juta",
    label: "Views / Bulan",
    context: "rata-rata views campaign yang kami kelola setiap bulannya",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-hype-gray text-xs font-bold uppercase tracking-widest py-8 border-b border-hype-border"
        >
          Proved by numbers
        </motion.p>

        {/* Stat rows */}
        {statsWithContext.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            className="group grid grid-cols-[1fr_2fr] sm:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] items-baseline gap-6 lg:gap-12 py-7 border-b border-hype-border hover:bg-hype-black/30 transition-colors cursor-default px-0"
          >
            {/* Number */}
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-yellow leading-none tracking-tight">
                {stat.value}
              </span>
            </div>

            {/* Label + context */}
            <div>
              <p className="font-bold text-hype-white text-base sm:text-lg mb-0.5">
                {stat.label}
              </p>
              <p className="text-hype-gray text-sm leading-relaxed hidden sm:block">
                {stat.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
