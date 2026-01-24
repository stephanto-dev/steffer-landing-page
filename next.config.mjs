/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Sanity Studio requests /static/* (without /studio prefix when basePath isn’t applied).
  // Rewrite to /studio/static/* so the built Studio assets in public/studio/static/ are served.
  async rewrites() {
    return [
      { source: "/static/:path*", destination: "/studio/static/:path*" },
    ];
  },
  // After Google OAuth, Sanity can redirect to /studio/studio (duplicated basePath). Redirect to /studio.
  async redirects() {
    return [
      { source: "/studio/studio", destination: "/studio", permanent: false },
      { source: "/studio/studio/:path*", destination: "/studio/:path*", permanent: false },
    ];
  },
};

export default nextConfig;