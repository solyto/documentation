---
title: Libraries Overview
description: solyto's collection of personal libraries for music, books, movies, games, recipes, quotes, links, and plants.
---

Libraries are a distinguishing feature unique to solyto — personal collection trackers for the things you own, read, watch, play, cook, and collect. Each library is purpose-built for its type of content, but they all share a consistent interface so you always know your way around.

## Available libraries

solyto includes eight libraries:

| Library | What you track |
|---------|---------------|
| [Music Library](/features/libraries/music/) | Albums and artists — vinyl, CDs, digital |
| [Book Library](/features/libraries/books/) | Books with reading progress and series tracking |
| [Movie Library](/features/libraries/movies/) | Films and series with IMDb import |
| [Game Library](/features/libraries/games/) | Video games and board games |
| [Recipe Library](/features/libraries/recipes/) | Recipes with ingredients and meal types |
| [Quote Library](/features/libraries/quotes/) | Quotes from books, people, films, and more |
| [Link Library](/features/libraries/links/) | Bookmarks and saved URLs |
| [Plant Library](/features/libraries/plants/) | Houseplants and garden plants |

## Common features

Every library shares the same core capabilities (where they make sense for that content type):

### Search and filters

- **Search** — search across the library's key fields (e.g. title and artist for music, title and ingredients for recipes). Press **Ctrl+F** to focus the search bar.
- **Filters** — filter by **genre**, **rating**, **wishlist**, and library-specific filters, with a clear-all button.

### Genres

Each library has its own genre system. You can customize genres — add, rename, and remove them — to match how you think about your collection. Assign one or more genres to any entry.

### Ratings and wishlist

- **Ratings** — rate any entry on a 1–5 scale
- **Wishlist** — flag entries you want, and filter for them

### Views

Most libraries offer a view switcher: **List** and **Cards**. The **Music** and **Book** libraries add two 3D views:

- **Shelf** — a wooden bookshelf with covers on display
- **Spine** — covers arranged like book/record spines, with a hover-out 3D flip; book spine width is derived from page count

### External links

Where an entry came from an external service, a "Search on / Show on" shortcut links back to that provider.

### Cover images

Each library supports cover images — album art, book covers, movie posters, plant photos, and so on. Upload your own or let solyto fetch them automatically from the import service.

### Tags

Add colored tags to any entry. Tags are shared across features, so a tag you create in one library works the same way everywhere.

### Export as CSV

Download your data at any time as a `.csv` file. Your data stays yours. See [Exporting Data](/integrations/exporting/).

## AI Recommendations

The **Music** and **Book** libraries offer recommendations powered by an OpenAI-compatible API. When you request one, pick from:

- **A favorite** — something similar to what you already love
- **Something I haven't seen before**
- **Just something random**
- **Something new**

solyto then picks an entry from your library (for "new", it fetches a fresh release via Deezer/Hardcover). Use "Try again" to reroll. Recommendations are generated on-demand only — nothing happens until you click the button. See [Music Library](/features/libraries/music/) and [Book Library](/features/libraries/books/) for details.

## Release notifications

solyto can notify you when artists or authors in your library release something new. Release notifications are available for:

- **Music** — new albums and singles from your artists
- **Books** — new books from your authors
- **Movies** — new screen releases from your library

Notifications are configurable per channel (Telegram, email, push). See [Notifications](/customization/notifications/) for setup.

## Import from external services

You can search online and import from external services like Deezer, Discogs, Goodreads, Hardcover, IMDb, TMDB, Steam, BoardGameGeek, and Chefkoch. Imports only happen when you explicitly trigger them — solyto never pulls data from third-party services in the background. See [Importing Data](/integrations/importing/) for details.

