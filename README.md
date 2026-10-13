-Ejercicio 1

1. ¿Porqué el Layout no necesita saber que es una tienda?
   Porque solo recibe piezas de interfaz (encabezado, pie y "children") y las acomoda. No usa
   productos ni carrito; el contenido se lo da lo usa (App). Así se puede reutilizar para
   cualquier página.

-Ejercicio 2

2. ¿Qué pasa si escribe `onClick={onAgregar(producto)}` sin la flecha?
   La función se ejecuta durante el render, no al hacer clic, y a "onClick" se le asigna lo que
   devuelve ("undefined"). Además, al cambiar el estado se vuelve a renderizar y se llama otra
   vez, lo que puede causar un ciclo infinito de renders.

Ejercicio 3

3. ¿Por qué con `carrito.push(...)` el contador no se mueve y no sale ningún error?
   "push" muta al arreglo original sin cambiar su referencia. React compara la referencia
   anterior con la nueva, ve que es la misma y no vuelve a renderizar. Por eso no hay error ni
   actualización; hay que usar `setCarrito([...carrito, producto])`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
