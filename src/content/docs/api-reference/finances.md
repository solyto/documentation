---
title: Finances API
description: Budget tracking and wealth management.
---

All endpoints require authentication. Base path: `/api/v1/finances`.

## Budget

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/finances/budget` | List budget items |
| POST | `/v1/finances/budget` | Create a budget item (`title`, `type`, `value`) |
| GET | `/v1/finances/budget/{budget}` | Get a budget item |
| PUT | `/v1/finances/budget/{budget}` | Update a budget item |
| DELETE | `/v1/finances/budget/{budget}` | Delete a budget item |

## Wealth Fields

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/finances/wealth/fields` | List wealth fields |
| POST | `/v1/finances/wealth/fields` | Create a wealth field (`title`) |
| PUT | `/v1/finances/wealth/fields/{field}` | Update a wealth field |
| DELETE | `/v1/finances/wealth/fields/{field}` | Delete a wealth field |

## Wealth Values

| Method | Path | Description |
|--------|------|-------------|
| PUT | `/v1/finances/wealth/fields/{field}/value` | Set the current value of a field (`value`) |

Each wealth field keeps a timestamped value history — setting a new value records a new point, and previous values are preserved for charting over time.
