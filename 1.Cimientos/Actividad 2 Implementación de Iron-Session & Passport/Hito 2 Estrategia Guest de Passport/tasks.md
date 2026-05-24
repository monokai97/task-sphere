# Tasks: Estrategia Guest de Passport (Hito 1.2.2)

1. [ ] Instalar dependencias: `npm install passport passport-custom`. (Utilizaremos `passport-custom` para simplificar la implementación de la estrategia).
2. [ ] Crear el archivo `src/lib/passport.ts`.
3. [ ] Implementar la estrategia `guest` utilizando `passport-custom`.
4. [ ] Configurar la lógica de generación de UUID mediante `crypto.randomUUID()`.
5. [ ] Configurar `passport.serializeUser` y `passport.deserializeUser` para manejar el objeto de usuario invitado.
6. [ ] Exportar la instancia de passport configurada para su uso en el pipeline de Next.js.
