// ─────────────────────────────────────────────────────────────
// site-config.ts — Single source of truth for all company data
// Edit values here; changes propagate across the entire website.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "HYPE Media Indonesia",
  legalName: "PT HYPE MEDIA INDONESIA",
  tagline: "Agensi TikTok GO untuk bisnis & kreator lokal Indonesia.",
  description:
    "HYPE Media Indonesia — agensi TikTok GO yang menghubungkan kreator lokal dengan bisnis kuliner, hotel, dan lifestyle di seluruh Indonesia.",
  url: "https://hypemediaindonesia.com",

  contact: {
    whatsapp: "6285774112604",
    whatsappLink: "https://wa.me/6285774112604",
    whatsappDisplay: "085774112604",
    email: "hypeprojectt@gmail.com",
    instagram: "@hypemediaindonesia",
    instagramLink: "https://instagram.com/hypemediaindonesia",
    tiktok: "hypemedia.id",
    tiktokLink: "https://tiktok.com/@hypemedia.id",
  },

  location: {
    city: "Tangerang",
    province: "Banten",
    display: "Tangerang, Banten",
    // TODO: Add full address when available for Google Maps embed
    fullAddress: "",
  },

  stats: [
    { value: "10.000+", label: "Kreator Aktif" },
    { value: "150+", label: "Merchant Partner" },
    { value: "50+", label: "Kota Terjangkau" },
    { value: "50 Juta", label: "Views Campaign / Bulan" },
  ],

  nav: [
    { label: "Beranda", href: "/" },
    { label: "Untuk Kreator", href: "/untuk-kreator" },
    { label: "Untuk Merchant", href: "/untuk-merchant" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
  ],

  // City slugs for /tiktok-go/[kota] static generation
  kotaList: [
    "jakarta",
    "bogor",
    "depok",
    "tangerang",
    "bekasi",
    "bandung",
    "yogyakarta",
  ],

  social: {
    instagram: "https://instagram.com/hypemediaindonesia",
    tiktok: "https://tiktok.com/@hypemedia.id",
  },
} as const;

export type SiteConfig = typeof siteConfig;
