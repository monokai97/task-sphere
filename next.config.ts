import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Desactivamos experimental.turbo explícitamente
  experimental: {
    turbo: undefined,
  },
  // Opcional: a veces ayuda forzar el uso de webpack
  webpack: (config, { dev, isServer }) => {
    return config;
  },
};

export default withPayload(nextConfig);
