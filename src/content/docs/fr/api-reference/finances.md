---
title: API Finances
description: Suivi budgétaire et gestion du patrimoine.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/finances`.

## Budget

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/finances/budget` | Lister les éléments du budget |
| POST | `/v1/finances/budget` | Créer un élément de budget (`title`, `type`, `value`) |
| GET | `/v1/finances/budget/{budget}` | Récupérer un élément de budget |
| PUT | `/v1/finances/budget/{budget}` | Modifier un élément de budget |
| DELETE | `/v1/finances/budget/{budget}` | Supprimer un élément de budget |

## Champs de patrimoine

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/finances/wealth/fields` | Lister les champs de patrimoine |
| POST | `/v1/finances/wealth/fields` | Créer un champ de patrimoine (`title`) |
| PUT | `/v1/finances/wealth/fields/{field}` | Modifier un champ de patrimoine |
| DELETE | `/v1/finances/wealth/fields/{field}` | Supprimer un champ de patrimoine |

## Valeurs de patrimoine

| Méthode | Chemin | Description |
|--------|------|-------------|
| PUT | `/v1/finances/wealth/fields/{field}/value` | Définir la valeur actuelle d'un champ (`value`) |

Chaque champ de patrimoine conserve un historique horodaté de ses valeurs — définir une nouvelle valeur enregistre un nouveau point, et les valeurs précédentes sont conservées pour la génération de graphiques dans le temps.
