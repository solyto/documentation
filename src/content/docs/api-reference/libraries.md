---
title: Libraries API
description: Music, books, movies, games, links, quotes, recipes, and plants.
---

All endpoints require authentication. Each library type follows the same CRUD pattern under `/api/v1/libraries/{type}`.

## Common Pattern

Every library type supports:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/{type}` | List items |
| POST | `/v1/libraries/{type}` | Create an item |
| GET | `/v1/libraries/{type}/{id}` | Get a single item |
| PUT | `/v1/libraries/{type}/{id}` | Update an item |
| DELETE | `/v1/libraries/{type}/{id}` | Delete an item |

Replace `{type}` with one of: `music`, `books`, `movies`, `games`, `links`, `quotes`, `recipes`, `plants`. All items share common flags: `rating` (1–5), `wishlist`, `cover_path`, `link`, `genres[]`, and (where supported) `tags[]`.

## Covers

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/covers/{type}/{fileName}` | Serve a cover image (type: music/books/movies/games/quotes/recipes/links/plants) |
| OPTIONS | `/v1/libraries/covers/{type}/{fileName}` | CORS preflight |

## Music

Library-specific endpoints:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/music/recommend/{type}` | Recommend (favorite/unrated/random/new) |
| GET | `/v1/libraries/music/releases` | New releases from Deezer for favorite artists |
| GET | `/v1/libraries/music/search/{service}/{query}` | Search Deezer/Discogs |
| POST | `/v1/libraries/music/import/{service}` | Import an album by URL (deezer/discogs) |
| GET/POST/PUT/DELETE | `/v1/libraries/music/genres` | Genre CRUD |

Fields: `title`, `artist`, `type` (album/single/compilation), `format` (vinyl/CD/digital/cassette), `condition`, `acquired_where`, `additional_info`, `publication_year`.

## Books

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/books/recommend/{type}` | Recommend (favorite/unrated/random/new) |
| GET | `/v1/libraries/books/releases` | New releases from Hardcover for favorite authors |
| GET | `/v1/libraries/books/search/{service}/{query}` | Search Hardcover/Goodreads |
| POST | `/v1/libraries/books/import/{service}` | Import a book by URL (hardcover/goodreads) |
| GET/POST/PUT/DELETE | `/v1/libraries/books/genres` | Genre CRUD |

Fields: `title`, `author`, `series`, `volume`, `pages`, `current_page`, `lent_to`, `is_where`, `summary`, `started_at`, `finished_at`, `publication_year`.

## Movies

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/movies/search/{service}/{title}` | Search TMDB |
| POST | `/v1/libraries/movies/import/{service}` | Import a movie by URL (imdb) |
| GET | `/v1/libraries/movies/releases` | New screen releases |
| GET | `/v1/libraries/movies/{movie}/trailers` | Trailers (TMDB YouTube keys) |
| GET/POST/PUT/DELETE | `/v1/libraries/movies/genres` | Genre CRUD |

Fields: `title`, `category` (movie/series), `publication_year`, `started_at`, `finished_at`.

## Games

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/games/search/{service}/{query}` | Search Steam/BGG |
| POST | `/v1/libraries/games/import/{service}` | Import a game by URL (steam/bgg) |
| GET/POST/PUT/DELETE | `/v1/libraries/games/genres` | Genre CRUD |

Fields: `title`, `platform` (pc/playstation/xbox/nintendo/mobile/boardgame/other), `developer`, `publisher`, `playtime_hours`, `completed`, `publication_year`.

## Links

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/links/newest` | Newest links |
| GET/POST/PUT/DELETE | `/v1/libraries/links/categories` | Link category CRUD |

Fields: `title`, `url`, `is_favorite`, `cover_path`, `category_id`.

## Quotes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/libraries/quotes/random` | Random quote |

Fields: `quote`, `author`, `source`, `summary`.

## Recipes

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/libraries/recipes/import/{service}` | Import a recipe by URL (chefkoch) |

Fields: `title`, `type` (breakfast/lunch/dinner/snack/dessert/drink/other), `calories`, `time_to_make`, `servings`, `description`, `ingredients[]` ({name, amount, unit}), `steps[]`, `rating`.

## Plants

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/libraries/plants/{plant}/cover` | Upload a cover image (multipart) |

Fields: `name`, `latin_name`, `location` (indoor/outdoor/both), `sunlight` (full_sun/partial_sun/indirect/shade), `current_size`, `max_size`, `acquired_at`, `winter_hardy`, `instructions`.
