import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import TikTokGoHeroSection from "@/components/sections/tiktok-go/TikTokGoHeroSection";
import TikTokGoPenjelasanSection from "@/components/sections/tiktok-go/TikTokGoPenjelasanSection";
import TikTokGoAngkaPasarSection from "@/components/sections/tiktok-go/TikTokGoAngkaPasarSection";
import TikTokGoAgensiSection from "@/components/sections/tiktok-go/TikTokGoAgensiSection";

export const metadata: Metadata = {
  title: "Apa Itu TikTok GO? — Panduan Lengkap & Cara Kerjanya",
  description:
    "TikTok GO adalah program O2O resmi TikTok yang mengubah konten viral menjadi transaksi nyata. Pelajari cara kerja, angka pasar, dan kenapa bisnis lokal wajib ada di TikTok GO.",
  keywords: [
    "apa itu TikTok GO",
    "TikTok GO Indonesia",
    "TikTok GO bisnis lokal",
    "cara kerja TikTok GO",
    "O2O TikTok Indonesia",
    "TikTok GO voucher",
  ],
  alternates: { canonical: `${siteConfig.url}/tiktok-go` },
  openGraph: {
    title: "Apa Itu TikTok GO? — Panduan Lengkap",
    description:
      "Program O2O resmi TikTok yang mengubah views jadi pelanggan nyata. 160 juta pengguna aktif, GMV Rp100T+. Pelajari cara kerjanya.",
    url: `${siteConfig.url}/tiktok-go`,
  },
};

export default function TikTokGoPage() {
  return (
    <>
      <TikTokGoHeroSection />
      <TikTokGoPenjelasanSection />
      <TikTokGoAngkaPasarSection />
      <TikTokGoAgensiSection />
    </>
  );
}
