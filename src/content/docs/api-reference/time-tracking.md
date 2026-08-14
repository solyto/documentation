---
title: Time Tracking API
description: Projects, time entries, and statistics.
---

All endpoints require authentication. Base path: `/api/v1/time-tracking`.

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/categories` | List categories |
| POST | `/v1/time-tracking/categories` | Create a category |
| PUT | `/v1/time-tracking/categories/{id}` | Update a category |
| DELETE | `/v1/time-tracking/categories/{id}` | Delete a category |

## Projects

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/projects` | List projects |
| POST | `/v1/time-tracking/projects` | Create a project |
| GET | `/v1/time-tracking/projects/{id}` | Get a project |
| PUT | `/v1/time-tracking/projects/{id}` | Update a project |
| DELETE | `/v1/time-tracking/projects/{id}` | Delete a project |

## Time Entries

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries` | List time entries |
| POST | `/v1/time-tracking/entries` | Create a time entry |
| GET | `/v1/time-tracking/entries/{id}` | Get an entry |
| PUT | `/v1/time-tracking/entries/{id}` | Update an entry |
| DELETE | `/v1/time-tracking/entries/{id}` | Delete an entry |

## Timer

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/time-tracking/start` | Start a timer |
| POST | `/v1/time-tracking/stop` | Stop the active timer |

## Statistics

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/statistics` | Get time tracking stats |

## Category Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required |
| `color` | string | Optional hex color |

## Project Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required |
| `description` | text | Optional |
| `category_id` | integer | Optional. Link to category |
| `color` | string | Optional hex color |
| `billable_rate` | numeric | Optional hourly rate |

## Entry Fields

| Field | Type | Description |
|-------|------|-------------|
| `project_id` | integer | Required |
| `description` | string | Optional |
| `start` | datetime | Required. ISO 8601 |
| `end` | datetime | Optional. ISO 8601 |
| `billable` | boolean | Optional |

## Start Timer

```
POST /v1/time-tracking/start
```

| Field | Type | Description |
|-------|------|-------------|
| `project_id` | integer | Required |
| `description` | string | Optional |

Only one timer can be active at a time.

## Statistics

```
GET /v1/time-tracking/statistics
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | date | Start of period |
| `to` | date | End of period |
| `project_id` | integer | Filter by project |
