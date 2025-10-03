import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // backend port
        changeOrigin: true,
        // If your server already mounts routes under "/api"
        // don’t rewrite. If it mounts at root, uncomment:
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
