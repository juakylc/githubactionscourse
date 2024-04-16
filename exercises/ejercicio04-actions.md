## Objetivo
Explorar cómo podemos utilizar algunos third-party actions para realizar tareas sin necesidad que definirlas desde cero. 
Usaremos una aplicación React que desarrollaremos con la ayuda de la utilidad create-react-app.


## Tareas

1. Acceda al directorio raiz del repositorio y cree una aplicación React dentro de un directorio de aplicación de reacción usando el comando create-react-app:
   ```shell
      npx create-react-app my-app
      cd my-app
      npm start
   ```
    Arrancar la aplicación React con el comando npm start, y abrir un navegador en la dirección http://localhost:3000 para ver la aplicación en funcionamiento.
   **NOTA**: Tened en cuenta que es necesario tener instalado Node.js y npm en su máquina para poder ejecutar este comando.*
   Explorar los archivos y carpetas generados por create-react-app.

2. Crear un nuevo archivo en la carpeta .github/workflows llamado 04-using-actions.yaml para crear un workflow. Los datos del workflow deben ser los siguientes:
    - nombre: 04 - Uso de Actions.
    - desencadente: push
    - Trabajos:
      - **build**, que se ejecuta en ubuntu-latest y tiene dos steps:
        - *'Checkout Code'*, que descargar el código del repositorio en el directorio de trabajo actual.
        - *'Printing Folders'*, que imprime la estructura de la carpeta tras la descarga del código.
3. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow.
4. Elimine el step 'Printing Folders' y agragar dos nuevos steps:
   - *'Node Setup'*, que utilice el action actions/setup-node@v4 para configurar node con la versión 20.x.
   - *'Install Dependencies'*, que instala las dependencias de nuestra aplicación React ejecutando el comando npm ci dentro de la carpeta de la aplicación React. Se puede acceder al directorio antes de ejecutar el comando npm ci, o se puede pasar el  directorio de trabajo añadiendo *working-directory: 04-using-actions/react-app* al step.

5. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow.

6. Agregar un nuevo step después del step 'Install Dependencies' para ejecutar las pruebas automatizadas desde la aplicación React:
   - *'Run Unit Tests'*, que ejecuta las pruebas automatizadas ejecutando el comando 'npm run test' dentro de la carpeta de la aplicación React. Al igual que en el paso anterior, puede acceder al directorio antes de ejecutar el comando npm run test, o puede pasar el directorio de trabajo añadiendo *working-directory: 04-using-actions/react-app* al step.

7. Confirmar los cambios y subir (push) el código. Inspeccionar el resultado de la ejecución del workflow.
8. Reducir la lista de desencadenadores para dejar solo workflow_dispatch, para evitar que este workflow se ejecute con cada push y ensucie la lista de ejecuciones de workflow.


## Tips

- Para generar una aplicación React con un solo comando, se puede hacer uso de create-react-app (https://create-react-app.dev/docs/getting-started/quick-start/).

- La sintáxis para utilizar un third-party action es muy sencilla. En lugar de usar la palabra clave 'run' y definir un script de shell, se debe usar la palabra clave 'uses' y pasar el nombre y la versión del action que se desea utilizar. A continuación se muestra un ejemplo de la sintaxis: 
    ```yaml
    steps:
      - name: Using the Checkout Action
        uses: actions/checkout@v4
    ```
- Actions para este ejercicio:
    - *action/checkout@v4*: Se utiliza para verificar y descargar el código del repositorio en el directorio de trabajo del runner usado para ejecutar el workflow. Sin esto, no se podría trabajar con el código de nuestro repositorio. 
    - *action/setup-node@v4*: se utiliza para configurar node con una versión específica, así como cualquier otra dependencia necesaria. Para proporcionar una versión específica de Node para su configuración, se puede utilizar la siguiente sintáxis:
    ```yaml
    steps:
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
    ```
