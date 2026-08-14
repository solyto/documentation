---
title: API Presse-papiers
description: Presse-papiers multi-appareils pour le texte et les images.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/clipboard`.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/clipboard` | Lister les entrées du presse-papiers |
| POST | `/v1/clipboard` | Créer une entrée texte |
| POST | `/v1/clipboard/image` | Créer une entrée image |
| GET | `/v1/clipboard/{id}/image` | Récupérer une entrée image |
| DELETE | `/v1/clipboard/{id}` | Supprimer une entrée |

## Lister le presse-papiers

```
GET /v1/clipboard
```

| Paramètre | Type | Description |
|-----------|------|-------------|
| `per_page` | integer | Nombre d'éléments par page |
| `type` | string | Filtre : text ou image |

Retourne les entrées du presse-papiers triées par date de création, les plus récentes en premier.

## Créer une entrée texte

```
POST /v1/clipboard
```

| Champ | Type | Règles |
|-------|------|-------|
| `content` | string | Requis. Contenu textuel |

## Créer une entrée image

```
POST /v1/clipboard/image
Content-Type: multipart/form-data
```

| Champ | Type | Règles |
|-------|------|-------|
| `image` | file | Requis. Fichier image |

## Récupérer une image

```
GET /v1/clipboard/{id}/image
```

Retourne les données binaires brutes de l'image avec l'en-tête `Content-Type` approprié.

## Supprimer une entrée

```
DELETE /v1/clipboard/{id}
```

Supprime définitivement l'entrée du presse-papiers et l'image associée (le cas échéant).
