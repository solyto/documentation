---
title: Todos-API
description: CRUD für Todos, Kategorien, Workspaces und Unteraufgaben.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/todos`.

## Todos

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/todos` | Alle Todos auflisten |
| POST | `/v1/todos` | Ein Todo erstellen |
| GET | `/v1/todos/{todo}` | Ein einzelnes Todo abrufen |
| PUT | `/v1/todos/{todo}` | Ein Todo aktualisieren (inkl. `is_completed`, `link`) |
| DELETE | `/v1/todos/{todo}` | Ein Todo löschen |
| GET | `/v1/todos/due-date` | Todos gruppiert nach Fälligkeitsdatum |

Beim Erstellen und Aktualisieren von Todos werden akzeptiert: `title`, `description`, `link`, `priority` (low/medium/high), `status` (backlog/pending/in-progress/waiting/almost-done), `effort`, `progress` (0–100), `due_at`, `category_id`, `tags[]`. Beim Erstellen wird die Verarbeitung natürlicher Sprache im `title` angewendet (`#tag`, `/category`, `due:`, `repeat:`, `link:`).

## Kategorien

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/todos/categories` | Kategorien auflisten |
| POST | `/v1/todos/categories` | Eine Kategorie erstellen (`title`, max. 50) |
| GET | `/v1/todos/categories/{category}` | Eine Kategorie abrufen |
| PUT | `/v1/todos/categories/{category}` | Eine Kategorie aktualisieren |
| DELETE | `/v1/todos/categories/{category}` | Eine Kategorie löschen |

## Workspaces

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/todos/workspaces` | Workspaces auflisten |
| POST | `/v1/todos/workspaces` | Einen Workspace erstellen (`title`, `categories[]`) |
| GET | `/v1/todos/workspaces/{workspace}` | Einen Workspace abrufen |
| PUT | `/v1/todos/workspaces/{workspace}` | Einen Workspace aktualisieren (inkl. `is_hideable`) |
| DELETE | `/v1/todos/workspaces/{workspace}` | Einen Workspace löschen |
| POST | `/v1/todos/workspaces/{workspace}/categories/attach` | Kategorien zuordnen |
| POST | `/v1/todos/workspaces/{workspace}/categories/detach` | Kategorien entfernen |

## Unteraufgaben

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/todos/{todo}/subtasks` | Eine Unteraufgabe hinzufügen (`title`) |
| PUT | `/v1/todos/{todo}/subtasks/{subtask}` | Eine Unteraufgabe aktualisieren (`title`, `is_completed`) |
| DELETE | `/v1/todos/{todo}/subtasks/{subtask}` | Eine Unteraufgabe löschen |
