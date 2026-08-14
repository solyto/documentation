---
title: Bibliotheken-API
description: Musik, Bücher, Filme, Spiele, Links, Zitate, Rezepte und Pflanzen.
---

Alle Endpunkte erfordern Authentifizierung. Jeder Bibliothekstyp folgt demselben CRUD-Muster unter `/api/v1/libraries/{type}`.

## Gemeinsames Muster

Jeder Bibliothekstyp unterstützt:

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/{type}` | Einträge auflisten |
| POST | `/v1/libraries/{type}` | Einen Eintrag erstellen |
| GET | `/v1/libraries/{type}/{id}` | Einen einzelnen Eintrag abrufen |
| PUT | `/v1/libraries/{type}/{id}` | Einen Eintrag aktualisieren |
| DELETE | `/v1/libraries/{type}/{id}` | Einen Eintrag löschen |

Ersetze `{type}` durch einen von: `music`, `books`, `movies`, `games`, `links`, `quotes`, `recipes`, `plants`. Alle Einträge teilen gemeinsame Felder: `rating` (1–5), `wishlist`, `cover_path`, `link`, `genres[]` und (sofern unterstützt) `tags[]`.

## Cover

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/covers/{type}/{fileName}` | Ein Cover-Bild ausliefern (type: music/books/movies/games/quotes/recipes/links/plants) |
| OPTIONS | `/v1/libraries/covers/{type}/{fileName}` | CORS-Preflight |

## Musik

Bibliotheksspezifische Endpunkte:

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/music/recommend/{type}` | Empfehlen (favorite/unrated/random/new) |
| GET | `/v1/libraries/music/releases` | Neue Veröffentlichungen von Deezer für Lieblingskünstler |
| GET | `/v1/libraries/music/search/{service}/{query}` | Deezer/Discogs durchsuchen |
| POST | `/v1/libraries/music/import/{service}` | Ein Album per URL importieren (deezer/discogs) |
| GET/POST/PUT/DELETE | `/v1/libraries/music/genres` | Genre-CRUD |

Felder: `title`, `artist`, `type` (album/single/compilation), `format` (vinyl/CD/digital/cassette), `condition`, `acquired_where`, `additional_info`, `publication_year`.

## Bücher

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/books/recommend/{type}` | Empfehlen (favorite/unrated/random/new) |
| GET | `/v1/libraries/books/releases` | Neue Veröffentlichungen von Hardcover für Lieblingsautoren |
| GET | `/v1/libraries/books/search/{service}/{query}` | Hardcover/Goodreads durchsuchen |
| POST | `/v1/libraries/books/import/{service}` | Ein Buch per URL importieren (hardcover/goodreads) |
| GET/POST/PUT/DELETE | `/v1/libraries/books/genres` | Genre-CRUD |

Felder: `title`, `author`, `series`, `volume`, `pages`, `current_page`, `lent_to`, `is_where`, `summary`, `started_at`, `finished_at`, `publication_year`.

## Filme

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/movies/search/{service}/{title}` | TMDB durchsuchen |
| POST | `/v1/libraries/movies/import/{service}` | Einen Film per URL importieren (imdb) |
| GET | `/v1/libraries/movies/releases` | Neue Kino-/Streaming-Veröffentlichungen |
| GET | `/v1/libraries/movies/{movie}/trailers` | Trailer (TMDB-YouTube-Keys) |
| GET/POST/PUT/DELETE | `/v1/libraries/movies/genres` | Genre-CRUD |

Felder: `title`, `category` (movie/series), `publication_year`, `started_at`, `finished_at`.

## Spiele

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/games/search/{service}/{query}` | Steam/BGG durchsuchen |
| POST | `/v1/libraries/games/import/{service}` | Ein Spiel per URL importieren (steam/bgg) |
| GET/POST/PUT/DELETE | `/v1/libraries/games/genres` | Genre-CRUD |

Felder: `title`, `platform` (pc/playstation/xbox/nintendo/mobile/boardgame/other), `developer`, `publisher`, `playtime_hours`, `completed`, `publication_year`.

## Links

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/links/newest` | Neueste Links |
| GET/POST/PUT/DELETE | `/v1/libraries/links/categories` | Link-Kategorie-CRUD |

Felder: `title`, `url`, `is_favorite`, `cover_path`, `category_id`.

## Zitate

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/v1/libraries/quotes/random` | Zufälliges Zitat |

Felder: `quote`, `author`, `source`, `summary`.

## Rezepte

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/libraries/recipes/import/{service}` | Ein Rezept per URL importieren (chefkoch) |

Felder: `title`, `type` (breakfast/lunch/dinner/snack/dessert/drink/other), `calories`, `time_to_make`, `servings`, `description`, `ingredients[]` ({name, amount, unit}), `steps[]`, `rating`.

## Pflanzen

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| POST | `/v1/libraries/plants/{plant}/cover` | Ein Cover-Bild hochladen (multipart) |

Felder: `name`, `latin_name`, `location` (indoor/outdoor/both), `sunlight` (full_sun/partial_sun/indirect/shade), `current_size`, `max_size`, `acquired_at`, `winter_hardy`, `instructions`.
