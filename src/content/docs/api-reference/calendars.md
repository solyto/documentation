---
title: Calendars API
description: Calendar and event management with sharing and import.
---

All endpoints require authentication. Base path: `/api/v1/calendars`.

## Calendars

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars` | List all calendars |
| POST | `/v1/calendars` | Create a calendar |
| GET | `/v1/calendars/{id}` | Get a calendar |
| PUT | `/v1/calendars/{id}` | Update a calendar |
| DELETE | `/v1/calendars/{id}` | Delete a calendar |

## Events

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/calendars/{id}/events` | List events for a calendar |
| POST | `/v1/calendars/{id}/events` | Create an event |
| GET | `/v1/calendars/events/{id}` | Get a single event |
| PUT | `/v1/calendars/events/{id}` | Update an event |
| DELETE | `/v1/calendars/events/{id}` | Delete an event |

## Sharing & Invites

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/calendars/{id}/share` | Share calendar with a user |
| GET | `/v1/calendars/invites` | List pending invites |
| PUT | `/v1/calendars/invites/{id}/accept` | Accept an invite |
| PUT | `/v1/calendars/invites/{id}/reject` | Reject an invite |

## Import

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/calendars/import` | Import from ICS file |

## Calendar Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. Calendar name |
| `color` | string | Hex color |
| `description` | string | Optional description |
| `timezone` | string | Timezone identifier |

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required. Event title |
| `description` | string | Optional. Event details |
| `start` | datetime | Required. Start time (ISO 8601) |
| `end` | datetime | Required. End time (ISO 8601) |
| `all_day` | boolean | Is an all-day event |
| `location` | string | Optional. Event location |
| `recurrence` | string | Optional. RRULE recurrence rule |

## Share

```
POST /v1/calendars/{id}/share
```

| Field | Type | Description |
|-------|------|-------------|
| `user_id` | integer | User to share with |
| `permission` | string | `view` or `edit` |

## Import ICS

```
POST /v1/calendars/import
Content-Type: multipart/form-data
```

| Field | Type | Rules |
|-------|------|-------|
| `file` | file | Required. ICS file |
| `calendar_id` | integer | Optional. Target calendar |
