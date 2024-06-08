/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'www.floyt.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['de-DE', 'fr-FR', 'es-ES', 'it-IT', 'nl-NL', 'en'],
    defaultLocale: 'de-DE',
  },
  experimental: {
    externalDir: true,
  },
  compiler: {
    emotion: true,
  },
};

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
