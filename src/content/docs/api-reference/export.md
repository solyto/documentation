---
title: Data Export API
description: Export your solyto data as a ZIP file.
---

All endpoints require authentication. Base path: `/api/v1/export`.

Rate limited to **1 request per 24 hours** per user.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/export` | Request a new export (`features[]`) |
| GET | `/v1/export/status` | Check export job status |
| GET | `/v1/export/{id}/download` | Download the export file (410 if expired) |

## Request Export

```
POST /v1/export
```

Initiates an asynchronous export job. The request body lists the features to include; see [Exporting Data](/integrations/exporting/) for the full set.

**Status values:** `pending`, `in-progress`, `completed`, `failed`.

## Check Status

```
GET /v1/export/status
```

Returns the latest export with its status, `expires_at`, and whether it is expired.

## Download Export

```
GET /v1/export/{id}/download
```

Downloads the ZIP file containing all exported data. Files expire after **48 hours** — a request for an expired file returns 410.
