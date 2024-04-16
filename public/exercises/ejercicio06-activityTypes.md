## Objetivo
explorar las diferentes formas en que podemos utilizar activity types para especificar mejor cuándo se ejecutan los workflows de GitHub Actions.


## Tareas

1. Crear un archivo llamado 06-activity-types.yaml en la carpeta .github/workflows en la raíz del repositorio.. Los datos del workflow deben ser los siguientes:
    - nombre: 06 - Activity Types.
    - desencadentes:
    - desencadentes: 
      - pull_request, únicamente con los activity types opened y synchronize para restringir el arranque del flujo solo para abrir y sincronizar PR's. Además, añadir un filtro para que solo aplique cuando la rama base sea develop
    - Trabajos:
        - **echo**, que tiene un solo step, que simplemente imprime el siguiente mensaje en la pantalla: 'Running whenever a PR is opened or synchronized AND base branch is develop'.
2. Crear una rama develop a partir de main directamente en la UI, y sincronizar los cambios en local.
3. Confirmar los cambios y subir (push) el código en la rama main. Inspeccionar el resultado de la ejecución del workflow. ;)
4. Crear una rama feat-1-act-Types a partir de develop.
5. Edite el archivo README.md en la raíz del repositorio con los cambios que considere oportunos y confirme los cambios en una la rama creada anteriormente
6. Confirmar los cambios y subir (push) el código. 
7. Crear un PR para fusionar la rama feat-1-act-Types en develop. Inspeccionar el resultado de la ejecución del workflow.
8. Edite de nuevo el archivo README.md en la rama feat-1-act-Types, confirme los cambios y suba (push) el código.  Inspeccionar el resultado de la ejecución del workflow.
9. Reducir la lista de desencadenadores para dejar solo workflow_dispatch, para evitar que este workflow se ejecute con cada push y ensucie la lista de ejecuciones de workflow.



