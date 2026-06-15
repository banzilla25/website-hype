import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/website-hype" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/website-hype" : "",
  },
};

export default nextConfig;
