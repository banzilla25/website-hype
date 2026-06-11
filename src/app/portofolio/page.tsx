import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import PortofolioHeroSection from "@/components/sections/portofolio/PortofolioHeroSection";
import PortofolioCasesSection from "@/components/sections/portofolio/PortofolioCasesSection";
import PortofolioCtaSection from "@/components/sections/portofolio/PortofolioCtaSection";

export const metadata: Metadata = {
  title: "Portofolio — Hasil Nyata Campaign HYPE",
  description:
    "Lihat studi kasus campaign TikTok GO HYPE Media Indonesia. Voucher terjual ribuan, views jutaan, dan kunjungan nyata untuk bisnis lokal.",
  keywords: [
    "portofolio TikTok GO",
    "studi kasus agensi TikTok",
    "campaign TikTok restoran",
    "hasil campaign TikTok GO",
    "HYPE Media portofolio",
  ],
  alternates: { canonical: `${siteConfig.url}/portofolio` },
  openGraph: {
    title: "Portofolio — Hasil Nyata Campaign HYPE",
    description:
      "Studi kasus nyata: voucher terjual ribuan, views jutaan, kunjungan meningkat. Lihat cara HYPE membantu bisnis lokal bertumbuh.",
    url: `${siteConfig.url}/portofolio`,
  },
};

export default function PortofolioPage() {
  return (
    <>
      <PortofolioHeroSection />
      <PortofolioCasesSection />
      <PortofolioCtaSection />
    </>
  );
}
