---
title: Check In API
description: Daily mood and health tracking.
---

All endpoints require authentication. Base path: `/api/v1/check-in`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/check-in` | List check-in entries |
| POST | `/v1/check-in` | Create or upsert a check-in for a date (unique per user/date) |

## Get Check-Ins

```
GET /v1/check-in
```

Returns the user's check-in entries.

## Create / Update Check-In

```
POST /v1/check-in
```

| Field | Type | Description |
|-------|------|-------------|
| `date` | date | Required. Date for this entry |
| `mood` | integer | Optional. 1–5 |
| `sleep` | integer | Optional. 1–5 |
| `dreams` | integer | Optional. 1–5 |
| `food_quality` | integer | Optional. 1–5 |
| `food_amount` | integer | Optional. 1–5 |
| `water` | integer | Optional. 1–5 |
| `sports` | integer | Optional. Sport value |
| `work` | integer | Optional. 1–5 |
| `menstruation` | integer | Optional. 1–5 |
| `alcohol` | integer | Optional. 1–5 |
| `smoking` | integer | Optional. 1–5 |
| `social_life` | integer | Optional. 1–5 |

All tracker fields are nullable and optional; a `date` is unique per user, so posting the same date again updates the existing entry.

## Settings

Check-in settings (enabled trackers, selected sports) are managed via the user settings endpoints — see [Users & Settings](/api-reference/users/).
