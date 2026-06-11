"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function KreatorCtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-hype-yellow overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 min-h-80">

          {/* Left — Big statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center py-16 lg:py-20 lg:pr-16 lg:border-r-2 border-hype-black/10"
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-hype-black leading-none">
              Daftar.<br />
              Gratis.<br />
              <span className="italic">Sekarang.</span>
            </h2>
          </motion.div>

          {/* Right — Content + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center py-16 lg:py-20 lg:pl-16"
          >
            <p className="text-hype-black/75 text-base sm:text-lg mb-8 leading-relaxed max-w-sm">
              Bergabung gratis dan mulai perjalananmu sebagai kreator HYPE
              Media Indonesia — dapat campaign, komisi, dan pelatihan langsung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-hype-black hover:bg-hype-black/90 text-hype-yellow font-bold text-base px-7 py-4 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={20} />
                Daftar Jadi Kreator HYPE
              </Link>
              <Link
                href="/untuk-merchant"
                className="group inline-flex items-center justify-center gap-2 border-2 border-hype-black/25 hover:border-hype-black text-hype-black font-bold text-sm px-6 py-4 rounded-xl transition-all hover:bg-hype-black/5"
              >
                Saya Merchant
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-4 text-hype-black/40 text-xs">
              100% gratis · Tidak ada biaya tersembunyi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
