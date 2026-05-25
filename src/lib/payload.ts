import { getPayload as getPayloadLocal } from 'payload';
import config from '@/payload.config';

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  seed?: boolean;
}

export const getPayload = async ({ seed }: Args = {}) => {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayloadLocal({
      config,
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
