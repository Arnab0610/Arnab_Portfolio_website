/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Pexels থেকে ছবি আসার অনুমতি দেওয়া হলো
      },
    ],
  },
};

export default nextConfig;