/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ensures images work on static hosts/CDNs without Next's optimizer
    unoptimized: true,
  },
};

export default nextConfig;
