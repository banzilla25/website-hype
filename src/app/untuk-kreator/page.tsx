import type { Metadata } from "next";
import KreatorHeroSection from "@/components/sections/kreator/KreatorHeroSection";
import BenefitSection from "@/components/sections/kreator/BenefitSection";
import HowItWorksSection from "@/components/sections/kreator/HowItWorksSection";
import FaqSection from "@/components/sections/kreator/FaqSection";
import KreatorCtaSection from "@/components/sections/kreator/KreatorCtaSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Untuk Kreator — Hobi Jadi Cuan bersama HYPE",
  description:
    "Gabung 10.000+ kreator HYPE Media Indonesia. Dapat komisi, fee campaign, free meals & bimbingan. Minimum 1.000 follower, 100% gratis. Daftar sekarang!",
  keywords: [
    "kreator TikTok Indonesia",
    "gabung kreator TikTok GO",
    "komisi TikTok GO",
    "agensi kreator TikTok",
    "HYPE Media kreator",
    "kampanye TikTok kuliner",
  ],
  alternates: { canonical: `${siteConfig.url}/untuk-kreator` },
  openGraph: {
    title: "Untuk Kreator — Hobi Jadi Cuan bersama HYPE",
    description:
      "Gabung 10.000+ kreator HYPE. Dapat komisi, free meals & bimbingan. Minimum 1.000 follower, 100% gratis.",
    url: `${siteConfig.url}/untuk-kreator`,
  },
};

export default function UntukKreatorPage() {
  return (
    <>
      <KreatorHeroSection />
      <BenefitSection />
      <HowItWorksSection />
      <FaqSection />
      <KreatorCtaSection />
    </>
  );
}
