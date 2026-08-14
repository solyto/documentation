---
title: Notes API
description: CRUD for notes and note categories with import/export.
---

All endpoints require authentication. Base path: `/api/v1/notes`.

## Notes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notes` | List all notes (paginated, filterable) |
| POST | `/v1/notes` | Create a note |
| GET | `/v1/notes/{id}` | Get a single note |
| PUT | `/v1/notes/{id}` | Update a note |
| DELETE | `/v1/notes/{id}` | Delete a note |
| GET | `/v1/notes/newest` | Get the most recently updated note |

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notes/categories` | List all categories |
| POST | `/v1/notes/categories` | Create a category |
| PUT | `/v1/notes/categories/{id}` | Update a category |
| DELETE | `/v1/notes/categories/{id}` | Delete a category |

## Import / Export

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/notes/import` | Import notes from file |
| GET | `/v1/notes/export` | Export notes as JSON |

## Note Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required. Note title |
| `content` | text | Note body (supports markdown) |
| `category_id` | integer | Optional. Link to category |
| `pinned` | boolean | Pin to top of list |
| `color` | string | Optional. Hex color for label |

## List Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `category_id` | integer | Filter by category |
| `search` | string | Search in title/content |
| `pinned` | boolean | Filter pinned notes |
| `sort` | string | Sort field (updated_at, title) |
| `order` | string | asc or desc |
| `per_page` | integer | Items per page (default 25) |

## Import

```
POST /v1/notes/import
Content-Type: multipart/form-data
```

| Field | Type | Rules |
|-------|------|-------|
| `file` | file | Required. JSON or Markdown file |

## Export

```
GET /v1/notes/export
```

Returns a JSON file download containing all user notes.
