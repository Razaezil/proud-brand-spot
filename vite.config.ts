import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Kita matikan pencarian server entry murni agar Nitro beralih ke mode SPA/Statis penuh
    server: { entry: undefined }, 
  },
  vite: {
    // Menetapkan base url agar aset gambar dan JS terbaca di GitHub Pages
    base: '/proud-brand-spot/',
  },
  nitro: {
    preset: "github_pages",
    // Menentukan file html utama secara manual sebagai gerbang masuk aplikasi statis
    entry: "index.html", 
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
