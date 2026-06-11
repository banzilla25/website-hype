"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface Props {
  kotaName: string;
  examplePlaces: readonly string[];
}

export default function TikTokGoKotaHeroSection({ kotaName, examplePlaces }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <MapPin size={11} />
                TikTok GO {kotaName}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-6">
              TikTok GO di{" "}
              <span className="text-hype-yellow italic">{kotaName}</span>
            </h1>
            <p className="text-hype-gray text-lg sm:text-xl leading-relaxed mb-8">
              HYPE Media Indonesia hadir di {kotaName}. Kami bantu bisnis lokal
              meraih pelanggan baru lewat kekuatan kreator dan sistem TikTok GO
              — dari views jadi pengunjung nyata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Konsultasi Gratis
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/tiktok-go"
                className="inline-flex items-center justify-center gap-2 border border-hype-border hover:border-hype-yellow/40 text-hype-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:bg-hype-black-alt"
              >
                Pelajari TikTok GO
              </Link>
            </div>
          </motion.div>

          {/* Right — Local businesses card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-hype-black-alt border border-hype-border rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-hype-white text-sm">
                    Bisnis di {kotaName}
                  </p>
                  <p className="text-hype-gray text-xs">yang bisa kami bantu</p>
                </div>
                <span className="inline-block bg-hype-yellow text-hype-black text-[10px] font-black px-2.5 py-1 rounded-full">
                  AKTIF
                </span>
              </div>

              <div className="space-y-2.5 mb-6">
                {examplePlaces.map((place, i) => (
                  <motion.div
                    key={place}
                    initial={{ opacity: 0, x: 8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 bg-hype-black rounded-xl px-4 py-3"
                  >
                    <MapPin size={14} className="text-hype-yellow shrink-0" />
                    <p className="text-hype-gray text-sm">{place}</p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-hype-border pt-4">
                <p className="text-hype-gray text-xs text-center">
                  + ratusan bisnis lokal lainnya di {kotaName}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
