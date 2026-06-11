"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clapperboard, Store } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const paths = [
  {
    icon: Clapperboard,
    eyebrow: "Untuk Kreator",
    title: "Hobi Jadi Penghasilan.",
    description:
      "Suka kulineran atau jalan-jalan? Ubah hobimu jadi penghasilan. Gabung 10.000+ kreator HYPE, dapat campaign tiap bulan, komisi, free meals, dan bimbingan langsung.",
    cta: "Gabung Jadi Kreator",
    href: "/untuk-kreator",
    accent: true,
    highlights: ["Komisi setiap penjualan", "Campaign tiap bulan", "Pelatihan gratis"],
  },
  {
    icon: Store,
    eyebrow: "Untuk Merchant",
    title: "Tempat Usahamu Ramai.",
    description:
      "Punya restoran, kafe, atau hotel? Kami datangkan pelanggan nyata lewat kekuatan konten TikTok GO. Dari perencanaan sampai laporan, semua kami urus.",
    cta: "Mulai Kerjasama",
    href: "/untuk-merchant",
    accent: false,
    highlights: ["Full service O2O", "Jaringan 50+ kota", "Terbukti & terukur"],
  },
];

export default function TwoPathsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Two Paths
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
            Kamu Ada di Sisi Yang Mana?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.eyebrow}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className={`relative group rounded-2xl border overflow-hidden p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  path.accent
                    ? "bg-hype-yellow border-hype-yellow hover:shadow-hype-yellow/10"
                    : "bg-hype-black border-hype-border hover:border-hype-white/20 hover:shadow-white/5"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    path.accent
                      ? "bg-hype-black/15"
                      : "bg-hype-yellow/10 border border-hype-yellow/20"
                  }`}
                >
                  <Icon
                    size={24}
                    className={path.accent ? "text-hype-black" : "text-hype-yellow"}
                  />
                </div>

                {/* Eyebrow */}
                <span
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                    path.accent ? "text-hype-black/60" : "text-hype-yellow"
                  }`}
                >
                  {path.eyebrow}
                </span>

                {/* Title */}
                <h3
                  className={`font-display text-3xl lg:text-4xl font-black leading-tight mb-4 ${
                    path.accent ? "text-hype-black" : "text-hype-white"
                  }`}
                >
                  {path.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 flex-1 ${
                    path.accent ? "text-hype-black/75" : "text-hype-gray"
                  }`}
                >
                  {path.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {path.highlights.map((hl) => (
                    <li
                      key={hl}
                      className={`flex items-center gap-2 text-sm font-medium ${
                        path.accent ? "text-hype-black" : "text-hype-white"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          path.accent ? "bg-hype-black" : "bg-hype-yellow"
                        }`}
                      />
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={path.href}
                  className={`group/btn inline-flex items-center gap-2 font-bold text-base px-6 py-3.5 rounded-xl transition-all duration-150 w-fit hover:scale-105 active:scale-95 ${
                    path.accent
                      ? "bg-hype-black text-hype-yellow hover:bg-hype-black/90"
                      : "bg-hype-yellow text-hype-black hover:bg-hype-yellow-hover"
                  }`}
                >
                  {path.cta}
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Corner accent */}
                {path.accent && (
                  <div className="absolute top-4 right-4 bg-hype-black/10 text-hype-black text-xs font-bold px-3 py-1 rounded-full">
                    {siteConfig.stats[0].value} Kreator
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
