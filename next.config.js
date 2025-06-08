/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  // Kompresja i optymalizacje
  compress: true,
  poweredByHeader: false,
  
  // Experimental features dla wydajności
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
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
    // Optymalizacje obrazów
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    domains: ['komplexsystem.com', 'jakoszczedzacpieniadze.pl'],
  },
}

module.exports = nextConfig