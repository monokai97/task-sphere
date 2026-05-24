1 # Tests: Evento en Delete (Hito 3.3.2.2)
      2
      3 ## Estrategia de Pruebas
      4 - [ ] **Unit Test:** Mockear `broadcast` y verificar su invocación
        en el `onSuccess` de `useDeleteTask`.
      5 - [ ] **Integration Test:** Realizar la eliminación en una pestaña y
        confirmar visualmente que el elemento desaparece de la lista en la
        segunda pestaña.
      6 - [ ] **Event payload check:** Asegurar que el payload enviado
        contiene el `guestId` y el ID de la tarea eliminada.