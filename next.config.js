const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  })
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['https://djiladdrgxxycvazndjn.supabase.co'],
  },
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)