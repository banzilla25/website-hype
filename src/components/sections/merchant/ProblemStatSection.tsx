"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, TrendingUp } from "lucide-react";

export default function ProblemStatSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Problem copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle size={20} className="text-red-400" />
              </div>
              <span className="text-red-400 font-bold text-sm uppercase tracking-widest">
                Tantangan Bisnis
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-hype-white leading-tight mb-5">
              Di TikTok, Ditemukan Bukan Lagi Pilihan —{" "}
              <span className="text-hype-yellow italic">Tapi Keharusan.</span>
            </h2>

            <p className="text-hype-gray text-base sm:text-lg leading-relaxed mb-6">
              Saat kompetitor sudah merebut perhatian audiens lewat konten, bisnis
              yang diam berisiko kehilangan pelanggan dan relevansi — bahkan di
              kota sendiri.
            </p>

            <p className="text-hype-gray text-base sm:text-lg leading-relaxed">
              HYPE memasangkan kreator yang tepat dengan strategi yang terarah,
              untuk mengubah perhatian di layar menjadi kunjungan nyata ke gerai
              Anda.
            </p>
          </motion.div>

          {/* Right — Stat card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative bg-hype-black border border-hype-yellow/30 rounded-3xl p-8 sm:p-10 text-center max-w-sm w-full">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-hype-yellow/3 pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={28} className="text-hype-yellow" />
                </div>

                {/* Big stat */}
                <p className="font-display text-7xl sm:text-8xl font-black text-hype-yellow leading-none mb-2">
                  75%
                </p>
                <p className="text-hype-white font-bold text-base sm:text-lg leading-snug mb-3">
                  netizen Indonesia pakai TikTok untuk menemukan tempat baru
                </p>
                <p className="text-hype-gray text-xs leading-relaxed">
                  {/* CATATAN: verifikasi angka ini ke sumber terkini sebelum publish */}
                  Sumber: Data perilaku pengguna TikTok Indonesia — verifikasi sebelum publish.
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-hype-border" />

                {/* Sub stats */}
                <div className="flex justify-around">
                  <div>
                    <p className="font-display text-2xl font-black text-hype-yellow">160Jt+</p>
                    <p className="text-hype-gray text-xs mt-0.5">Pengguna TikTok ID</p>
                  </div>
                  <div className="w-px bg-hype-border" />
                  <div>
                    <p className="font-display text-2xl font-black text-hype-yellow">Rp100T</p>
                    <p className="text-hype-gray text-xs mt-0.5">GMV TikTok Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
