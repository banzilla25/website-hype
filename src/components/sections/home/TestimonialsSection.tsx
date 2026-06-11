"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/dummy-data";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
            Kata Mereka Yang{" "}
            <span className="text-hype-yellow italic">Sudah Bergabung</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* DUMMY DATA — Replace with real testimonials */}
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="bg-hype-black-alt border border-hype-border rounded-2xl p-6 flex flex-col"
            >
              <Quote
                size={28}
                className="text-hype-yellow mb-4 opacity-80 shrink-0"
              />
              <p className="text-hype-gray text-sm sm:text-base leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-hype-border">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-hype-yellow/20 border border-hype-yellow/30 flex items-center justify-center shrink-0">
                  <span className="text-hype-yellow font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-hype-white font-semibold text-sm">{t.name}</p>
                  <p className="text-hype-gray text-xs">{t.role}</p>
                  <p className="text-hype-gray text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
