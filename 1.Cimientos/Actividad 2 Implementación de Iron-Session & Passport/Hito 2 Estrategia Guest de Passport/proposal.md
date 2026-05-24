# Proposal: Estrategia Guest de Passport (Hito 1.2.2)

## El "Porqué" y el Impacto
Este hito define la lógica de negocio para la identidad del usuario invitado. Al utilizar **Passport.js** con una estrategia personalizada ("Anonymous/Guest"), estandarizamos la forma en que el sistema resuelve la identidad del usuario, independientemente de si los datos provienen de una cookie, un header o una base de datos.

El impacto es una separación clara de responsabilidades: mientras que Iron-Session (Hito 1) se encarga de la *persistencia y cifrado* del transporte, Passport.js se encarga de la *lógica de perfiles*. Esto facilita enormemente la futura transición a cuentas persistentes (Fase 6+), ya que solo necesitaremos añadir una nueva estrategia de Passport sin cambiar el flujo de middleware principal.

## Justificación de la Solución
Se ha elegido implementar una estrategia de Passport personalizada en lugar de un simple generador de UUIDs para aprovechar el ecosistema de middleware de Passport. Esto permite que el objeto `req.user` esté disponible de forma idiomática en toda la aplicación Next.js, siguiendo las mejores prácticas de la industria para la gestión de identidades en Node.js.
