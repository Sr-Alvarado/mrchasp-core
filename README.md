# mrchasp-core

Contrato de datos de MrChasp: un Sanity Studio con el esquema mínimo que consumen todas las webs de `*.mrchasp.com`.

- Studio: https://core.mrchasp.com (Vercel, proyecto `mrchasp-core`)
- Sanity: proyecto `6wzh28a3`, dataset `production` (lectura pública)
- Imágenes: tipo `image` nativo de Sanity con hotspot, almacenadas en el dataset.

## Tipos

| Tipo       | Descripción                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `profile`  | Documento único (`_id: profile`): usuario, alias, nombre, bio e imágenes                                 |
| `theme`    | Documento único (`_id: theme`): paletas `light` y `dark` (tipo `palette`) compartidas por todas las webs |
| `channel`  | Redes y contacto                                                                                         |
| `site`     | Webs de `*.mrchasp.com` con sus colores                                                                  |
| `project`  | Proyectos                                                                                                |
| `feedItem` | Publicaciones agregadas de otras fuentes                                                                 |

Las variantes del nombre (short, common, display, full) no se guardan: se derivan en las consultas o en las webs.

## Desarrollo

```sh
pnpm install
pnpm dev          # Studio en http://localhost:3333
pnpm biome check  # lint y formato
pnpm typegen      # extrae el esquema y regenera sanity.types.ts
```

`.env` (local, fuera del repo) y Vercel guardan `SANITY_API_WRITE_TOKEN`.

## Añadir un campo

1. Añade el `defineField` al tipo en `schemaTypes/<tipo>.ts`.
2. `pnpm typegen` y versiona `sanity.types.ts`.
3. Redespliega (ver abajo).

## Añadir un tipo

1. Crea `schemaTypes/<tipo>.ts` con `defineType`.
2. Regístralo en `schemaTypes/index.ts`.
3. Si debe ser un documento único, añádelo a `singletonTypes.ts` y crea el documento con `_id` igual al nombre del tipo.
4. `pnpm typegen` y redespliega.

## Añadir un idioma

Añádelo a `locales` en `schemaTypes/locales.ts`. Los tipos `localeString` y `localeText` se generan a partir de esa constante. Después `pnpm typegen` y redespliega.

## Redesplegar

```sh
pnpm schema:deploy  # publica el esquema en Sanity
git push            # Vercel despliega el Studio desde main
```
