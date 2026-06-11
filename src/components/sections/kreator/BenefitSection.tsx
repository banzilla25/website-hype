"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wallet,
  Banknote,
  UtensilsCrossed,
  Search,
  GraduationCap,
  BarChart2,
  Car,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Komisi Setiap Penjualan",
    description: "Penghasilanmu mengikuti GMV/penjualan yang kamu hasilkan. Makin banyak voucher terjual, makin besar komisimu.",
  },
  {
    icon: Banknote,
    title: "Fee Campaign",
    description: "Di luar komisi penjualan, kamu juga mendapat fee campaign yang dibayarkan saat campaign selesai.",
  },
  {
    icon: UtensilsCrossed,
    title: "Free Meals",
    description: "Nikmati menu dari merchant partner saat bikin konten — pengalaman autentik yang membuat kontenmu lebih menarik.",
  },
  {
    icon: Search,
    title: "Dicarikan Merchant Tiap Bulan",
    description: "Kamu tidak perlu cari job sendiri. Tim HYPE yang menyiapkan campaign dan mencocokkanmu dengan merchant yang tepat.",
  },
  {
    icon: GraduationCap,
    title: "Bimbingan & Pelatihan",
    description: "Creator manager dan program pelatihan untuk mengembangkan skill kontenmu — dari strategi hingga teknik editing.",
  },
  {
    icon: BarChart2,
    title: "Management Akun",
    description: "Bantuan mengelola dan mengembangkan akun TikTok-mu agar terus tumbuh dan menarik lebih banyak campaign.",
  },
  {
    icon: Car,
    title: "Support Akomodasi",
    description: "Dukungan akomodasi untuk campaign tertentu yang mengharuskanmu hadir di lokasi merchant yang lebih jauh.",
  },
];

export default function BenefitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Benefits
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-4">
            Kenapa Gabung{" "}
            <span className="text-hype-yellow italic">HYPE?</span>
          </h2>
          <p className="text-hype-gray text-base sm:text-lg max-w-xl mx-auto">
            Sebagai kreator HYPE, kamu dapat benefit lengkap — dari penghasilan hingga pengembangan karier.
          </p>
        </motion.div>

        {/* 7 benefit cards — 3 + 3 + 1 centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.07 }}
                className={`group relative bg-hype-black border border-hype-border rounded-2xl p-6 hover:border-hype-yellow/30 transition-all duration-300 hover:-translate-y-0.5 ${
                  i === 6 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-hype-yellow/8 border border-hype-yellow/15 flex items-center justify-center mb-5 group-hover:bg-hype-yellow/15 group-hover:border-hype-yellow/30 transition-colors">
                  <Icon size={20} className="text-hype-yellow" />
                </div>

                {/* Number accent */}
                <span className="absolute top-5 right-5 font-display text-4xl font-black text-hype-white/4 group-hover:text-hype-white/6 transition-colors select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="font-bold text-hype-white text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-hype-gray text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-hype-gray/60 text-xs"
        >
          *Semua benefit mengikuti syarat &amp; ketentuan yang berlaku.
        </motion.p>
      </div>
    </section>
  );
}
