"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, ListChecks, MapPin, Upload, BadgeDollarSign } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Gabung HYPE",
    description: "Daftar gratis lewat WhatsApp atau link pendaftaran. Tanpa biaya, tanpa syarat ribet — cukup punya akun TikTok aktif.",
  },
  {
    icon: ListChecks,
    title: "Pilih Campaign",
    description: "Pilih dari daftar campaign yang kami tawarkan tiap bulan. Kamu bebas memilih merchant yang sesuai seleramu.",
  },
  {
    icon: MapPin,
    title: "Datang ke Merchant",
    description: "Kunjungi lokasi merchant, nikmati pengalamannya secara autentik. Kesan nyata = konten lebih menarik.",
  },
  {
    icon: Upload,
    title: "Bikin & Upload Video",
    description: "Buat konten menarik sesuai panduan campaign, lalu upload dengan tag lokasi di TikTok. Tim kami siap membimbing.",
  },
  {
    icon: BadgeDollarSign,
    title: "Dapat Komisi",
    description: "Komisi masuk sesuai penjualan voucher yang kamu hasilkan. Fee campaign dibayarkan saat campaign selesai.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
            5 Langkah Mulai{" "}
            <span className="text-hype-yellow italic">Hasilkan Cuan</span>
          </h2>
        </motion.div>

        {/* Steps — desktop: horizontal timeline, mobile: vertical */}
        <div className="relative">

          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-hype-border" style={{ top: "3.25rem" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="relative flex flex-col items-center text-center lg:items-center"
                >
                  {/* Step number + icon */}
                  <div className="relative flex flex-col items-center mb-5">
                    {/* Big number bg */}
                    <div className="relative w-14 h-14 rounded-2xl bg-hype-black-alt border-2 border-hype-border flex items-center justify-center z-10 group hover:border-hype-yellow/50 transition-colors">
                      <Icon size={24} className="text-hype-yellow" />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-hype-yellow text-hype-black text-xs font-black flex items-center justify-center z-20">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-hype-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-hype-gray text-sm leading-relaxed max-w-45 lg:max-w-none">
                    {step.description}
                  </p>

                  {/* Arrow for mobile (sm) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-4 text-hype-border text-xl">↓</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
