"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, TrendingUp, ArrowRight } from "lucide-react";

const problems = [
  "Konten viral di TikTok, tapi kursi tetap kosong?",
  "Kompetitor sudah ramai pengunjung dari TikTok GO — kamu belum?",
  "Bingung mulai dari mana padahal konten sudah bagus?",
];

const solutions = [
  "Konten terkoneksi langsung ke voucher & reservasi di TikTok GO.",
  "Kreator lokal yang tepat menjangkau audiens di kota Anda.",
  "Strategi end-to-end — dari kreator, konten, hingga laporan penjualan.",
];

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Screen to Table
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
            Turning Views Into{" "}
            <span className="text-hype-yellow italic">Visits</span>
          </h2>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <TrendingDown size={20} className="text-red-400" />
              </div>
              <h3 className="text-hype-white font-bold text-lg">
                Masalah yang Sering Terjadi
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-hype-black-alt border border-hype-border rounded-xl p-4"
                >
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-hype-gray text-sm sm:text-base leading-relaxed">
                    {problem}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center">
                <TrendingUp size={20} className="text-hype-yellow" />
              </div>
              <h3 className="text-hype-white font-bold text-lg">
                Solusi HYPE Media
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-hype-black-alt border border-hype-yellow/20 rounded-xl p-4"
                >
                  <span className="w-6 h-6 rounded-full bg-hype-yellow/20 text-hype-yellow text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight size={12} />
                  </span>
                  <p className="text-hype-gray text-sm sm:text-base leading-relaxed">
                    {solution}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
