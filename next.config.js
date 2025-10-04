/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  // Remove trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
}

module.exports = nextConfig

