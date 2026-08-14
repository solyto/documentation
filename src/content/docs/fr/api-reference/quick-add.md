---
title: API Ajout rapide
description: Détection automatique du type de contenu à partir d'une URL ou d'un texte.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/dashboard/quick-add`.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/dashboard/quick-add/detect` | Détecter le type de contenu à partir de la saisie |
| POST | `/v1/dashboard/quick-add/commit` | Valider l'élément détecté |

## Détection

```
POST /v1/dashboard/quick-add/detect
```

Analyse une URL ou une chaîne de texte et renvoie le type de contenu détecté, un score de confiance, ainsi qu'une indication sur la nécessité d'une confirmation.

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `content` | string | Requis. URL ou texte à analyser |

**Réponse :**

```json
{
  "success": true,
  "data": {
    "content": "https://www.deezer.com/album/123456",
    "content_type": "music",
    "confidence": 0.95,
    "needs_confirmation": false,
    "metadata": { }
  }
}
```

**Types détectés :**

| Type | Description |
|------|-------------|
| `music` | URL Deezer/Discogs |
| `books` | URL Hardcover/Goodreads |
| `movies` | URL IMDb |
| `games` | URL Steam/BGG |
| `recipes` | URL Chefkoch |
| `links` | Toute autre URL |
| `todo` | Texte contenant `due`, `repeat`, ou `link:` |
| `note` | Texte brut sans signal particulier |
| `plants` | Entrée de plante (sélection manuelle) |
| `quotes` | Entrée de citation (sélection manuelle) |
| `feed` | Abonnement à un flux (sélection manuelle) |
| `clipboard` | Texte du presse-papiers (sélection manuelle) |

Voir [Quick Add](/dashboard/quick-add/) pour les règles de détection. `needs_confirmation` vaut true lorsque la confiance est inférieure à 60 %.

## Validation

```
POST /v1/dashboard/quick-add/commit
```

Enregistre l'élément dans la bibliothèque appropriée.

**Corps de la requête :**

| Champ | Type | Règles |
|-------|------|-------|
| `content` | string | Requis. L'URL ou le texte d'origine |
| `content_type` | string | Requis. L'un des types ci-dessus |
| `metadata` | object | Optionnel. Champs supplémentaires pour la bibliothèque cible |
