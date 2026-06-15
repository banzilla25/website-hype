// ─────────────────────────────────────────────────────────────
// dummy-data.ts — Single source of truth untuk konten dinamis
// Portfolio: brand asli, statistik bersifat ilustratif
// Testimonials: masih dummy — ganti dengan data asli sebelum launch
// ─────────────────────────────────────────────────────────────

export const portfolioItems = [
  {
    slug: "kfc-jakarta-selatan",
    category: "Restoran / F&B",
    client: "KFC Indonesia",
    location: "Jakarta Selatan",
    thumbnail: "/images/portfolio/kopi-kenangan-tangerang.jpeg",
    challenge:
      "Meningkatkan kunjungan di jam makan siang weekday dan awareness menu baru di cabang Jakarta Selatan.",
    action:
      "Mengerahkan 12 kreator kuliner Jakarta untuk campaign voucher makan siang eksklusif TikTok GO, dengan konten review menu baru ber-tag lokasi yang dioptimasi untuk FYP.",
    results: [
      { metric: "Views", value: "1,8 Juta+" },
      { metric: "Voucher Terjual", value: "900+" },
      { metric: "Kunjungan Siang", value: "+55%" },
    ],
    highlightStat: "1,8 Juta+ Views",
  },
  {
    slug: "kopi-kenangan-tangerang",
    category: "Kafe",
    client: "Kopi Kenangan",
    location: "Tangerang",
    thumbnail: "/images/portfolio/mie-gacoan-bekasi.jpeg",
    challenge:
      "Pembukaan gerai baru di Tangerang, butuh awareness cepat dan antrian panjang di hari pertama.",
    action:
      "Grand opening campaign dengan 20 kreator lifestyle Tangerang — konten unboxing minuman baru, promo eksklusif, dan giveaway voucher serentak di hari opening.",
    results: [
      { metric: "Views", value: "3,2 Juta+" },
      { metric: "Voucher Terjual", value: "2.500+" },
      { metric: "Pengunjung W1", value: "1.500+" },
    ],
    highlightStat: "3,2 Juta+ Views",
  },
  {
    slug: "mie-gacoan-bekasi",
    category: "Restoran / F&B",
    client: "Mie Gacoan",
    location: "Bekasi",
    thumbnail: "/images/portfolio/kfc-jakarta-selatan.jpeg",
    challenge:
      "Meningkatkan traffic gerai di Bekasi dan mengenalkan level pedas baru kepada generasi muda.",
    action:
      "Campaign 'Pedas Challenge' dengan 25 kreator Gen-Z Bekasi — konten tantangan level pedas yang dirancang untuk viral di FYP dengan format duet dan stitch.",
    results: [
      { metric: "Views Campaign", value: "5 Juta+" },
      { metric: "Voucher Terjual", value: "3.200+" },
      { metric: "FYP Trending", value: "3 Hari" },
    ],
    highlightStat: "5 Juta+ Views",
  },
] as const;

// DUMMY DATA — Ganti dengan testimoni asli sebelum launch
export const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Owner, Warung Makan Ibu Sri",
    location: "Jakarta Selatan",
    quote:
      "Sejak kerjasama dengan HYPE, restoran kami ramai bahkan di hari Selasa pagi. Voucher habis terjual dalam 3 hari pertama. Luar biasa!",
    avatar: "/images/testimonials/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Rina Dewi",
    role: "Kreator TikTok, 12K Followers",
    location: "Bandung",
    quote:
      "Awalnya ragu karena follower saya masih sedikit. Ternyata HYPE benar-benar bantu dari awal — dapat campaign, pelatihan, dan komisi tiap bulan. Gratis lagi!",
    avatar: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Manager, Kafe Kopi Nusantara",
    location: "Tangerang",
    quote:
      "Tim HYPE profesional banget — dari strategi konten sampai laporan penjualan, semua transparan. Omzet naik 40% dalam sebulan pertama.",
    avatar: "/images/testimonials/testimonial-3.jpg",
  },
] as const;

// Brand yang sudah pernah bekerjasama dengan HYPE Media Indonesia
// logo: path ke file di /public/images/partners/ — isi saat logo tersedia
export const partnerBrands = [
  { name: "KFC",           logo: "/images/partners/kfc.webp" },
  { name: "Momoyo",        logo: "/images/partners/momoyo.webp" },
  { name: "D'Crepes",      logo: "/images/partners/d-crepes.webp" },
  { name: "Tianlala",      logo: "/images/partners/tianlala.webp" },
  { name: "Roti Gembul",   logo: "/images/partners/roti-gembul.webp" },
  { name: "Kopi Kenangan", logo: "/images/partners/kopi-kenangan.webp" },
  { name: "Emados",        logo: "/images/partners/emados.webp" },
  { name: "Hokben",        logo: "/images/partners/hokben.webp" },
  { name: "Chattime",      logo: "/images/partners/chattime.webp" },
  { name: "Es Teler 77",   logo: "/images/partners/es-teler-77.webp" },
  { name: "Mixue",         logo: "/images/partners/mixue.webp" },
  { name: "Ai-Cha",        logo: "/images/partners/ai-cha.webp" },
  { name: "Mie Gacoan",    logo: "/images/partners/mie-gacoan.webp" },
  { name: "Geprekin Aja",  logo: "/images/partners/geprekin-aja.webp" },
  { name: "Jchicken",      logo: "/images/partners/jchicken.webp" },
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
