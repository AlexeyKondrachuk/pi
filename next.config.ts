import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://31.128.47.129:8080/:path*',  // Проксирование
          },
        ]
      },
};

export default nextConfig;
