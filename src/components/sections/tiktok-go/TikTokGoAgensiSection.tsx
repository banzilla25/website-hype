"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  "Mencari kreator yang tepat sesuai lokasi dan kategori bisnis",
  "Merancang strategi konten yang mendorong pembelian voucher",
  "Monitoring campaign dan memastikan standar TikTok GO terpenuhi",
  "Laporan lengkap — views, voucher terjual, estimasi kunjungan",
];

export default function TikTokGoAgensiSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Why An Agency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white leading-tight mb-5">
              TikTok GO Butuh{" "}
              <span className="text-hype-yellow italic">Eksekusi yang Tepat</span>
            </h2>
            <p className="text-hype-gray text-base sm:text-lg leading-relaxed mb-8">
              Menjalankan campaign TikTok GO bukan sekadar upload video. Butuh
              kreator yang relevan, strategi konten yang terarah, dan eksekusi
              yang rapi. HYPE mengurus semuanya — dari mencari kreator lokal,
              memproduksi konten, sampai melaporkan hasil penjualan voucher.
            </p>
            <ul className="space-y-3">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-hype-yellow shrink-0 mt-0.5"
                  />
                  <p className="text-hype-gray text-sm leading-relaxed">
                    {reason}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-hype-yellow rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-hype-black mb-3">
                Siap Mulai Campaign TikTok GO?
              </h3>
              <p className="text-hype-black/75 text-sm sm:text-base leading-relaxed mb-6">
                Tim HYPE siap bantu rancang strategi terbaik untuk bisnis Anda
                — gratis konsultasi, tanpa komitmen awal.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-hype-black hover:bg-hype-black/90 text-hype-yellow font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Mulai Kerjasama
                </Link>
                <Link
                  href="/untuk-merchant"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-hype-black/20 hover:border-hype-black text-hype-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:bg-hype-black/5"
                >
                  Pelajari Layanan Kami
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <p className="text-hype-black/50 text-xs mt-4 text-center">
                Konsultasi gratis · Respons cepat · Full service
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
