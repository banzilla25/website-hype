import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { kotaData } from "@/lib/dummy-data";
import TikTokGoKotaHeroSection from "@/components/sections/tiktok-go/TikTokGoKotaHeroSection";
import TikTokGoPenjelasanSection from "@/components/sections/tiktok-go/TikTokGoPenjelasanSection";
import TikTokGoAngkaPasarSection from "@/components/sections/tiktok-go/TikTokGoAngkaPasarSection";
import TikTokGoKotaCtaSection from "@/components/sections/tiktok-go/TikTokGoKotaCtaSection";

interface Props {
  params: Promise<{ kota: string }>;
}

export async function generateStaticParams() {
  return siteConfig.kotaList.map((kota) => ({ kota }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kota } = await params;
  const data = kotaData[kota];
  if (!data) return {};
  return {
    title: `TikTok GO ${data.name} — Agensi TikTok GO Terpercaya`,
    description: `HYPE Media Indonesia hadir di ${data.name}. Bantu bisnis F&B, hotel & lifestyle raih pelanggan baru lewat campaign TikTok GO. Konsultasi gratis!`,
    keywords: [
      `TikTok GO ${data.name}`,
      `agensi TikTok GO ${data.name}`,
      `campaign TikTok ${data.name}`,
      `HYPE Media ${data.name}`,
      `marketing TikTok kuliner ${data.name}`,
    ],
    alternates: { canonical: `${siteConfig.url}/tiktok-go/${kota}` },
    openGraph: {
      title: `TikTok GO ${data.name} — HYPE Media Indonesia`,
      description: `Agensi TikTok GO spesialis bisnis lokal di ${data.name}. Konsultasi gratis, full service dari strategi sampai laporan.`,
      url: `${siteConfig.url}/tiktok-go/${kota}`,
    },
  };
}

export default async function TikTokGoKotaPage({ params }: Props) {
  const { kota } = await params;
  const data = kotaData[kota];
  if (!data) notFound();

  return (
    <>
      <TikTokGoKotaHeroSection
        kotaName={data.name}
        examplePlaces={data.examplePlaces}
      />
      <TikTokGoPenjelasanSection />
      <TikTokGoAngkaPasarSection />
      <TikTokGoKotaCtaSection kotaName={data.name} />
    </>
  );
}
