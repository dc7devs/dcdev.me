import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
            protocol: "https",
            hostname: "**"
          }
      ]
  },
  swcMinify: true,
}

export default withContentlayer(nextConfig);