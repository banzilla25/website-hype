"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { portfolioItems } from "@/lib/dummy-data";

const categoryStyle: Record<string, string> = {
  "Restoran / F&B":
    "bg-orange-500/10 border-orange-500/25 text-orange-400",
  "Hotel / Staycation":
    "bg-blue-500/10 border-blue-500/25 text-blue-400",
  Kafe: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
};

export default function PortofolioCasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black-alt py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-black text-hype-white">
            Studi Kasus
          </h2>
          <span className="inline-flex items-center gap-1.5 text-hype-gray text-xs border border-hype-border px-3 py-1.5 rounded-full w-fit">
            <span>🟧</span>
            Data dummy — akan diganti data asli
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.12 }}
              className="group bg-hype-black border border-hype-border rounded-2xl overflow-hidden hover:border-hype-yellow/30 transition-all hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-linear-to-r from-hype-yellow/30 via-hype-yellow to-hype-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                {/* Category + Location */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block border text-xs font-bold px-3 py-1 rounded-full ${
                      categoryStyle[item.category] ??
                      "bg-hype-yellow/10 border-hype-yellow/20 text-hype-yellow"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-hype-gray text-xs">
                    <MapPin size={11} />
                    {item.location}
                  </span>
                </div>

                {/* Client name */}
                <h3 className="font-bold text-hype-white text-lg mb-3 leading-snug">
                  {item.client}
                </h3>

                {/* Challenge snippet */}
                <p className="text-hype-gray text-sm leading-relaxed mb-5 line-clamp-2">
                  {item.challenge}
                </p>

                {/* Highlight stat */}
                <div className="bg-hype-black-alt border border-hype-yellow/15 rounded-xl p-3 mb-5 flex items-center gap-3">
                  <TrendingUp size={16} className="text-hype-yellow shrink-0" />
                  <span className="font-display text-xl font-black text-hype-yellow">
                    {item.highlightStat}
                  </span>
                </div>

                {/* Results mini grid */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {item.results.map((r) => (
                    <div
                      key={r.metric}
                      className="text-center bg-hype-black-alt rounded-lg py-2.5 px-1"
                    >
                      <p className="font-bold text-hype-white text-xs leading-tight">
                        {r.value}
                      </p>
                      <p className="text-hype-gray text-[10px] mt-0.5">{r.metric}</p>
                    </div>
                  ))}
                </div>

                {/* Link CTA */}
                <Link
                  href={`/portofolio/${item.slug}`}
                  className="group/link inline-flex items-center gap-2 text-hype-yellow hover:text-hype-yellow-hover font-bold text-sm transition-colors"
                >
                  Lihat Studi Kasus
                  <ArrowRight
                    size={15}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
