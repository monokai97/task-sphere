import { Access } from 'payload';
import { getSession } from './session';

export const isGuestAndActive: Access = async ({ req }) => {
  // En Payload 3.0 Local API, req.user puede estar vacío.
  // Intentamos obtener el guestId de la sesión de Iron-Session.
  const session = await getSession();
  const guestId = session.guestId;

  if (!guestId) {
    // Si no hay sesión, no hay acceso (o solo para admins si se desea)
    if (req.user) return true; // Admins tienen acceso
    return false;
  }

  // Filtro base: guestId coincidente y no eliminado
  return {
    and: [
      {
        guestId: {
          equals: guestId,
        },
      },
      {
        isDeleted: {
          not_equals: true,
        },
      },
    ],
  };
};

export const isGuestOwner: Access = async ({ req }) => {
  const session = await getSession();
  const guestId = session.guestId;

  if (req.user) return true; // Admins
  if (!guestId) return false;

  return {
    guestId: {
      equals: guestId,
    },
  };
};
