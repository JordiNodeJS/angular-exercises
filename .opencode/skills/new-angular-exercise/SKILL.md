---
name: Nuevo ejercicio Angular
description: Añade un ejercicio Angular a chapters/ con el nombre, project-root y flags correctos, lo verifica con un build, actualiza el README y hace el commit.
---

# Nuevo ejercicio Angular

Úsala siempre que haya que añadir un ejercicio al repo de `chapters/`.

## 1. Confirmar datos

- Capítulo y ejercicio, por ejemplo `02-estado-datos` / `03-http`.
- Nombre del proyecto: `ch02-03-http`.
- Ruta: `chapters/02-estado-datos/03-http`.

Comprueba que:

- la carpeta existe en `chapters/`;
- el nombre del proyecto **no** está ya en `angular.json`.

## 2. Decidir flags

- `--minimal` (sin tests) salvo en ejercicios de testing.
- `--style=css` siempre, para no arrastrar preprocesadores.

## 3. Generar

```bash
pnpm exec ng generate application ch02-03-http \
  --project-root=chapters/02-estado-datos/03-http \
  --style=css --minimal
```

## 4. Rematar

1. Borra `chapters/<capítulo>/<ejercicio>/.gitkeep`.
2. Compila: `pnpm exec ng build ch02-03-http`.
3. Formatea: `pnpm exec prettier --write "chapters/<capítulo>/<ejercicio>/**/*.{ts,html,css}"`.
4. Marca el ejercicio como `En progreso` en la tabla de progreso de `README.md` y en su fila de la base de datos `Roadmap Angular` de Notion (`collection://419f4dc3-b462-814c-9ab4-000bbe4beb0e`, buscando por `Tema`).
5. Commit: `feat(ch02-03): scaffold del ejercicio`.

## 5. Reportar

- Ruta del ejercicio.
- Comando para servirlo: `pnpm exec ng serve ch02-03-http`.
- Cualquier warning del build que no sea ruido conocido.

## Prohibido

- `ng new`, `npm`, `yarn`.
- Crear `package.json` o `node_modules` dentro del ejercicio.
- Tocar otros proyectos, cambiar versiones o añadir dependencias.

## Si falla

- `Cannot find project` → el nombre del proyecto no coincide con `angular.json`.
- Carpeta no vacía o conflicto → revisa que no exista ya una app con ese `project-root`.
- Error de build sobre dependencias → no reinstales con npm; usa `pnpm install` y reporta.
