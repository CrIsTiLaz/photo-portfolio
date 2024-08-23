/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false, // Aceasta opțiune trebuie să fie parte a obiectului nextConfig
};
export default nextConfig;
