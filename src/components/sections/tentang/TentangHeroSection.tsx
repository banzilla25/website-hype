"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { img } from "@/lib/utils";

export default function TentangHeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-6">
              HYPE{" "}
              <span className="text-hype-yellow italic">Media</span>{" "}
              Indonesia
            </h1>
            <div className="space-y-4 text-hype-gray text-base sm:text-lg leading-relaxed">
              <p>
                HYPE Media Indonesia didirikan untuk menangkap peluang strategis
                di platform TikTok, khususnya di sektor F&B, hotel, dan
                pariwisata. Didukung sistem TikTok GO terbaru, kami membantu
                bisnis meningkatkan penjualan dan memperluas eksposur secara
                optimal.
              </p>
              <p>
                Sebagai mitra digital marketing tepercaya, kami berkomitmen
                menghadirkan solusi inovatif yang mendukung pertumbuhan bisnis
                di lanskap digital yang dinamis hari ini.
              </p>
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">

              {/* Image container — landscape */}
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-hype-border">
                <Image
                  src={img("/images/hero/tentang-kami.webp")}
                  alt="Tim HYPE Media Indonesia"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-hype-black/60 via-hype-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating — TikTok GO Official (top right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-6 bg-hype-black-alt border border-hype-yellow/30 rounded-xl px-3 py-2.5 shadow-xl"
              >
                <p className="text-hype-yellow text-[10px] font-bold uppercase tracking-wide leading-none mb-0.5">TikTok GO</p>
                <p className="text-hype-white text-xs font-black leading-none">Official Partner</p>
              </motion.div>

              {/* Floating — Est. (top left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.65 }}
                className="absolute -top-4 -left-6 bg-hype-yellow rounded-xl px-3 py-2.5 shadow-xl"
              >
                <p className="text-hype-black text-[10px] font-bold uppercase tracking-wide leading-none mb-0.5">Berbasis di</p>
                <p className="text-hype-black text-xs font-black leading-none">Tangerang</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
