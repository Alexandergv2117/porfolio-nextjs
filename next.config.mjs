import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
   images: {
      domains: ['avatars.githubusercontent.com'],
   },
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
   extension: /\.(md|mdx)$/
});

export default withMDX(nextConfig);
