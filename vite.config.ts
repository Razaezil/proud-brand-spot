import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// Konfigurasi web statis murni standar Vite
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/proud-brand-spot/', // Menyesuaikan alamat URL repositori Anda
  build: {
    outDir: 'dist', // Menentukan folder hasil akhir kompilasi
  }
})
