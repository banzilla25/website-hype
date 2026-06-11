"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const companyDetails = [
  { label: "Badan Hukum", value: "PT" },
  { label: "Fokus", value: "TikTok GO" },
  { label: "Bidang", value: "F&B · Hotel · Lifestyle" },
  { label: "Area", value: "Seluruh Indonesia" },
];

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

          {/* Right — Company card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-hype-black-alt border border-hype-border rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-hype-yellow mb-4">
                  <span className="font-display text-4xl font-black text-hype-black">H</span>
                </div>
                <h2 className="font-display text-xl font-black text-hype-white">
                  {siteConfig.legalName}
                </h2>
                <p className="text-hype-gray text-sm mt-1">{siteConfig.location.display}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {companyDetails.map((item) => (
                  <div
                    key={item.label}
                    className="bg-hype-black border border-hype-border rounded-xl p-3"
                  >
                    <p className="text-hype-gray text-xs mb-0.5">{item.label}</p>
                    <p className="font-bold text-hype-white text-sm leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-hype-border">
                <p className="text-hype-gray text-xs text-center">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
