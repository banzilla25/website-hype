"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Wallet } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const floatingCards = [
  { icon: Wallet, label: "Komisi Bulanan", value: "Langsung Cair", color: "bg-green-500/10 border-green-500/20 text-green-400" },
  { icon: Star, label: "Free Meals", value: "Tiap Campaign", color: "bg-hype-yellow/10 border-hype-yellow/20 text-hype-yellow" },
  { icon: TrendingUp, label: "Kreator Aktif", value: "10.000+", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
];

export default function KreatorHeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-hype-black">
      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-hype-yellow/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow animate-pulse" />
                For Creators
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            >
              <span className="block text-hype-white">Hobi Kulineran</span>
              <span className="block text-hype-white">&amp; Jalan-Jalan</span>
              <span className="block text-hype-yellow italic">Bisa Jadi Cuan.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeUp} className="text-hype-gray text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Gabung dengan 10.000+ kreator HYPE Media Indonesia. Kami carikan
              campaign-nya, kamu tinggal bikin konten dan nikmati komisinya.
            </motion.p>

            {/* Key points */}
            <motion.ul variants={fadeUp} className="space-y-2.5 mb-8">
              {[
                "Minimum hanya 1.000 follower — pemula bisa!",
                "100% gratis — tidak ada biaya apapun",
                "Campaign tersedia tiap bulan",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-hype-white text-sm sm:text-base">
                  <span className="w-5 h-5 rounded-full bg-hype-yellow/20 border border-hype-yellow/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow" />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-150 hover:scale-105 active:scale-95 shadow-lg shadow-hype-yellow/15"
              >
                Daftar Gratis Sekarang
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-3 text-hype-gray text-xs">
                Gratis selamanya · Tidak ada biaya tersembunyi
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Central card */}
              <div className="relative bg-hype-black-alt border border-hype-border rounded-3xl p-8 text-center">
                {/* Creator avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-hype-yellow/30 to-hype-yellow/5 border-2 border-hype-yellow/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🎬</span>
                </div>

                <p className="text-hype-white font-bold text-lg mb-1">Kreator HYPE</p>
                <p className="text-hype-gray text-sm mb-6">@kreator.id · 5.2K followers</p>

                {/* Earning breakdown */}
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center bg-hype-black rounded-xl px-4 py-3">
                    <div>
                      <p className="text-hype-gray text-xs">Komisi Campaign</p>
                      <p className="text-hype-white font-bold text-sm">Restoran Jaksel</p>
                    </div>
                    <span className="text-green-400 font-bold">+Rp 320K</span>
                  </div>
                  <div className="flex justify-between items-center bg-hype-black rounded-xl px-4 py-3">
                    <div>
                      <p className="text-hype-gray text-xs">Fee Campaign</p>
                      <p className="text-hype-white font-bold text-sm">Hotel Bandung</p>
                    </div>
                    <span className="text-green-400 font-bold">+Rp 150K</span>
                  </div>
                  <div className="flex justify-between items-center bg-hype-black rounded-xl px-4 py-3">
                    <div>
                      <p className="text-hype-gray text-xs">Free Meals</p>
                      <p className="text-hype-white font-bold text-sm">Kafe Tangerang</p>
                    </div>
                    <span className="text-hype-yellow font-bold">GRATIS ✓</span>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-4 pt-4 border-t border-hype-border flex justify-between items-center">
                  <span className="text-hype-gray text-sm font-medium">Total bulan ini</span>
                  <span className="font-display text-2xl font-black text-hype-yellow">+Rp 470K</span>
                </div>
              </div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                const positions = [
                  "absolute -top-4 -left-6",
                  "absolute -bottom-4 -left-8",
                  "absolute top-1/2 -right-6 -translate-y-1/2",
                ];
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className={`${positions[i]} bg-hype-black-alt border ${card.color.includes("border") ? "" : "border-hype-border"} rounded-xl px-3 py-2.5 shadow-xl min-w-max`}
                    style={{ borderColor: undefined }}
                  >
                    <div className={`flex items-center gap-2 ${card.color}`}>
                      <Icon size={14} />
                      <div>
                        <p className="text-hype-gray text-[10px] leading-none mb-0.5">{card.label}</p>
                        <p className="font-bold text-xs leading-none">{card.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
