/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    domains: [
      "api.microlink.io",
      "images.unsplash.com",
      "assets.aceternity.com", // Microlink Image Preview
      "res.cloudinary.com",
    ],
  },
};
export default nextConfig;
