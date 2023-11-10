/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "upload.wikimedia.org",
    ]
  }
}

module.exports = nextConfig
