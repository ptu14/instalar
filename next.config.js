/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    })
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jakoszczedzacpieniadze.pl',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'komplexsystem.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig