import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import TentangHeroSection from "@/components/sections/tentang/TentangHeroSection";
import VisiMisiSection from "@/components/sections/tentang/VisiMisiSection";
import AngkaKamiSection from "@/components/sections/tentang/AngkaKamiSection";
import LokasiSection from "@/components/sections/tentang/LokasiSection";
import TentangCtaSection from "@/components/sections/tentang/TentangCtaSection";

export const metadata: Metadata = {
  title: "Tentang Kami — PT HYPE MEDIA INDONESIA",
  description:
    "HYPE Media Indonesia — agensi TikTok GO yang fokus menghubungkan kreator lokal dengan bisnis F&B, hotel, dan lifestyle di seluruh Indonesia. Berbasis di Tangerang, Banten.",
  keywords: [
    "tentang HYPE Media Indonesia",
    "agensi TikTok GO Indonesia",
    "PT HYPE MEDIA INDONESIA",
    "agensi TikTok Tangerang",
    "digital marketing lokal Indonesia",
  ],
  alternates: { canonical: `${siteConfig.url}/tentang-kami` },
  openGraph: {
    title: "Tentang Kami — PT HYPE MEDIA INDONESIA",
    description:
      "Agensi TikTok GO spesialis O2O lokal. 10.000+ kreator, 150+ merchant, 50+ kota di seluruh Indonesia.",
    url: `${siteConfig.url}/tentang-kami`,
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <TentangHeroSection />
      <VisiMisiSection />
      <AngkaKamiSection />
      <LokasiSection />
      <TentangCtaSection />
    </>
  );
}
