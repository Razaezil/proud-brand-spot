// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const deployTarget = process.env.DEPLOY_TARGET?.trim();

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Konfigurasi tambahan khusus untuk GitHub Pages gratisan
  vite: {
    base: '/proud-brand-spot/', // Menyesuaikan sub-folder URL repositori Anda
  },
  nitro: {
    preset: "github_pages",    // Memaksa Nitro menggunakan format keluaran GitHub Pages
    prerender: {
      crawlLinks: true,        // Otomatis menjelajahi semua halaman untuk dijadikan HTML statis
      routes: ['/'],          // Memulai pembuatan halaman statis dari halaman utama
    }
  }
});
