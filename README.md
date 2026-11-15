# Angular Exercises

Repo de ejercicios de Angular. Un único workspace, un único `node_modules` (pnpm), una app por ejercicio.

## Estructura

```
angular-exercises/
├── chapters/
│   ├── 01-fundamentos/
│   │   ├── 01-hola-mundo/
│   │   ├── 02-templates/
│   │   ├── 03-control-flow/
│   │   └── 04-pipes/
│   ├── 02-estado-datos/
│   │   ├── 01-signals/
│   │   ├── 02-servicios-di/
│   │   ├── 03-http/
│   │   └── 04-rxjs/
│   ├── 03-routing-forms/
│   │   ├── 01-router/
│   │   ├── 02-lazy-loading/
│   │   ├── 03-guards/
│   │   └── 04-reactive-forms/
│   └── 04-calidad/
│       ├── 01-testing/
│       ├── 02-build/
│       └── 03-ssr/
└── shared/            (opcional, librería común)
```

## Convenciones

- Capítulos y ejercicios con dos dígitos: orden alfabético = orden del plan.
- Nombre del proyecto Angular: `ch01-01-hola-mundo` (sin `/`, no permitido).
- Ruta en disco: `--project-root=chapters/01-fundamentos/01-hola-mundo`.
- Una sola instalación: `pnpm`, nunca `npm`.

## Reglas para asistentes (IA)

- **`AGENTS.md`** (raíz): reglas duras del repo — solo pnpm, prohibido `ng new`, verificación con build, convenciones de Angular 22 y formato de commits.
- **`.opencode/skills/new-angular-exercise/`**: skill que crea un ejercicio con el nombre y `--project-root` correctos, compila, borra el `.gitkeep` y actualiza la tabla de progreso.

OpenCode las carga solo al abrir esta carpeta como workspace.

## Estado

Workspace ya creado y con dependencias instaladas:

| Pieza       | Versión |
| ----------- | ------- |
| Angular CLI | 22.2.7  |
| Angular     | 22.2.6  |
| TypeScript  | 6.0.3   |
| Node.js     | 24.x    |
| pnpm        | 11.21.0 |

- Store de pnpm: `G:\.pnpm-store\v11` (los paquetes se enlazan, no se copian).
- `angular.json` tiene `newProjectRoot: "chapters"`.
- `.gitattributes` fuerza `LF` para no tener diffs falsos entre Windows y CI.

```bash
pnpm install          # solo si clonas el repo en otra máquina
pnpm exec ng version
```

> Nota: si algún día hay que rehacer el workspace, `ng new` no puede escribir sobre esta carpeta (ya tiene contenido). Se genera en un temporal con `--create-application=false` y se copian solo los ficheros de raíz.

## Añadir un ejercicio

```bash
pnpm exec ng generate application ch01-01-hola-mundo \
  --project-root=chapters/01-fundamentos/01-hola-mundo \
  --minimal --style=css

pnpm exec ng serve ch01-01-hola-mundo
```

- `--minimal` evita tests: úsalo salvo en el capítulo de testing.
- Al generar la app, borra el `.gitkeep` de esa carpeta; ya no hace falta.
- Cada app corre en su propio puerto si lo indicas: `pnpm exec ng serve ch02-01-signals --port 4201`.

## Progreso

| Capítulo           | Ejercicio         | Estado      |
| ------------------ | ----------------- | ----------- |
| 01 Fundamentos     | 01-hola-mundo     | Sin empezar |
| 01 Fundamentos     | 02-templates      | Sin empezar |
| 01 Fundamentos     | 03-control-flow   | Sin empezar |
| 01 Fundamentos     | 04-pipes          | Sin empezar |
| 02 Estado y datos  | 01-signals        | Sin empezar |
| 02 Estado y datos  | 02-servicios-di   | Sin empezar |
| 02 Estado y datos  | 03-http           | Sin empezar |
| 02 Estado y datos  | 04-rxjs           | Sin empezar |
| 03 Routing y forms | 01-router         | Sin empezar |
| 03 Routing y forms | 02-lazy-loading   | Sin empezar |
| 03 Routing y forms | 03-guards         | Sin empezar |
| 03 Routing y forms | 04-reactive-forms | Sin empezar |
| 04 Calidad         | 01-testing        | Sin empezar |
| 04 Calidad         | 02-build          | Sin empezar |
| 04 Calidad         | 03-ssr            | Sin empezar |

Plan completo: Notion → Self-Taught → "Angular — Roadmap y tutorial".
