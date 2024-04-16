## Objetivo
Crear  primer flujo de trabajo.

## Tareas
1. Crear un archivo llamado 01-first-workflow.yaml en la carpeta .github/workflows en la raíz.
   de su repositorio.
2. Nombra el flujo de trabajo 01 - First WorkFlow.
3. Agregue los siguientes triggers a su flujo de trabajo:
   - push
   - workflow_dispatch
4. Agregar dos jobs:
   - echo-hello, debería ejecutarse en ubuntu-latest y tener un solo step, llamado Saludar, que simplemente imprime el mensaje "¡Hola, mundo!" en la pantalla.
   - echo-goodbye, también debería ejecutarse en ubuntu-latest y tener dos steps:
     - Paso fallido, debería ejecutar un script bash de varias líneas que imprime "Fallo" en la pantalla y sale con cualquier código distinto de cero. 
     - Decir adiós, debería simplemente imprimir "¡Adiós!" sobre el pantalla.

5. Jugar e inspeccionar lo que sucede una vez que falla un paso durante la ejecución del workflow.
6. Cambie el primer step del segundo job para salir con un código cero. Cambar también el nombre del step y el mensaje impreso para que coincida con el nuevo estado. Observando cómo afecta esto a la ejecución del flujo de trabajo.
7. Cambie los triggers del flujo de trabajo para que contengan solo flujo de workflow_dispatch para evitar que este flujo de trabajo se ejecute con cada push y ensucie la lista de ejecuciones del flujo de trabajo.

## Tips
   Para ejecutar un script bash de varias líneas, puede utilizar la siguiente sintaxis:
```yaml
 steps:
    - name: Multi-line bash
      run: |
         echo "I am"
         echo "a multi-line"
         echo "script."
```
