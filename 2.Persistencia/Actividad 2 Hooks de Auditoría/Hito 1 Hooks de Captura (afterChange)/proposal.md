# Proposal: Hooks de Captura (afterChange) (Hito 2.2.1)

## El "Porqué" y el Impacto
Este hito establece el mecanismo de "escucha" activa sobre la colección de tareas. Al utilizar el hook `afterChange` de PayloadCMS, podemos interceptar cualquier creación o modificación de una tarea de forma atómica y confiable. 

El impacto es fundamental para la transparencia del sistema: sin estos hooks, la auditoría dependería de que el cliente (frontend) informe honestamente sobre sus cambios, lo cual es propenso a errores y fugas de información. Al implementarlo en el servidor (persistencia), garantizamos que *cada* cambio, ya sea realizado desde la UI, el panel admin o una futura integración, deje una huella digital rastreable. 

## Justificación de la Solución
Se elige `afterChange` porque se ejecuta *después* de que la base de datos ha confirmado el cambio pero *antes* de que el servidor termine de procesar el ciclo de vida completo de la respuesta (o de forma asíncrona si no se retorna la promesa). Esto permite que la latencia percibida por el usuario sea mínima, ya que la lógica de auditoría pesada puede delegarse al final del proceso, cumpliendo con el objetivo de latencia <100ms.
