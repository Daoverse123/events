/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/add-events',
        destination: '/add-events.html',
        permanent: true,
      },
    ]
  },
  env: {
    API: process.env.API
  },

}

module.exports = nextConfig
