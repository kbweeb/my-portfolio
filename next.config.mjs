/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || basePath || ''

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix,
}

export default nextConfig
