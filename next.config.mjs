import createMDX from "@next/mdx";
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const withNextIntl = createNextIntlPlugin();

export default withMDX(withNextIntl(nextConfig));
