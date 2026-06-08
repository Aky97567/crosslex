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
      includeAssets: ['favicon.svg'],
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
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
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
