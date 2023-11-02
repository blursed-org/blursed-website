// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yt3.googleusercontent.com', 'assets-global.website-files.com'],
  },
}

module.exports = withContentlayer(nextConfig)
