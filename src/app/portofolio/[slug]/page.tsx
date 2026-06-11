import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, TrendingUp, MessageCircle } from "lucide-react";
import { portfolioItems } from "@/lib/dummy-data";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.client} — Studi Kasus HYPE Media`,
    description: `Bagaimana HYPE Media membantu ${item.client} lewat TikTok GO. ${item.challenge} Hasil: ${item.highlightStat}.`,
    alternates: { canonical: `${siteConfig.url}/portofolio/${slug}` },
    openGraph: {
      title: `${item.client} — Studi Kasus HYPE Media`,
      description: `${item.highlightStat} — studi kasus campaign TikTok GO HYPE Media Indonesia.`,
      url: `${siteConfig.url}/portofolio/${slug}`,
    },
  };
}

export default async function PortofolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <div className="bg-hype-black min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <Link
          href="/portofolio"
          className="inline-flex items-center gap-2 text-hype-gray hover:text-hype-yellow text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali ke Portofolio
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-block bg-hype-yellow text-hype-black text-xs font-bold px-3 py-1.5 rounded-full">
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-hype-gray text-sm">
            <MapPin size={13} />
            {item.location}
          </span>
          <span className="text-hype-gray text-xs border border-hype-border px-2 py-0.5 rounded-full">
            🟧 Data Dummy
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-hype-white leading-tight mb-4">
          {item.client}
        </h1>

        {/* Highlight stat banner */}
        <div className="bg-hype-black-alt border border-hype-yellow/20 rounded-2xl p-5 flex items-center gap-4 mt-8">
          <div className="w-10 h-10 rounded-xl bg-hype-yellow flex items-center justify-center shrink-0">
            <TrendingUp size={18} className="text-hype-black" />
          </div>
          <div>
            <p className="text-hype-gray text-xs mb-0.5">Hasil utama campaign</p>
            <p className="font-display text-2xl sm:text-3xl font-black text-hype-yellow">
              {item.highlightStat}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-hype-black-alt border-t border-hype-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-10">

            {/* Tantangan */}
            <div>
              <span className="inline-block text-hype-yellow text-xs font-bold uppercase tracking-widest mb-3">
                Challenge
              </span>
              <p className="text-hype-white text-base sm:text-lg leading-relaxed">
                {item.challenge}
              </p>
            </div>

            <div className="border-t border-hype-border" />

            {/* Yang dilakukan */}
            <div>
              <span className="inline-block text-hype-yellow text-xs font-bold uppercase tracking-widest mb-3">
                What We Did
              </span>
              <p className="text-hype-white text-base sm:text-lg leading-relaxed">
                {item.action}
              </p>
            </div>

            <div className="border-t border-hype-border" />

            {/* Hasil */}
            <div>
              <span className="inline-block text-hype-yellow text-xs font-bold uppercase tracking-widest mb-5">
                Results
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {item.results.map((r) => (
                  <div
                    key={r.metric}
                    className="bg-hype-black border border-hype-border rounded-2xl p-6 text-center hover:border-hype-yellow/30 transition-colors"
                  >
                    <p className="font-display text-3xl sm:text-4xl font-black text-hype-yellow mb-2">
                      {r.value}
                    </p>
                    <p className="text-hype-gray text-sm">{r.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-hype-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-hype-black">
                Mau Hasil Seperti Ini untuk Bisnis Anda?
              </h2>
              <p className="text-hype-black/70 text-sm mt-1">
                Konsultasi gratis — tanpa komitmen awal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-hype-black hover:bg-hype-black/90 text-hype-yellow font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-sm"
              >
                <MessageCircle size={18} />
                Hubungi Kami
              </Link>
              <Link
                href="/portofolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-hype-black/30 hover:border-hype-black text-hype-black font-bold px-6 py-3.5 rounded-xl transition-all hover:bg-hype-black/5 text-sm"
              >
                Lihat Studi Kasus Lain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
