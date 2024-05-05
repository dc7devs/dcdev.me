/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dyxtcsnna/image/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '**'
      }
    ]
  },
  swcMinify: true
};

module.exports = nextConfig;
