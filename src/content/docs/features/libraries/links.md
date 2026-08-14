---
title: Link Library
description: A bookmark manager with categories and Telegram bot integration.
---

The Link Library is a personal bookmark manager built into solyto. Save URLs with titles, covers, tags, and categories — then organize them into custom categories. Access your bookmarks from anywhere, and save new ones via the Telegram bot or Quick Add.

## Adding links

There are three ways to add links:

- **Manual entry** — click the + button and fill in the URL and details
- **Telegram bot** — send a URL to [@SolytoBot](https://t.me/SolytoBot) and it's automatically saved to your library
- **Quick Add** — URLs pasted into Quick Add are auto-detected as links and saved directly

See [Telegram Integration](/integrations/telegram/) for bot setup instructions.

## Entry fields

Each link entry includes:

| Field | Description |
|-------|-------------|
| **title** | Page title or description |
| **URL** | The full URL |
| **cover** | A cover/preview image |
| **category** | Assigned category |
| **is_favorite** | Mark as a favorite |
| **tags** | Colored tags for filtering |

## Link categories

Organize your links into custom categories with colors. The sidebar shows All, Favorites, each category (with counts), and Uncategorized. **Drag and drop** a link onto a category to move it.

Categories are separate from tags. Use categories for broad grouping (work, reference, entertainment) and tags for fine-grained filtering.

## Newest links

Your most recently added links feed the "Newest Links" widget on the [dashboard](/dashboard/overview/).

## Favorites

Mark links as favorites using the star flag. Filter your library to show only favorites, making it easy to find your most-used bookmarks quickly.

## Views and filters

Browse your links in **List** or **Cards** views. Search by title or URL, and filter by category or favorites.

## Exporting

Export your entire link library as `.html` in the Netscape Bookmark Format, which every major browser can import. See [Exporting Data](/integrations/exporting/).
