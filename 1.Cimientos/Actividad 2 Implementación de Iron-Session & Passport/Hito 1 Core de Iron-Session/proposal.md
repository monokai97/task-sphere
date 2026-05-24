# Proposal: Core de Iron-Session (Hito 1.2.1)

## El "Porqué" y el Impacto
Este hito establece el mecanismo de seguridad y persistencia de identidad para el modelo "Guest-First". Al utilizar **Iron-Session**, implementamos una estrategia de sesiones basada en cookies cifradas en el lado del servidor, lo que garantiza que la identidad del invitado sea privada, segura y resistente a manipulaciones, sin necesidad de almacenar estado de sesión en una base de datos centralizada (Redis/Memcached).

El impacto es una arquitectura de autenticación altamente escalable y de baja latencia. El sistema puede validar la identidad del usuario simplemente descifrando la cookie en el middleware o en los API Routes, cumpliendo con el requisito de "fricción cero" al no requerir un login tradicional para empezar a operar.

## Justificación de la Solución
Se elige Iron-Session sobre JWT puros porque Iron-Session gestiona automáticamente el sellado (sealing) y cifrado de los datos, utilizando secretos que nunca abandonan el servidor. Además, su integración con Next.js 14 (App Router) es nativa y permite compartir la lógica de sesión entre Server Components, Client Components y Route Handlers de forma transparente.
