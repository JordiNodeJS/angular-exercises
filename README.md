# Angular Exercises

Repo de ejercicios de Angular. Un único workspace, un único `node_modules` (pnpm), una app por ejercicio.

## Estructura

```
angular-exercises/
├── chapters/
│   ├── 01-fundamentals/
│   │   ├── 01-hello-world/
│   │   ├── 02-templates/
│   │   ├── 03-control-flow/
│   │   └── 04-pipes/
│   ├── 02-state-data/
│   │   ├── 01-signals/
│   │   ├── 02-services-di/
│   │   ├── 03-http/
│   │   └── 04-rxjs/
│   ├── 03-routing-forms/
│   │   ├── 01-router/
│   │   ├── 02-lazy-loading/
│   │   ├── 03-guards/
│   │   └── 04-reactive-forms/
│   └── 04-quality/
│       ├── 01-testing/
│       ├── 02-build/
│       └── 03-ssr/
├── docs/              ← clases de estudio en HTML (una por ejercicio)
└── shared/            (opcional, librería común)
```

## Convenciones

- Capítulos y ejercicios con dos dígitos: orden alfabético = orden del plan.
- Nombres de carpetas **en inglés**, kebab-case: `01-fundamentals`, `01-hello-world`.
- Nombre del proyecto Angular: `ch01-01-hello-world` (sin `/`, no permitido).
- Ruta en disco: `--project-root=chapters/01-fundamentals/01-hello-world`.
- Una sola instalación: `pnpm`, nunca `npm`.

## Reglas para asistentes (IA)

- **`AGENTS.md`** (raíz): reglas duras del repo — solo pnpm, prohibido `ng new`, verificación con build, convenciones de Angular 22 y formato de commits.
- **`.opencode/skills/new-angular-exercise/`**: skill que crea un ejercicio con el nombre y `--project-root` correctos, compila, borra el `.gitkeep` y actualiza el progreso (README + Notion).

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
ng version
```

> Nota: si algún día hay que rehacer el workspace, `ng new` no puede escribir sobre esta carpeta (ya tiene contenido). Se genera en un temporal con `--create-application=false` y se copian solo los ficheros de raíz.

## Añadir un ejercicio

```bash
ng generate application ch01-01-hello-world \
  --project-root=chapters/01-fundamentals/01-hello-world \
  --minimal --style=css

ng serve ch01-01-hello-world
```

- `--minimal` evita tests: úsalo salvo en el capítulo de testing.
- Al generar la app, borra el `.gitkeep` de esa carpeta; ya no hace falta.
- Cada app corre en su propio puerto si lo indicas: `ng serve ch02-01-signals --port 4201`.
- Los ejemplos usan `ng` (CLI global). Si prefieres la versión del workspace, el prefijo es `pnpm exec ng`; `ng version` te dice cuál estás ejecutando.

## Clases

La teoría de cada ejercicio vive en `docs/`, en HTML estático. Se abre con doble clic: no necesita
servidor, build ni dependencias.

```bash
start docs/index.html          # Windows
```

- `docs/index.html` es el índice y el orden recomendado.
- Una clase por ejercicio, con la misma ruta que su app: `docs/03-routing-forms/01-router.html`.
- El estado real del ejercicio está en la tabla de progreso de abajo y en Notion, no en el HTML.
- Al crear un ejercicio nuevo, añade su clase y enlázala desde el índice.
- `docs/**/*.html` se formatea con el parser HTML de Prettier, no con el de Angular
  (ver `.prettierrc`).

## Progreso

| Chapter          | Exercise          | Status      |
| ---------------- | ----------------- | ----------- |
| 01-fundamentals  | 01-hello-world    | In progress |
| 01-fundamentals  | 02-templates      | Not started |
| 01-fundamentals  | 03-control-flow   | Not started |
| 01-fundamentals  | 04-pipes          | Not started |
| 02-state-data    | 01-signals        | Not started |
| 02-state-data    | 02-services-di    | Not started |
| 02-state-data    | 03-http           | Not started |
| 02-state-data    | 04-rxjs           | Not started |
| 03-routing-forms | 01-router         | Not started |
| 03-routing-forms | 02-lazy-loading   | Not started |
| 03-routing-forms | 03-guards         | Not started |
| 03-routing-forms | 04-reactive-forms | Not started |
| 04-quality       | 01-testing        | Not started |
| 04-quality       | 02-build          | Not started |
| 04-quality       | 03-ssr            | Not started |

Plan completo: Notion → Self-Taught → "Angular — Roadmap y tutorial".
