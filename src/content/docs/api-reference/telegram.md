---
title: Telegram API
description: Telegram bot connection and alert management.
---

All endpoints require authentication. Base path: `/api/v1/telegram`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/telegram/token-request` | Get (or create) a pairing token, valid 24h |
| GET | `/v1/telegram/request` | Get the current connection state |
| PUT | `/v1/telegram/your-day-alert` | Toggle the daily "your day" alert |
| PUT | `/v1/telegram/check-in-alert` | Toggle the check-in alert |

## Generate Token

```
GET /v1/telegram/token-request
```

Returns a pairing token. Send it to the solyto Telegram bot as `/connect <token>` to link your account.

## Check Connection

```
GET /v1/telegram/request
```

Returns the current Telegram connection state, including whether the bot connection is confirmed and the linked chat ID.

## Your Day Alert

```
PUT /v1/telegram/your-day-alert
```

Toggles the daily "your day" alert, delivered at 07:00 in your timezone.

## Check-In Alert

```
PUT /v1/telegram/check-in-alert
```

Toggles the daily check-in reminder, delivered at 20:00 in your timezone.

See [Telegram Bot](/integrations/telegram/) for details on the bot and its commands.
