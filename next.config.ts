import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.reuters.com",
      },
      {
        protocol: "https",
        hostname: "live-production.wcms.abc-cdn.net.au",
      },
      {
        protocol: "https",
        hostname: "mf.b37mrtl.ru",
      }
    ]
  }
};

export default nextConfig;
