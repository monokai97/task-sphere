import { NextResponse } from 'next/server';
import passport, { GuestUser } from '@/lib/passport';
import { saveSession } from '@/lib/session';

// Helper para usar passport en Next.js App Router
const authenticate = (strategy: string) => {
  return new Promise<GuestUser>((resolve, reject) => {
    // passport.authenticate espera req, res, next. 
    // Usamos objetos vacíos o mocks mínimos ya que nuestra estrategia custom no los usa realmente.
    const req = {} as any;
    const res = {} as any;
    
    passport.authenticate(strategy, { session: false }, (err: any, user: GuestUser) => {
      if (err) return reject(err);
      if (!user) return reject(new Error('Authentication failed'));
      resolve(user);
    })(req, res, (err: any) => {
      if (err) reject(err);
    });
  });
};

export async function GET() {
  try {
    const guestUser = await authenticate('guest');
    
    await saveSession({
      guestId: guestUser.id,
    });

    return NextResponse.json({
      success: true,
      guestId: guestUser.id,
      message: 'Guest session initiated',
    });
  } catch (error) {
    console.error('Auth Pipeline Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to initiate guest session' 
    }, { status: 500 });
  }
}
