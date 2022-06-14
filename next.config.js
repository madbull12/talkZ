/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
