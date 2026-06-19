/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/whatsapp',
        destination: 'https://wa.me/5511942940800',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
