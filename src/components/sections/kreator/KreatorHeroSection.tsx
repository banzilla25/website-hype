"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Wallet, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { img } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function KreatorHeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-hype-black">
      <div className="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-hype-yellow/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-hype-yellow animate-pulse" />
                For Creators
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            >
              <span className="block text-hype-white">Hobi Kulineran</span>
              <span className="block text-hype-white">&amp; Jalan-Jalan</span>
              <span className="block text-hype-yellow italic">Bisa Jadi Cuan.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-hype-gray text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Gabung dengan 10.000+ kreator HYPE Media Indonesia. Kami carikan
              campaign-nya, kamu tinggal bikin konten dan nikmati komisinya.
            </motion.p>

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

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-80">

              {/* Image container — portrait, transparent bg untuk PNG/WebP no-background */}
              <div className="relative aspect-3/4">
                <Image
                  src={img("/images/hero/kreator.png")}
                  alt="Kreator muda HYPE filming konten di kafe"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* Floating — Komisi Bulanan (top left) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-5 -left-8 bg-hype-black-alt border border-green-500/20 rounded-xl px-3 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2 text-green-400">
                  <Wallet size={13} />
                  <div>
                    <p className="text-hype-gray text-[10px] leading-none mb-0.5">Komisi Bulanan</p>
                    <p className="font-bold text-xs leading-none">Langsung Cair</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating — Kreator Aktif (right middle) */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 bg-hype-black-alt border border-blue-500/20 rounded-xl px-3 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2 text-blue-400">
                  <Users size={13} />
                  <div>
                    <p className="text-hype-gray text-[10px] leading-none mb-0.5">Kreator Aktif</p>
                    <p className="font-bold text-xs leading-none">10.000+</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating — Free Meals (bottom left) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-5 -left-8 bg-hype-black-alt border border-hype-yellow/20 rounded-xl px-3 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2 text-hype-yellow">
                  <Star size={13} />
                  <div>
                    <p className="text-hype-gray text-[10px] leading-none mb-0.5">Free Meals</p>
                    <p className="font-bold text-xs leading-none">Tiap Campaign</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating — Min. Followers (bottom right, yellow) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-5 -right-6 bg-hype-yellow rounded-xl px-3 py-2.5 shadow-xl whitespace-nowrap"
              >
                <p className="text-hype-black text-[10px] font-bold uppercase tracking-wide mb-0.5">Min. Followers</p>
                <p className="text-hype-black font-black text-sm leading-none">1.000 saja</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
