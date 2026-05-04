const sharedConfig = require('@whitelotus/config-tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../frontend/**/*.{ts,tsx}',
    '../../common/**/*.{ts,tsx}',
  ],
};
