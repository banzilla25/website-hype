# Panduan File Media — HYPE Media Indonesia Website

Dokumen ini mencatat **semua file media** yang perlu disiapkan sebelum launch.
Urutannya dari prioritas tertinggi ke terendah.

---

## Folder Structure

```
public/
├── og-image.jpg              ← Social sharing (OG / Twitter Card)
├── favicon.ico               ← Tab browser
├── favicon.svg               ← Tab browser (modern, opsional tapi diutamakan)
├── apple-touch-icon.png      ← Shortcut di iOS home screen
└── images/
    ├── logo/
    │   ├── hype-logo-light.svg   ← Header (bg hitam) — teks/ikon putih+kuning
    │   ├── hype-logo-dark.svg    ← Footer (bg kuning) — teks/ikon hitam
    │   └── hype-logo.png         ← Fallback PNG jika SVG tidak bisa
    ├── hero/
    │   ├── beranda.webp          ← Hero Beranda — kreator sedang ngevlog
    │   ├── merchant.webp         ← Hero Merchant — suasana restoran/kafe
    │   ├── kreator.webp          ← Hero Kreator — model/kreator no-background
    │   └── tentang-kami.webp     ← Hero Tentang Kami — foto tim/founder
    ├── partners/
    │   ├── kfc.webp
    │   ├── momoyo.webp
    │   ├── dcrepes.webp
    │   ├── tianlala.webp
    │   ├── roti-gembul.webp
    │   ├── kopi-kenangan.webp
    │   ├── emados.webp
    │   ├── hokben.webp
    │   ├── chattime.webp
    │   ├── es-teler-77.webp
    │   ├── mixue.webp
    │   ├── ai-cha.webp
    │   ├── mie-gacoan.webp
    │   ├── geprekin-aja.webp
    │   └── jchicken.webp
    ├── portfolio/
    │   ├── kfc-jakarta-selatan.jpg
    │   ├── kopi-kenangan-tangerang.jpg
    │   └── mie-gacoan-bekasi.jpg
    ├── testimonials/
    │   ├── testimonial-1.jpg     ← Budi Santoso (merchant)
    │   ├── testimonial-2.jpg     ← Rina Dewi (kreator)
    │   └── testimonial-3.jpg     ← Hendra Wijaya (merchant)
    └── team/                     ← Opsional, untuk halaman Tentang Kami nanti
```

---

## 1. OG Image — PRIORITAS 1

| | |
|---|---|
| **Path** | `/public/og-image.jpg` |
| **Dipakai di** | `src/app/layout.tsx` → OpenGraph + Twitter Card |
| **Ukuran** | **1200 × 630 px** (rasio 1.91:1) |
| **Format** | JPG |
| **Max file size** | 500 KB |
| **Warna background** | Hitam (`#0A0A0A`) atau kuning (`#FFC107`) |
| **Konten** | Logo HYPE + tagline + "Agensi TikTok GO Indonesia" |

> Ini tampil saat link website dibagikan di WhatsApp, Twitter, Facebook, Telegram.
> Paling penting dibuat dulu karena langsung terlihat publik.

---

## 2. Favicon — PRIORITAS 1

| File | Ukuran | Format | Keterangan |
|---|---|---|---|
| `favicon.ico` | 16×16, 32×32, 48×48 | ICO (multi-size) | Tab browser, bookmark |
| `favicon.svg` | Scalable | SVG | Browser modern, lebih tajam |
| `apple-touch-icon.png` | **180 × 180 px** | PNG, tanpa transparansi | iOS home screen shortcut |

**Path**: Semua langsung di `/public/`

> Untuk favicon, cukup gunakan logo "H" atau simbol HYPE saja — bukan logo penuh.
> Background padat (hitam atau kuning), bukan transparan untuk ICO.
>
> Cara mudah: buat satu file SVG 512×512, lalu generate ke ICO via [realfavicongenerator.net](https://realfavicongenerator.net)

---

## 3. Logo Perusahaan — PRIORITAS 1

### `hype-logo-light.svg` — untuk Header (background hitam)
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo-light.svg` |
| **Dipakai di** | `src/components/layout/Header.tsx` |
| **Warna logo** | Putih / kuning (`#FFC107`) — cocok di background hitam |
| **Ukuran canvas** | Bebas, rasio landscape (contoh: 120×40 px) |
| **Tinggi render** | `h-8` desktop, `h-10` large screen (32–40px) |
| **Format** | SVG (utama) |
| **Max file size** | 20 KB |

### `hype-logo-dark.svg` — untuk Footer (background kuning)
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo-dark.svg` |
| **Dipakai di** | `src/components/layout/Footer.tsx` |
| **Warna logo** | Hitam (`#0A0A0A`) — cocok di background kuning |
| **Ukuran canvas** | Sama dengan light version |
| **Tinggi render** | `h-8` (32px) |
| **Format** | SVG (utama) |

### `hype-logo.png` — fallback
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo.png` |
| **Ukuran minimum** | **400 × 133 px** (rasio 3:1) |
| **Format** | PNG, **background transparan** |
| **Max file size** | 50 KB |

> **Cara aktivasi setelah file logo tersedia:**
> - Buka `src/components/layout/Header.tsx` → cari blok komentar `/* Uncomment saat logo siap */`
> - Uncomment baris `<Image src="/images/logo/hype-logo-light.svg" ... />`
> - Hapus dua `<span>` di bawah komentar tersebut
> - Lakukan hal yang sama di `src/components/layout/Footer.tsx` untuk `hype-logo-dark.svg`

---

## 4. Hero Images — PRIORITAS 1

Dipakai di setiap halaman utama, posisi kanan hero section.

### `beranda.webp` — Hero Beranda
| | |
|---|---|
| **Path** | `/public/images/hero/beranda.webp` |
| **Dipakai di** | `src/components/sections/home/HeroSection.tsx` |
| **Konten** | Kreator TikTok sedang ngevlog/membuat konten — ekspresi natural, pencahayaan bagus |
| **Rasio container** | `4:5` (portrait) |
| **Latar** | **Bisa no-background (PNG/WebP transparan)** — container tidak di-crop |
| **Format** | WebP (transparan) atau PNG |
| **Ukuran minimum** | 600 × 750 px |
| **Max file size** | 300 KB |
| **CSS render** | `object-contain object-bottom` (untuk no-bg), `object-cover` (untuk dengan-bg) |

### `merchant.webp` — Hero Merchant
| | |
|---|---|
| **Path** | `/public/images/hero/merchant.webp` |
| **Dipakai di** | `src/components/sections/merchant/MerchantHeroSection.tsx` |
| **Konten** | Suasana restoran/kafe yang ramai dan menarik |
| **Rasio container** | `4:3` (landscape-portrait) |
| **Latar** | Foto dengan background (opaque) |
| **Format** | WebP atau JPG |
| **Ukuran minimum** | 800 × 600 px |
| **Max file size** | 300 KB |
| **CSS render** | `object-cover` |

### `kreator.webp` — Hero Kreator
| | |
|---|---|
| **Path** | `/public/images/hero/kreator.webp` |
| **Dipakai di** | `src/components/sections/kreator/KreatorHeroSection.tsx` |
| **Konten** | Model/orang sedang pegang HP atau tampil stylish — cocok untuk no-background |
| **Rasio container** | `3:4` (portrait tinggi) |
| **Latar** | **Bisa no-background (PNG/WebP transparan)** — container tidak di-crop |
| **Format** | WebP (transparan) atau PNG |
| **Ukuran minimum** | 600 × 800 px |
| **Max file size** | 300 KB |
| **CSS render** | `object-contain object-bottom` (untuk no-bg), `object-cover` (untuk dengan-bg) |

### `tentang-kami.webp` — Hero Tentang Kami
| | |
|---|---|
| **Path** | `/public/images/hero/tentang-kami.webp` |
| **Dipakai di** | `src/components/sections/tentang/TentangHeroSection.tsx` |
| **Konten** | Foto tim HYPE bersama atau foto founder — ekspresi profesional |
| **Rasio container** | `3:4` (portrait) |
| **Latar** | Foto dengan background (opaque) |
| **Format** | WebP atau JPG |
| **Ukuran minimum** | 600 × 800 px |
| **Max file size** | 300 KB |
| **CSS render** | `object-cover object-top` |

---

## 5. Partner Brand Logos — PRIORITAS 2

Dipakai di `PartnerLogoSection` (homepage) sebagai grid logo mitra.
**Saat ini ditampilkan sebagai teks.** Uncomment blok `<Image>` di komponen setelah semua file tersedia.

**Cara aktivasi:** Buka `src/components/sections/home/PartnerLogoSection.tsx`
→ Uncomment blok `<Image src={brand.logo} ... className="h-7 w-auto object-contain brightness-0 invert" />`
→ Hapus `<span>{brand.name}</span>` di bawahnya

**Spesifikasi semua logo brand:**
| | |
|---|---|
| **Format** | WebP (utama) atau PNG — **background transparan** |
| **Tinggi render** | `h-7` = 28px (komponen akan scale width otomatis) |
| **Ukuran minimum** | Tinggi 80px, lebar proporsional |
| **Max file size** | 30 KB per logo |
| **Warna** | Terima logo warna asli — akan di-filter `brightness-0 invert` jadi putih otomatis |

| Brand | Path | Status |
|---|---|---|
| KFC | `/public/images/partners/kfc.webp` | ❌ Belum ada |
| Momoyo | `/public/images/partners/momoyo.webp` | ❌ Belum ada |
| D'Crepes | `/public/images/partners/dcrepes.webp` | ❌ Belum ada |
| Tianlala | `/public/images/partners/tianlala.webp` | ❌ Belum ada |
| Roti Gembul | `/public/images/partners/roti-gembul.webp` | ❌ Belum ada |
| Kopi Kenangan | `/public/images/partners/kopi-kenangan.webp` | ❌ Belum ada |
| Emados | `/public/images/partners/emados.webp` | ❌ Belum ada |
| Hokben | `/public/images/partners/hokben.webp` | ❌ Belum ada |
| Chattime | `/public/images/partners/chattime.webp` | ❌ Belum ada |
| Es Teler 77 | `/public/images/partners/es-teler-77.webp` | ❌ Belum ada |
| Mixue | `/public/images/partners/mixue.webp` | ❌ Belum ada |
| Ai-Cha | `/public/images/partners/ai-cha.webp` | ❌ Belum ada |
| Mie Gacoan | `/public/images/partners/mie-gacoan.webp` | ❌ Belum ada |
| Geprekin Aja | `/public/images/partners/geprekin-aja.webp` | ❌ Belum ada |
| Jchicken | `/public/images/partners/jchicken.webp` | ❌ Belum ada |

> Logo tidak harus WebP — PNG juga oke asal background transparan.
> Jika ada logo JPG (tidak bisa transparan), konversi ke WebP/PNG dulu.

---

## 6. Portfolio Thumbnails — PRIORITAS 2

Dipakai di halaman `/portofolio` dan preview di homepage.

| File | Path | Client |
|---|---|---|
| `kfc-jakarta-selatan.jpg` | `/public/images/portfolio/kfc-jakarta-selatan.jpg` | KFC Indonesia |
| `kopi-kenangan-tangerang.jpg` | `/public/images/portfolio/kopi-kenangan-tangerang.jpg` | Kopi Kenangan |
| `mie-gacoan-bekasi.jpg` | `/public/images/portfolio/mie-gacoan-bekasi.jpg` | Mie Gacoan |

**Spesifikasi semua portfolio thumbnail:**
| | |
|---|---|
| **Rasio** | **16:9** |
| **Ukuran minimum** | 800 × 450 px |
| **Ukuran rekomendasi** | **1200 × 675 px** |
| **Format** | JPG atau WebP |
| **Max file size** | 200 KB per gambar |
| **Konten** | Foto tempat/produk/suasana bisnis yang dikerjakan |

> Path sudah terdaftar di `src/lib/dummy-data.ts` di field `thumbnail`.
> Setelah file tersedia, update komponen kartu portofolio untuk render `<Image>` menggantikan placeholder div.

---

## 7. Testimonial Avatars — PRIORITAS 3

Dipakai di `TestimonialsSection` di homepage. Saat ini menampilkan inisial nama sebagai placeholder.

| File | Path | Nama |
|---|---|---|
| `testimonial-1.jpg` | `/public/images/testimonials/testimonial-1.jpg` | Budi Santoso |
| `testimonial-2.jpg` | `/public/images/testimonials/testimonial-2.jpg` | Rina Dewi |
| `testimonial-3.jpg` | `/public/images/testimonials/testimonial-3.jpg` | Hendra Wijaya |

**Spesifikasi:**
| | |
|---|---|
| **Rasio** | **1:1 (persegi)** |
| **Ukuran minimum** | 100 × 100 px |
| **Ukuran rekomendasi** | 200 × 200 px |
| **Format** | JPG atau WebP |
| **Max file size** | 30 KB per foto |
| **Konten** | Foto wajah orang (close-up), hindari background ramai |

---

## 8. Team Photos — PRIORITAS 4 (opsional)

Untuk halaman `Tentang Kami` jika ingin tambah seksi tim di masa depan.

| | |
|---|---|
| **Path folder** | `/public/images/team/` |
| **Format nama** | `nama-lengkap.jpg` (contoh: `hibban-fariz.jpg`) |
| **Rasio** | **1:1** atau **3:4** (portrait) |
| **Ukuran minimum** | 400 × 400 px |
| **Format** | JPG |
| **Max file size** | 100 KB per foto |

---

## Ringkasan Checklist

| File | Status | Prioritas |
|---|---|---|
| `/public/og-image.jpg` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/favicon.ico` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/favicon.svg` | ❌ Belum ada | 🟡 Disarankan |
| `/public/apple-touch-icon.png` | ❌ Belum ada | 🟡 Disarankan |
| `/public/images/logo/hype-logo-light.svg` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/logo/hype-logo-dark.svg` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/logo/hype-logo.png` | ❌ Belum ada | 🟡 Fallback |
| `/public/images/hero/beranda.webp` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/hero/merchant.webp` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/hero/kreator.webp` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/hero/tentang-kami.webp` | ❌ Belum ada | 🔴 Wajib sebelum launch |
| `/public/images/partners/kfc.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/momoyo.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/dcrepes.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/tianlala.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/roti-gembul.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/kopi-kenangan.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/emados.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/hokben.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/chattime.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/es-teler-77.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/mixue.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/ai-cha.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/mie-gacoan.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/geprekin-aja.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/partners/jchicken.webp` | ❌ Belum ada | 🟠 Setelah logo tersedia |
| `/public/images/portfolio/kfc-jakarta-selatan.jpg` | ❌ Belum ada | 🟠 Setelah foto tersedia |
| `/public/images/portfolio/kopi-kenangan-tangerang.jpg` | ❌ Belum ada | 🟠 Setelah foto tersedia |
| `/public/images/portfolio/mie-gacoan-bekasi.jpg` | ❌ Belum ada | 🟠 Setelah foto tersedia |
| `/public/images/testimonials/testimonial-1.jpg` | ❌ Belum ada | ⚪ Setelah data asli siap |
| `/public/images/testimonials/testimonial-2.jpg` | ❌ Belum ada | ⚪ Setelah data asli siap |
| `/public/images/testimonials/testimonial-3.jpg` | ❌ Belum ada | ⚪ Setelah data asli siap |
| `/public/images/team/` | ❌ Belum ada | ⚪ Opsional |

---

## Catatan Teknis

- Semua gambar di `public/` diakses langsung via URL root — `/public/og-image.jpg` di disk = `/og-image.jpg` di browser.
- Gunakan **Next.js `<Image>`** (dari `next/image`) untuk semua gambar di komponen, bukan `<img>` biasa.
- Untuk SVG logo, bisa langsung pakai `<Image>` dengan `width` dan `height` — SVG sudah kecil dan tidak perlu optimasi khusus.
- WebP sangat direkomendasikan untuk foto (portfolio, hero, testimonial) — ukurannya 30–40% lebih kecil dari JPG dengan kualitas yang sama.
- Logo brand yang diupload dalam format berwarna akan otomatis jadi putih via `brightness-0 invert` CSS filter — tidak perlu export versi putih terpisah.
- Untuk hero no-background (beranda & kreator): gunakan WebP atau PNG dengan channel alpha (transparansi). Jangan JPG karena JPG tidak support transparansi.
