## Tujuan

Membuat project bisa dideploy ke berbagai platform (Vercel, Netlify, Cloudflare Pages/Workers, Node server) **tanpa merusak deployment di Lovable** (yang pakai Cloudflare Workers).

## Konteks

- `vite.config.ts` saat ini pakai `@lovable.dev/vite-tanstack-config` yang **sudah otomatis include plugin Cloudflare** untuk build production.
- TanStack Start v1 di balik layar pakai Nitro, jadi target deployment bisa di-switch lewat preset.
- Build sekarang menghasilkan output Worker (`src/server.ts` sebagai entry) yang spesifik Cloudflare.

## Strategi

Pakai **environment variable `DEPLOY_TARGET`** untuk memilih target build. Default (kosong) = Lovable / Cloudflare seperti sekarang, jadi tidak ada yang rusak.

```text
DEPLOY_TARGET (kosong / cloudflare) → Cloudflare Workers (Lovable default)
DEPLOY_TARGET=vercel                 → Vercel
DEPLOY_TARGET=netlify                → Netlify
DEPLOY_TARGET=node                   → Node.js server (self-host, Railway, Render, dll)
```

## Perubahan File

### 1. `vite.config.ts`
Tambahkan opsi `target` ke `tanstackStart` yang dibaca dari `process.env.DEPLOY_TARGET`. Jika kosong, biarkan default (Cloudflare via Lovable preset) supaya Lovable tetap jalan.

```ts
const target = process.env.DEPLOY_TARGET || undefined;
export default defineConfig({
  tanstackStart: {
    server: { entry: "server", ...(target && { preset: target }) },
  },
});
```

### 2. `vercel.json` (baru)
Konfigurasi Vercel: build command, output dir, framework detection.

```json
{
  "buildCommand": "DEPLOY_TARGET=vercel bun run build",
  "outputDirectory": ".output",
  "framework": null
}
```

### 3. `netlify.toml` (baru)
Konfigurasi Netlify build + redirect SPA.

```toml
[build]
  command = "DEPLOY_TARGET=netlify bun run build"
  publish = "dist"
```

### 4. `package.json` — tambah scripts
```json
"build:vercel":  "DEPLOY_TARGET=vercel vite build",
"build:netlify": "DEPLOY_TARGET=netlify vite build",
"build:node":    "DEPLOY_TARGET=node vite build",
"start:node":    "node .output/server/index.mjs"
```

### 5. `DEPLOY.md` (baru — opsional dokumentasi)
Langkah singkat deploy ke tiap platform + env variable yang perlu di-set (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` jika pakai Lovable Cloud).

## Yang TIDAK Diubah

- `wrangler.jsonc` tetap ada → Lovable & Cloudflare tetap jalan.
- `src/server.ts` tetap entry SSR universal.
- Tidak ada package baru yang perlu di-install (Nitro & preset Vercel/Netlify sudah dibundle TanStack Start).

## Catatan Penting

- **Lovable Cloud (Supabase)**: kalau deploy di luar Lovable, env vars harus di-set manual di dashboard Vercel/Netlify/dll.
- **Cloudflare-specific code**: project belum pakai KV/D1/R2, jadi aman dipindah ke runtime lain.
- Setelah plan disetujui, saya akan verifikasi `preset` option benar-benar didukung oleh wrapper Lovable — kalau ternyata di-override, fallback-nya pakai env `NITRO_PRESET` langsung yang dibaca Nitro saat build.
