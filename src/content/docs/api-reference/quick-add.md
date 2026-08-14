---
title: Quick Add API
description: Auto-detect content type from URL or text.
---

All endpoints require authentication. Base path: `/api/v1/dashboard/quick-add`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/dashboard/quick-add/detect` | Detect content type from input |
| POST | `/v1/dashboard/quick-add/commit` | Commit the detected item |

## Detect

```
POST /v1/dashboard/quick-add/detect
```

Analyzes a URL or text string and returns the detected content type, confidence score, and whether confirmation is needed.

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `content` | string | Required. URL or text to analyze |

**Response:**

```json
{
  "success": true,
  "data": {
    "content": "https://www.deezer.com/album/123456",
    "content_type": "music",
    "confidence": 0.95,
    "needs_confirmation": false,
    "metadata": { }
  }
}
```

**Detected types:**

| Type | Description |
|------|-------------|
| `music` | Deezer/Discogs URL |
| `books` | Hardcover/Goodreads URL |
| `movies` | IMDb URL |
| `games` | Steam/BGG URL |
| `recipes` | Chefkoch URL |
| `links` | Any other URL |
| `todo` | Text containing `due`, `repeat`, or `link:` |
| `note` | Plain text with no signals |
| `plants` | Plant entry (manual selection) |
| `quotes` | Quote entry (manual selection) |
| `feed` | Feed subscription (manual selection) |
| `clipboard` | Clipboard text (manual selection) |

See [Quick Add](/dashboard/quick-add/) for the detection rules. `needs_confirmation` is true when confidence is below 60%.

## Commit

```
POST /v1/dashboard/quick-add/commit
```

Saves the item to the appropriate library.

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `content` | string | Required. The original URL or text |
| `content_type` | string | Required. One of the types above |
| `metadata` | object | Optional. Extra fields for the target library |
