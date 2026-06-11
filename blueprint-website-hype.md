# Blueprint Website — HYPE Media Indonesia

Cetak biru lengkap: sistem desain, sitemap, dan layout tiap halaman (section demi section).
Acuan konten: dokumen "Konten Final Website" yang sudah dibuat.
Acuan visual: hitam + kuning terang energik, layout terinspirasi referensi (disesuaikan dengan struktur hasil riset).

---

## BAGIAN 1 — SISTEM DESAIN (DESIGN SYSTEM)

### Warna

| Peran | Warna | Kode | Pemakaian |
|---|---|---|---|
| Dasar | Hitam pekat | `#0A0A0A` | Background utama seluruh situs |
| Dasar alt | Hitam abu | `#141414` | Background card, section selang-seling |
| Aksen utama | Kuning terang | `#FFE600` / `#FFD400` | Tombol, highlight, angka besar, judul aksen |
| Aksen hover | Kuning tua | `#E6C200` | State hover tombol |
| Teks utama | Putih | `#FFFFFF` | Body text di atas hitam |
| Teks sekunder | Abu terang | `#A0A0A0` | Sub-teks, caption |
| Teks di atas kuning | Hitam | `#0A0A0A` | Teks di dalam tombol/blok kuning |
| Garis/border | Abu gelap | `#2A2A2A` | Pembatas card, divider |

🟦 [CATATAN: hanya 2 warna utama (hitam + kuning) + netral (putih/abu). Tidak ada warna lain agar tidak "nabrak". Kuning dipakai HEMAT — hanya untuk hal yang ingin ditonjolkan, supaya tetap mencolok.]

### Tipografi
- **Judul (Headline):** font sans-serif tebal, berani, sebagian italic (meneruskan gaya deck Anda). Contoh: Anton, Archivo Black, atau Inter Black.
- **Body:** sans-serif bersih dan mudah dibaca. Contoh: Inter, Plus Jakarta Sans (lokal-friendly).
- **Hierarki:** Headline sangat besar & berani → sub-headline sedang → body normal. Kontras ukuran tinggi = kesan energik.

### Komponen kunci
- **Tombol primer:** blok kuning, teks hitam tebal, sudut membulat. Ada efek hover (sedikit membesar / warna menua).
- **Tombol sekunder:** outline kuning/putih, background transparan.
- **Card:** background hitam-abu, sudut membulat besar (seperti deck), border tipis.
- **Angka statistik:** ukuran sangat besar, warna kuning, dengan label kecil di bawahnya.
- **Badge/pill:** label kecil background kuning atau hitam (seperti "OUR SERVICE" di deck).

### Prinsip layout
- Banyak ruang kosong (breathing room) di atas hitam — kesan premium & fokus.
- Section selang-seling: hitam pekat ↔ hitam-abu, agar ada ritme.
- Mobile-first: mayoritas pengunjung dari HP (mereka datang dari TikTok/IG).
- Setiap section panjang ditutup dengan satu CTA jelas.

---

## BAGIAN 2 — SITEMAP

```
HYPE MEDIA INDONESIA
│
├── / (Beranda)
│
├── /untuk-kreator          ← jalur rekrut kreator
│
├── /untuk-merchant         ← jalur akuisisi brand/merchant
│
├── /portofolio             ← etalase hasil campaign
│
├── /tiktok-go              ← halaman edukasi (rumah angka pasar)
│     └── /tiktok-go/[kota]  ← SEO lokal (jakarta, bandung, jogja, dst) — menyusul
│
├── /tentang-kami
│
├── /kontak
│
└── (footer) /privacy-policy  &  /syarat-ketentuan
```

### Navigasi utama (header, semua halaman)
Kiri: **Logo HYPE**
Tengah/kanan: Beranda · Untuk Kreator · Untuk Merchant · Portofolio · Tentang · Kontak
Paling kanan: tombol kuning **[ Hubungi Kami ]**

🟦 [CATATAN: di mobile jadi menu hamburger. Tombol "Hubungi Kami" tetap terlihat menonjol.]

### Penempatan angka pasar TikTok (sesuai kesepakatan)
- Beranda → ❌ tidak ada (fokus angka HYPE)
- Untuk Kreator → ❌ tidak ada (fokus benefit)
- Untuk Merchant → ✅ satu kalimat pemicu saja
- TikTok GO (edukasi) → ✅ rumah utama angka pasar
🟦 [Semua angka pasar diverifikasi ulang saat bangun web.]

---

## BAGIAN 3 — LAYOUT PER HALAMAN

Notasi: setiap "SECTION" = satu blok vertikal saat di-scroll dari atas ke bawah.

---

### 🏠 BERANDA (/)

**SECTION 1 — Hero** (background hitam)
- Layout: teks di kiri, visual di kanan (di mobile: teks atas, visual bawah).
- Headline besar: *"Ubah Views Jadi Pengunjung Nyata."* (kata "Pengunjung Nyata" diwarnai kuning)
- Subheadline 1-2 baris.
- Dua tombol berdampingan: **[ Saya Kreator ]** (kuning) · **[ Saya Merchant ]** (outline).
- Visual kanan: mockup HP menampilkan konten TikTok GO (seperti di deck Anda — screenshot KFC voucher).

**SECTION 2 — Bukti angka** (background hitam-abu, satu baris menonjol)
- 4 angka besar kuning sejajar: **10.000+** Kreator · **150+** Merchant · **50+** Kota · **50 Juta** Views/Bulan
- Di mobile: 2x2 grid.
- Satu kalimat di bawah: "Hasil nyata untuk bisnis lokal di seluruh Indonesia."

**SECTION 3 — Masalah → Solusi** (hitam)
- Judul: *"Turning Views Into Visits"* atau "Dari Layar ke Meja Anda".
- 2 kolom: kiri teks masalah ("konten viral tapi sepi pengunjung?"), kanan solusi HYPE.

**SECTION 4 — Dua jalur** (hitam-abu, 2 card besar berdampingan)
- Card kiri (aksen kuning): **UNTUK KREATOR** + 1 paragraf + tombol "Gabung Jadi Kreator".
- Card kanan: **UNTUK MERCHANT** + 1 paragraf + tombol "Mulai Kerjasama".
🟦 [Ini jantung halaman — dua pintu masuk yang jelas, pelajaran dari NEX.]

**SECTION 5 — Cuplikan portofolio** (hitam)
- Judul: "Hasil Nyata, Bukan Sekадar Tayangan".
- 3 card studi kasus (gambar + nama + 1 hasil angka). 🟧 [DUMMY sementara]
- Tombol "Lihat Semua Portofolio".

**SECTION 6 — Logo partner** (hitam-abu)
- Deretan logo merchant/brand. 🟧 [DUMMY — sementara badge "Partner Program TikTok GO"]

**SECTION 7 — Testimoni** (hitam)
- 2-3 kartu testimoni (foto + nama + kutipan). 🟧 [DUMMY]

**SECTION 8 — CTA penutup** (blok kuning besar, kontras penuh)
- Teks hitam tebal: "Siap Bertumbuh Bersama HYPE?"
- Tombol hitam: "Hubungi Kami via WhatsApp".

**FOOTER** (lihat komponen footer di bawah)

---

### 🎬 UNTUK KREATOR (/untuk-kreator)

**SECTION 1 — Hero** (hitam)
- Headline: *"Hobi Kulineran & Jalan-Jalan Bisa Jadi Cuan."*
- Subheadline + tombol kuning "Daftar Gratis Sekarang".
- Visual: kreator sedang bikin konten makanan.

**SECTION 2 — Benefit** (hitam-abu)
- Judul: "Kenapa Gabung HYPE?"
- 7 benefit dalam grid card (ikon + judul + 1 baris): Komisi, Fee Campaign, Free Meals, Dicarikan Merchant, Bimbingan & Pelatihan, Management Akun, Support Akomodasi.
- Catatan kecil di bawah: "*Semua benefit mengikuti syarat & ketentuan yang berlaku."

**SECTION 3 — Cara kerja** (hitam, timeline horizontal/vertikal)
- 5 langkah bernomor besar (kuning): Gabung → Pilih Campaign → Datang ke Merchant → Bikin & Upload Video → Dapat Komisi.

**SECTION 4 — FAQ anti-keraguan** (hitam-abu, accordion)
- 5 pertanyaan: perlu banyak follower? gratis? gimana dibayar? pemula bisa? detail komisi?
🟦 [Ini section paling penting untuk konversi kreator — jawab ketakutan langsung.]

**SECTION 5 — CTA** (blok kuning)
- "Siap Mulai?" + tombol "Daftar Jadi Kreator HYPE".

---

### 🏪 UNTUK MERCHANT (/untuk-merchant)

**SECTION 1 — Hero** (hitam)
- Headline: *"Bikin Tempat Usahamu Ramai Lewat TikTok GO."*
- Subheadline + tombol kuning "Konsultasi Gratis".
- Visual: mockup konten merchant (resto/kafe) + location tag.

**SECTION 2 — Masalah + 1 angka pasar** (hitam-abu)
- Teks masalah: "Di TikTok, ditemukan bukan lagi pilihan — tapi keharusan."
- 1 angka pemicu kuning: **"75% netizen pakai TikTok untuk menemukan tempat baru."** ✅ [satu-satunya angka pasar di halaman ini]

**SECTION 3 — Layanan** (hitam, 4 card)
- 4 layanan dari deck: Voucher Sales Campaign · Creator Management · Social Media Management · Creative Content Production.
- Tiap card: nomor/ikon + judul + deskripsi singkat.

**SECTION 4 — Kenapa HYPE** (hitam-abu)
- 4 poin: Fokus O2O lokal · Jaringan 10.000+ kreator di 50+ kota · Terbukti (50jt views, up to 8.000 voucher) · Full service.

**SECTION 5 — Cocok untuk** (hitam, deretan pill)
- Restoran · Kafe · Hotel · Tempat Wisata · Klinik Kecantikan · Lifestyle.

**SECTION 6 — CTA** (blok kuning)
- "Siap Datangkan Lebih Banyak Pelanggan?" + tombol "Hubungi Kami untuk Kerjasama".

---

### 📁 PORTOFOLIO (/portofolio)

**SECTION 1 — Intro** (hitam)
- Judul "Hasil Nyata dari Campaign Kami" + 1 paragraf.

**SECTION 2 — Grid studi kasus** (hitam-abu)
- 3 card besar (sementara), tiap card: gambar + kategori + nama klien + tantangan singkat + hasil (angka kuning). 🟧 [DUMMY — 3 kasus: Resto Jaksel, Hotel Bandung, Kafe Tangerang]
- Saat diklik → halaman detail per kasus (struktur: Klien, Tantangan, Yang Dilakukan, Hasil, visual).

**SECTION 3 — CTA** (blok kuning)
- "Mau Hasil Seperti Ini?" + tombol kerjasama.

---

### 📖 TIKTOK GO (/tiktok-go) — halaman edukasi

**SECTION 1 — Hero** (hitam)
- Judul: "Apa Itu TikTok GO?" + paragraf pembuka.

**SECTION 2 — Penjelasan** (hitam)
- "TikTok GO adalah inisiatif O2O..." (2-3 paragraf).

**SECTION 3 — Angka pasar lengkap** (hitam-abu) ✅ [RUMAH UTAMA angka pasar]
- Deret statistik pasar TikTok: 160jt user · 108jt usia 18+ · GMV Rp100T · 75% discovery.
🟦 [VERIFIKASI ULANG semua angka sebelum publish. Tampilkan dengan sumber.]

**SECTION 4 — Kenapa pakai agensi** (hitam)
- Penjelasan + jembatan ke HYPE + CTA "Mulai Kerjasama".

🟦 [Halaman /tiktok-go/[kota] menyusul — struktur sama, ganti nama kota & contoh tempat lokal.]

---

### ℹ️ TENTANG KAMI (/tentang-kami)

**SECTION 1 — Cerita** (hitam) — 2 paragraf profil HYPE.
**SECTION 2 — Visi & Misi** (hitam-abu) — visi (1 kalimat) + misi (5 poin), versi dipertajam lokal.
**SECTION 3 — Angka kami** (hitam) — 10.000+ / 150+ / 50+ / 50jt.
**SECTION 4 — Lokasi & legalitas** (hitam-abu) — PT HYPE MEDIA INDONESIA, Tangerang Banten + 🟦[Google Maps menyusul saat alamat lengkap ada].
**SECTION 5 — CTA**.

---

### 📞 KONTAK (/kontak)

**SECTION 1** (hitam) — "Mari Bekerja Sama" + daftar kontak (WA, email, IG, TikTok, lokasi) + tombol besar "Chat via WhatsApp".
🟦 [Form sederhana opsional; tapi WhatsApp lebih efektif untuk pasar Indonesia.]

---

## BAGIAN 4 — KOMPONEN GLOBAL

### Header (semua halaman)
- Logo kiri · menu tengah-kanan · tombol kuning "Hubungi Kami" paling kanan.
- Sticky (menempel saat scroll), background hitam dengan sedikit transparansi.
- Mobile: hamburger menu.

### Footer (semua halaman) — background kuning (kontras, seperti referensi)
- Kolom 1: Logo + tagline + alamat (Tangerang, Banten).
- Kolom 2: Navigasi (Beranda, Kreator, Merchant, Portofolio, Tentang, Kontak).
- Kolom 3: Kontak (WA, email, IG @hypemediaindonesia, TikTok hypemedia.id).
- Kolom 4: Lokasi.
- Baris bawah: Privacy Policy · Syarat & Ketentuan · © 2025 PT HYPE MEDIA INDONESIA.
🟦 [Teks footer hitam di atas kuning. Ini juga "trust signal" — alamat + legalitas jelas.]

### Tombol WhatsApp mengambang (floating)
- Ikon WA kuning/hijau di pojok kanan bawah, muncul di semua halaman. Lead capture termudah.

---

## BAGIAN 5 — CATATAN UNTUK TAHAP BANGUN WEB

1. **Mobile-first wajib** — mayoritas pengunjung dari HP.
2. **Kuning dipakai hemat** — hanya tombol, angka penting, dan 1 blok CTA per halaman. Kalau terlalu banyak kuning, efek mencoloknya hilang.
3. **Verifikasi angka pasar** sebelum publish (halaman TikTok GO & 1 angka di Merchant).
4. **Semua 🟧 DUMMY** (studi kasus, logo, testimoni) ditandai agar mudah diganti.
5. **Performa** — gambar dioptimasi, karena pengunjung mobile butuh loading cepat.
6. **Privacy Policy + S&K** dibuat terpisah (penting untuk kepercayaan kreator bind akun).

---

## RINGKASAN ALUR PENGUNJUNG (kenapa layout ini bekerja)

**Kreator** masuk → lihat headline "hobi jadi cuan" → tertarik → scroll lihat benefit & berapa dibayar → FAQ hapus keraguan (gratis, gak perlu banyak follower) → daftar. 

**Merchant** masuk → headline "bikin usaha ramai" → 1 angka pasar yakinkan TikTok GO worth it → lihat 4 layanan & bukti HYPE → kontak.

**Brand/investor/umum** → Tentang Kami + Portofolio + angka HYPE → kredibilitas terbangun.

Tiap jalur punya pintu sendiri sejak beranda, tiap halaman ditutup CTA. Itu inti desain yang menarik leads.
