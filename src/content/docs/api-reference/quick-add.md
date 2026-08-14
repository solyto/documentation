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

Analyzes a URL or text string and returns the detected content type with confidence score.

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `input` | string | Required. URL or text to analyze |

**Response (200):**

```json
{
  "success": true,
  "data": {
    "type": "link",
    "confidence": 0.95,
    "preview": {
      "title": "Example Page",
      "description": "A short description",
      "url": "https://example.com",
      "image": "https://example.com/og.png"
    }
  }
}
```

**Detected types:**

| Type | Description |
|------|-------------|
| `link` | A URL to save to links library |
| `todo` | Actionable task text |
| `note` | General text content |
| `contact` | Contact information (vCard/email/phone) |
| `feed` | RSS/Atom feed URL |
| `calendar` | ICS calendar URL |
| `movie` | Movie reference |
| `book` | Book reference |
| `music` | Music reference |
| `recipe` | Recipe content |

## Commit

```
POST /v1/dashboard/quick-add/commit
```

Saves the detected item to the appropriate library. Use the data returned from `/detect`.

**Request Body:**

| Field | Type | Rules |
|-------|------|-------|
| `type` | string | Required. Content type from detect |
| `data` | object | Required. Item fields for the target library |

**Response (201):**

```json
{
  "success": true,
  "message": "Item added successfully",
  "data": {
    "type": "link",
    "id": 42
  }
}
```
