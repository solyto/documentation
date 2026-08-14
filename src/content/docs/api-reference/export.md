---
title: Data Export API
description: Export your solyto data as a ZIP file.
---

All endpoints require authentication. Base path: `/api/v1/export`.

Rate limited to **1 request per 24 hours** per user.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/export` | Request a new export |
| GET | `/v1/export/status` | Check export job status |
| GET | `/v1/export/{id}/download` | Download the export file |

## Request Export

```
POST /v1/export
```

Initiates an asynchronous export job. Returns the export ID and initial status.

**Response (202):**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "pending",
    "created_at": "2026-05-27T10:00:00Z"
  }
}
```

## Check Status

```
GET /v1/export/status
```

Returns the current export job status.

**Response (200):**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "completed",
    "created_at": "2026-05-27T10:00:00Z",
    "completed_at": "2026-05-27T10:00:05Z",
    "download_url": "/api/v1/export/1/download",
    "file_size": 2048576
  }
}
```

**Status values:** `pending`, `processing`, `completed`, `failed`.

## Download Export

```
GET /v1/export/{id}/download
```

Downloads the ZIP file containing all exported data. Only available when status is `completed`.

The ZIP contains JSON exports of:
- Profile and settings
- Todos, notes, calendars, contacts
- Libraries (music, books, movies, etc.)
- Feeds, finances, time tracking
- Check-in history
- Clipboard items
