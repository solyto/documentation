---
title: API de tareas
description: CRUD de tareas, categorías, espacios de trabajo y subtareas.
---

Todos los endpoints requieren autenticación. Ruta base: `/api/v1/todos`.

## Tareas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/todos` | Listar todas las tareas |
| POST | `/v1/todos` | Crear una tarea |
| GET | `/v1/todos/{todo}` | Obtener una sola tarea |
| PUT | `/v1/todos/{todo}` | Actualizar una tarea (incl. `is_completed`, `link`) |
| DELETE | `/v1/todos/{todo}` | Eliminar una tarea |
| GET | `/v1/todos/due-date` | Tareas agrupadas por fecha de vencimiento |

La creación y actualización de tareas acepta: `title`, `description`, `link`, `priority` (low/medium/high), `status` (backlog/pending/in-progress/waiting/almost-done), `effort`, `progress` (0–100), `due_at`, `category_id`, `tags[]`. Al crear una tarea se aplica el análisis en lenguaje natural del `title` (`#tag`, `/category`, `due:`, `repeat:`, `link:`).

## Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/todos/categories` | Listar categorías |
| POST | `/v1/todos/categories` | Crear una categoría (`title`, máx. 50) |
| GET | `/v1/todos/categories/{category}` | Obtener una categoría |
| PUT | `/v1/todos/categories/{category}` | Actualizar una categoría |
| DELETE | `/v1/todos/categories/{category}` | Eliminar una categoría |

## Espacios de trabajo

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/todos/workspaces` | Listar espacios de trabajo |
| POST | `/v1/todos/workspaces` | Crear un espacio de trabajo (`title`, `categories[]`) |
| GET | `/v1/todos/workspaces/{workspace}` | Obtener un espacio de trabajo |
| PUT | `/v1/todos/workspaces/{workspace}` | Actualizar un espacio de trabajo (incl. `is_hideable`) |
| DELETE | `/v1/todos/workspaces/{workspace}` | Eliminar un espacio de trabajo |
| POST | `/v1/todos/workspaces/{workspace}/categories/attach` | Vincular categorías |
| POST | `/v1/todos/workspaces/{workspace}/categories/detach` | Desvincular categorías |

## Subtareas

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/v1/todos/{todo}/subtasks` | Añadir una subtarea (`title`) |
| PUT | `/v1/todos/{todo}/subtasks/{subtask}` | Actualizar una subtarea (`title`, `is_completed`) |
| DELETE | `/v1/todos/{todo}/subtasks/{subtask}` | Eliminar una subtarea |
