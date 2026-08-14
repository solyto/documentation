---
title: Notifications API
description: In-app notifications, push subscriptions, and notification settings.
---

All endpoints require authentication. Base path: `/api/v1/notifications`.

## In-App Notifications

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications` | List unread in-app notifications |
| POST | `/v1/notifications/read-all` | Mark all notifications as read |
| PUT | `/v1/notifications/{notification}/read` | Mark a single notification as read |

## Push Subscriptions

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications/push/vapid-key` | Get the VAPID public key |
| POST | `/v1/notifications/push/subscribe` | Register a Web Push subscription (`endpoint`, `keys.auth`, `keys.p256dh`) |
| POST | `/v1/notifications/push/unsubscribe` | Remove a push subscription (`endpoint`) |

## Notification Settings

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications/settings` | Get per-type × per-channel notification settings |
| PUT | `/v1/notifications/settings` | Update per-type × per-channel toggles |

The settings are a matrix of the 9 notification types (music/book/movie release, friend request, daily day reminder, daily check-in reminder, calendar share, dev request comment, export ready) each with four channel flags (`_ui`, `_email`, `_push`, `_telegram`). See [Notifications](/customization/notifications/) for the full matrix.
