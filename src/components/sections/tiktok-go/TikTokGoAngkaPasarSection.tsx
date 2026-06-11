"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* CATATAN: Angka-angka di bawah berasal dari deck internal.
   VERIFIKASI ulang semua data sebelum website dipublish ke publik.
   Update terakhir TikTok bisa berbeda — pastikan sumber terkini. */
const marketStats = [
  {
    value: "160 Juta",
    label: "Pengguna Aktif TikTok di Indonesia",
    note: "Pasar terbesar ke-2 dunia",
  },
  {
    value: "108 Juta",
    label: "Pengguna Usia 18+ (target prime)",
    note: "Segmen berpotensi beli",
  },
  {
    value: "Rp100T+",
    label: "GMV TikTok Shop per Tahun",
    note: "& terus bertumbuh",
  },
  {
    value: "75%",
    label: "Netizen temukan tempat baru via TikTok",
    note: "Platform discovery #1",
  },
];

export default function TikTokGoAngkaPasarSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            TikTok Market Data
</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-3">
            Kenapa TikTok GO{" "}
            <span className="text-hype-yellow italic">Tidak Bisa Diabaikan</span>
          </h2>
          <p className="text-hype-gray text-base max-w-xl mx-auto">
            Indonesia adalah pasar TikTok terbesar ke-2 di dunia — dan bisnis
            lokal yang hadir di sana lebih awal yang akan memenangkan pelanggan.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.1 }}
              className="bg-hype-black border border-hype-border rounded-2xl p-5 sm:p-6 hover:border-hype-yellow/30 transition-colors"
            >
              <p className="font-display text-3xl sm:text-4xl font-black text-hype-yellow mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-hype-white text-xs sm:text-sm font-semibold mb-1.5 leading-snug">
                {stat.label}
              </p>
              <p className="text-hype-yellow/60 text-xs">{stat.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-hype-gray/40 text-xs mt-6"
        >
          * Data berdasarkan laporan TikTok Indonesia 2023–2024. Verifikasi sebelum publish.
        </motion.p>
      </div>
    </section>
  );
}
