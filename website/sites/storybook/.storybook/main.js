import { dirname, join } from "path";
/** @type {import('@storybook/types').StorybookConfig} */
module.exports = {
  stories: ['../../../frontend/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],

  framework: getAbsolutePath("@storybook/nextjs"),

  core: {
    disableTelemetry: true,
  },

  // TODO: Add static directory public
  // staticDirs: ['../public'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-env').default,
              require('@babel/preset-typescript').default,
              [
                require('@babel/preset-react').default,
                { runtime: 'automatic' },
              ],
            ],
            plugins: ['@emotion'],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.cjs', '.mjs');

    // @see https://stackoverflow.com/a/72720745/707722
    config.resolve.fallback['url'] = require.resolve('url/');

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
