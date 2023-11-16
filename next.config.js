const bundleAnalyzer = require("@next/bundle-analyzer");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    // webpackBuildWorker: true,
  },
};

module.exports = nextConfig;
