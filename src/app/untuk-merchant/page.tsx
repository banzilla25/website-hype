import type { Metadata } from "next";
import MerchantHeroSection from "@/components/sections/merchant/MerchantHeroSection";
import ProblemStatSection from "@/components/sections/merchant/ProblemStatSection";
import ServicesSection from "@/components/sections/merchant/ServicesSection";
import WhyHypeSection from "@/components/sections/merchant/WhyHypeSection";
import FitForSection from "@/components/sections/merchant/FitForSection";
import MerchantCtaSection from "@/components/sections/merchant/MerchantCtaSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Untuk Merchant — Ramai Pelanggan via TikTok GO",
  description:
    "Bikin tempat usahamu ramai lewat TikTok GO. HYPE Media Indonesia mengurus kreator, konten & campaign dari awal hingga laporan. Konsultasi gratis!",
  keywords: [
    "TikTok GO merchant",
    "agensi TikTok GO restoran",
    "TikTok marketing kuliner Indonesia",
    "campaign TikTok hotel",
    "voucher TikTok kafe",
    "HYPE Media merchant",
  ],
  alternates: { canonical: `${siteConfig.url}/untuk-merchant` },
  openGraph: {
    title: "Untuk Merchant — Ramai Pelanggan via TikTok GO",
    description:
      "Bikin tempat usahamu ramai lewat TikTok GO. Full service dari strategi sampai laporan. Konsultasi gratis.",
    url: `${siteConfig.url}/untuk-merchant`,
  },
};

export default function UntukMerchantPage() {
  return (
    <>
      <MerchantHeroSection />
      <ProblemStatSection />
      <ServicesSection />
      <WhyHypeSection />
      <FitForSection />
      <MerchantCtaSection />
    </>
  );
}
