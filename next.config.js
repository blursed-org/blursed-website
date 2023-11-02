// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'yt3.googleusercontent.com',
      'assets-global.website-files.com',
      'epicode.com',
      'www.freecodecamp.org',
      'dovilearn.s3.eu-west-2.amazonaws.com',
      'www.caltico.es',
      'code.visualstudio.com',
      'iaexpert.academy',
    ],
  },
}

module.exports = withContentlayer(nextConfig)
