"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hype-black">
      {/* Background grain/texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hype-yellow/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow animate-pulse" />
                Agensi TikTok GO #1 Indonesia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6"
            >
              <span className="block text-hype-white">Ubah Views</span>
              <span className="block text-hype-white">Jadi</span>
              <span className="block text-hype-yellow italic">
                Pengunjung Nyata.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-hype-gray text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/untuk-kreator"
                className="group inline-flex items-center justify-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black text-base font-bold px-7 py-4 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
              >
                Saya Kreator
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/untuk-merchant"
                className="group inline-flex items-center justify-center gap-2 border-2 border-hype-white/30 hover:border-hype-white text-hype-white text-base font-bold px-7 py-4 rounded-lg transition-all duration-150 hover:bg-hype-white/5"
              >
                Saya Merchant
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[260px] sm:w-[300px] lg:w-[280px] xl:w-[320px] aspect-[9/19] bg-hype-black-alt rounded-[2.5rem] border-2 border-hype-border shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 flex items-center justify-center">
                  <div className="w-20 h-1.5 bg-hype-black rounded-full" />
                </div>

                {/* TikTok GO content mockup */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Content area */}
                  <div className="flex-1 bg-linear-to-b from-[#1a0a00] to-hype-black-alt mt-8 relative overflow-hidden">
                    {/* Voucher card mockup */}
                    <div className="absolute bottom-16 left-4 right-4">
                      <div className="bg-hype-yellow rounded-xl p-4">
                        <p className="text-hype-black text-xs font-bold uppercase tracking-wide mb-1">
                          TikTok GO Voucher
                        </p>
                        <p className="text-hype-black text-lg font-black leading-tight">
                          Makan Siang<br />Gratis 50K!
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-hype-black/70 text-xs">
                            Valid: 24 jam
                          </span>
                          <span className="bg-hype-black text-hype-yellow text-xs font-bold px-3 py-1 rounded-full">
                            Klaim →
                          </span>
                        </div>
                      </div>

                      {/* Location tag */}
                      <div className="mt-2 flex items-center gap-2 bg-hype-black/80 rounded-lg px-3 py-2">
                        <span className="text-hype-yellow text-sm">📍</span>
                        <div>
                          <p className="text-hype-white text-xs font-semibold">
                            Restoran Partner HYPE
                          </p>
                          <p className="text-hype-gray text-xs">Jakarta Selatan</p>
                        </div>
                      </div>
                    </div>

                    {/* Play overlay hint */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play fill="white" size={20} className="text-white ml-0.5" />
                    </div>

                    {/* Creator stats overlay */}
                    <div className="absolute right-3 top-1/4 flex flex-col items-center gap-3">
                      <div className="text-center">
                        <div className="w-9 h-9 rounded-full bg-hype-yellow flex items-center justify-center text-xs">❤️</div>
                        <p className="text-hype-white text-xs mt-1">24K</p>
                      </div>
                      <div className="text-center">
                        <div className="w-9 h-9 rounded-full bg-hype-black-alt border border-hype-border flex items-center justify-center text-xs">💬</div>
                        <p className="text-hype-white text-xs mt-1">1.2K</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav mockup */}
                  <div className="h-14 bg-hype-black flex items-center justify-around px-4 border-t border-hype-border">
                    {["🏠", "🔍", "➕", "📥", "👤"].map((icon, i) => (
                      <span key={i} className={`text-lg ${i === 2 ? "bg-hype-yellow rounded-lg px-2 py-0.5" : ""}`}>
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-14 top-1/4 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-yellow font-display text-xl font-black leading-none">10K+</p>
                <p className="text-hype-gray text-xs mt-0.5">Kreator Aktif</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-12 bottom-1/4 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-yellow font-display text-xl font-black leading-none">50M+</p>
                <p className="text-hype-gray text-xs mt-0.5">Views/Bulan</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
