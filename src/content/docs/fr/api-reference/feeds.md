---
title: API Flux
description: Abonnements et éléments de flux RSS/Atom.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/feeds`.

## Abonnements

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/feeds/subscriptions` | Lister les flux suivis |
| POST | `/v1/feeds/subscriptions` | S'abonner à un flux (`title`, `url`, `whitelist`, `blacklist` ; 409 si doublon) |
| GET | `/v1/feeds/subscriptions/{feedSubscription}` | Afficher un abonnement |
| PUT | `/v1/feeds/subscriptions/{feedSubscription}` | Modifier un abonnement (titre, whitelist, blacklist) |
| DELETE | `/v1/feeds/subscriptions/{feedSubscription}` | Se désabonner d'un flux |

## Éléments de flux

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/feeds/items` | Lister les éléments de flux (`offset`, `limit` ou `all` ; retourne `has_more` et `feed_counts`) |

## Découverte et test

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/feeds/available` | Parcourir les flux disponibles (pagination par offset) |
| GET | `/v1/feeds/search` | Rechercher des flux (`search`, 2 caractères minimum) |
| GET | `/v1/feeds/friends` | Flux suivis par vos amis |
| POST | `/v1/feeds/test` | Tester une URL de flux, retourne jusqu'à 5 éléments d'exemple |

## Tester un flux

```
POST /v1/feeds/test
```

| Champ | Type | Règles |
|-------|------|-------|
| `url` | string | Requis. URL à tester |

Retourne jusqu'à 5 éléments d'exemple afin de vérifier un flux avant de vous y abonner.
