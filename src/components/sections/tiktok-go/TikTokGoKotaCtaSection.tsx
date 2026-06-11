"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface Props {
  kotaName: string;
}

export default function TikTokGoKotaCtaSection({ kotaName }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-yellow py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-black leading-tight mb-4">
            Bisnis di {kotaName}?<br />
            <span className="italic">Kami Siap Bantu.</span>
          </h2>
          <p className="text-hype-black/75 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Tim HYPE di {kotaName} siap konsultasi gratis — rancang strategi
            TikTok GO terbaik untuk bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-hype-black hover:bg-hype-black/90 text-hype-yellow font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-hype-black/20"
            >
              <MessageCircle size={22} />
              Hubungi Kami Sekarang
            </Link>
            <Link
              href="/portofolio"
              className="group inline-flex items-center justify-center gap-2 border-2 border-hype-black/30 hover:border-hype-black text-hype-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:bg-hype-black/5"
            >
              Lihat Portofolio
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <p className="mt-5 text-hype-black/50 text-xs">
            Konsultasi gratis · Tanpa komitmen awal · Respons cepat
          </p>
        </motion.div>
      </div>
    </section>
  );
}
