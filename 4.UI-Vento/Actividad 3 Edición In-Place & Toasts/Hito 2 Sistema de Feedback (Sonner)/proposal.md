# Proposal: Sistema de Feedback (Sonner) (Hito 4.3.2)

## El "Porqué" y el Impacto
La comunicación de los resultados de las acciones de usuario (crear, editar, eliminar) es clave para la confianza. En una aplicación que depende de actualizaciones optimistas, el usuario necesita saber de forma inequívoca si su acción ha sido persistida con éxito en el servidor o si ha ocurrido un error.

El impacto es la **claridad y tranquilidad del usuario**. Al implementar un sistema de Toasts (Sonner), proporcionamos una retroalimentación visual no intrusiva que confirma el éxito sin interrumpir el flujo de trabajo, o advierte de fallos técnicos de forma clara, cumpliendo con la expectativa de una aplicación "empresa de alta fidelidad".

## Justificación de la Solución
**Sonner** ha sido elegido por su diseño minimalista y su capacidad de ser integrado como un componente único en el layout, lo cual minimiza el boilerplate en las páginas. Su API es sencilla y es perfecta para el estilo "Vento" debido a sus animaciones elegantes y su capacidad de personalización total, asegurando que los mensajes sigan nuestra paleta de colores neutros profundos.
