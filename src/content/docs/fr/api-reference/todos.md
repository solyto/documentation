---
title: API Tâches
description: CRUD pour les tâches, catégories, espaces de travail et sous-tâches.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/todos`.

## Tâches

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/todos` | Lister toutes les tâches |
| POST | `/v1/todos` | Créer une tâche |
| GET | `/v1/todos/{todo}` | Récupérer une tâche |
| PUT | `/v1/todos/{todo}` | Mettre à jour une tâche (y compris `is_completed`, `link`) |
| DELETE | `/v1/todos/{todo}` | Supprimer une tâche |
| GET | `/v1/todos/due-date` | Tâches regroupées par date d'échéance |

La création et la mise à jour d'une tâche acceptent : `title`, `description`, `link`, `priority` (low/medium/high), `status` (backlog/pending/in-progress/waiting/almost-done), `effort`, `progress` (0 à 100), `due_at`, `category_id`, `tags[]`. L'analyse en langage naturel du `title` (`#tag`, `/category`, `due:`, `repeat:`, `link:`) est appliquée à la création.

## Catégories

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/todos/categories` | Lister les catégories |
| POST | `/v1/todos/categories` | Créer une catégorie (`title`, 50 caractères max) |
| GET | `/v1/todos/categories/{category}` | Récupérer une catégorie |
| PUT | `/v1/todos/categories/{category}` | Mettre à jour une catégorie |
| DELETE | `/v1/todos/categories/{category}` | Supprimer une catégorie |

## Espaces de travail

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/todos/workspaces` | Lister les espaces de travail |
| POST | `/v1/todos/workspaces` | Créer un espace de travail (`title`, `categories[]`) |
| GET | `/v1/todos/workspaces/{workspace}` | Récupérer un espace de travail |
| PUT | `/v1/todos/workspaces/{workspace}` | Mettre à jour un espace de travail (y compris `is_hideable`) |
| DELETE | `/v1/todos/workspaces/{workspace}` | Supprimer un espace de travail |
| POST | `/v1/todos/workspaces/{workspace}/categories/attach` | Attacher des catégories |
| POST | `/v1/todos/workspaces/{workspace}/categories/detach` | Détacher des catégories |

## Sous-tâches

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/todos/{todo}/subtasks` | Ajouter une sous-tâche (`title`) |
| PUT | `/v1/todos/{todo}/subtasks/{subtask}` | Mettre à jour une sous-tâche (`title`, `is_completed`) |
| DELETE | `/v1/todos/{todo}/subtasks/{subtask}` | Supprimer une sous-tâche |
