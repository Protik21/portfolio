import type { NextConfig } from "next";

// GitHub Pages serves project sites from a sub-path (e.g. /portfolio). The deploy workflow
// sets this; locally it's empty so the site runs at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so the site can be hosted without a server.
  output: "export",
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
