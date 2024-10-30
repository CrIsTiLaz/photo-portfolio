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
      "patrikportfolio.fra1.digitaloceanspaces.com",
    ],
  },
};
export default nextConfig;
