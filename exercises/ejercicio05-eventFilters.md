## Objetivo
explorar las diferentes formas en que podemos utilizar event-filters para especificar mejor cuándo se ejecutan los workflows de GitHub Actions.


## Tareas


1. Crear un archivo llamado 05-event-filters.yaml en la carpeta .github/workflows en la raíz del repositorio.. Los datos del workflow deben ser los siguientes:
    - nombre: 05 - Event Filters.
    - desencadentes:
      - push, usar filtros de eventos para restringir las ejecuciones de este workflow para que se activen solo mediante cambios en la rama principal (main).
    - Trabajos:
        - **echo**, que tiene un solo step, que simplemente imprime el siguiente mensaje en la pantalla: 'Running whenever  branch is main'.
2. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow.
3. Edite el archivo README.md en la raíz del repositorio con los cambios que considere oportunos y confirme los cambios en una nueva rama llamada Test-filters.
4. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow.
5. Reducir la lista de desencadenadores para dejar solo workflow_dispatch, para evitar que este workflow se ejecute con cada push y ensucie la lista de ejecuciones de workflow.

