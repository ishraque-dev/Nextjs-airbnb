/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com',
      },
    ],
  },
};

module.exports = nextConfig;
