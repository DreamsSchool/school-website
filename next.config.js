/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace REPO_NAME with your actual repository name
  basePath: '/school-website',
  assetPrefix: '/school-website',
}

module.exports = nextConfig
