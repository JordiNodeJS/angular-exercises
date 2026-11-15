# Angular Exercises — instrucciones del proyecto

Repo personal para aprender Angular con ejercicios pequeños. Un único workspace, un único `node_modules` gestionado con **pnpm**, una app Angular por ejercicio.

## Reglas duras

- **Nunca npm ni yarn.** Todo con `pnpm` (`pnpm install`, `pnpm exec ng ...`). Si una guía o tutorial dice `npm`, tradúcelo.
- **Nunca `ng new` dentro del repo.** El workspace ya existe. Para añadir un ejercicio se usa `ng generate application` (skill `new-angular-exercise`).
- **Una sola instalación de dependencias.** No crear `package.json`, `node_modules` ni lockfiles dentro de `chapters/*/*`.
- **No añadir dependencias** sin pedirlo antes. Si hace falta, justificar y usar `pnpm add`.
- **No cambiar versiones** de Angular, TypeScript, Node ni pnpm sin pedirlo.
- No commitear `node_modules/`, `dist/` ni `.angular/cache/`.
- No tocar otros ejercicios al trabajar en uno.

## Estructura

```
chapters/<capítulo>/<ejercicio>/   → una app Angular (project-root)
shared/                            → solo si de verdad se comparte código
angular.json                       → fuente de verdad de los proyectos
```

- Un diff en `angular.json` significa "ejercicio nuevo".
- `README.md` mantiene la tabla de progreso; actualízala cuando cambie el estado.

## Nombres

| Cosa             | Formato                           | Ejemplo                            |
| ---------------- | --------------------------------- | ---------------------------------- |
| Capítulo         | `NN-slug`                         | `02-estado-datos`                  |
| Ejercicio        | `NN-slug`                         | `03-http`                          |
| Proyecto Angular | `ch<NN>-<NN>-<slug>`              | `ch02-03-http`                     |
| Project root     | `chapters/<capítulo>/<ejercicio>` | `chapters/02-estado-datos/03-http` |

El nombre del proyecto no puede llevar `/`.

## Convenciones de código (Angular 22)

- Componentes **standalone** por defecto: no escribas `standalone: true`.
- **No** declares `changeDetection: OnPush`: es el default en v22.
- Estado con signals: `signal()`, `computed()`, `linkedSignal()`. Deriva con `computed()`, nunca `mutate` (usa `set`/`update`).
- `input()`, `output()`, `model()` en vez de decoradores; `inject()` en vez de inyección por constructor.
- Servicios nuevos: decorador `@Service` (v22+) o `providedIn: 'root'`.
- Formularios nuevos: **Signal Forms** (`@angular/forms/signals`); si no, Reactive Forms. Nunca template-driven.
- Host bindings en `host: {}`. Prohibido `@HostBinding` / `@HostListener`.
- Control de flujo nativo `@if` / `@for` / `@switch`. Prohibido `*ngIf` / `*ngFor` / `*ngSwitch`.
- Nada de `ngClass` ni `ngStyle`: usar bindings `class` / `style`. No importar `CommonModule`, solo las piezas usadas.
- `NgOptimizedImage` para imágenes estáticas (no vale base64 inline).
- TypeScript estricto: nada de `any`; usa `unknown` cuando no sepas el tipo.
- Plantillas simples; componentes pequeños y con una sola responsabilidad. Preferir template inline en componentes pequeños.

## Verificación antes de dar algo por terminado

1. `pnpm exec ng build <proyecto>` compila sin errores.
2. `pnpm exec prettier --check <rutas tocadas>` (o `--write` si toca formatear).
3. Si el ejercicio es de routing o formularios, `pnpm exec ng serve <proyecto>` arranca sin errores.
4. Actualiza la tabla de progreso del `README.md` si cambió el estado del ejercicio.

No digas que algo funciona sin haber ejecutado el build.

## Git

- Rama principal `main`. Rama corta por capítulo solo para experimentos; merge con `--no-ff`.
- Conventional Commits con scope del ejercicio: `feat(ch02-01): signals básicos`, `fix(ch03-04): validador de email`, `docs(ch01): notas`, `chore(repo): ...`.
- Un commit por paso significativo, no uno gigante al cerrar el capítulo.

## Documentación

- APIs de Angular → MCP `angular` (`search_documentation`) o angular.dev. No inventes APIs ni opciones del CLI.
- Otras librerías → MCP `context7`.
- Plan de estudio y progreso global → Notion, "Angular — Roadmap y tutorial".

## Estilo de trabajo

- Cambios pequeños y verificables; nada de refactors oportunistas mientras se resuelve un ejercicio.
- Sin código muerto, sin TODOs huérfanos, sin `console.log` de depuración en el resultado final.
- Si algo del plan no encaja con el código real, dilo en vez de inventar.
