---
title: Exporting Data
description: Export all your solyto data in standard formats.
---

solyto lets you export your data at any time from **Settings → Export**. Exports run as background jobs and you're notified when the download is ready.

## How to export

1. Go to **Settings → Export**
2. Select individual features or click **Select All**
3. Click **Export**
4. solyto runs the export job in the background
5. When it's done, you'll see a download link in **Settings → Export** and in your notifications

## Export formats

Each feature exports in a standard format you can open elsewhere:

| Feature | Format | Compatible with |
|---------|--------|----------------|
| Calendar | `.ics` (iCalendar) | Google Calendar, Apple Calendar, Outlook |
| Contacts | `.vcf` (vCard) | Google Contacts, Apple Contacts, any contacts app |
| Notes | ZIP of `.md` files | Obsidian, Notion, any markdown editor |
| Feeds | `.opml` | Feedly, NewsBlur, any RSS reader |
| Link Library | `.html` (Netscape Bookmarks) | Chrome, Firefox, Safari, any browser |
| Todos | `.csv` | Excel, Google Sheets |
| Music Library | `.csv` | Excel, Google Sheets |
| Book Library | `.csv` (Goodreads format) | Goodreads, StoryGraph |
| Recipe Library | `.csv` | Excel, Google Sheets |
| Quote Library | `.csv` | Excel, Google Sheets |
| Game Library | `.csv` | Excel, Google Sheets |
| Check In | `.csv` | Excel, Google Sheets |
| Finances (Income) | `.csv` | Excel, Google Sheets |
| Finances (Wealth) | `.csv` | Excel, Google Sheets |
| Time Tracking | `.csv` | Excel, Google Sheets |

The download is a single **ZIP file** even when exporting one feature. The ZIP is named `export_YYYY-MM-DD.zip`.
