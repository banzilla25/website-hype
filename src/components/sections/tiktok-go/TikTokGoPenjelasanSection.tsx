"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, MapPin, ShoppingBag, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Smartphone,
    title: "Konten yang Mendorong Pembelian",
    body: "Berbeda dari platform lain, TikTok GO menghubungkan konten secara langsung dengan fitur pembelian voucher. Penonton tidak perlu keluar dari aplikasi untuk bertransaksi.",
  },
  {
    icon: MapPin,
    title: "Fokus Bisnis Lokal",
    body: "TikTok GO dirancang khusus untuk bisnis fisik — restoran, kafe, hotel, dan tempat wisata. Location tag (POI) memungkinkan kreator menandai lokasi persis bisnis Anda.",
  },
  {
    icon: ShoppingBag,
    title: "Voucher Sebagai Penggerak Konversi",
    body: "Sistem voucher TikTok GO mendorong konversi nyata. Penonton membeli voucher dari video, lalu datang ke lokasi untuk meredeemnya — bukan sekadar likes.",
  },
  {
    icon: TrendingUp,
    title: "Hasil yang Bisa Diukur",
    body: "Setiap campaign bisa dilacak: berapa views, berapa voucher terjual, berapa pelanggan datang. Laporan transparan dari awal sampai akhir.",
  },
];

export default function TikTokGoPenjelasanSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-4">
            Lebih dari Sekadar{" "}
            <span className="text-hype-yellow italic">Konten Viral</span>
          </h2>
          <p className="text-hype-gray text-base sm:text-lg leading-relaxed">
            Perilaku audiens bergeser dari sekadar "menonton" menjadi "membeli"
            dalam satu aplikasi. TikTok kini jadi tempat utama orang menemukan
            tempat makan dan destinasi baru — dan TikTok GO adalah jalur
            resminya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                className="group bg-hype-black-alt border border-hype-border rounded-2xl p-6 hover:border-hype-yellow/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center mb-5 group-hover:bg-hype-yellow/15 transition-colors">
                  <Icon size={20} className="text-hype-yellow" />
                </div>
                <h3 className="font-bold text-hype-white text-base mb-2">
                  {point.title}
                </h3>
                <p className="text-hype-gray text-sm leading-relaxed">
                  {point.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
