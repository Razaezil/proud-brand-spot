## Rencana: Revisi PDF Laporan (v2)

Saya akan membuat ulang `laporan-pembuatan-website-rebel.pdf` supaya lebih rapi dan tidak terasa seperti tulisan AI.

### Masalah versi sebelumnya
- Struktur terlalu kaku (bullet seragam, heading "Langkah 1/2/3…")
- Kalimat formal-template khas AI (banyak "Berikut adalah…", "Pada tahap ini…")
- Layout monoton — semua halaman terlihat sama
- Penjelasan terlalu umum, kurang detail spesifik project

### Perubahan gaya penulisan
- Tulis dengan sudut pandang orang pertama ("saya mulai dari…", "waktu itu logonya…") — terasa seperti catatan kerja, bukan dokumentasi formal
- Hindari frasa template: "berikut adalah", "pada tahap ini", "dengan demikian", "secara keseluruhan", "kesimpulannya"
- Variasi panjang kalimat — campur kalimat pendek dan panjang
- Sisipkan detail konkret: nama file, warna spesifik, keputusan yang sempat berubah, kendala asli (mis. error SSR, ganti logo)
- Bahasa Indonesia santai-profesional, bukan formal kaku

### Perubahan layout (lebih rapi & berkarakter)
- Cover: minimalis, hanya judul besar + tanggal + 1 garis aksen
- Body: 2 kolom untuk beberapa halaman supaya tidak monoton
- Heading bernomor diganti judul deskriptif ("Awalnya cuma ide", "Pilih warna & font", "Bikin komponennya satu-satu", dst.)
- Pakai pull-quote / highlight box sesekali untuk memecah ritme
- Sidebar kecil berisi "catatan teknis" terpisah dari narasi utama
- Margin lebih lega, line-height nyaman dibaca
- Footer halaman dengan nomor halaman + nama project (kecil)

### Teknis
- Python + ReportLab (Platypus + Frame untuk multi-kolom)
- Output: `/mnt/documents/laporan-pembuatan-website-rebel-v2.pdf` (file lama tetap ada)
- Font: Helvetica untuk body, Helvetica-Bold untuk judul (default ReportLab, aman)
- Aksen warna: hitam + 1 warna merah brand REBEL
- QA: convert tiap halaman ke JPG, inspeksi visual, perbaiki kalau ada overflow/tabrakan

Tidak ada perubahan kode website — hanya regenerasi dokumen PDF.