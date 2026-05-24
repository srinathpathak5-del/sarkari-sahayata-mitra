import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["sahayatamitra.com", "www.sahayatamitra.com"],
    },
  },
};

export default nextConfig;