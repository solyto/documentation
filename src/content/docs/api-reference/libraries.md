---
title: Libraries API
description: Music, books, movies, games, links, quotes, recipes, and plants.
---

All endpoints require authentication. Each library type follows the same CRUD pattern under `/api/v1/libraries`.

## Common Pattern

Every library type supports:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/{type}` | List items (paginated, filterable) |
| POST | `/v1/libraries/{type}` | Create an item |
| GET | `/v1/libraries/{type}/{id}` | Get a single item |
| PUT | `/v1/libraries/{type}/{id}` | Update an item |
| DELETE | `/v1/libraries/{type}/{id}` | Delete an item |

Replace `{type}` with one of: `music`, `books`, `movies`, `games`, `links`, `quotes`, `recipes`, `plants`.

## Music

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required. Song or album title |
| `artist` | string | Artist name |
| `album` | string | Album name |
| `year` | integer | Release year |
| `genre` | string | Genre |
| `rating` | integer | 1-5 rating |

## Books

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required |
| `author` | string | Author name |
| `isbn` | string | ISBN number |
| `pages` | integer | Page count |
| `status` | string | unread/reading/read |
| `rating` | integer | 1-5 rating |

## Movies

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required |
| `director` | string | Director name |
| `year` | integer | Release year |
| `genre` | string | Genre |
| `rating` | integer | 1-5 rating |

## Games

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required |
| `platform` | string | Platform (PC, PS5, etc.) |
| `genre` | string | Genre |
| `status` | string | backlog/playing/completed |
| `rating` | integer | 1-5 rating |

## Links

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required |
| `url` | string | Required. Valid URL |
| `description` | text | Optional notes |
| `category` | string | Optional category |

## Quotes

| Field | Type | Description |
|-------|------|-------------|
| `text` | text | Required. Quote text |
| `author` | string | Attribution |
| `source` | string | Book/speech origin |

## Recipes

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Required |
| `ingredients` | text | Ingredient list |
| `instructions` | text | Steps |
| `prep_time` | integer | Prep time in minutes |
| `servings` | integer | Number of servings |
| `tags` | string | Comma-separated tags |

## Plants

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Required. Plant name |
| `species` | string | Species |
| `watering_frequency` | integer | Days between watering |
| `last_watered` | date | Last watering date |
| `notes` | text | Care notes |

## Common List Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `search` | string | Search across text fields |
| `sort` | string | Sort field |
| `order` | string | asc or desc |
| `per_page` | integer | Items per page |
