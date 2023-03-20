/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCSECC_TOKEN: process.env.ACCSECC_TOKEN,
  },
}

module.exports = nextConfig
