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
    │   ├── hype-logo-light.svg   ← Dipakai di Header (bg gelap)
    │   ├── hype-logo-dark.svg    ← Dipakai di Footer (bg kuning)
    │   └── hype-logo.png         ← Fallback PNG jika SVG tidak bisa
    ├── portfolio/
    │   ├── restoran-jakarta-selatan.jpg
    │   ├── hotel-butik-bandung.jpg
    │   └── kafe-baru-tangerang.jpg
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

## 3. Logo — PRIORITAS 1

### `hype-logo-light.svg` — untuk Header (background hitam)
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo-light.svg` |
| **Dipakai di** | `src/components/layout/Header.tsx` |
| **Warna logo** | Putih / kuning (`#FFC107`) |
| **Ukuran canvas** | Bebas, tapi rasio landscape (contoh: 120×40 px) |
| **Format** | SVG (utama) |
| **Max file size** | 20 KB |

### `hype-logo-dark.svg` — untuk Footer (background kuning)
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo-dark.svg` |
| **Dipakai di** | `src/components/layout/Footer.tsx` |
| **Warna logo** | Hitam (`#0A0A0A`) |
| **Ukuran canvas** | Sama dengan light version |
| **Format** | SVG (utama) |

### `hype-logo.png` — fallback
| | |
|---|---|
| **Path** | `/public/images/logo/hype-logo.png` |
| **Ukuran minimum** | **400 × 133 px** (rasio 3:1) |
| **Format** | PNG, **background transparan** |
| **Max file size** | 50 KB |

> **Setelah file logo ada**, edit 2 baris di code:
> - `src/components/layout/Header.tsx` — ganti teks `HYPE Media Indonesia` dengan `<Image src="/images/logo/hype-logo-light.svg" ...>`
> - `src/components/layout/Footer.tsx` — ganti teks `HYPE` dengan `<Image src="/images/logo/hype-logo-dark.svg" ...>`

---

## 4. Portfolio Thumbnails — PRIORITAS 2

Dipakai di halaman `/portofolio` dan preview di homepage.

| File | Path | Dipakai untuk |
|---|---|---|
| `restoran-jakarta-selatan.jpg` | `/public/images/portfolio/restoran-jakarta-selatan.jpg` | Case study restoran |
| `hotel-butik-bandung.jpg` | `/public/images/portfolio/hotel-butik-bandung.jpg` | Case study hotel |
| `kafe-baru-tangerang.jpg` | `/public/images/portfolio/kafe-baru-tangerang.jpg` | Case study kafe |

**Spesifikasi semua portfolio thumbnail:**
| | |
|---|---|
| **Rasio** | **16:9** |
| **Ukuran minimum** | 800 × 450 px |
| **Ukuran rekomendasi** | **1200 × 675 px** |
| **Format** | JPG (atau WebP untuk performa lebih baik) |
| **Max file size** | **200 KB per gambar** |
| **Konten** | Foto tempat/produk/suasana bisnis yang dikerjakan |

> **Setelah file ada**, update path di `src/lib/dummy-data.ts`:
> ```ts
> thumbnail: "/images/portfolio/restoran-jakarta-selatan.jpg"
> // (saat ini mengarah ke /images/dummy/ yang belum dipakai di komponen)
> ```
> Lalu update komponen kartu portofolio untuk render `<Image>` menggantikan placeholder div.

---

## 5. Testimonial Avatars — PRIORITAS 2

Dipakai di `TestimonialsSection` di homepage.

| File | Path | Nama |
|---|---|---|
| `testimonial-1.jpg` | `/public/images/testimonials/testimonial-1.jpg` | Budi Santoso |
| `testimonial-2.jpg` | `/public/images/testimonials/testimonial-2.jpg` | Rina Dewi |
| `testimonial-3.jpg` | `/public/images/testimonials/testimonial-3.jpg` | Hendra Wijaya |

**Spesifikasi:**
| | |
|---|---|
| **Rasio** | **1:1 (persegi)** |
| **Ukuran minimum** | **100 × 100 px** |
| **Ukuran rekomendasi** | 200 × 200 px (dirender 40px, butuh 2.5× untuk retina) |
| **Format** | JPG atau WebP |
| **Max file size** | 30 KB per foto |
| **Konten** | Foto wajah orang (close-up), hindari background ramai |

> Saat ini komponen menampilkan inisial nama (huruf pertama) sebagai placeholder.
> Setelah foto tersedia, update `src/lib/dummy-data.ts` bagian `testimonials` dengan path yang benar,
> dan ganti div inisial di `TestimonialsSection.tsx` dengan `<Image>`.

---

## 6. Team Photos — PRIORITAS 3 (opsional)

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
| `/public/images/portfolio/restoran-jakarta-selatan.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/portfolio/hotel-butik-bandung.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/portfolio/kafe-baru-tangerang.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/testimonials/testimonial-1.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/testimonials/testimonial-2.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/testimonials/testimonial-3.jpg` | ❌ Belum ada | 🟠 Setelah data asli siap |
| `/public/images/team/` | ❌ Belum ada | ⚪ Opsional |

---

## Catatan Teknis

- Semua gambar di `public/` diakses langsung via URL root — `/public/og-image.jpg` di disk = `/og-image.jpg` di browser.
- Gunakan **Next.js `<Image>`** (dari `next/image`) untuk semua gambar di komponen, bukan `<img>` biasa. Ini otomatis optimasi, lazy load, dan WebP conversion.
- Untuk SVG logo, bisa langsung pakai `<img>` atau inline SVG — tidak perlu `<Image>` karena SVG sudah kecil.
- WebP sangat direkomendasikan untuk foto (portfolio, testimonial) — ukurannya 30-40% lebih kecil dari JPG dengan kualitas yang sama.
