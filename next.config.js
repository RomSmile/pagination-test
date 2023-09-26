/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: true,
      },
    ];
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    TOKEN_DATA: process.env.TOKEN_DATA,
  },
};

module.exports = nextConfig;
