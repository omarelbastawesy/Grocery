import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "grocery.newcinderella.online",
      "www.themealdb.com",
    ],
  },
};

export default nextConfig;
