import { z } from 'zod';

export const sessionSchema = z.object({
  guestId: z.string().uuid({ message: 'Invalid Guest ID format' }),
});

export type SessionValidation = z.infer<typeof sessionSchema>;
