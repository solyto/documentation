---
title: API Amis
description: Demandes d'amis et gestion de la liste d'amis.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/friends`.

## Endpoints

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/friends` | Lister les amis acceptés |
| GET | `/v1/friends/requests` | Lister les demandes d'amis en attente (entrantes et sortantes) |
| POST | `/v1/friends/requests` | Envoyer une demande d'ami (`receiver_id`) |
| PUT | `/v1/friends/requests/{friendRequest}/accept` | Accepter une demande d'ami (destinataire uniquement) |
| PUT | `/v1/friends/requests/{friendRequest}/reject` | Refuser une demande d'ami (destinataire uniquement) |

## Lister les demandes

```
GET /v1/friends/requests
```

Retourne les demandes d'amis entrantes et sortantes en attente, avec leur statut (pending/accepted/rejected).

## Envoyer une demande

```
POST /v1/friends/requests
```

| Champ | Type | Règles |
|-------|------|-------|
| `receiver_id` | string | Requis. ID de l'utilisateur à ajouter en ami |

## Accepter / refuser

```
PUT /v1/friends/requests/{friendRequest}/accept
PUT /v1/friends/requests/{friendRequest}/reject
```

Seul le destinataire peut accepter ou refuser une demande. Aucun corps de requête n'est nécessaire.
