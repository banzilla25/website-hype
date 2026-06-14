"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
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
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hype-yellow/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="text-left">

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow animate-pulse" />
                Agensi TikTok GO #1 Indonesia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6"
            >
              <span className="block text-hype-white">Ubah Views</span>
              <span className="block text-hype-white">Jadi</span>
              <span className="block text-hype-yellow italic">Pengunjung Nyata.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-hype-gray text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              {siteConfig.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/untuk-kreator"
                className="group inline-flex items-center justify-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black text-base font-bold px-7 py-4 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95"
              >
                Saya Kreator
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/untuk-merchant"
                className="group inline-flex items-center justify-center gap-2 border-2 border-hype-white/30 hover:border-hype-white text-hype-white text-base font-bold px-7 py-4 rounded-lg transition-all duration-150 hover:bg-hype-white/5"
              >
                Saya Merchant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-85">

              {/* Image container — portrait, transparent bg untuk PNG/WebP no-background */}
              <div className="relative aspect-4/5">
                {/* Placeholder — hapus div ini dan uncomment <Image> saat foto siap */}
                <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-hype-border/40 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center">
                    <Camera size={28} className="text-hype-yellow/60" />
                  </div>
                  <div className="text-center px-6">
                    <p className="text-hype-gray text-xs mb-1">Foto kreator filming — no background</p>
                    <p className="text-hype-yellow/50 text-[10px] font-mono">/images/hero/beranda.webp</p>
                    <p className="text-hype-gray/40 text-[10px] mt-0.5">(.webp / .png / .jpg)</p>
                  </div>
                </div>
                {/*
                  Uncomment saat foto tersedia (hapus div placeholder di atas):
                  import Image from "next/image";

                  Untuk foto NO BACKGROUND (webp/png transparan) — pakai object-contain:
                  <Image
                    src="/images/hero/beranda.webp"
                    alt="Kreator HYPE sedang filming konten"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />

                  Untuk foto DENGAN BACKGROUND (jpg/webp normal) — pakai object-cover:
                  <Image
                    src="/images/hero/beranda.jpg"
                    alt="Kreator HYPE sedang filming konten di restoran"
                    fill
                    className="object-cover"
                    priority
                  />
                */}
              </div>

              {/* Floating — Kreator Aktif */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-[22%] bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-gray text-[10px] font-medium uppercase tracking-wide mb-0.5">Kreator Aktif</p>
                <p className="font-display text-2xl font-black text-hype-yellow leading-none">10K+</p>
              </motion.div>

              {/* Floating — Views/Bulan */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-8 top-1/2 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-gray text-[10px] font-medium uppercase tracking-wide mb-0.5">Views/Bulan</p>
                <p className="font-display text-2xl font-black text-hype-yellow leading-none">50M+</p>
              </motion.div>

              {/* Floating — Merchant Partner (bottom center, yellow) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-hype-yellow rounded-xl px-5 py-2.5 shadow-xl whitespace-nowrap"
              >
                <p className="text-hype-black text-[10px] font-bold uppercase tracking-wide mb-0.5">Merchant Partner</p>
                <p className="text-hype-black font-display font-black text-xl leading-none">150+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
