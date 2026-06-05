import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Menonaktifkan total sistem server bawaan TanStack Start
  tanstackStart: {
    server: { entry: undefined },
  },
  vite: {
    base: '/proud-brand-spot/',
    build: {
      // Memaksa Vite menghasilkan output SPA standar (Single Page Application)
      ssr: false
    }
  },
  // Memaksa Nitro untuk bertindak sebagai generator file statis biasa
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  }
});
