"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tag, Users, Share2, Video } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Tag,
    title: "TikTok Voucher Sales Campaign",
    description:
      "Layanan penuh dari perencanaan, eksekusi, hingga laporan penjualan voucher melalui location tag (POI). Solusi lengkap mengubah konten jadi transaksi nyata.",
    tags: ["Voucher POI", "Location Tag", "Sales Report"],
    highlight: true,
  },
  {
    number: "02",
    icon: Users,
    title: "Creator Management (KOL & KOC)",
    description:
      "Pemilihan dan pengelolaan kreator paling relevan untuk mendorong penjualan dan awareness brand Anda — dari nano-influencer lokal hingga KOL nasional.",
    tags: ["KOL Seleksi", "KOC Network", "Performance Tracking"],
    highlight: false,
  },
  {
    number: "03",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Spesialisasi TikTok — mengelola akun brand Anda untuk membangun komunitas organik dan mendukung campaign yang sedang berjalan.",
    tags: ["Content Calendar", "Community", "TikTok SEO"],
    highlight: false,
  },
  {
    number: "04",
    icon: Video,
    title: "Creative Content Production",
    description:
      "Produksi video yang dioptimalkan untuk FYP (For You Page) dan mendorong klik pada location tag — storytelling autentik yang menggerakkan audiens.",
    tags: ["FYP Optimization", "Video Produksi", "Hook Formula"],
    highlight: false,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-4">
            Solusi{" "}
            <span className="text-hype-yellow italic">End-to-End</span>
            <br />untuk Bisnis Anda
          </h2>
          <p className="text-hype-gray text-base sm:text-lg max-w-xl mx-auto">
            Dari strategi hingga laporan — semua kami urus agar Anda bisa fokus
            melayani pelanggan yang berdatangan.
          </p>
        </motion.div>

        {/* Services grid — 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                className={`group relative rounded-2xl border p-7 lg:p-8 transition-all duration-300 hover:-translate-y-0.5 ${
                  service.highlight
                    ? "bg-hype-yellow border-hype-yellow hover:shadow-xl hover:shadow-hype-yellow/10"
                    : "bg-hype-black-alt border-hype-border hover:border-hype-white/15 hover:shadow-xl hover:shadow-white/3"
                }`}
              >
                {/* Number */}
                <span className={`absolute top-6 right-6 font-display text-5xl font-black select-none transition-opacity ${
                  service.highlight ? "text-hype-black/8" : "text-hype-white/5"
                }`}>
                  {service.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  service.highlight
                    ? "bg-hype-black/12"
                    : "bg-hype-yellow/8 border border-hype-yellow/15"
                }`}>
                  <Icon
                    size={24}
                    className={service.highlight ? "text-hype-black" : "text-hype-yellow"}
                  />
                </div>

                {/* Content */}
                <h3 className={`font-bold text-lg mb-3 ${service.highlight ? "text-hype-black" : "text-hype-white"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${service.highlight ? "text-hype-black/75" : "text-hype-gray"}`}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        service.highlight
                          ? "bg-hype-black/10 text-hype-black"
                          : "bg-hype-black border border-hype-border text-hype-gray"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
