import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    // This tells Next.js: "It's okay to use quality 75 AND 100"
    qualities: [75, 100], 
  },
};

export default nextConfig;
