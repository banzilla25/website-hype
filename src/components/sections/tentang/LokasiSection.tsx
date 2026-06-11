"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Building2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function LokasiSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Location & Legal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-hype-white">
            Temukan Kami
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Badan hukum */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="bg-hype-black border border-hype-border rounded-2xl p-6 hover:border-hype-yellow/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center mb-4">
              <Building2 size={18} className="text-hype-yellow" />
            </div>
            <h3 className="font-bold text-hype-white text-sm mb-2">Badan Hukum</h3>
            <p className="text-hype-gray text-sm leading-relaxed">
              {siteConfig.legalName}
            </p>
            <p className="text-hype-gray text-sm mt-1">
              Terdaftar resmi di Indonesia
            </p>
          </motion.div>

          {/* Lokasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-hype-black border border-hype-border rounded-2xl p-6 hover:border-hype-yellow/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center mb-4">
              <MapPin size={18} className="text-hype-yellow" />
            </div>
            <h3 className="font-bold text-hype-white text-sm mb-2">Lokasi</h3>
            <p className="text-hype-gray text-sm leading-relaxed">
              {siteConfig.location.city},{" "}
              {siteConfig.location.province}
              <br />
              Indonesia
            </p>
            <p className="text-hype-yellow/60 text-xs mt-2.5 flex items-center gap-1">
              <MapPin size={10} />
              Alamat lengkap segera hadir
            </p>
          </motion.div>

          {/* Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="bg-hype-black border border-hype-border rounded-2xl p-6 sm:col-span-2 lg:col-span-1 hover:border-hype-yellow/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-hype-yellow/10 border border-hype-yellow/20 flex items-center justify-center mb-4">
              <Phone size={18} className="text-hype-yellow" />
            </div>
            <h3 className="font-bold text-hype-white text-sm mb-3">Kontak Langsung</h3>
            <div className="space-y-2">
              <p className="text-hype-gray text-sm">
                WhatsApp:{" "}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hype-yellow hover:underline"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </p>
              <p className="text-hype-gray text-sm">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-hype-yellow hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-hype-gray text-sm">
                Instagram:{" "}
                <a
                  href={siteConfig.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hype-yellow hover:underline"
                >
                  {siteConfig.contact.instagram}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
