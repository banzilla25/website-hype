"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const industries = [
  { label: "Restoran", emoji: "🍜" },
  { label: "Kafe", emoji: "☕" },
  { label: "Hotel", emoji: "🏨" },
  { label: "Tempat Wisata", emoji: "🏖️" },
  { label: "Klinik Kecantikan", emoji: "💆" },
  { label: "Lifestyle & Fashion", emoji: "✨" },
  { label: "Bar & Lounge", emoji: "🍸" },
  { label: "Bakery", emoji: "🥐" },
];

export default function FitForSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">

          {/* Left — Label + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Built For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-hype-white mb-5 max-w-xs">
              Bisnis Apa Saja yang{" "}
              <span className="text-hype-yellow italic">Kami Bantu?</span>
            </h2>
            <p className="text-hype-gray text-sm sm:text-base mb-6 max-w-xs leading-relaxed">
              HYPE berpengalaman dengan berbagai jenis bisnis lokal di seluruh Indonesia.
            </p>
            <Link
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-hype-yellow hover:bg-hype-yellow-hover text-hype-black font-bold text-sm px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              Diskusikan Bisnis Anda
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — Industry pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {industries.map((industry, i) => (
              <motion.span
                key={industry.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="inline-flex items-center gap-2.5 bg-hype-black-alt border border-hype-border hover:border-hype-yellow/40 hover:bg-hype-yellow/5 text-hype-white text-sm font-semibold px-5 py-3 rounded-full cursor-default transition-all hover:scale-105"
              >
                <span className="text-xl">{industry.emoji}</span>
                {industry.label}
              </motion.span>
            ))}

            {/* More pill */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65 }}
              className="inline-flex items-center gap-2 bg-hype-yellow/8 border border-hype-yellow/25 text-hype-yellow text-sm font-bold px-5 py-3 rounded-full"
            >
              + Bisnis Lokal Lainnya
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
