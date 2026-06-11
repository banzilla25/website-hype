"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function PortofolioCtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black-alt border-t border-hype-border py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight">
              Mau Hasil{" "}
              <span className="text-hype-yellow italic">Seperti Ini</span>
              <br />untuk Bisnis Anda?
            </h2>
            <p className="text-hype-gray text-sm sm:text-base mt-4">
              Konsultasi gratis · Tanpa komitmen awal · Respons cepat
            </p>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={22} />
              Mulai Kerjasama Sekarang
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
