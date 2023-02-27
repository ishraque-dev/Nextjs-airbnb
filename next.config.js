/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg',
      },
    ],
  },
};

module.exports = nextConfig;
