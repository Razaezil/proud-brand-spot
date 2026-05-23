## Ganti logo REBEL dengan upload baru

Upload baru (`ChatGPT_Image_23_Mei_2026_10.30.59.png`) versi logo barbed-wire concrete dengan bara api lebih bagus dari yang sekarang.

### Langkah
1. Copy `user-uploads://ChatGPT_Image_23_Mei_2026_10.30.59.png` → `src/assets/rebel-logo.png` (overwrite).
2. Copy file yang sama → `public/favicon.png` (overwrite) supaya favicon ikut update.
3. Tidak ada perubahan kode — Hero, Navbar, dan favicon sudah pakai path tersebut, jadi otomatis ke-refresh.

### Tidak termasuk
- Tidak mengubah komponen lain, warna, atau layout.
- Tidak generate ulang aset AI.