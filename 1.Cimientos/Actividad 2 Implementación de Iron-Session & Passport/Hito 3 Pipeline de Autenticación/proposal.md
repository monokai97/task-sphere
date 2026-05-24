# Proposal: Pipeline de Autenticación (Hito 1.2.3)

## El "Porqué" y el Impacto
Este hito es el "pegamento" que une la infraestructura de cifrado (Iron-Session) con la lógica de perfiles (Passport.js). Al implementar el **Pipeline de Autenticación**, creamos un punto de entrada único y estandarizado para que el frontend pueda inicializar la identidad del usuario con una sola llamada al servidor.

El impacto es una experiencia de usuario (UX) de "fricción cero". Desde la primera carga, la aplicación puede asegurar una identidad única para el invitado, sellarla en una cookie segura y dejarla lista para que los componentes de negocio (Tareas) la utilicen. Este pipeline es la base sobre la cual se construye el aislamiento de datos y la seguridad de la aplicación.

## Justificación de la Solución
Se utiliza un **Route Handler de Next.js** (`/api/auth/guest`) para exponer este pipeline. Esta aproximación es óptima porque nos permite ejecutar lógica de servidor pura (Node.js runtime) para interactuar con Passport y sellar la cookie de Iron-Session, devolviendo una respuesta JSON limpia al cliente para confirmar la inicialización exitosa.
