"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const misiPoints = [
  "Memperkuat brand lokal lewat cerita yang autentik.",
  "Menjalankan strategi berbasis data, bukan tebakan.",
  "Memberdayakan kreator untuk menghasilkan konten yang berdampak.",
  "Membangun kolaborasi kuat dengan setiap klien.",
  "Memadukan kreativitas dan teknologi untuk pertumbuhan berkelanjutan.",
];

export default function VisiMisiSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Vision
            </span>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-hype-white leading-tight">
              <span className="text-hype-yellow italic">"</span>
              Menjadi mitra terdepan bagi bisnis lokal di Indonesia dalam
              menciptakan{" "}
              <span className="text-hype-yellow italic">dampak nyata</span> —
              mengubah cerita autentik para kreator menjadi pertumbuhan terukur
              lewat inovasi berbasis data.
              <span className="text-hype-yellow italic">"</span>
            </blockquote>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Mission
            </span>
            <ul className="space-y-4">
              {misiPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    size={20}
                    className="text-hype-yellow shrink-0 mt-0.5"
                  />
                  <p className="text-hype-gray text-base leading-relaxed group-hover:text-hype-white transition-colors">
                    {point}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
