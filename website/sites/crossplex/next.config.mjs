const packages = [
  //   '@whitelotus/back-app-crosslex',
  //   '@whitelotus/back-data-api',
  //   '@whitelotus/back-data-contentful',
  //   '@whitelotus/back-domain-affiliate',
  //   '@whitelotus/back-domain-feedback',
  //   '@whitelotus/back-domain-offer',
  //   '@whitelotus/back-domain-page',
  //   '@whitelotus/back-domain-sitegroup',
  //   '@whitelotus/back-repo-affiliate',
  //   '@whitelotus/back-repo-offers',
  //   '@whitelotus/back-repo-pagecontent',
  //   '@whitelotus/back-repo-pagemap',
  //   '@whitelotus/back-repo-review',
  '@whitelotus/back-runtime-crosslex',
  //   '@whitelotus/common-crosslex-view',
  '@whitelotus/front-entities',
  '@whitelotus/front-features',
  '@whitelotus/front-pages',
  '@whitelotus/front-shared',
  '@whitelotus/front-widgets',
  '@whitelotus/lib-core-logging',
  '@whitelotus/lib-core-perf',
  '@whitelotus/lib-core-types',
  //   '@whitelotus/lib-ext-api',
  //   '@whitelotus/lib-ext-contentful',
  '@whitelotus/lib-ext-next',
  '@whitelotus/lib-sys-app',
  //   '@whitelotus/lib-sys-cache',
  //   '@whitelotus/lib-sys-data',
  //   '@whitelotus/lib-sys-domain',
  //   '@whitelotus/lib-sys-settings',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  transpilePackages: packages,
};

export default nextConfig;
