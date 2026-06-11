"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apakah perlu banyak follower untuk bergabung?",
    a: "Tidak perlu! Minimum hanya 1.000 follower untuk mulai bergabung. Yang lebih penting adalah konsistensi dan kualitas kontenmu — HYPE justru membantu kreator baru berkembang dari nol.",
  },
  {
    q: "Apakah gratis untuk bergabung?",
    a: "Ya, 100% gratis. HYPE tidak memungut biaya apapun dari kreator — baik biaya pendaftaran, biaya bulanan, maupun biaya lainnya. Kami justru yang membayar kamu.",
  },
  {
    q: "Bagaimana cara saya dibayar?",
    a: "Komisi masuk secara langsung sesuai penjualan voucher (GMV) yang berhasil kamu hasilkan dari campaign. Fee di luar komisi dibayarkan setelah campaign selesai sesuai kesepakatan.",
  },
  {
    q: "Saya pemula, apakah bisa ikut?",
    a: "Tentu bisa! HYPE menyediakan creator manager yang akan membimbingmu langkah demi langkah — dari cara membuat konten yang menarik, strategi tag lokasi, hingga cara meningkatkan performa akunmu.",
  },
  {
    q: "Bagaimana detail komisi dan ketentuannya?",
    a: "Semua detail komisi, besaran fee, dan ketentuan campaign akan dijelaskan secara transparan oleh creator manager kamu setelah bergabung. Tidak ada yang disembunyikan — semua dijelaskan sebelum kamu mulai campaign pertama.",
  },
];

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 lg:mb-12"
        >
          <span className="inline-block bg-hype-black border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white mb-3">
            Pertanyaan yang{" "}
            <span className="text-hype-yellow italic">Sering Ditanya</span>
          </h2>
          <p className="text-hype-gray text-sm sm:text-base">
            Jawaban jujur untuk semua yang mungkin masih kamu ragukan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-hype-black border border-hype-border rounded-xl overflow-hidden data-[state=open]:border-hype-yellow/40 transition-colors px-0"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-hype-white font-semibold text-sm sm:text-base hover:text-hype-yellow hover:no-underline transition-colors [&[data-state=open]]:text-hype-yellow">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-hype-gray text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
