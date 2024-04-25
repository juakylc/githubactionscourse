## Objetivo
Explorar cómo trabajar con entornos en GitHub Actions, así como sus limitaciones para repositorios no públicos.

## Tareas
0. Recordar que para poder trabajar con entornos, es necesario tener un repositorio público. Si su repositorio es privado, no podrá completar este ejercicio.

1. Crear un archivo llamado 17-environments.yaml en la carpeta .github/workflows en la raíz de su repositorio.
  - Nombre: 17 - Working with Environments
  - desencadenantes:
    - workflow_dispatch: 
      - El workflow_dispatch también debería recibir un input llamado target-env, de tipo environment y con un valor predeterminado de pre.
  - Establezca la opción run-name del flujo de trabajo en 17 - Working with Environments | env - recuperar el valor de target-env aquí
  - Trabajos:
    - **echo**:
      - Debería ejecutarse en ubuntu-latest.
      - Debería tener el key del job *environment* seteado en el valor de input recibido.
      - Debería definir una variable env llamada my-env-value con el valor de MY_ENV_VALUE, que debería recuperarse de las variables de entorno a través del contexto vars. Si no hay valor disponible, debería ser 'default value'.
      - El trabajo debería contener un único step, llamado 'Echo vars', que debería imprimir "Env variable: <recuperar el valor de my-env-value aquí>" en la pantalla.
2. Crear un entorno "pro" y "pre":
    2.1 Crear y configurar el entorno "pro":
        - En la página del repositorio, haga clic en Settings.
        - En el menú de la izquierda, haga clic en Environments.
        - Haga clic en New Environment.
        - Nómbrelo pro y luego haga clic en Configure Environment.
        - Marque la opción Required reviewers.
        - Añádete a ti mismo como revisor requerido.
        - Marque la opción Wait time. y establezca su valor en 1 minuto.
        - Pinchar en Save Protection Rules.
        - Asegúrese de que el entorno tenga una variable llamada MY_ENV_VALUE con el valor 'PRODUCTION' value (se puede agregar desplazándose hasta la parte inferior de la página y haciendo clic en Agregar variable).
   2.2 Crear y configurar el entorno "pre":
      - En la página del repositorio, haga clic en Settings.
      - En el menú de la izquierda, haga clic en Environments.
      - Haga clic en New Environment.
      - Nómbrelo "pre" y luego haga clic en Configure Environment.
      - No es necesario ninguna configuración adicional, puede volver a la página del repositorio.
3. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo manualmente desde la IU y tómese unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo.
4. Modificar el flujo de trabajo:
    - Eliminar la opción run-name.
    - Eliminar el input target-env.
    - Renombrar el job echo a deploy-pre.
    - Hardcodear el entorno de deploy-pre a pre.
    - Cambiar la sentencia del step Echo vars para imprimir "Deploying to PRE".
    - Agregar un nuevo job llamado e2e-tests:
      - Debería ejecutarse en ubuntu-latest.
      - Debería ejecutarse si y solo si el trabajo deploy-pre se completa con éxito.
      - Debería contener un único step, llamado E2E tests, que imprime "Running E2E" en la pantalla.
    - Agregar otro job llamado deploy-pro:
      - Debería ejecutarse en ubuntu-latest.
      - Debería ejecutarse si y solo si el trabajo e2e-tests se completa con éxito.
      - Debería tener el key del job *environment* seteado en pro.
      - Debería definir una variable env llamada my-env-value con el valor de MY_ENV_VALUE, que debería recuperarse de las variables de entorno a través del contexto vars. Si no hay valor disponible, debería ser 'default value'.
      - El trabajo debería contener un único step, llamado 'Echo vars', que debería imprimir "Deploying to PRO" en la pantalla.
5. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo manualmente desde la IU y tómese unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Qué pasó con el trabajo del entorno pro? ¿Cómo lo aprobaste?
