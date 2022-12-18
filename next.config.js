// const nextEnv = require('next-env');
// const dotenvLoad = require('dotenv-load');
 
// dotenvLoad();
 
// const withNextEnv = nextEnv();
 
// module.exports = withNextEnv({
//   // Your Next.js config.
// });


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig