---
title: Notifications API
description: In-app notifications and push subscription management.
---

All endpoints require authentication. Base path: `/api/v1/notifications`.

## In-App Notifications

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications` | List notifications |
| PUT | `/v1/notifications/{id}/read` | Mark as read |
| PUT | `/v1/notifications/read-all` | Mark all as read |

## Push Subscriptions

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications/push/subscriptions` | List push subscriptions |
| POST | `/v1/notifications/push/subscribe` | Register a push subscription |
| POST | `/v1/notifications/push/unsubscribe` | Remove a push subscription |

## Notification Settings

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notifications/settings` | Get notification preferences |
| PUT | `/v1/notifications/settings` | Update notification preferences |

## List Notifications

```
GET /v1/notifications
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `unread` | boolean | Filter unread only |
| `per_page` | integer | Items per page |

## Subscribe to Push

```
POST /v1/notifications/push/subscribe
```

| Field | Type | Rules |
|-------|------|-------|
| `endpoint` | string | Required. Push endpoint URL |
| `keys.p256dh` | string | Required. Public key |
| `keys.auth` | string | Required. Auth secret |

## Unsubscribe from Push

```
POST /v1/notifications/push/unsubscribe
```

| Field | Type | Rules |
|-------|------|-------|
| `endpoint` | string | Required. Push endpoint to remove |

## Update Settings

```
PUT /v1/notifications/settings
```

| Field | Type | Description |
|-------|------|-------------|
| `email_notifications` | boolean | Enable email notifications |
| `push_notifications` | boolean | Enable push notifications |
| `friend_requests` | boolean | Notify on friend requests |
| `calendar_shares` | boolean | Notify on calendar shares |
| `feed_updates` | boolean | Notify on new feed items |
