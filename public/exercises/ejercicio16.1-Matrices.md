## Objetivo
Profundizar en el conocimiento sobre cómo trabajar con matrices en GitHub Actions.

## Tareas

1. Crear un archivo llamado 16.1-matrices.yaml en la carpeta .github/workflows en la raíz de su repositorio. Los datos del flujo de trabajo deben ser los siguientes:
  - Nombre: 16 - Working with Matrices
  - desencadenantes:
    - workflow_dispatch: 
  - Trabajos:
    - **backwards-compatibility**:
      - Debería ejecutarse en ubuntu-latest.
      - Debería usar la estrategia de matriz para definir trabajos para las siguientes configuraciones:
        - Versiones de Node 18.x, 20.x y 21.x.
        - Sistemas operativos ubuntu-latest y windows-latest.
      - Debería tener un nombre según la versión de Node y el SO siguiendo el formato: <os>-<node-version>
      - Debería tener dos steps:
        - El primer step, llamado Setup node, debería configurar Node según la versión de la matriz.
        - El segundo step, llamado Perform some tests, deberia salir con codigo distinto de cero debería imprimir una línea única "Running tests on OS <OS value here> and NodeJS <Node version here>".
2. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo.
3. Extender el flujo de trabajo 16.1-matrices.yaml para incluir las siguientes combinaciones en la matriz (si no está seguro de cómo hacerlo, consulte la sección de Tips a continuación):
    - Versión de Node 16.x para el SO ubuntu-latest.
    - Un tag adicional con el valor 'experimental' para la combinación Node 21.x y SSOO ubuntu-latest.
4. Establezca la opción 'fail-fast' bajo la key de estrategia en false.
5. Agregue un nuevo step después de Setup node, llamado Fail if experimental, que debería ejecutarse si y solo si el tag es igual a experimental. El step debería simplemente salir con un código no cero.
6. Cambie el step llamado Perform some tests para, además de imprimir el mensaje original, haga un sleep durante 10 segundos.
7. Agregue un step final después de Perform some tests, llamado Upload test results, que debería imprimir el mensaje "Uploading test results".
8. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo.
9. Cambie la opción fail-fast a true, confirme los cambios y haga push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Cómo impactó el cambio en la configuración de fail-fast en la ejecución del flujo de trabajo?


## Tips

Para incluir una configuración específica o extender una combinación específica de una matriz, podemos usar la opción include con la siguiente sintaxis:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
    os:
      - ubuntu-latest
      - windows-latest
    include:
      - os: ubuntu-latest
        tag: linux
      - os: ubuntu-latest
        node-version: 21.x
```
El ejemplo anterior incluirá la clave tag a todas las combinaciones que incluyan el valor ubuntu-latest para el SSOO, y también agregará una nueva combinación para ubuntu-latest y la versión de nodo 21.x (no tendrá la versión de nodo 21.x configurada para la opción windows-latest). 