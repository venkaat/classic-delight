import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 70, 75],
    minimumCacheTTL: 60,
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'classicdelight.in',
          },
        ],
        destination: 'https://www.classicdelight.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;