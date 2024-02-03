/** @type {import('next').NextConfig} */

// const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  swcMinify: true
};

module.exports = nextConfig; // withContentlayer({ ...nextConfig });
