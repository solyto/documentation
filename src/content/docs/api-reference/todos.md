---
title: Todos API
description: CRUD for todos, categories, workspaces, and subtasks.
---

All endpoints require authentication. Base path: `/api/v1/todos`.

## Todos

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos` | List all todos |
| POST | `/v1/todos` | Create a todo |
| GET | `/v1/todos/{todo}` | Get a single todo |
| PUT | `/v1/todos/{todo}` | Update a todo (incl. `is_completed`, `link`) |
| DELETE | `/v1/todos/{todo}` | Delete a todo |
| GET | `/v1/todos/due-date` | Todos grouped by due date |

Todo creation and updates accept: `title`, `description`, `link`, `priority` (low/medium/high), `status` (backlog/pending/in-progress/waiting/almost-done), `effort`, `progress` (0–100), `due_at`, `category_id`, `tags[]`. Natural-language parsing in the `title` (`#tag`, `/category`, `due:`, `repeat:`, `link:`) is applied when creating.

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos/categories` | List categories |
| POST | `/v1/todos/categories` | Create a category (`title`, max 50) |
| GET | `/v1/todos/categories/{category}` | Get a category |
| PUT | `/v1/todos/categories/{category}` | Update a category |
| DELETE | `/v1/todos/categories/{category}` | Delete a category |

## Workspaces

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos/workspaces` | List workspaces |
| POST | `/v1/todos/workspaces` | Create a workspace (`title`, `categories[]`) |
| GET | `/v1/todos/workspaces/{workspace}` | Get a workspace |
| PUT | `/v1/todos/workspaces/{workspace}` | Update a workspace (incl. `is_hideable`) |
| DELETE | `/v1/todos/workspaces/{workspace}` | Delete a workspace |
| POST | `/v1/todos/workspaces/{workspace}/categories/attach` | Attach categories |
| POST | `/v1/todos/workspaces/{workspace}/categories/detach` | Detach categories |

## Subtasks

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/todos/{todo}/subtasks` | Add a subtask (`title`) |
| PUT | `/v1/todos/{todo}/subtasks/{subtask}` | Update a subtask (`title`, `is_completed`) |
| DELETE | `/v1/todos/{todo}/subtasks/{subtask}` | Delete a subtask |
