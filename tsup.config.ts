import { defineConfig } from 'tsup'

export default defineConfig([
  // API server build
  {
    entry: ['src/api/http.server.ts'],
    format: ['esm'],
    target: 'node18',
    outDir: 'dist',
    clean: true,
    splitting: false,
    sourcemap: true,
    dts: false,
    external: ['fastify', '@fastify/cors', '@fastify/cookie', '@fastify/static'],
  },
  // Lambda handler build
  {
    entry: ['src/lambda-minimal.ts'],
    format: ['cjs'],
    target: 'node20',
    outDir: 'dist',
    clean: false,
    splitting: false,
    sourcemap: false,
    dts: false,
    bundle: true,
    noExternal: [/.*/],
  },
])
