/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ["@shophub/ui"],
};

module.exports = nextConfig;
