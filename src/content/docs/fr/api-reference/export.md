---
title: API Exportation de données
description: Exportez vos données solyto sous forme de fichier ZIP.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/export`.

Limité à **1 requête par 24 heures** et par utilisateur.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/export` | Demander une nouvelle exportation (`features[]`) |
| GET | `/v1/export/status` | Vérifier l'état de la tâche d'exportation |
| GET | `/v1/export/{id}/download` | Télécharger le fichier d'exportation (410 si expiré) |

## Demander une exportation

```
POST /v1/export
```

Lance une tâche d'exportation asynchrone. Le corps de la requête liste les fonctionnalités à inclure ; voir [Exportation des données](/integrations/exporting/) pour la liste complète.

**Valeurs de statut :** `pending`, `in-progress`, `completed`, `failed`.

## Vérifier l'état

```
GET /v1/export/status
```

Retourne la dernière exportation avec son statut, `expires_at`, et son expiration éventuelle.

## Télécharger l'exportation

```
GET /v1/export/{id}/download
```

Télécharge le fichier ZIP contenant l'ensemble des données exportées. Les fichiers expirent après **48 heures** — une requête sur un fichier expiré retourne 410.
