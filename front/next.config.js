/** @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // deja vacío si no usas un puerto específico
      },
      {
        protocol: 'https',
        hostname: 'www.refinorte.com.co',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
