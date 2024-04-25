## Objetivo
Trabajar con la opción include de las matrices para comprender a fondo cómo se comportan.

## Tareas

1. Extienda el flujo de trabajo 16.1-matrices.yaml con un nuevo job:
  - Debería llamarse include-example.
  - Debería ejecutarse en ubuntu-latest.
  - Debería tener una matriz con tres parámetros:
    - color, con valores red y green;
    - shape, con valores circle y square;
    - size, con valores small y large.
  - Además, agregue la siguiente combinación al array include:
    include:
        - color: red
          shape: triangle
  - El nombre del trabajo debería tener el siguiente formato: <color value>-<shape value>-<size value>
  - El trabajo debería contener un único step, llamado Dummy step, que imprime la combinación de color, shape y size en la pantalla siguiendo el mismo formato que el nombre del trabajo.

2. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Cuántos trabajos se generaron? ¿Qué combinaciones estaban presentes?
3. Ahora extienda el trabajo include-example::
  - Agregar una nueva entrada al principio del array include que contenga:
    include:
        - opacity: 50
  - Ajuste tanto la opción de nombre del trabajo como la sentencia 'echo' del step Dummy para incluir el valor del parámetro opacity.
4. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Cuántos trabajos se generaron? ¿Qué combinaciones estaban presentes?
5. Ahora extienda la opción include del trabajo include-example agregando las siguientes dos entradas al array inmediatamente después de la entrada de opacity:
  - La primera entrada debería tener dos parámetros: color, con un valor de red, y opacity, con un valor de 75.
  - La segunda entrada debería tener dos parámetros: shape, con un valor de circle, y opacity, con un valor de 100.
6. En este punto, la opción include debería verse así:
    include:
        - opacity: 50
        - color: red
          opacity: 75
        - shape: circle
          opacity: 100
        - color: red
          shape: triangle
7. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Qué combinaciones estaban presentes? ¿Cómo se sobrescribieron los valores de ciertas propiedades basándose en las nuevas entradas?
8. Por último, pero no menos importante, mueva la primera entrada del array include (opacity: 50) a la última posición en el array.
9. Confirmar los cambios y hacer push del código. Desencadenar el flujo de trabajo desde la IU y tomar unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Cómo impactó este cambio en los valores de la propiedad opacity para los trabajos generados?
