---
title: API Telegram
description: Connexion au bot Telegram et gestion des alertes.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/telegram`.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/telegram/token-request` | Récupérer (ou créer) un jeton d'appairage, valide 24h |
| GET | `/v1/telegram/request` | Récupérer l'état actuel de la connexion |
| PUT | `/v1/telegram/your-day-alert` | Activer/désactiver l'alerte quotidienne « votre journée » |
| PUT | `/v1/telegram/check-in-alert` | Activer/désactiver l'alerte de check-in |

## Générer un jeton

```
GET /v1/telegram/token-request
```

Renvoie un jeton d'appairage. Envoyez-le au bot Telegram de solyto sous la forme `/connect <token>` pour lier votre compte.

## Vérifier la connexion

```
GET /v1/telegram/request
```

Renvoie l'état actuel de la connexion Telegram, y compris la confirmation de la connexion au bot et l'identifiant du chat lié.

## Alerte « votre journée »

```
PUT /v1/telegram/your-day-alert
```

Active ou désactive l'alerte quotidienne « votre journée », envoyée à 07h00 dans votre fuseau horaire.

## Alerte de check-in

```
PUT /v1/telegram/check-in-alert
```

Active ou désactive le rappel quotidien de check-in, envoyé à 20h00 dans votre fuseau horaire.

Voir [Bot Telegram](/integrations/telegram/) pour plus de détails sur le bot et ses commandes.
