---
title: Book Library
description: Track your reading with Hardcover, Goodreads import, reading progress, and series tracking.
---

The Book Library is your personal reading log — track books you've read, are currently reading, or want to read. Keep reading progress, lending records, and series all in one place.

## Adding books

Add books to your library in two ways:

- **Manual entry** — fill in the details yourself
- **Import** — bring in an existing collection from Hardcover or Goodreads

### Import from Hardcover

Connect to Hardcover via API to import your reading history, shelves, and book data. Hardcover import is API-based and pulls in detailed metadata automatically.

### Import from Goodreads

Upload your Goodreads CSV export file to import your shelves and reading history. Export your data from Goodreads first, then upload the file in solyto.

See [Importing Data](/integrations/importing/) for step-by-step instructions.

## Entry fields

Each book entry includes:

| Field | Description |
|-------|-------------|
| **title** | Book title |
| **author** | Author name |
| **series** | Series name (if part of a series) |
| **volume** | Volume number within the series |
| **rating** | 1–5 stars |
| **publication_year** | Year the book was published |
| **pages** | Total page count |
| **current_page** | Page you're currently on (reading progress) |
| **lent_to** | Who you lent the book to |
| **is_where** | Physical location of the book |
| **cover_image** | Book cover |
| **link** | URL (Hardcover, Goodreads, store page) |
| **wishlist** | Mark as wanted but not yet owned |
| **summary** | Brief description or synopsis |
| **started_at** | Date you started reading |
| **finished_at** | Date you finished reading |
| **tags** | Colored tags for filtering |
| **genres** | One or more book genres |
| **notes** | Free-text notes |

## Reading progress

Track where you are in any book. Set **current_page** against the total **pages** to see how far along you are. solyto displays your progress as a percentage, making it easy to pick up where you left off.

Progress is visible in the book list and on each book's detail page.

## Series and volumes

Books that are part of a series can be grouped together. Set the **series** name and **volume** number on each entry to keep your series organized. Browse by series to see all volumes in order.

## Lending

Track who has your books. Use **lent_to** to record the person you lent a book to, and **is_where** to note where the book physically is — a friend's house, the office, or back on your shelf.

This is especially useful if you lend books often and want to remember who has what.

## AI Recommendations

Get book recommendations based on your library. Click **Recommendations** to generate a list of books you might enjoy — either more from authors you've read, or new authors in genres you like.

Recommendations use an OpenAI-compatible API and are generated on-demand only. Your library data is sent to generate suggestions and is not stored permanently by the AI service. Nothing happens until you click the button.

## Release notifications

Follow authors in your library to get notified when they publish a new book. Notifications are configurable per channel — Telegram, email, or push. See [Notifications](/customization/notifications/) for setup.

## Book genres

The book library has its own genre system. Add genres that match your reading — literary fiction, sci-fi, biography, self-help, or anything else. Assign multiple genres to any book.

Manage genres from the library settings. You can add, rename, and remove genres at any time.

## Exporting

Export your entire book library as `.csv`. The file includes all fields — title, author, series, rating, genres, reading dates, and notes. See [Exporting Data](/integrations/exporting/).
