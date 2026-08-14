---
title: Time Tracking API
description: Projects, categories, time entries, and statistics.
---

All endpoints require authentication. Base path: `/api/v1/time-tracking`.

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/categories` | List categories |
| POST | `/v1/time-tracking/categories` | Create a category (`title`, `color`) |
| GET | `/v1/time-tracking/categories/{category}` | Get a category |
| PUT | `/v1/time-tracking/categories/{category}` | Update a category |
| DELETE | `/v1/time-tracking/categories/{category}` | Delete a category |

## Projects

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/projects` | List projects |
| POST | `/v1/time-tracking/projects` | Create a project (`title`, `description`, `category_ids[]`) |
| GET | `/v1/time-tracking/projects/{project}` | Get a project |
| PUT | `/v1/time-tracking/projects/{project}` | Update a project |
| DELETE | `/v1/time-tracking/projects/{project}` | Delete a project (removes its entries) |

## Time Entries

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries` | List time entries |
| POST | `/v1/time-tracking/entries` | Create a manual entry (`started_at`, `stopped_at`, `duration_minutes`, `project_id`, `description`) |
| GET | `/v1/time-tracking/entries/{entry}` | Get an entry |
| PUT | `/v1/time-tracking/entries/{entry}` | Update an entry |
| DELETE | `/v1/time-tracking/entries/{entry}` | Delete an entry |

## Timer

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/time-tracking/entries/start` | Start a timer (409 if one is already running) |
| POST | `/v1/time-tracking/entries/{entry}/stop` | Stop the running timer (409 if already stopped) |

## Statistics

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/time-tracking/entries/statistics` | Get statistics between `from`/`to` dates |
