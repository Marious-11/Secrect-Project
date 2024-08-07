/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
          {
            protocol: 'http',
            hostname: '**',
          },
        ],
      },
    
};

export default nextConfig;
