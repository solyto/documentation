---
title: Todos API
description: CRUD for todos, categories, workspaces, and subtasks.
---

All endpoints require authentication. Base path: `/api/v1/todos`.

## Todos

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos` | List all todos (filterable) |
| POST | `/v1/todos` | Create a todo |
| GET | `/v1/todos/{id}` | Get a single todo |
| PUT | `/v1/todos/{id}` | Update a todo |
| DELETE | `/v1/todos/{id}` | Delete a todo |
| PUT | `/v1/todos/{id}/toggle` | Toggle completion status |
| PUT | `/v1/todos/reorder` | Reorder todos |

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos/categories` | List categories |
| POST | `/v1/todos/categories` | Create a category |
| PUT | `/v1/todos/categories/{id}` | Update a category |
| DELETE | `/v1/todos/categories/{id}` | Delete a category |

## Workspaces

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/todos/workspaces` | List workspaces |
| POST | `/v1/todos/workspaces` | Create a workspace |
| PUT | `/v1/todos/workspaces/{id}` | Update a workspace |
| DELETE | `/v1/todos/workspaces/{id}` | Delete a workspace |

## Subtasks

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/todos/{todo}/subtasks` | Add a subtask |
| PUT | `/v1/todos/{todo}/subtasks/{id}` | Update a subtask |
| DELETE | `/v1/todos/{todo}/subtasks/{id}` | Delete a subtask |

## Todo Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required. Todo title |
| `description` | string | Optional. Details |
| `due_date` | date | Optional. Due date |
| `priority` | string | Optional. low/medium/high |
| `category_id` | integer | Optional. Link to category |
| `workspace_id` | integer | Optional. Link to workspace |
| `completed` | boolean | Completion status |

## List Filters

The `GET /v1/todos` endpoint accepts query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `completed` | boolean | Filter by completion |
| `category_id` | integer | Filter by category |
| `workspace_id` | integer | Filter by workspace |
| `priority` | string | Filter by priority |
| `due_before` | date | Due before date |
| `due_after` | date | Due after date |
| `search` | string | Search in title/description |
