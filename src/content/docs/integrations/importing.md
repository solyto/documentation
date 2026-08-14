---
title: Importing Data
description: Search online and import from Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BGG, and Chefkoch.
---

solyto can import data from several external services to populate your libraries. All imports are triggered manually — solyto never contacts external services in the background, and no data passes through an intermediate server.

## How importing works

Each library offers two ways to bring in entries from an external service:

- **Search online** — search a provider by title/name and import from the results with metadata (cover, year, etc.) filled in automatically
- **Import by URL** — paste a link to an item (e.g. a Deezer album or IMDb movie) and solyto fetches its details

Both are available from the **+** (create) modal in each library. Imports are only triggered when you explicitly click a button.

## Music Library

Providers: **Deezer** and **Discogs**.

1. Open the **Music Library** and click **+**
2. Search Deezer/Discogs by artist or album name, or paste an album URL
3. Review the matched result (a Deezer preview widget lets you listen first)
4. Save — cover art and metadata are filled in automatically

## Book Library

Providers: **Hardcover** and **Goodreads**.

1. Open the **Book Library** and click **+**
2. Search Hardcover/Goodreads by title or author, or paste a book URL
3. Review the matched result
4. Save — cover art and metadata are filled in automatically

## Movie Library

Providers: **IMDb** and **TMDB**.

1. Open the **Movie Library** and click **+**
2. Search TMDB by title, or paste an IMDb/TMDB URL
3. Review the matched result
4. Save — poster and metadata are filled in automatically

## Game Library

Providers: **Steam** and **BoardGameGeek**.

1. Open the **Game Library** and click **+**
2. Search Steam/BGG by title, or paste a Steam/BGG URL
3. Review the matched result
4. Save — cover art and metadata (developer, publisher, etc.) are filled in automatically

## Recipe Library

Provider: **Chefkoch**.

1. Open the **Recipe Library** and click **+**
2. Paste a Chefkoch recipe URL
3. Review the imported recipe
4. Save — ingredients, steps, servings, and image are extracted automatically

## Notes

Import notes from Markdown (`.md`) or ZIP files.

1. Go to **Notes → Import**
2. Upload one or more files
3. Each file becomes a separate note in solyto

## Calendar

### From CalDAV

Import calendars from an external CalDAV server (Nextcloud, iCloud, etc.).

1. Go to **Calendar → Import**
2. Enter the server URL, username, and password
3. Select which calendars to import
4. Events are fetched and stored with live progress

## Contacts

### From CardDAV

Import contacts from an external CardDAV server.

1. Go to **Contacts → Import**
2. Enter the server URL, username, and password
3. Select which address books to import
4. Contacts are fetched and stored with live progress

## Privacy

All import requests go directly from solyto's backend to the external service. Your data is never sent to any third party during the import process.
