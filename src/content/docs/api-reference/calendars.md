---
title: Calendars API
description: Calendar and event management with sharing, attachments, and CalDAV import.
---

All endpoints require authentication. Base path: `/api/v1/calendars`.

## Calendars

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars` | List all calendars (own, shared, subscribed) |
| POST | `/v1/calendars` | Create a calendar (`name`; 409 if it already exists) |
| PUT | `/v1/calendars/{instanceId}` | Update a calendar's color |
| DELETE | `/v1/calendars/{instanceId}` | Delete a calendar |
| DELETE | `/v1/calendars/{instanceId}/unsubscribe` | Unsubscribe from a shared calendar |
| PUT | `/v1/calendars/order` | Reorder calendars (`order[]`) |

## Events

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars/events/widget` | Upcoming events for the dashboard widget |
| GET | `/v1/calendars/events/{yearMonth}` | Events for a month (`YYYY-MM`) |
| POST | `/v1/calendars/{instanceId}/events` | Create an event |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}` | Update or move an event (`etag` for conflict handling) |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}` | Delete an event |
| PUT | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Update a single recurring occurrence |
| DELETE | `/v1/calendars/{instanceId}/events/{eventUri}/occurrence/{occurrenceDate}` | Delete a single occurrence |

Event creation accepts: `title`, `start_date`, `end_date`, `description`, `location`, `is_all_day`, `is_recurring`, `recurrence_rule`, `recurrence_end`.

## Event attachments

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars/events/{eventId}/attachments/todos` | Todos attached to an event |
| POST | `/v1/calendars/events/{eventId}/attachments/todos` | Attach a todo (`todo_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/todos/{todoId}` | Detach a todo |
| GET | `/v1/calendars/events/{eventId}/attachments/notes` | Notes attached to an event |
| POST | `/v1/calendars/events/{eventId}/attachments/notes` | Attach a note (`note_id`) |
| DELETE | `/v1/calendars/events/{eventId}/attachments/notes/{noteId}` | Detach a note |

## Sharing & Invites

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars/{instanceId}/share` | List sharees (owner only) |
| POST | `/v1/calendars/{instanceId}/share` | Share with a friend (`friend_id`) |
| DELETE | `/v1/calendars/{instanceId}/share/{userId}` | Revoke share access |
| GET | `/v1/calendars/invites` | List pending share invites |
| PUT | `/v1/calendars/invites/{token}/accept` | Accept an invite |
| PUT | `/v1/calendars/invites/{token}/decline` | Decline an invite |

## Import (CalDAV)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/calendars/import` | Start an external CalDAV import (`url`, `username`, `secret`) |
| POST | `/v1/calendars/import/select` | Select calendars to import |
| GET | `/v1/calendars/import/state` | Import progress state |
