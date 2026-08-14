---
title: API de seguimiento de tiempo
description: Proyectos, categorías, entradas de tiempo y estadísticas.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/time-tracking`.

## Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/time-tracking/categories` | Listar categorías |
| POST | `/v1/time-tracking/categories` | Crear una categoría (`title`, `color`) |
| GET | `/v1/time-tracking/categories/{category}` | Obtener una categoría |
| PUT | `/v1/time-tracking/categories/{category}` | Actualizar una categoría |
| DELETE | `/v1/time-tracking/categories/{category}` | Eliminar una categoría |

## Proyectos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/time-tracking/projects` | Listar proyectos |
| POST | `/v1/time-tracking/projects` | Crear un proyecto (`title`, `description`, `category_ids[]`) |
| GET | `/v1/time-tracking/projects/{project}` | Obtener un proyecto |
| PUT | `/v1/time-tracking/projects/{project}` | Actualizar un proyecto |
| DELETE | `/v1/time-tracking/projects/{project}` | Eliminar un proyecto (elimina sus entradas) |

## Entradas de tiempo

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries` | Listar entradas de tiempo |
| POST | `/v1/time-tracking/entries` | Crear una entrada manual (`started_at`, `stopped_at`, `duration_minutes`, `project_id`, `description`) |
| GET | `/v1/time-tracking/entries/{entry}` | Obtener una entrada |
| PUT | `/v1/time-tracking/entries/{entry}` | Actualizar una entrada |
| DELETE | `/v1/time-tracking/entries/{entry}` | Eliminar una entrada |

## Cronómetro

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/time-tracking/entries/start` | Iniciar un cronómetro (409 si ya hay uno en marcha) |
| POST | `/v1/time-tracking/entries/{entry}/stop` | Detener el cronómetro en marcha (409 si ya está detenido) |

## Estadísticas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries/statistics` | Obtener estadísticas entre fechas `from`/`to` |
