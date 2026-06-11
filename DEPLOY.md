# Panduan Deploy ke GitHub — HYPE Media Indonesia

> **Tujuan:** Upload seluruh kode ke GitHub agar bisa dipresentasikan online ke atasan.
> Estimasi waktu: **10–15 menit** (pertama kali), **2 menit** untuk update berikutnya.

---

## Persiapan Awal (cek dulu sebelum mulai)

### 1. Pastikan Git terinstall
Buka **PowerShell** atau **Terminal**, ketik:
```
git --version
```
Kalau muncul versi (contoh: `git version 2.47.0`) → lanjut.
Kalau error → download di [git-scm.com/downloads](https://git-scm.com/downloads), install, restart terminal.

### 2. Pastikan punya akun GitHub
Daftar atau login di [github.com](https://github.com).

---

## Langkah 1 — Konfigurasi Identitas Git (sekali saja)

Di terminal, jalankan dua perintah ini (ganti nama dan email sesuai akun GitHub kamu):
```
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

Cek hasilnya:
```
git config --global user.name
git config --global user.email
```
Harus muncul nama dan email yang baru diisi.

---

## Langkah 2 — Buat Repository Baru di GitHub

1. Login ke [github.com](https://github.com)
2. Klik tombol **"+"** di pojok kanan atas → pilih **"New repository"**
3. Isi form:
   - **Repository name:** `website-hype` (atau nama lain, bebas)
   - **Description:** `Website resmi HYPE Media Indonesia` (opsional)
   - **Visibility:** pilih **Private** (agar hanya bisa dilihat yang diundang)
   - **JANGAN centang** "Add a README file"
   - **JANGAN centang** "Add .gitignore"
   - **JANGAN centang** "Choose a license"
4. Klik **"Create repository"**

Setelah dibuat, GitHub akan tampilkan halaman kosong dengan beberapa perintah.
**Catat URL repository-nya**, formatnya:
```
https://github.com/username-kamu/website-hype.git
```

---

## Langkah 3 — Commit Semua Perubahan

Buka terminal di folder project (`d:\Website-HYPE`), lalu jalankan berurutan:

### 3a. Cek semua file yang akan dicommit
```
git status
```
Akan terlihat banyak file modified dan untracked — semua itu hasil kerja yang belum tersimpan ke git.

### 3b. Tambahkan semua file ke staging
```
git add .
```

### 3c. Commit dengan pesan yang jelas
```
git commit -m "feat: build complete website HYPE Media Indonesia"
```

### 3d. Verifikasi commit berhasil
```
git log --oneline
```
Harus muncul 2 baris:
```
xxxxxxx feat: build complete website HYPE Media Indonesia
04c3a63 Initial commit from Create Next App
```

---

## Langkah 4 — Hubungkan ke GitHub dan Push

### 4a. Tambahkan remote (ganti URL dengan URL repo kamu dari Langkah 2)
```
git remote add origin https://github.com/username-kamu/website-hype.git
```

### 4b. Rename branch ke `main` (standar GitHub saat ini)
```
git branch -M main
```

### 4c. Push ke GitHub
```
git push -u origin main
```

Terminal akan minta **username** dan **password** GitHub.

> ⚠️ **Catatan penting soal password:**
> GitHub sudah tidak menerima password akun langsung sejak 2021.
> Yang diminta adalah **Personal Access Token**, bukan password akun.
>
> **Cara buat Personal Access Token:**
> 1. Buka [github.com/settings/tokens](https://github.com/settings/tokens)
> 2. Klik **"Generate new token (classic)"**
> 3. Nama token: `website-hype-deploy` (bebas)
> 4. Expiration: **No expiration** (atau 90 days)
> 5. Centang scope: **`repo`** (full control of private repositories)
> 6. Klik **"Generate token"**
> 7. **Salin tokennya sekarang** — tidak akan bisa dilihat lagi setelah halaman ditutup
> 8. Gunakan token ini sebagai "password" saat git push

Kalau berhasil, terminal akan menampilkan:
```
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## Langkah 5 — Verifikasi di GitHub

1. Buka [github.com](https://github.com) → klik repository `website-hype`
2. Semua file dan folder harus sudah muncul
3. Pastikan ada file-file utama: `src/`, `public/`, `package.json`, `MEDIA.md`

---

## Cara Presentasi ke Atasan

### Opsi A — Share link repository (lihat kode saja)
Bagikan URL repository:
```
https://github.com/username-kamu/website-hype
```
Atasan perlu punya akun GitHub dan diundang sebagai collaborator:
- Buka repository → **Settings** → **Collaborators** → **Add people** → masukkan username/email atasan

### Opsi B — Deploy live dulu, share link website (LEBIH DIREKOMENDASIKAN)
Kalau ingin atasan bisa buka websitenya langsung (bukan lihat kode), lakukan ini setelah push ke GitHub:

1. Buka [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. Klik **"Add New Project"** → pilih repository `website-hype`
3. Semua setting biarkan default → klik **"Deploy"**
4. Tunggu 1–2 menit → Vercel akan beri URL seperti:
   ```
   https://website-hype-username.vercel.app
   ```
5. Bagikan URL itu ke atasan — bisa langsung dibuka di browser tanpa akun apapun

---

## Update Setelah Ada Perubahan

Setiap kali ada perubahan file dan ingin update di GitHub/Vercel:

```
git add .
git commit -m "update: keterangan singkat perubahannya"
git push
```

Jika sudah terhubung ke Vercel, website otomatis update dalam 1–2 menit setelah push.

---

## Troubleshooting

### Error: `remote origin already exists`
```
git remote set-url origin https://github.com/username-kamu/website-hype.git
```

### Error: `failed to push — rejected`
```
git pull origin main --rebase
git push
```

### Lupa URL remote yang sudah diset
```
git remote -v
```

### Ingin cek status sebelum push
```
git status
git log --oneline
```
