---
title: API Suivi du temps
description: Projets, catégories, entrées de temps et statistiques.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/time-tracking`.

## Catégories

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/categories` | Lister les catégories |
| POST | `/v1/time-tracking/categories` | Créer une catégorie (`title`, `color`) |
| GET | `/v1/time-tracking/categories/{category}` | Récupérer une catégorie |
| PUT | `/v1/time-tracking/categories/{category}` | Mettre à jour une catégorie |
| DELETE | `/v1/time-tracking/categories/{category}` | Supprimer une catégorie |

## Projets

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/projects` | Lister les projets |
| POST | `/v1/time-tracking/projects` | Créer un projet (`title`, `description`, `category_ids[]`) |
| GET | `/v1/time-tracking/projects/{project}` | Récupérer un projet |
| PUT | `/v1/time-tracking/projects/{project}` | Mettre à jour un projet |
| DELETE | `/v1/time-tracking/projects/{project}` | Supprimer un projet (supprime également ses entrées) |

## Entrées de temps

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries` | Lister les entrées de temps |
| POST | `/v1/time-tracking/entries` | Créer une entrée manuelle (`started_at`, `stopped_at`, `duration_minutes`, `project_id`, `description`) |
| GET | `/v1/time-tracking/entries/{entry}` | Récupérer une entrée |
| PUT | `/v1/time-tracking/entries/{entry}` | Mettre à jour une entrée |
| DELETE | `/v1/time-tracking/entries/{entry}` | Supprimer une entrée |

## Minuteur

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/time-tracking/entries/start` | Démarrer un minuteur (409 si un minuteur est déjà en cours) |
| POST | `/v1/time-tracking/entries/{entry}/stop` | Arrêter le minuteur en cours (409 s'il est déjà arrêté) |

## Statistiques

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries/statistics` | Récupérer les statistiques entre les dates `from`/`to` |
