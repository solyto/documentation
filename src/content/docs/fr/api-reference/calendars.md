---
title: API Calendriers
description: Gestion des calendriers et des événements avec partage, pièces jointes et import CalDAV.
---

Tous les endpoints nécessitent une authentification. Chemin de base : `/api/v1/calendars`.

## Calendriers

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/calendars` | Lister tous les calendriers (propres, partagés, abonnés) |
| POST | `/v1/calendars` | Créer un calendrier (`name` ; 409 s'il existe déjà) |
| PUT | `/v1/calendars/{instanceId}` | Modifier la couleur d'un calendrier |
| DELETE | `/v1/calendars/{instanceId}` | Supprimer un calendrier |
| DELETE | `/v1/calendars/{instanceId}/unsubscribe` | Se désabonner d'un calendrier partagé |
| PUT | `/v1/calendars/order` | Réordonner les calendriers (`order[]`) |

## Événements

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/calendars/events/widget` | Événements à venir pour le widget du tableau de bord |
| GET | `/v1/calendars/events/{yearMonth}` | Événements d'un mois (`YYYY-MM`) |
| POST | `/v1/calendars/{instanceId}/events` | Créer un événement |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}` | Modifier ou déplacer un événement (`etag` pour la gestion des conflits) |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}` | Supprimer un événement |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Modifier une occurrence récurrente unique |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Supprimer une occurrence unique |

La création d'un événement accepte : `title`, `start_date`, `end_date`, `description`, `location`, `is_all_day`, `is_recurring`, `recurrence_rule`, `recurrence_end`.

## Pièces jointes des événements

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/calendars/events/{eventId}/attachments/todos` | Tâches associées à un événement |
| POST | `/v1/calendars/events/{eventId}/attachments/todos` | Associer une tâche (`todo_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/todos/{todoId}` | Dissocier une tâche |
| GET | `/v1/calendars/events/{eventId}/attachments/notes` | Notes associées à un événement |
| POST | `/v1/calendars/events/{eventId}/attachments/notes` | Associer une note (`note_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/notes/{noteId}` | Dissocier une note |

## Partage et invitations

| Méthode | Chemin | Description |
|--------|------|-------------|
| GET | `/v1/calendars/{instanceId}/share` | Lister les personnes ayant accès (propriétaire uniquement) |
| POST | `/v1/calendars/{instanceId}/share` | Partager avec un ami (`friend_id`) |
| DELETE | `/v1/calendars/{instanceId}/share/{userId}` | Révoquer l'accès partagé |
| GET | `/v1/calendars/invites` | Lister les invitations de partage en attente |
| PUT | `/v1/calendars/invites/{token}/accept` | Accepter une invitation |
| PUT | `/v1/calendars/invites/{token}/decline` | Refuser une invitation |

## Import (CalDAV)

| Méthode | Chemin | Description |
|--------|------|-------------|
| POST | `/v1/calendars/import` | Démarrer un import CalDAV externe (`url`, `username`, `secret`) |
| POST | `/v1/calendars/import/select` | Sélectionner les calendriers à importer |
| GET | `/v1/calendars/import/state` | État de progression de l'import |
