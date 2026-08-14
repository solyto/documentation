---
title: Check In API
description: Daily mood and health tracking.
---

All endpoints require authentication. Base path: `/api/v1/check-in`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/check-in` | Get check-in entries |
| POST | `/v1/check-in` | Create a check-in entry |
| PUT | `/v1/check-in/{date}` | Update a check-in by date |

## Get Check-Ins

```
GET /v1/check-in
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | date | Start of date range |
| `to` | date | End of date range |
| `per_page` | integer | Items per page |

Returns a paginated list of check-in entries sorted by date descending.

## Create Check-In

```
POST /v1/check-in
```

| Field | Type | Description |
|-------|------|-------------|
| `date` | date | Required. Date for this entry |
| `mood` | integer | Required. 1-5 scale |
| `notes` | text | Optional. How the day went |
| `health` | string | Optional. Health status |
| `energy` | integer | Optional. 1-5 energy level |
| `sleep_hours` | numeric | Optional. Hours of sleep |
| `stress` | integer | Optional. 1-5 stress level |

## Update Check-In

```
PUT /v1/check-in/{date}
```

Accepts the same fields as create. Use the date (YYYY-MM-DD) as the identifier to update an existing entry for that day.

## Mood Scale

| Value | Label |
|-------|-------|
| 1 | Very Bad |
| 2 | Bad |
| 3 | Okay |
| 4 | Good |
| 5 | Great |
