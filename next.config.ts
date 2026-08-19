import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/locations/denver-co",
        destination: "/locations/denver",
        permanent: true,
      },
      {
        source: "/locations/denver-co/",
        destination: "/locations/denver/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
