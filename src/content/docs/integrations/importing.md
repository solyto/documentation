---
title: Importing Data
description: Import from Deezer, Discogs, Goodreads, Hardcover, Steam, BGG, IMDb, and Chefkoch.
---

solyto can import data from several external services to populate your libraries. All imports are triggered manually — solyto never contacts external services in the background.

:::note
solyto only contacts external services when you explicitly trigger an import. No data passes through any intermediate server.
:::

## Import flow

Most imports follow the same multi-stage process:

1. **Started** — the import job is queued
2. **Select** — review and choose which items to import
3. **Creating/Importing** — items are being written to your library
4. **Finished** — import is complete, your library is updated

You can track progress on the import page for each library.

## Music Library

### From Deezer

Import albums and artists from your Deezer library by searching.

1. Go to **Music Library → Import → Deezer**
2. Search for an artist or album by name
3. Browse the results and select the items you want
4. Click **Import**

solyto fetches metadata (album art, track listings, release dates) from Deezer's API.

### From Discogs

Import your physical music collection (vinyl, CD, cassette) from Discogs.

1. Go to **Music Library → Import → Discogs**
2. Enter your Discogs username
3. solyto fetches your collection via the Discogs API
4. Review the items and click **Import** to add them to your Music Library

## Book Library

### From Hardcover

Import your reading history from Hardcover using their API.

1. Go to **Book Library → Import → Hardcover**
2. Connect your Hardcover account or enter your username
3. Select which books and shelves to import
4. Click **Import**

### From Goodreads

Import your Goodreads library via CSV export.

1. In Goodreads, go to **My Books → Import & Export → Export Library**
2. Download the CSV file
3. In solyto, go to **Book Library → Import → Goodreads**
4. Upload the CSV file
5. solyto maps your Goodreads shelves to solyto statuses:
   - "read" → Read
   - "currently-reading" → Reading
   - "to-read" → Want to Read
6. Review the mapping and click **Import**

## Movie Library

### From IMDb

Import movies from IMDb by URL.

1. Go to **Movie Library → Import → IMDb**
2. Paste the IMDb URL of the movie you want to add (e.g. `https://www.imdb.com/title/tt0111161/`)
3. solyto fetches the movie metadata (title, year, poster, rating)
4. Click **Import**

You can import multiple movies one at a time by repeating the process.

## Game Library

### From Steam

Import your Steam games library.

1. Go to **Game Library → Import → Steam**
2. Enter your **Steam ID** (numeric ID or vanity URL name)
3. solyto fetches your game library via the Steam API
4. Review the list and click **Import**

:::tip
You can find your Steam ID on your Steam profile page. If you have a custom URL, use the vanity name from `steamcommunity.com/id/<your-name>`.
:::

### From BoardGameGeek

Import your board game collection from BGG.

1. Go to **Game Library → Import → BoardGameGeek**
2. Enter your BGG username
3. solyto fetches your collection via the BGG XML API
4. Review the items and click **Import**

## Recipe Library

### From Chefkoch

Import recipes from Chefkoch by URL.

1. Go to **Recipe Library → Import → Chefkoch**
2. Paste the Chefkoch recipe URL (e.g. `https://www.chefkoch.de/rezepte/...`)
3. solyto extracts the recipe data (ingredients, instructions, servings, image)
4. Review the imported data and click **Save**

## Notes

### From file upload

Import notes from files on your computer.

1. Go to **Notes → Import**
2. Upload one or more files (supports `.md`, `.txt`, and other text formats)
3. Each file becomes a separate note in solyto
4. Review and organize after import

## Calendar

### From CalDAV

Import calendars from an external CalDAV server.

1. Go to **Calendar → Import → CalDAV**
2. Enter the CalDAV server URL and credentials
3. Select which calendars to import
4. The import runs through the multi-stage process (started → select → creating → finished)

### From .ics file

1. Export your calendar from your existing service as an `.ics` file
2. Go to **Calendar → Import → ICS**
3. Upload the `.ics` file
4. Select which events to import

## Contacts

### From CardDAV

Import contacts from an external CardDAV server.

1. Go to **Contacts → Import → CardDAV**
2. Enter the CardDAV server URL and credentials
3. solyto fetches your address book
4. Review and confirm the import

### From vCard file

1. Export your contacts as a `.vcf` (vCard) file
2. Go to **Contacts → Import → vCard**
3. Upload the `.vcf` file
4. Contacts are added to your solyto address book

## Privacy

All import requests go directly from solyto's backend to the external service using your credentials or API key. Your data is never sent to any third party during the import process.
