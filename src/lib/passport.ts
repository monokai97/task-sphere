import passport from 'passport';
import { Strategy as CustomStrategy } from 'passport-custom';

interface GuestUser {
  id: string;
  isGuest: boolean;
}

passport.use('guest', new CustomStrategy((req, done) => {
  // En Next.js App Router, req puede ser diferente dependiendo de cómo se llame.
  // Pero aquí simplemente generamos una identidad si se solicita la estrategia guest.
  const guestUser: GuestUser = {
    id: crypto.randomUUID(),
    isGuest: true,
  };
  return done(null, guestUser);
}));

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  // Para invitados, el id es suficiente
  done(null, { id, isGuest: true });
});

export default passport;
export type { GuestUser };
