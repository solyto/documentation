---
title: Movie Library
description: Track films and series with IMDb import and trailer previews.
---

The Movie Library is your personal film and series log. Track what you've watched, rate it, and maintain a watchlist — all in one place.

## Adding movies

Add entries to your library in two ways:

- **Manual entry** — fill in the details yourself
- **Search / import** — search TMDB by title, or paste an IMDb/TMDB URL to auto-fill movie data

### Import from IMDb / TMDB

Paste a movie URL (or search by title) and solyto pulls in the title, year, cover image, and other metadata automatically. No manual typing needed — just paste the link and confirm.

See [Importing Data](/integrations/importing/) for details.

## Entry fields

Each movie entry includes:

| Field | Description |
|-------|-------------|
| **title** | Movie or series title |
| **category** | Movie or series |
| **rating** | 1–5 stars |
| **publication_year** | Year of release |
| **cover** | Poster or still image |
| **link** | URL (IMDb, TMDB, streaming service, etc.) |
| **wishlist** | Mark as want-to-watch |
| **started_at** | Date you started watching |
| **finished_at** | Date you finished watching |
| **tags** | Colored tags for filtering |
| **genres** | One or more movie genres |

## Movie genres

The movie library has its own genre system. Add genres that match your taste — action, documentary, horror, drama, or anything else. Assign multiple genres to any movie.

Manage genres from the library settings. You can add, rename, and remove genres at any time.

## Trailers

View trailers for movies in your library. Trailers are fetched from TMDB (The Movie Database) automatically when available. Click the trailer button on any movie's detail page to watch.

## Release notifications

solyto checks TMDB for new screen releases and can notify you when something worth knowing about comes out. Notifications are configurable per channel — Telegram, email, or push. See [Notifications](/customization/notifications/) for setup.

## Views and filters

Browse your movie collection in **List** or **Cards** views. Search by title (press **Ctrl+F**), and filter by genre, rating, or wishlist.

## Exporting

Export your entire movie library as `.csv`. The file includes all fields — title, year, rating, genres, and more. See [Exporting Data](/integrations/exporting/).
