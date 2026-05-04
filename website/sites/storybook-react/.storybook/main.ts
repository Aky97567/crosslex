import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../../../frontend/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite') as never,
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@whitelotus/common-crosslex-view': resolve(__dirname, '../../../common/crosslex/view/src'),
          '@whitelotus/config-tailwindcss': resolve(__dirname, '../../../config/tailwindcss'),
          '@whitelotus/front-entities': resolve(__dirname, '../../../frontend/entities/src'),
          '@whitelotus/front-features': resolve(__dirname, '../../../frontend/features/src'),
          '@whitelotus/front-pages-next': resolve(__dirname, '../../../frontend/pages-next/src'),
          '@whitelotus/front-pages-react': resolve(__dirname, '../../../frontend/pages-react/src'),
          '@whitelotus/front-shared': resolve(__dirname, '../../../frontend/shared/src'),
          '@whitelotus/front-widgets': resolve(__dirname, '../../../frontend/widgets/src'),
          '@whitelotus/lib-ext-next': resolve(__dirname, '../../../lib/external/next/src'),
          '@whitelotus/mock-test': resolve(__dirname, '../../../mock/data/src'),
        },
      },
    });
  },
};

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
