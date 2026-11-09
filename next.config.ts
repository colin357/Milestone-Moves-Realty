import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Licensed Pexels photographs used in the homepage's human-centered imagery.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
