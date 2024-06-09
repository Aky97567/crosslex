/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    'postcss-preset-env': {},
  },
};
