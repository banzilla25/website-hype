"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { portfolioItems } from "@/lib/dummy-data";
import { img } from "@/lib/utils";

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-hype-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block bg-hype-black-alt border border-hype-border text-hype-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-hype-white">
              Hasil Nyata,{" "}
              <span className="text-hype-yellow italic">Bukan Sekadar</span>
              <br />Tayangan.
            </h2>
          </div>
          <Link
            href="/portofolio"
            className="group inline-flex items-center gap-2 text-hype-yellow font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            Lihat Semua
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {/* DUMMY DATA — Replace with real case study image and data */}
              <Link
                href={`/portofolio/${item.slug}`}
                className="group block bg-hype-black-alt border border-hype-border rounded-2xl overflow-hidden hover:border-hype-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-hype-yellow/5"
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={img(item.thumbnail)}
                    alt={item.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-hype-black-alt/80 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-hype-yellow text-hype-black text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-hype-gray text-xs mb-2">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                  <h3 className="font-bold text-hype-white text-base group-hover:text-hype-yellow transition-colors mb-2">
                    {item.client}
                  </h3>
                  <p className="text-hype-gray text-sm leading-relaxed line-clamp-2 mb-4">
                    {item.challenge}
                  </p>
                  {/* Highlight stat */}
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xl font-black text-hype-yellow">
                      {item.highlightStat}
                    </p>
                    <ArrowRight
                      size={16}
                      className="text-hype-gray group-hover:text-hype-yellow group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
