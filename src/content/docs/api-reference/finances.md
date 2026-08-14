---
title: Finances API
description: Budget tracking and wealth management.
---

All endpoints require authentication. Base path: `/api/v1/finances`.

## Budgets

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/finances/budgets` | List all budgets |
| POST | `/v1/finances/budgets` | Create a budget |
| GET | `/v1/finances/budgets/{id}` | Get a budget |
| PUT | `/v1/finances/budgets/{id}` | Update a budget |
| DELETE | `/v1/finances/budgets/{id}` | Delete a budget |

## Wealth Fields

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/finances/wealth/fields` | List wealth tracking fields |
| POST | `/v1/finances/wealth/fields` | Create a wealth field |
| PUT | `/v1/finances/wealth/fields/{id}` | Update a wealth field |
| DELETE | `/v1/finances/wealth/fields/{id}` | Delete a wealth field |

## Wealth Values

| Method | Path | Description |
|--------|------|-------------|
| PUT | `/v1/finances/wealth/fields/{id}/value` | Update the value of a field |

## Budget Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. Budget name |
| `amount` | numeric | Required. Budget limit |
| `spent` | numeric | Amount spent |
| `period` | string | weekly/monthly/yearly |
| `start_date` | date | Period start |
| `category` | string | Optional category label |
| `color` | string | Optional hex color |

## Wealth Field Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. e.g. "Savings", "Investments" |
| `type` | string | asset/liability |
| `icon` | string | Optional icon identifier |
| `order` | integer | Display order |

## Update Wealth Value

```
PUT /v1/finances/wealth/fields/{id}/value
```

| Field | Type | Description |
|-------|------|-------------|
| `value` | numeric | Required. Current value |
| `date` | date | Optional. Defaults to today |

Wealth history is tracked automatically. Previous values are preserved for charting over time.
