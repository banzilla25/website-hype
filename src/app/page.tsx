import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import ProblemSolutionSection from "@/components/sections/home/ProblemSolutionSection";
import TwoPathsSection from "@/components/sections/home/TwoPathsSection";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import PartnerLogoSection from "@/components/sections/home/PartnerLogoSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CtaSection from "@/components/sections/home/CtaSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Agensi TikTok GO Indonesia`,
  description:
    "HYPE Media Indonesia — agensi TikTok GO terpercaya. Ubah views jadi pengunjung nyata untuk bisnis kuliner, hotel, dan lifestyle di seluruh Indonesia.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function BerandaPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <TwoPathsSection />
      <PortfolioPreview />
      <PartnerLogoSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
