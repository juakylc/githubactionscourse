## Objetivo
Explorar distintas formas de configurar runners para nuestros workflows.

## Tareas

1. Crear un archivo llamado 03-workflow-runners.yaml en la carpeta .github/workflows en la raíz del repositorio.. Los datos del workflow deben ser los siguientes:
   - nombre: 03 - Runners de workflow.
   - desencadente: push
   - Trabajos:
     - **ubuntu-echo**, que se ejecuta en una ubuntu-latest y tiene un solo step, llamado 'Mostrar SO', y ejecuta un script bash de varias líneas, y relizará:
       - Imprimir "Este trabajo se ejecuta en un Runner de Ubuntu"
       - Imprimir el nombre del sistema operativo del Runner.
     - **windows-echo**, que se ejecuta en una Windows-latest y tiene un solo step, llamado 'Mostrar SO', y que ejecuta un script bash de varias líneas, y realizará:
       - Imprimir "Este trabajo se ejecuta en un Runner de Windows"
       - Imprimir el nombre del sistema operativo del Runner.
     - **mac-echo**, que se ejecuta en un macos-latest y tiene un solo step, llamado 'Mostrar SO', y que ejecuta un script bash de varias líneas, y realizará:
       - Imprimir "Este trabajo se ejecuta en un Runner MacOS"
       - Imprimir el nombre del sistema operativo del Runner.
2. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow. 
3. Reducir la lista de desencadenadores para dejar solo workflow_dispatch, para evitar que este workflow se ejecute con cada push y ensucie la lista de ejecuciones de workflow.

## Tips
¡Cuidado con los Runners de MacOS, son caros! Los Runners de MacOS son costosos cuando se usan en repositorios privados y pueden consumir fácilmente todos los minutos gratuitos que tenemos disponibles para el mes. Poner especial atención a las ejecuciones de los workflows en un repositorio privado.

Para acceder al nombre sistema operativo runner, acceder a la variable de entorno $RUNNER_OS.

El shell predeterminado de Windows no es compatible con la sintáxis similar a bash unix para acceder a las variables de entorno. 
Puede usar un método compatible o usar bash configurando explícitamente el shell para el paso respectivo:
Por ejemplo:
```yaml
steps:
  - name: Show OS
    shell: bash
    run: echo "I'm running on bash."
```
