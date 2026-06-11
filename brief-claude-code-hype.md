# Project Brief untuk Claude Code — Website HYPE Media Indonesia

> Serahkan dokumen ini ke Claude Code di awal project. Ini berisi semua konteks: stack, struktur, desain, dan konten. Dua dokumen pendamping ("Konten Final Website" dan "Blueprint Website") sebaiknya juga disertakan untuk detail copywriting & layout.

---

## 1. RINGKASAN PROJECT

Bangun **company profile website** untuk HYPE Media Indonesia — agensi TikTok GO yang menghubungkan kreator lokal dengan bisnis F&B, hotel, dan lifestyle di Indonesia.

**3 tujuan website:**
1. Menarik leads **kreator** untuk bergabung.
2. Menarik leads **merchant/brand** untuk kerjasama.
3. Menyampaikan profil & kredibilitas perusahaan.

**Prioritas teknis:** SEO Google yang kuat, kecepatan tinggi, responsif (mobile-first). Mayoritas pengunjung dari HP (datang dari TikTok/Instagram).

---

## 2. TECH STACK

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Komponen UI:** shadcn/ui
- **Animasi:** Framer Motion (halus, tidak berlebihan)
- **Ikon:** lucide-react
- **Font:** next/font (Google Fonts)
- **Backend:** TIDAK ADA untuk v1. Situs statis. Kontak via WhatsApp link, bukan form database.
- **Deploy:** belum ditentukan (kemungkinan Vercel). Bangun agar mudah deploy statis.

**Alasan stack ini:** SSR/SSG Next.js = HTML siap dibaca Google (SEO maksimal). Static generation = halaman per-kota otomatis & super cepat. Tanpa backend = sederhana, aman, mudah maintain.

---

## 3. PRINSIP YANG WAJIB DIIKUTI

1. **Mobile-first.** Desain & uji dari tampilan HP dulu, baru desktop.
2. **SEO maksimal:**
   - Gunakan Metadata API Next.js di setiap halaman (title, description unik per halaman).
   - Semantic HTML (h1 sekali per halaman, heading berurutan, alt text di semua gambar).
   - Generate sitemap.xml & robots.txt.
   - URL bahasa Indonesia yang dicari orang: `/untuk-kreator`, `/untuk-merchant`, `/tiktok-go`.
   - Open Graph tags untuk preview saat di-share di sosmed.
3. **Performa:** optimasi gambar dengan next/image, lazy load, minimal JS yang tidak perlu.
4. **Aksesibilitas:** kontras warna cukup, navigasi keyboard, aria-label di tombol ikon.
5. **Kode rapi:** komponen reusable, struktur folder jelas, mudah diedit non-developer.

---

## 4. DESIGN SYSTEM

### Warna (definisikan di tailwind.config & globals.css)
| Peran | Hex |
|---|---|
| Background utama | `#0A0A0A` (hitam pekat) |
| Background alt (card/section) | `#141414` |
| Aksen utama (kuning terang) | `#FFE600` |
| Aksen hover | `#E6C200` |
| Teks utama | `#FFFFFF` |
| Teks sekunder | `#A0A0A0` |
| Teks di atas kuning | `#0A0A0A` |
| Border | `#2A2A2A` |

**Aturan warna:** hanya hitam + kuning + netral. Tidak ada warna lain. **Kuning dipakai HEMAT** — hanya untuk tombol, angka statistik penting, highlight kata kunci di headline, dan 1 blok CTA per halaman. Jangan tebar kuning berlebihan.

### Tipografi
- Headline: font tebal & berani, sebagian italic (gaya energik). Saran: **Anton** atau **Archivo Black** untuk display, atau Inter dengan weight 800-900.
- Body: **Inter** atau **Plus Jakarta Sans**.
- Kontras ukuran tinggi antara headline (sangat besar) dan body.

### Komponen
- Tombol primer: solid kuning, teks hitam tebal, rounded, hover effect.
- Tombol sekunder: outline, background transparan.
- Card: background `#141414`, rounded besar (rounded-2xl/3xl), border tipis `#2A2A2A`.
- Statistik: angka sangat besar warna kuning + label kecil abu.
- Badge/pill: label kecil, gaya seperti tombol kapsul.
- Floating WhatsApp button: pojok kanan bawah, muncul semua halaman.

---

## 5. STRUKTUR HALAMAN (ROUTES)

```
/                       Beranda
/untuk-kreator          Jalur rekrut kreator
/untuk-merchant         Jalur akuisisi merchant
/portofolio             Etalase studi kasus
/portofolio/[slug]      Detail per studi kasus
/tiktok-go              Edukasi "Apa itu TikTok GO"
/tiktok-go/[kota]       SEO lokal per kota (template dinamis)
/tentang-kami           Profil, visi, misi
/kontak                 Kontak
/privacy-policy         (konten standar, bisa placeholder dulu)
/syarat-ketentuan       (konten standar, bisa placeholder dulu)
```

### Halaman per-kota (penting untuk SEO lokal)
Buat sebagai **dynamic route dengan generateStaticParams**. Satu template, di-generate untuk daftar kota berikut:
`jakarta`, `bogor`, `depok`, `tangerang`, `bekasi`, `bandung`, `yogyakarta`

Tiap halaman: ganti nama kota di title, H1, meta description, dan contoh tempat lokal. Target keyword seperti "TikTok GO [Kota]", "agensi TikTok GO [Kota]".

---

## 6. KOMPONEN GLOBAL

### Header (sticky, semua halaman)
- Logo HYPE (kiri) · menu (Beranda, Untuk Kreator, Untuk Merchant, Portofolio, Tentang, Kontak) · tombol kuning "Hubungi Kami" (kanan).
- Mobile: hamburger menu. Tombol "Hubungi Kami" tetap menonjol.
- Background hitam dengan blur transparan saat scroll.

### Footer (semua halaman) — background KUNING
- Kolom: (1) Logo + tagline + alamat, (2) Navigasi, (3) Kontak, (4) Lokasi.
- Baris bawah: link Privacy Policy · Syarat & Ketentuan · © 2025 PT HYPE MEDIA INDONESIA.
- Teks hitam di atas kuning.

### Floating WhatsApp button
- Muncul di semua halaman, link ke: `https://wa.me/6285774112604`

---

## 7. DATA PERUSAHAAN (untuk dipakai di seluruh situs)

| Item | Nilai |
|---|---|
| Nama | HYPE Media Indonesia |
| Badan hukum | PT HYPE MEDIA INDONESIA |
| Lokasi | Tangerang, Banten |
| WhatsApp | 085774112604 → link `https://wa.me/6285774112604` |
| Email | hypeprojectt@gmail.com |
| Instagram | @hypemediaindonesia |
| TikTok | hypemedia.id |

**Statistik HYPE (tampilkan menonjol):**
- 10.000+ Kreator · 150+ Merchant · 50+ Kota · 50 Juta Views/bulan · up to 8.000 voucher per campaign

🟦 Simpan data ini di satu file konstanta (mis. `lib/site-config.ts`) agar mudah diubah dan dipakai ulang.

---

## 8. RINGKASAN KONTEN PER HALAMAN

> Copywriting LENGKAP ada di dokumen "Konten Final Website HYPE". Di bawah ini ringkasan agar Claude Code paham struktur tiap halaman. Ambil teks final dari dokumen tersebut.

### Beranda
Hero ("Ubah Views Jadi Pengunjung Nyata" + 2 tombol Kreator/Merchant) → 4 statistik HYPE → masalah/solusi → 2 card jalur (Kreator & Merchant) → cuplikan 3 portofolio → logo partner → testimoni → CTA kuning penutup.
**Tanpa angka pasar TikTok di beranda.**

### Untuk Kreator
Hero ("Hobi Kulineran Bisa Jadi Cuan") → 7 benefit (komisi, fee, free meals, dicarikan merchant, pelatihan, management akun, akomodasi — semua *S&K berlaku) → cara kerja 5 langkah → FAQ anti-keraguan (5 Q: follower min 1000, gratis, cara dibayar, pemula bisa, detail komisi) → CTA.
**Tanpa angka pasar.**

### Untuk Merchant
Hero ("Bikin Tempat Usahamu Ramai") → masalah + 1 angka pasar ("75% netizen pakai TikTok untuk discovery") → 4 layanan (Voucher Sales Campaign, Creator Management, Social Media Management, Creative Content Production) → kenapa HYPE (4 poin) → cocok untuk (resto/kafe/hotel/wisata/klinik/lifestyle) → CTA.

### Portofolio
Intro → grid 3 studi kasus → detail per kasus.
🟧 **DUMMY** — 3 kasus (Resto Jaksel, Hotel Bandung, Kafe Tangerang). Tandai jelas di kode (mis. komentar `// DUMMY DATA — ganti dengan data asli`) agar mudah dicari.

### TikTok GO (edukasi)
Hero "Apa itu TikTok GO" → penjelasan → **angka pasar lengkap di sini** (160jt user, GMV Rp100T, 75% discovery — RUMAH UTAMA angka pasar) → kenapa pakai agensi → CTA.
🟦 Angka pasar perlu diverifikasi ulang ke sumber terkini sebelum publish — tandai dengan komentar.

### Tentang Kami
Cerita (2 paragraf) → visi & misi (versi lokal Indonesia, dipertajam) → statistik HYPE → lokasi & legalitas (PT HYPE MEDIA INDONESIA, Tangerang — siapkan slot untuk Google Maps embed nanti) → CTA.

### Kontak
Daftar kontak (WA, email, IG, TikTok, lokasi) + tombol besar "Chat via WhatsApp". Tanpa form database untuk v1.

---

## 9. DATA YANG MASIH DUMMY / PLACEHOLDER

Tandai semua ini jelas di kode agar mudah diganti klien:
- 🟧 Logo & nama brand/merchant partner → placeholder
- 🟧 3 studi kasus portofolio → dummy
- 🟧 Testimoni → dummy
- 🟧 Foto tim & dokumentasi → placeholder image
- 🟦 Alamat lengkap untuk Google Maps → menyusul (siapkan slot)
- 🟦 Angka pasar TikTok → verifikasi sebelum publish

Saran: kumpulkan semua dummy data di file terpisah (mis. `lib/dummy-data.ts`) dengan komentar jelas.

---

## 10. URUTAN PENGERJAAN YANG DISARANKAN

1. Setup project (Next.js + TS + Tailwind + shadcn/ui), konfigurasi warna & font.
2. Buat `lib/site-config.ts` (data perusahaan) & komponen global (Header, Footer, WhatsApp button).
3. Bangun Beranda dulu sampai rapi (ini halaman terpenting) — minta review.
4. Lanjut Untuk Kreator & Untuk Merchant (dua halaman konversi).
5. Portofolio + Tentang + Kontak.
6. TikTok GO + template halaman per-kota.
7. SEO finishing: metadata semua halaman, sitemap.xml, robots.txt, Open Graph.
8. Privacy Policy & S&K (placeholder).
9. Audit performa & mobile (Lighthouse).

🟦 Kerjakan bertahap, minta review tiap halaman besar selesai. Jangan bangun semua sekaligus tanpa cek.

---

## 11. CATATAN AKHIR

- Prioritaskan kualitas Beranda, Untuk Kreator, Untuk Merchant — tiga halaman ini yang menghasilkan leads.
- Setiap halaman wajib diakhiri 1 CTA jelas (ke WhatsApp atau halaman terkait).
- Jaga konsistensi: warna hemat, spacing lega, tipografi berani.
- Tujuan akhir: pengunjung dalam 5 detik tahu HYPE itu apa & langsung diarahkan ke jalurnya (kreator atau merchant).
