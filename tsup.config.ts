import { defineConfig } from 'tsup'

export default defineConfig([
  // API server build for Railway
  {
    entry: ['src/api/http.server.ts'],
    format: ['esm'],
    target: 'node18',
    outDir: 'dist/api',
    clean: true,
    splitting: false,
    sourcemap: process.env.NODE_ENV !== 'production',
    dts: false,
    minify: process.env.NODE_ENV === 'production',
    treeshake: true,
    external: [
      'fastify',
      '@fastify/cors', 
      '@fastify/cookie', 
      '@fastify/static',
      '@google/generative-ai',
      'dotenv'
    ],
    esbuildOptions(options) {
      options.banner = {
        js: '// EUPHORIA API Server - Production Build'
      }
    }
  },
])
