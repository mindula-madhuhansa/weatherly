/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weatherbit.io",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

export default nextConfig;
