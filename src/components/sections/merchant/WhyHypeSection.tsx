"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Network, BarChart3, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: Target,
    title: "Fokus O2O Lokal",
    description:
      "Kami ahli dalam satu hal: mengubah views di layar menjadi kunjungan fisik ke gerai Anda. Bukan sekadar engagement — tapi pelanggan nyata yang datang.",
    stat: "O2O Specialist",
  },
  {
    icon: Network,
    title: `Jaringan ${siteConfig.stats[0].value} Kreator`,
    description:
      `Tersebar di ${siteConfig.stats[2].value} kota di Indonesia. Kami punya kreator lokal yang tepat — yang audiens-nya sudah di kota Anda.`,
    stat: `${siteConfig.stats[2].value} Kota`,
  },
  {
    icon: BarChart3,
    title: "Terbukti & Terukur",
    description:
      `Rata-rata ${siteConfig.stats[3].value} per bulan, hingga 8.000 voucher terjual per campaign. Setiap campaign kami laporkan secara transparan.`,
    stat: `${siteConfig.stats[3].value} Views/Bulan`,
  },
  {
    icon: Layers,
    title: "Full Service",
    description:
      "Dari riset kreator, brief konten, monitoring campaign, hingga laporan penjualan akhir — semua kami urus. Anda cukup terima hasilnya.",
    stat: "Zero Hassle",
  },
];

export default function WhyHypeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why HYPE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-4">
            Bukan Agensi Biasa —{" "}
            <span className="text-hype-yellow italic">Kami Spesialis O2O</span>
          </h2>
          <p className="text-hype-gray text-base sm:text-lg max-w-xl mx-auto">
            Ada banyak agensi digital. Tapi tidak banyak yang fokus pada satu hasil
            yang paling penting untuk bisnis lokal: pengunjung nyata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.1 }}
                className="group bg-hype-black border border-hype-border rounded-2xl p-6 hover:border-hype-yellow/30 transition-all hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-hype-yellow/8 border border-hype-yellow/15 flex items-center justify-center mb-5 group-hover:bg-hype-yellow/15 group-hover:border-hype-yellow/30 transition-colors">
                  <Icon size={20} className="text-hype-yellow" />
                </div>

                {/* Stat pill */}
                <span className="inline-block bg-hype-yellow/10 border border-hype-yellow/20 text-hype-yellow text-xs font-bold px-2.5 py-1 rounded-full mb-4">
                  {reason.stat}
                </span>

                <h3 className="font-bold text-hype-white text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-hype-gray text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
