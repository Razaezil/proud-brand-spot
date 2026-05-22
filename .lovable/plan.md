## Pakai aset asli REBEL + polish website

Ganti semua aset generated dengan upload asli user, lalu rapikan tampilan.

### Aset yang dipakai
- `user-uploads://image-5.png` → logo REBEL barbed-wire (hero + favicon + navbar mark) — copy ke `src/assets/rebel-logo.png` (overwrite)
- `user-uploads://image-3.png` → produk Cap → `src/assets/product-cap.jpg` (overwrite)
- `user-uploads://image-4.png` → produk Tee → `src/assets/product-tee.jpg` (overwrite)
- `user-uploads://image-2.png` → produk Lanyard → `src/assets/product-lanyard.jpg` (overwrite)
- Lookbook: pakai ulang 3 foto produk asli secara artistik (crop/zoom berbeda) supaya konsisten dengan brand — hapus lookbook generated yang tidak match.

### Perbaikan website
1. **Hero** — logo asli (PNG transparan) ditampilkan lebih besar & dramatis; tambah subtle glow ember di belakang logo; rapikan grid agar logo tidak terlalu kecil di mobile.
2. **Navbar** — tambah logo mark kecil di samping wordmark "REBEL".
3. **Product Grid** — ganti gambar; pastikan object-fit cocok untuk foto produk asli (cap perlu `object-contain` dengan bg charcoal, tee & lanyard `object-cover`). Tambah label "Pre-order" karena belum ada checkout.
4. **Lookbook** — rebuild pakai 3 foto produk asli dengan layout asimetris + overlay teks brand ("Forged in fire", dll) — tidak generate ulang.
5. **Favicon & OG** — set favicon ke logo REBEL.
6. **Polish kecil**: konsistensi spacing, perbaiki hover state, pastikan kontras teks aman, perbaiki responsivitas hero di viewport ~1011px.

### File yang diubah
- `src/assets/rebel-logo.png`, `product-cap.jpg`, `product-tee.jpg`, `product-lanyard.jpg` (overwrite dari upload)
- Hapus: `src/assets/lookbook-1.jpg`, `lookbook-2.jpg`, `lookbook-3.jpg`
- Edit: `src/components/rebel/Hero.tsx`, `Navbar.tsx`, `ProductGrid.tsx`, `Lookbook.tsx`
- Edit: `src/routes/__root.tsx` (favicon link)
- Copy logo ke `public/favicon.png`

### Tidak termasuk
- Checkout / cart (butuh Shopify atau Lovable Cloud)
- Generate ulang aset AI — semua pakai upload user
