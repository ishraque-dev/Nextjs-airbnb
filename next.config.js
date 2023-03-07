/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com',
      },
      {
        hostname: 'jsonkeeper.com/b/5NPS',
      },
    ],
  },
};

module.exports = nextConfig;
