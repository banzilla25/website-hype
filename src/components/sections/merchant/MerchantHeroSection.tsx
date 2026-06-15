"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function MerchantHeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-hype-black">
      <div className="absolute top-1/3 left-1/4 w-125 h-125 rounded-full bg-hype-yellow/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow animate-pulse" />
                For Merchants
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            >
              <span className="block text-hype-white">Bikin Tempat</span>
              <span className="block text-hype-white">Usahamu Ramai</span>
              <span className="block text-hype-yellow italic">Lewat TikTok GO.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-hype-gray text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              HYPE Media Indonesia adalah jembatan yang mengubah visibilitas
              online di TikTok GO menjadi pengunjung nyata di tempat usahamu.
              Khusus untuk bisnis F&amp;B, hotel, dan pariwisata.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-2.5 mb-8">
              {[
                "Full service — dari strategi sampai laporan",
                "Jaringan 10.000+ kreator di 50+ kota",
                "Konsultasi gratis tanpa komitmen",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-hype-white text-sm sm:text-base">
                  <span className="w-5 h-5 rounded-full bg-hype-yellow/20 border border-hype-yellow/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow" />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-150 hover:scale-105 active:scale-95 shadow-lg shadow-hype-yellow/15"
              >
                Konsultasi Gratis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-3 text-hype-gray text-xs">
                Gratis konsultasi · Respons dalam 1×24 jam
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">

              {/* Image container — landscape */}
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-hype-border">
                <Image
                  src="/images/hero/merchant.webp"
                  alt="Restoran ramai pengunjung hasil campaign TikTok GO"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-hype-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating — Campaign Aktif (top left) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-5 -left-6 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-gray text-[10px] font-medium uppercase tracking-wide mb-0.5">Campaign Aktif</p>
                <p className="font-display text-2xl font-black text-hype-yellow leading-none">15+</p>
              </motion.div>

              {/* Floating — Full Service (top right, yellow) */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="absolute -top-5 -right-4 bg-hype-yellow rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-hype-black text-[10px] font-bold uppercase tracking-wide mb-0.5">Full Service</p>
                <p className="text-hype-black font-black text-sm">Strategi → Laporan</p>
              </motion.div>

              {/* Floating — Kunjungan Nyata (bottom left) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-5 -left-6 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-gray text-[10px] font-medium uppercase tracking-wide mb-0.5">Kunjungan Nyata</p>
                <p className="font-display text-xl font-black text-green-400 leading-none">+65% Weekday</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
