import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/about_me/",
  server: {
    port: 80
  },
  build: {
    outDir: 'build'
  }
})
