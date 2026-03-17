import { defineConfig } from 'vite'

export default defineConfig({
  base: '/madame-aldo/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: { port: 3000 }
})
