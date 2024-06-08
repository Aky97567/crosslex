/** @type {import('@storybook/types').StorybookConfig} */
module.exports = {
  stories: [
    '../../../frontend/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../lp-floyt/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
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
  // TODO: Add static directory public
  // staticDirs: ['../public'],
};
