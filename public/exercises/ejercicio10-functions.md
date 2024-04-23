## Objetivo
Trabajar con diferentes funciones, tanto de propósito general como de comprobaciones de estado, para familiarizarse con el uso de las mismas.


## Tareas

1. Crear un archivo llamado 10-funtions.yml en la carpeta .github/workflows en la raíz del repositorio. Los datos del workflow deben ser los siguientes:
    - nombre: 10 - Using Functions.
    - desencadentes:
        - pull_request
        - workflow_dispatch
    - Trabajos:
      - **echo1**, debería ejecutarse en ubuntu-latest. Definir cinco steps:
        - El primer step, llamado Failing step, debería salir con un código distinto de cero.
        - El segundo step, llamado I will be skipped, debería ejecutarse solo si los pasos anteriores se han completado con éxito. Debería imprimir el siguiente texto: "I will print if previous steps succeed."
        - El tercer step, llamado I will execute, debería ejecutarse solo si alguno de los pasos anteriores ha fallado. Debería imprimir el siguiente texto: "I will print if any previous step fails."
        - El cuarto step, también llamado I will execute, debería ejecutarse solo si el flujo de trabajo no ha sido cancelado. Debería imprimir el siguiente texto: "I will always print, except when the workflow is cancelled."
        - El quinto step, llamado I will execute when cancelled, debería ejecutarse solo cuando el flujo de trabajo ha sido cancelado. 
2. Confirmar los cambios y hacer push del código. Realizar también una ejecución desde la IU. Inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Qué pasos se ejecutaron?
3. Agregar un nuevo step llamado Sleep for 20 seconds antes del primer step del job. El step debería ejecutar el comando de shell sleep 20. Esto le dará tiempo para cancelar manualmente el flujo de trabajo desde la IU.
4. Confirmar los cambios y hacer push del código. Realizar una ejecución desde la IU y cancelar rápidamente el flujo de trabajo haciendo clic en los tres puntos a la derecha de la fila que contiene la información de la ejecución del flujo de trabajo. Inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Qué pasos se ejecutaron?
5. Por último, trabajemos con alguna información de las pull requests. Para ello, agregar tres steps al principio del job (antes del step sleep).
    - El primer step, llamado Print PR title, debería simplemente imprimir el título de la PR en la pantalla.
    - El segundo step, llamado Print PR labels, debería imprimir cualquier etiqueta presente en la PR.
        - La información de la etiqueta está disponible en el contexto github.event.pull_request.labels.
        - La información debería imprimirse en una cadena JSON formateada de manera agradable. Consultar la sección de TIPS a continuación como ayuda.
    - El tercer step, llamado Bug step, debería ejecutarse si el flujo de trabajo no ha sido cancelado y si el título de la PR contiene la cadena fix. Debería imprimir la línea "I am a bug fix".
6. Confirmar los cambios y hacer push del código.
7. Abrir una pull request introduciendo algunos cambios ficticios en el archivo README.md de la raíz y hacer commit de los cambios en una nueva rama. Inspeccionar el resultado de la ejecución del flujo de trabajo.
8. Realiza pruebas cerrando y reabriendo la PR con un título diferente, ahora incluyendo la cadena fix. ¿Ha cambiado algo en la salida de la ejecución del flujo de trabajo?
9. Cambiar los triggers del flujo de trabajo para contener solo workflow_dispatch para evitar que este flujo de trabajo se ejecute con cada push y ensucie la lista de ejecuciones del flujo de trabajo.

## Tips

- Para imprimir una cadena JSON multilínea desde la función toJSON de GitHub, se puede usar el siguiente patrón:

```yaml
steps:
  - name: Print PR labels
    run: |
      cat << EOF
      ${{ toJSON(github.event.pull_request.labels) }}
      EOF
```