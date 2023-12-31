/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['i.imgur.com']
    }
  }

  module.exports = nextConfig