import { z } from 'zod';

/**
 * Esquema para la sesión de invitado (Cookie / Payload)
 */
export const sessionSchema = z.object({
  guestId: z
    .string()
    .uuid({ message: 'El guestId debe ser un UUID válido' }),
  createdAt: z.number().optional(),
  lastActive: z.string().datetime().optional(),
});

/**
 * Esquema para la recuperación de sesión
 */
export const sessionRecoverySchema = z.object({
  guestId: z.string().uuid(),
});

/**
 * Tipos inferidos
 */
export type SessionInput = z.infer<typeof sessionSchema>;
export type SessionRecovery = z.infer<typeof sessionRecoverySchema>;
export type SessionValidation = SessionInput; // Alias para compatibilidad con middleware
