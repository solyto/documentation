---
title: Kalender-API
description: Kalender- und Terminverwaltung mit Freigabe, Anhängen und CalDAV-Import.
---

Alle Endpunkte erfordern Authentifizierung. Basispfad: `/api/v1/calendars`.

## Kalender

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/calendars` | Alle Kalender auflisten (eigene, geteilte, abonnierte) |
| POST | `/v1/calendars` | Einen Kalender erstellen (`name`; 409 falls bereits vorhanden) |
| PUT | `/v1/calendars/{instanceId}` | Die Farbe eines Kalenders aktualisieren |
| DELETE | `/v1/calendars/{instanceId}` | Einen Kalender löschen |
| DELETE | `/v1/calendars/{instanceId}/unsubscribe` | Ein Abonnement eines geteilten Kalenders kündigen |
| PUT | `/v1/calendars/order` | Kalender neu anordnen (`order[]`) |

## Termine

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/calendars/events/widget` | Bevorstehende Termine für das Dashboard-Widget |
| GET | `/v1/calendars/events/{yearMonth}` | Termine für einen Monat (`YYYY-MM`) |
| POST | `/v1/calendars/{instanceId}/events` | Einen Termin erstellen |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}` | Einen Termin aktualisieren oder verschieben (`etag` für Konfliktbehandlung) |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}` | Einen Termin löschen |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Ein einzelnes wiederkehrendes Vorkommen aktualisieren |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Ein einzelnes Vorkommen löschen |

Beim Erstellen eines Termins werden akzeptiert: `title`, `start_date`, `end_date`, `description`, `location`, `is_all_day`, `is_recurring`, `recurrence_rule`, `recurrence_end`.

## Termin-Anhänge

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/calendars/events/{eventId}/attachments/todos` | Todos, die an einen Termin angehängt sind |
| POST | `/v1/calendars/events/{eventId}/attachments/todos` | Ein Todo anhängen (`todo_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/todos/{todoId}` | Ein Todo aushängen |
| GET | `/v1/calendars/events/{eventId}/attachments/notes` | Notizen, die an einen Termin angehängt sind |
| POST | `/v1/calendars/events/{eventId}/attachments/notes` | Eine Notiz anhängen (`note_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/notes/{noteId}` | Eine Notiz aushängen |

## Freigabe & Einladungen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/calendars/{instanceId}/share` | Personen mit Zugriff auflisten (nur Eigentümer) |
| POST | `/v1/calendars/{instanceId}/share` | Mit einem Freund teilen (`friend_id`) |
| DELETE | `/v1/calendars/{instanceId}/share/{userId}` | Zugriff auf die Freigabe widerrufen |
| GET | `/v1/calendars/invites` | Ausstehende Freigabe-Einladungen auflisten |
| PUT | `/v1/calendars/invites/{token}/accept` | Eine Einladung annehmen |
| PUT | `/v1/calendars/invites/{token}/decline` | Eine Einladung ablehnen |

## Import (CalDAV)

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/calendars/import` | Einen externen CalDAV-Import starten (`url`, `username`, `secret`) |
| POST | `/v1/calendars/import/select` | Zu importierende Kalender auswählen |
| GET | `/v1/calendars/import/state` | Fortschritt des Imports |
