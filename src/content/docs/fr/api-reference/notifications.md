---
title: API Notifications
description: Notifications intégrées, abonnements push et paramètres de notification.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/notifications`.

## Notifications intégrées

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/notifications` | Lister les notifications intégrées non lues |
| POST | `/v1/notifications/read-all` | Marquer toutes les notifications comme lues |
| PUT | `/v1/notifications/{notification}/read` | Marquer une notification comme lue |

## Abonnements push

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/notifications/push/vapid-key` | Récupérer la clé publique VAPID |
| POST | `/v1/notifications/push/subscribe` | Enregistrer un abonnement Web Push (`endpoint`, `keys.auth`, `keys.p256dh`) |
| POST | `/v1/notifications/push/unsubscribe` | Supprimer un abonnement push (`endpoint`) |

## Paramètres de notification

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/notifications/settings` | Récupérer les paramètres de notification par type × par canal |
| PUT | `/v1/notifications/settings` | Mettre à jour les bascules par type × par canal |

Les paramètres forment une matrice regroupant les 9 types de notification (sortie musique/livre/film, demande d'ami, rappel quotidien de la journée, rappel quotidien de check-in, partage de calendrier, commentaire sur une demande de développement, export prêt), chacun disposant de quatre indicateurs de canal (`_ui`, `_email`, `_push`, `_telegram`). Voir [Notifications](/customization/notifications/) pour la matrice complète.
