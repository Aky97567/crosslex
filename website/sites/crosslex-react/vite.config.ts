import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'icons/*.png'],
      manifest: {
        name: 'Crosslex',
        short_name: 'Crosslex',
        description: 'German vocabulary trainer',
        theme_color: '#007bff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icons/icon-72x72.png',   sizes: '72x72',   type: 'image/png' },
          { src: 'icons/icon-96x96.png',   sizes: '96x96',   type: 'image/png' },
          { src: 'icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          { src: 'favicon.svg',            sizes: 'any',     type: 'image/svg+xml' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@whitelotus/common-crosslex-view': path.resolve(__dirname, '../../common/crosslex/view/src'),
      '@whitelotus/front-entities': path.resolve(__dirname, '../../frontend/entities/src'),
      '@whitelotus/front-features': path.resolve(__dirname, '../../frontend/features/src'),
      '@whitelotus/front-pages-react': path.resolve(__dirname, '../../frontend/pages-react/src'),
      '@whitelotus/front-shared': path.resolve(__dirname, '../../frontend/shared/src'),
      '@whitelotus/front-widgets': path.resolve(__dirname, '../../frontend/widgets/src'),
      '@whitelotus/mock-test': path.resolve(__dirname, '../../mock/data/src'),
    },
  },
});
