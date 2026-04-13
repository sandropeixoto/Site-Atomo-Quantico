import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se for fazer deploy em um sub-caminho (ex: usuario.github.io/repo), 
  // descomente e altere a linha abaixo:
  // basePath: '/Site-Atomo-Quantico',
};

export default nextConfig;
