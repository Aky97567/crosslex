import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { elevenLabsProxyPlugin } from './server/elevenLabsProxy';

export default defineConfig({
  plugins: [react(), elevenLabsProxyPlugin()],
  resolve: {
    alias: {
      '@whitelotus/common-crosslex-view': path.resolve(__dirname, '../../common/crosslex/view/src'),
      '@whitelotus/front-entities': path.resolve(__dirname, '../../frontend/entities/src'),
      '@whitelotus/front-shared': path.resolve(__dirname, '../../frontend/shared/src'),
      '@whitelotus/mock-test': path.resolve(__dirname, '../../mock/data/src'),
    },
  },
});
