"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Play, TrendingUp } from "lucide-react";
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
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-hype-yellow/4 blur-3xl pointer-events-none" />

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

          {/* Right — Merchant mockup visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card — TikTok GO campaign mockup */}
              <div className="relative bg-hype-black-alt border border-hype-border rounded-3xl overflow-hidden">

                {/* Campaign header */}
                <div className="bg-hype-yellow px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-hype-black text-xs font-bold uppercase tracking-wide">Campaign Aktif</p>
                    <p className="text-hype-black font-black text-lg leading-tight">Restoran Partner HYPE</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-hype-black/10 flex items-center justify-center">
                    <Play fill="black" size={16} className="text-hype-black ml-0.5" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-px bg-hype-border">
                  {[
                    { label: "Kreator", value: "15" },
                    { label: "Views", value: "2.4Jt" },
                    { label: "Voucher", value: "1.2K" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-hype-black-alt py-4 text-center">
                      <p className="font-display text-2xl font-black text-hype-yellow">{stat.value}</p>
                      <p className="text-hype-gray text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Content preview feed */}
                <div className="p-5 space-y-3">
                  {[
                    { creator: "@foodie.jakarta", views: "450K", status: "Live" },
                    { creator: "@kuliner.id", views: "280K", status: "Live" },
                    { creator: "@review.makan", views: "190K", status: "Selesai" },
                  ].map((item) => (
                    <div
                      key={item.creator}
                      className="flex items-center justify-between bg-hype-black rounded-xl px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-hype-yellow/20 flex items-center justify-center text-xs">🎬</div>
                        <div>
                          <p className="text-hype-white text-xs font-semibold">{item.creator}</p>
                          <p className="text-hype-gray text-xs">{item.views} views</p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        item.status === "Live"
                          ? "bg-green-500/15 text-green-400 border border-green-500/20"
                          : "bg-hype-border text-hype-gray"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Location tag */}
                <div className="px-5 pb-5">
                  <div className="flex items-center gap-2 bg-hype-black rounded-xl px-4 py-3">
                    <MapPin size={14} className="text-hype-yellow shrink-0" />
                    <div>
                      <p className="text-hype-white text-xs font-semibold">TikTok GO Location Tag</p>
                      <p className="text-hype-gray text-xs">Jakarta Selatan · 8.000+ voucher terjual</p>
                    </div>
                    <TrendingUp size={14} className="text-green-400 ml-auto shrink-0" />
                  </div>
                </div>
              </div>

              {/* Floating ROI badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-8 bg-hype-black-alt border border-hype-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-hype-gray text-[10px] font-medium uppercase tracking-wide mb-0.5">Kunjungan Nyata</p>
                <p className="font-display text-xl font-black text-green-400">+65% Weekday</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-6 bg-hype-yellow border border-hype-yellow rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-hype-black text-[10px] font-bold uppercase tracking-wide mb-0.5">Full Service</p>
                <p className="text-hype-black font-black text-sm">Dari Strategi → Laporan</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-hype-black to-transparent pointer-events-none" />
    </section>
  );
}
