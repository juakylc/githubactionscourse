## Objetivo
Trabajar con la opción exclude de las matrices para comprender a fondo cómo se comportan.

## Tareas
1. Extienda el trabajo backwards-compatibility añadiendo una opción exclude al mismo nivel que la opción include de los ejercicios anteriores. Agregue una única entrada al array exclude que contenga lo siguiente:
```yaml
exclude:
  - tag: experimental
```
2. Confirme los cambios y haga push del código. Desencadene el flujo de trabajo manualmente desde la IU y tómese unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Fue exitosa la ejecución? Si no, ¿qué mensaje de error se mostró?
3. Modifique la opción exclude eliminando la entrada que contiene el parámetro tag.
4. Añada una opción exclude aque contenga lo siguiente:
```yaml
exclude:
  - so: windows-latest
    node-version: 18.x
```
5. Confirme los cambios y haga push del código. Desencadene el flujo de trabajo manualmente desde la IU y tómese unos momentos para inspeccionar el resultado de la ejecución del flujo de trabajo. ¿Cuántos trabajos se generaron? ¿Qué combinaciones estaban presentes?
