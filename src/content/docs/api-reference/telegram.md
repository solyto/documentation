---
title: Telegram API
description: Telegram bot connection and alert management.
---

All endpoints require authentication. Base path: `/api/v1/telegram`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/telegram/token-request` | Generate a token for Telegram bot |
| GET | `/v1/telegram/request` | Check connection status |
| PUT | `/v1/telegram/your-day-alert` | Configure daily summary alert |
| PUT | `/v1/telegram/check-in-alert` | Configure check-in reminder |

## Generate Token

```
GET /v1/telegram/token-request
```

Returns a one-time token to link your Telegram account. Send this token to the solyto Telegram bot to complete pairing.

**Response (200):**

```json
{
  "success": true,
  "data": {
    "token": "abc123xyz",
    "expires_at": "2026-05-27T11:00:00Z"
  }
}
```

## Check Connection

```
GET /v1/telegram/request
```

Returns the current Telegram connection status.

**Response (200):**

```json
{
  "success": true,
  "data": {
    "connected": true,
    "telegram_username": "johndoe",
    "connected_at": "2026-05-20T08:00:00Z"
  }
}
```

## Your Day Alert

```
PUT /v1/telegram/your-day-alert
```

| Field | Type | Description |
|-------|------|-------------|
| `enabled` | boolean | Enable or disable the alert |
| `time` | string | Delivery time (HH:mm format) |
| `timezone` | string | Timezone for scheduling |

Sends a daily summary of todos, calendar events, and notes to your Telegram.

## Check-In Alert

```
PUT /v1/telegram/check-in-alert
```

| Field | Type | Description |
|-------|------|-------------|
| `enabled` | boolean | Enable or disable the reminder |
| `time` | string | Reminder time (HH:mm format) |
| `timezone` | string | Timezone for scheduling |

Sends a daily reminder to complete your check-in entry.
