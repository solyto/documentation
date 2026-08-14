---
title: Music Library
description: Track your music collection — vinyl, CDs, digital — with Deezer and Discogs import.
---

The Music Library is where you catalogue the music you own and love. Track albums on vinyl, CD, digital, or streaming — all in one place.

## Adding music

Add albums to your library in two ways:

- **Manual entry** — fill in the details yourself
- **Import** — bring in an existing collection from Deezer or Discogs

### Import from Deezer

Connect to Deezer to search by artist or album name and import directly. You can also import your Deezer favorites in bulk. This is useful if you've been collecting music on Deezer and want everything in solyto.

### Import from Discogs

Enter your Discogs username to import your vinyl and CD collection. solyto pulls in album details, formats, and conditions automatically.

See [Importing Data](/integrations/importing/) for step-by-step instructions.

## Entry fields

Each album entry includes:

| Field | Description |
|-------|-------------|
| **title** | Album title |
| **artist** | Artist or band name |
| **type** | Album type (album, single, EP, compilation) |
| **format** | vinyl, CD, digital, streaming |
| **condition** | Physical condition (for vinyl/CD) |
| **rating** | 1–5 stars |
| **publication_year** | Year the album was released |
| **acquired_where** | Where you got it (record store, online, gift) |
| **additional_info** | Any extra details (pressing, edition, etc.) |
| **cover_image** | Album artwork |
| **wishlist** | Mark as wanted but not yet owned |
| **link** | URL to the album (Deezer, Discogs, etc.) |
| **tags** | Colored tags for filtering |
| **genres** | One or more music genres |
| **notes** | Free-text notes |

## Music genres

Each music library has its own genre system. Add genres that match your collection — progressive rock, jazz fusion, synthwave, or anything else. Assign multiple genres to any album.

Manage genres from the library settings. You can add, rename, and remove genres at any time.

## AI Recommendations

Get album recommendations based on your library. Click **Recommendations** to generate a list of releases you might enjoy.

Recommendations use an OpenAI-compatible API and are generated on-demand only. Your library data is sent to generate suggestions and is not stored permanently by the AI service. Nothing happens until you click the button.

## Release notifications

Subscribe to artists in your library to get notified when they release new music. Notifications are configurable per channel — Telegram, email, or push. See [Notifications](/customization/notifications/) for setup.

New releases are checked periodically. You control which artists you follow and how you receive alerts.

## Search Deezer

Use the built-in Deezer search to look up albums by artist name and album name. Search results include cover art and metadata, which you can import directly into your library without retyping anything.

## Views and sorting

Browse your music collection in different views and sort by:

- Artist (A–Z)
- Album title
- Rating
- Year
- Date added

Filter by format, genre, tags, or wishlist status to narrow things down.

## Exporting

Export your entire music library as `.csv`. The file includes all fields — artist, title, format, rating, genres, tags, and notes. See [Exporting Data](/integrations/exporting/).
