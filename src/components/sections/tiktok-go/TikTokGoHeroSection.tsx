"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const flowSteps = [
  { step: "1", label: "Kreator buat konten + tag lokasi" },
  { step: "2", label: "Penonton lihat & beli voucher langsung" },
  { step: "3", label: "Pelanggan datang ke lokasi fisik" },
  { step: "4", label: "Bisnis ramai, kreator dapat komisi" },
];

export default function TikTokGoHeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Learn TikTok GO
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-6">
              Apa Itu{" "}
              <span className="text-hype-yellow italic">TikTok GO?</span>
            </h1>
            <p className="text-hype-gray text-lg sm:text-xl leading-relaxed mb-8">
              TikTok GO adalah inisiatif Online-to-Offline (O2O) dari TikTok yang
              menjembatani konten viral dengan transaksi dunia nyata. Kreator
              promosikan tempat makan, hotel, dan layanan lokal — penonton
              langsung beli voucher dan datang ke lokasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Mulai Kerjasama
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/untuk-merchant"
                className="group inline-flex items-center justify-center gap-2 border border-hype-border hover:border-hype-yellow/40 text-hype-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:bg-hype-black-alt"
              >
                Untuk Merchant
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right — O2O flow card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-hype-black-alt border border-hype-border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-hype-black border border-hype-border flex items-center justify-center">
                  <span className="font-display text-lg font-black text-hype-white">TT</span>
                </div>
                <div>
                  <p className="font-bold text-hype-white text-sm">TikTok GO</p>
                  <p className="text-hype-gray text-xs">Program O2O Resmi TikTok</p>
                </div>
                <span className="ml-auto inline-block bg-hype-yellow text-hype-black text-[10px] font-black px-2 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>

              <p className="text-hype-gray text-xs mb-4 uppercase tracking-wider font-bold">
                Cara kerjanya
              </p>
              <div className="space-y-2.5">
                {flowSteps.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 bg-hype-black rounded-xl px-4 py-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-hype-yellow flex items-center justify-center font-display font-black text-hype-black text-sm shrink-0">
                      {item.step}
                    </span>
                    <p className="text-hype-white text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
