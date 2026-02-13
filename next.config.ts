import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WSC_Sports",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
