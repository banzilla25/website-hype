"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CtaSection() {
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
            Siap Bertumbuh<br />
            Bersama{" "}
            <span className="italic underline decoration-hype-black/30 underline-offset-4">
              HYPE?
            </span>
          </h2>

          <p className="text-hype-black/75 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Apakah kamu kreator yang ingin berpenghasilan, atau bisnis yang ingin
            ramai pengunjung — kami siap bantu.
          </p>

          <Link
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-hype-black hover:bg-hype-black/90 text-hype-yellow font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-150 hover:scale-105 active:scale-95 shadow-lg shadow-hype-black/20"
          >
            <MessageCircle size={22} />
            Hubungi Kami via WhatsApp
          </Link>

          <p className="mt-5 text-hype-black/50 text-sm">
            Respons cepat · Konsultasi gratis · Tanpa komitmen awal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
