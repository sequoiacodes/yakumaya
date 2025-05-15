/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Use the custom tsconfig for Vercel builds
    tsconfigPath: process.env.VERCEL ? './tsconfig.vercel.json' : './tsconfig.json',
    // Disable TypeScript errors in production builds
    ignoreBuildErrors: process.env.VERCEL ? true : false,
  },
}

module.exports = nextConfig