import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { unsealData } from 'iron-session';
import { sessionOptions } from './lib/session';
import { getPayloadClient } from './lib/payload';
import { GuestSessionSchema } from './lib/validation/session';

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
  runtime: 'nodejs',
};

export async function proxy(request: NextRequest) {
  const cookieName = 'vento-guest-session';
  const sessionCookie = request.cookies.get(cookieName);

  if (sessionCookie) {
    try {
      const sealedData = await unsealData(sessionCookie.value, sessionOptions);
      const session = GuestSessionSchema.safeParse(sealedData);

      if (session.success) {
        try {
          const payload = await getPayloadClient();
          await payload.upsert({
            collection: 'guest-sessions',
            id: session.data.guestId,
            data: {
              id: session.data.guestId,
              lastActive: new Date().toISOString(),
            },
          });
        } catch (dbError) {
          console.error('[Middleware] Error crítico en el pipeline de sesión:', dbError);
        }
      } else {
        console.warn('[Middleware] Sesión inválida, regenerando...');
      }
    } catch (unsealError) {
      console.error('[Middleware] Error al descifrar sesión:', unsealError);
    }
  }

  return NextResponse.next();
}
