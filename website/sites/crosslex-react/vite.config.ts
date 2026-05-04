import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
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
