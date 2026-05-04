const baseConfig = require('@whitelotus/config-tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [baseConfig],
  content: [
    '../../frontend/**/src/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
};
