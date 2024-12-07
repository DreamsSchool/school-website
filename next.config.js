/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/school-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/school-website' : '',
}

module.exports = nextConfig
