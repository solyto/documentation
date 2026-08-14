---
title: API de notas
description: CRUD de notas y categorías de notas con importación/exportación.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/notes`.

## Notas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/notes` | Listar notas |
| POST | `/v1/notes` | Crear una nota (`title`, `content`, `category_id`, `tags[]`) |
| GET | `/v1/notes/{note}` | Obtener una sola nota |
| PUT | `/v1/notes/{note}` | Actualizar una nota (incl. `is_favorite`, `is_starred`) |
| DELETE | `/v1/notes/{note}` | Eliminar una nota |
| GET | `/v1/notes/newest` | Notas más recientes |

## Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/notes/categories` | Listar categorías |
| POST | `/v1/notes/categories` | Crear una categoría (`title`, `parent_id` — jerárquica) |
| GET | `/v1/notes/categories/{category}` | Obtener una categoría |
| PUT | `/v1/notes/categories/{category}` | Actualizar una categoría |
| DELETE | `/v1/notes/categories/{category}` | Eliminar una categoría |

Las categorías admiten anidación mediante `parent_id`, de modo que las carpetas pueden contener subcarpetas.

## Importación / exportación

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/notes/import` | Importar notas desde un archivo Markdown (`.md`) o ZIP (`.zip`) (multipart) |
| GET | `/v1/notes/export` | Exportar notas (la exportación completa de datos se hace a través del sistema de exportación) |
