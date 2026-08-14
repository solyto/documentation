---
title: Clipboard API
description: Cross-device clipboard for text and images.
---

All endpoints require authentication. Base path: `/api/v1/clipboard`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/clipboard` | List clipboard entries |
| POST | `/v1/clipboard` | Create a text entry |
| POST | `/v1/clipboard/image` | Create an image entry |
| GET | `/v1/clipboard/{id}/image` | Get an image entry |
| DELETE | `/v1/clipboard/{id}` | Delete an entry |

## List Clipboard

```
GET /v1/clipboard
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `per_page` | integer | Items per page |
| `type` | string | Filter: text or image |

Returns clipboard entries sorted by creation time, newest first.

## Create Text Entry

```
POST /v1/clipboard
```

| Field | Type | Rules |
|-------|------|-------|
| `content` | string | Required. Text content |

## Create Image Entry

```
POST /v1/clipboard/image
Content-Type: multipart/form-data
```

| Field | Type | Rules |
|-------|------|-------|
| `image` | file | Required. Image file |

## Get Image

```
GET /v1/clipboard/{id}/image
```

Returns the raw image binary with the appropriate `Content-Type` header.

## Delete Entry

```
DELETE /v1/clipboard/{id}
```

Permanently removes the clipboard entry and its associated image (if any).
