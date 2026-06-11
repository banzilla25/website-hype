// ─────────────────────────────────────────────────────────────
// dummy-data.ts — Placeholder content for launch
// DUMMY DATA — Replace with real data before/after launch.
// Search for "DUMMY DATA" across the codebase to find all stubs.
// ─────────────────────────────────────────────────────────────

// DUMMY DATA — Replace with real case studies
export const portfolioItems = [
  {
    slug: "restoran-jakarta-selatan",
    category: "Restoran / F&B",
    client: "Restoran Keluarga Jakarta Selatan",
    location: "Jakarta Selatan",
    thumbnail: "/images/dummy/portfolio-1.jpg",
    challenge:
      "Ramai di akhir pekan, tapi sepi di hari kerja. Belum punya kehadiran di TikTok sama sekali.",
    action:
      "Mengerahkan 15 kreator kuliner lokal untuk campaign voucher makan siang, dengan konten ber-tag lokasi yang dioptimasi untuk FYP.",
    results: [
      { metric: "Views", value: "2,4 Juta+" },
      { metric: "Voucher Terjual", value: "1.200+" },
      { metric: "Kunjungan Hari Kerja", value: "+65%" },
    ],
    highlightStat: "2,4 Juta+ Views",
  },
  {
    slug: "hotel-butik-bandung",
    category: "Hotel / Staycation",
    client: "Hotel Butik Bandung",
    location: "Bandung",
    thumbnail: "/images/dummy/portfolio-2.jpg",
    challenge:
      "Okupansi rendah di luar musim liburan; kalah pamor dari hotel besar.",
    action:
      "Campaign staycation review dengan kreator travel & lifestyle, menonjolkan keunikan lokasi lewat storytelling autentik.",
    results: [
      { metric: "Booking Weekday", value: "+80%" },
      { metric: "Followers TikTok", value: "5.000+" },
      { metric: "Reach Organik", value: "1,8 Juta+" },
    ],
    highlightStat: "+80% Booking Weekday",
  },
  {
    slug: "kafe-baru-tangerang",
    category: "Kafe",
    client: "Kafe Baru Tangerang",
    location: "Tangerang",
    thumbnail: "/images/dummy/portfolio-3.jpg",
    challenge:
      "Baru buka, belum dikenal, butuh ramai cepat tanpa budget iklan besar.",
    action:
      "Campaign grand opening dengan puluhan kreator KOC, voucher promo pembukaan, dan konten serentak ber-tag lokasi.",
    results: [
      { metric: "Voucher Terjual", value: "3.000+" },
      { metric: "Views Campaign", value: "5 Juta+" },
      { metric: "Antrean Minggu 1", value: "Viral Lokal" },
    ],
    highlightStat: "3.000+ Voucher Terjual",
  },
] as const;

// DUMMY DATA — Replace with real testimonials
export const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner, Warung Makan Ibu Sri",
    location: "Jakarta Selatan",
    quote:
      "Sejak kerjasama dengan HYPE, restoran kami ramai bahkan di hari Selasa pagi. Voucher habis terjual dalam 3 hari pertama. Luar biasa!",
    avatar: "/images/dummy/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Rina Dewi",
    role: "Kreator TikTok, 12K Followers",
    location: "Bandung",
    quote:
      "Awalnya ragu karena follower saya masih sedikit. Ternyata HYPE benar-benar bantu dari awal — dapat campaign, pelatihan, dan komisi tiap bulan. Gratis lagi!",
    avatar: "/images/dummy/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Manager, Kafe Kopi Nusantara",
    location: "Tangerang",
    quote:
      "Tim HYPE profesional banget — dari strategi konten sampai laporan penjualan, semua transparan. Omzet naik 40% dalam sebulan pertama.",
    avatar: "/images/dummy/testimonial-3.jpg",
  },
] as const;

// DUMMY DATA — Replace with real partner logos
export const partnerLogos = [
  { name: "KFC Indonesia", logo: "/images/dummy/partner-kfc.png" },
  { name: "Brand Partner 2", logo: "/images/dummy/partner-2.png" },
  { name: "Brand Partner 3", logo: "/images/dummy/partner-3.png" },
  { name: "Brand Partner 4", logo: "/images/dummy/partner-4.png" },
  { name: "Brand Partner 5", logo: "/images/dummy/partner-5.png" },
  { name: "Brand Partner 6", logo: "/images/dummy/partner-6.png" },
] as const;

// City display names for /tiktok-go/[kota]
export const kotaData: Record<
  string,
  { name: string; examplePlaces: string[] }
> = {
  jakarta: {
    name: "Jakarta",
    examplePlaces: ["Resto di Jakarta Pusat", "Kafe Jaksel", "Hotel Menteng"],
  },
  bogor: {
    name: "Bogor",
    examplePlaces: ["Warung Puncak", "Kafe Bogor Kota", "Hotel Bogor"],
  },
  depok: {
    name: "Depok",
    examplePlaces: ["Resto Margonda", "Kafe Beji", "Kuliner Depok"],
  },
  tangerang: {
    name: "Tangerang",
    examplePlaces: ["Kafe BSD", "Resto Alam Sutera", "Hotel Serpong"],
  },
  bekasi: {
    name: "Bekasi",
    examplePlaces: ["Kafe Summarecon", "Resto Grand Bekasi", "Hotel Bekasi"],
  },
  bandung: {
    name: "Bandung",
    examplePlaces: ["Kafe Dago", "Resto Lembang", "Hotel Bukit Bintang"],
  },
  yogyakarta: {
    name: "Yogyakarta",
    examplePlaces: ["Warung Malioboro", "Kafe Prawirotaman", "Hotel Jogja"],
  },
};
