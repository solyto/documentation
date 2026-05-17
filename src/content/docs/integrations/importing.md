---
title: Importing Data
description: Import from Deezer, Discogs, Goodreads, and Hardcover.
---

solyto can import data from several external services to bootstrap your libraries.

:::note
solyto only contacts external services when you explicitly trigger an import. Nothing is fetched in the background.
:::

## Music Library

### From Deezer

Import your Deezer favorites and library.

1. Go to **Music Library → Import → Deezer**
2. Authenticate with your Deezer account
3. Select what to import (favorites, albums, etc.)
4. Click **Import**

### From Discogs

Import your Discogs collection (vinyl, CD, etc.).

1. Go to **Music Library → Import → Discogs**
2. Enter your Discogs username
3. solyto fetches your collection via the Discogs API
4. Review and confirm the import

## Book Library

### From Goodreads

Import your Goodreads shelves.

1. In Goodreads, go to **My Books → Export** and download the CSV
2. In solyto, go to **Book Library → Import → Goodreads**
3. Upload the CSV file
4. solyto maps your shelves to statuses (read, reading, want to read)

### From Hardcover

Import your Hardcover reading history.

1. Go to **Book Library → Import → Hardcover**
2. Authenticate with your Hardcover account
3. Select what to import
4. Click **Import**

## Privacy note

Import requests go directly from solyto to the external service using your credentials or API key. No data passes through any intermediate server.
