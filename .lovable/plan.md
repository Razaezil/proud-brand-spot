## Landing Page Brand REBEL

Website satu halaman (single-page) yang stylish, dark, dan edgy untuk brand streetwear REBEL — dengan tagline **"Defy the status quo"**. Fully responsive (mobile, tablet, desktop).

### Design system

- **Palette (Charcoal & Ember)**
  - Background: `#1a1a1a` (charcoal)
  - Surface: `#2d2d2d`
  - Muted: `#4a4a4a`
  - Accent (api/ember): `#e85d3a`
  - Text: `#f5f5f5` putih tulang
- **Typography**: Archivo Black (heading raksasa, tracking ketat) + Hind (body)
- **Layout**: Hero Grid — hero besar, grid produk, lalu section-section penuh lebar
- **Mood**: barbed wire texture, percikan api, grain noise halus, sudut tajam (border-radius minimal), aksen ember untuk CTA & highlight

### Struktur halaman (satu route `/`)

1. **Sticky navbar** — Logo "REBEL" + link anchor (Shop, Lookbook, Manifesto, Contact) + tombol mobile hamburger
2. **Hero**
   - Headline raksasa "DEFY THE STATUS QUO" dengan logo REBEL bergaya barbed-wire (uploaded reference sebagai inspirasi visual)
   - Sub-copy singkat
   - CTA "Shop The Drop" (ember) + "Watch Film" (outline)
   - Background dark dengan tekstur grain + glow ember subtle
3. **Manifesto strip** — kalimat besar berjalan: "BORN TO BREAK · BUILT TO LAST · REBEL ALWAYS"
4. **The Drop (Product Grid)** — 3 produk: Snapback Cap, Tee, Lanyard. Card dark dengan hover lift + ember outline. Tombol "Notify Me" (belum ada checkout)
5. **Lookbook** — grid asimetris foto produk (placeholder generated images bertema dark streetwear)
6. **Manifesto / About** — split section, big quote di kiri, paragraf cerita brand di kanan
7. **Newsletter / Drop List** — form email "Join the Rebellion" untuk notifikasi rilisan
8. **Footer** — sosial media (IG, TikTok, X), copyright, link kecil

### Aset visual

- Generate 1 logo REBEL bergaya (referensi: barbed wire + ember dari upload user) untuk hero
- Generate 3 mockup produk (cap, tee, lanyard) untuk product grid
- Generate 3-4 foto lookbook bertema dark streetwear

### Technical

- Single route `src/routes/index.tsx` + komponen-komponen kecil di `src/components/rebel/` (Navbar, Hero, ProductGrid, Lookbook, Manifesto, Newsletter, Footer)
- Update `src/styles.css` dengan token oklch untuk palette di atas
- Tambahkan Google Fonts (Archivo Black + Hind) via `<link>` di `__root.tsx`
- SEO: title "REBEL — Defy The Status Quo", meta description, og tags
- Form newsletter sementara hanya UI (toast "You're in.") — bisa di-wire ke backend nanti
- Responsive breakpoints Tailwind standar; navbar collapse ke drawer di mobile

### Tidak termasuk (bisa ditambahkan nanti)

- Cart, checkout, payment (perlu Shopify / Lovable Cloud)
- CMS untuk update produk dinamis
- Real newsletter backend (perlu Lovable Cloud + provider email)
