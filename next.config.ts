import type { NextConfig } from "next";

/**
 * On GitHub Pages this site is served from a subpath
 * (https://<user>.github.io/recovery-lab-society), not from a domain root, so
 * every asset and internal link has to be prefixed. The deploy workflow sets
 * BASE_PATH; local `next dev` leaves it unset and serves from "/".
 *
 * If this later moves to a custom domain at the root, drop BASE_PATH from the
 * workflow and nothing else needs to change.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: the catalog is build-time data and there is no server-side
  // order processing, so the whole site ships as flat files.
  output: "export",
  images: { unoptimized: true },
  basePath,
  // Emits /products/index.html rather than /products.html, which is what Pages'
  // static file server expects for a clean URL.
  trailingSlash: true,
};

export default nextConfig;
