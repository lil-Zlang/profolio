/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // GitHub Pages deployment - set basePath to your repo name
  basePath: process.env.NODE_ENV === 'production' ? '/profolio' : '',
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig

