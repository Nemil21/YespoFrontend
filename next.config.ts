import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Local server uses http by default
        hostname: '127.0.0.1', // Localhost address (or you can use 'localhost')
        port: '8000', // Default port for local Django server
        pathname: '/media/**', // Assuming Django serves media files from '/media/'
        search: '',
      },
    ],
  },
  
  // Add this ESLint configuration to bypass checks during build
  eslint: {
    // Warning: This completely disables ESLint during build
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
