---
title: Notes API
description: CRUD for notes and note categories with import/export.
---

All endpoints require authentication. Base path: `/api/v1/notes`.

## Notes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notes` | List notes |
| POST | `/v1/notes` | Create a note (`title`, `content`, `category_id`, `tags[]`) |
| GET | `/v1/notes/{note}` | Get a single note |
| PUT | `/v1/notes/{note}` | Update a note (incl. `is_favorite`, `is_starred`) |
| DELETE | `/v1/notes/{note}` | Delete a note |
| GET | `/v1/notes/newest` | Newest notes |

## Categories

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/notes/categories` | List categories |
| POST | `/v1/notes/categories` | Create a category (`title`, `parent_id` — hierarchical) |
| GET | `/v1/notes/categories/{category}` | Get a category |
| PUT | `/v1/notes/categories/{category}` | Update a category |
| DELETE | `/v1/notes/categories/{category}` | Delete a category |

Categories support nesting via `parent_id`, so folders can contain subfolders.

## Import / Export

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/notes/import` | Import notes from a Markdown (`.md`) or ZIP (`.zip`) file (multipart) |
| GET | `/v1/notes/export` | Export notes (full data export is via the Export system) |
