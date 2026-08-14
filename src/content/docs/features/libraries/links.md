---
title: Link Library
description: A bookmark manager with categories and Telegram bot integration.
---

The Link Library is a personal bookmark manager built into solyto. Save URLs with titles, tags, and notes — then organize them into custom categories. Access your bookmarks from anywhere, and save new ones via the Telegram bot.

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
| **is_favorite** | Mark as a favorite |
| **tags** | Colored tags for filtering |
| **notes** | Free-text notes |

## Link categories

Organize your links into custom categories. Categories have full CRUD support — create, read, update, and delete them from the library settings. Assign links to categories to keep your bookmarks structured.

Categories are separate from tags. Use categories for broad grouping (work, reference, entertainment) and tags for fine-grained filtering.

## Newest links

solyto provides an API endpoint that returns your most recently added links. This powers widgets and integrations that show your latest saves.

## Favorites

Mark links as favorites using the **is_favorite** flag. Filter your library to show only favorites, making it easy to find your most-used bookmarks quickly.

## Telegram bot integration

Send a URL to [@SolytoBot](https://t.me/SolytoBot) on Telegram and it's automatically saved to your Link Library. The bot extracts the page title and saves the URL — no additional input needed.

This is the fastest way to save a link from your phone or any device with Telegram installed. See [Telegram Integration](/integrations/telegram/) for setup.

## Quick Add

When you paste a URL into the [Quick Add](/dashboard/quick-add/) feature, solyto detects that it's a link and saves it directly to your Link Library. This works alongside other Quick Add content types like notes and todos.

## Views and sorting

Browse your links and sort by:

- Title (A–Z)
- Date added
- Category
- Favorite status

Filter by category, tags, or favorites to find what you need.

## Exporting

Export your entire link library as `.html` in the Netscape Bookmark Format, which every major browser can import. You can also export as `.csv`. See [Exporting Data](/integrations/exporting/).
