---
title: Quick Add
description: Paste a URL or text and let solyto figure out what it is and where it goes.
---

Quick Add is a smart content detection tool on the dashboard. You paste a URL or a line of text, and solyto automatically determines the content type and saves it to the right place — no manual categorization needed.

## Opening Quick Add

There are two ways to trigger Quick Add:

- **Floating action button** — Click the FAB in the bottom-right corner of the dashboard.
- **Enter key** — Press `Enter` anywhere on the dashboard when no input field is focused. The Quick Add dialog opens immediately.

## How detection works

When you submit text, solyto analyzes it against a set of rules and assigns a content type with a confidence score.

### URL detection (95% confidence)

URLs are matched against known domains:

| URL pattern | Detected as |
|-------------|------------|
| `deezer.com`, `discogs.com` | [Music Library](/features/libraries/music/) entry |
| `hardcover.app`, `goodreads.com` | [Book Library](/features/libraries/books/) entry |
| `imdb.com` | [Movie Library](/features/libraries/movies/) entry |
| `store.steampowered.com`, `boardgamegeek.com` | [Game Library](/features/libraries/games/) entry |
| Any other URL | [Link Library](/features/libraries/links/) entry |

### Text detection

For plain text (not a recognized URL):

| Content signals | Detected as | Confidence |
|----------------|-------------|-----------|
| Contains `due`, `repeat`, or `link:` | [Todo](/features/todos/) | 70% |
| Plain text with no signals | [Note](/features/notes/) | 50% |

## Confirmation

If the detected type has a confidence score of **60% or higher**, the item is committed automatically — no extra step needed.

If confidence is **below 60%**, solyto asks you to confirm the content type before saving. You can also override the detected type manually at that point.

## Examples

### Adding an album

1. Open Quick Add
2. Paste: `https://www.deezer.com/album/123456`
3. solyto detects **Music** at 95% confidence and adds it to your Music Library

### Adding a todo

1. Open Quick Add
2. Type: `Pick up dry cleaning due:tomorrow`
3. solyto detects **Todo** at 70% confidence and creates a todo due tomorrow

### Adding a note

1. Open Quick Add
2. Type: `Meeting notes: client wants to move deadline to March`
3. solyto detects **Note** at 50% confidence — since this is below 60%, it asks you to confirm before saving

### Adding a link

1. Open Quick Add
2. Paste: `https://example.com/some-interesting-article`
3. solyto detects **Link** at 95% confidence and saves it to your Link Library

## Integration with features

Quick Add feeds directly into the features you have enabled:

- **Library entries** appear in the corresponding library and show up in dashboard release widgets
- **Todos** show up in the [Todos](/features/todos/) feature and the Due Todos / Scored Todos dashboard widgets
- **Notes** appear in [Notes](/features/notes/) and the Recent Notes widget
- **Links** appear in the [Link Library](/features/libraries/links/) and the Newest Links widget

If a feature is disabled in **Settings → Features**, Quick Add will not offer it as a detected type.
