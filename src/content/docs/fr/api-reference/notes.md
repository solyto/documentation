---
title: API Notes
description: CRUD pour les notes et les catégories de notes, avec import/export.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/notes`.

## Notes

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/notes` | Lister les notes |
| POST | `/v1/notes` | Créer une note (`title`, `content`, `category_id`, `tags[]`) |
| GET | `/v1/notes/{note}` | Récupérer une note |
| PUT | `/v1/notes/{note}` | Mettre à jour une note (y compris `is_favorite`, `is_starred`) |
| DELETE | `/v1/notes/{note}` | Supprimer une note |
| GET | `/v1/notes/newest` | Notes les plus récentes |

## Catégories

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/notes/categories` | Lister les catégories |
| POST | `/v1/notes/categories` | Créer une catégorie (`title`, `parent_id` — hiérarchique) |
| GET | `/v1/notes/categories/{category}` | Récupérer une catégorie |
| PUT | `/v1/notes/categories/{category}` | Mettre à jour une catégorie |
| DELETE | `/v1/notes/categories/{category}` | Supprimer une catégorie |

Les catégories prennent en charge l'imbrication via `parent_id`, ce qui permet à des dossiers de contenir des sous-dossiers.

## Import / Export

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/notes/import` | Importer des notes depuis un fichier Markdown (`.md`) ou ZIP (`.zip`) (multipart) |
| GET | `/v1/notes/export` | Exporter les notes (l'export complet des données passe par le système d'exportation) |
