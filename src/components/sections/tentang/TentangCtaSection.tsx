"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TentangCtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-black border-t border-hype-border py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

          {/* Left — Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-hype-yellow text-xs font-bold uppercase tracking-widest mb-4">
              {siteConfig.legalName}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight">
              Siap Berkembang<br />
              <span className="text-hype-yellow italic">Bersama Kami?</span>
            </h2>
            <p className="text-hype-gray text-base sm:text-lg mt-5 leading-relaxed max-w-lg">
              Baik kamu kreator yang ingin berpenghasilan, atau bisnis yang
              ingin ramai pelanggan — HYPE siap jadi mitra terpercaya Anda.
            </p>
          </motion.div>

          {/* Right — Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
          >
            <Link
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              Hubungi Kami
            </Link>
            <Link
              href="/portofolio"
              className="group inline-flex items-center justify-center gap-2 border border-hype-border hover:border-hype-yellow/40 text-hype-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:bg-hype-black-alt"
            >
              Lihat Portofolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
