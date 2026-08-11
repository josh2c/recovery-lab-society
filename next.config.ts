import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the catalog is build-time data and there is no server-side
  // order processing, so the whole site ships as flat files.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
