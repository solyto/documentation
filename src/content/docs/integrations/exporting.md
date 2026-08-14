---
title: Exporting Data
description: Export all your solyto data in standard formats.
---

solyto lets you export your data at any time from **Settings → Export Data**. You own your data and can download it whenever you want.

## How to export

1. Go to **Settings → Export Data**
2. Select individual features or click **Select All**
3. Click **Export**
4. solyto runs the export job in the background
5. When it's done, you'll see a download link in **Settings → Export Data** and in your notifications

## How exports work

- Exports run as **background jobs** — you don't need to keep the page open
- Exports are **rate-limited** to once per 24 hours
- Completed exports **expire after 48 hours** — download them before they're removed
- The download is a single **ZIP file** named `export_YYYY-MM-DD.zip`, even when exporting just one feature
- You'll receive an **in-app notification** and (if configured) a push or Telegram notification when the export is ready

## Export formats

Each feature exports in a standard format you can open in other apps:

| Feature | Format | Compatible with |
|---------|--------|----------------|
| Calendar | `.ics` (iCalendar) | Google Calendar, Apple Calendar, Outlook |
| Contacts | `.vcf` (vCard) | Google Contacts, Apple Contacts, any contacts app |
| Notes | ZIP of `.md` files | Obsidian, Notion, any markdown editor |
| Feeds | `.opml` | Feedly, NewsBlur, any RSS reader |
| Link Library | `.html` (Netscape Bookmarks) | Chrome, Firefox, Safari, any browser |
| Todos | `.csv` | Excel, Google Sheets |
| Music Library | `.csv` | Excel, Google Sheets |
| Book Library | `.csv` (Goodreads-compatible columns) | Goodreads, spreadsheet apps |
| Game Library | `.csv` | Excel, Google Sheets |
| Recipe Library | `.csv` | Excel, Google Sheets |
| Quote Library | `.csv` | Excel, Google Sheets |
| Check In | `.csv` | Excel, Google Sheets |
| Time Tracking | `.csv` | Excel, Google Sheets |
| Finances (Budget) | `.csv` | Excel, Google Sheets |
| Finances (Wealth) | `.csv` | Excel, Google Sheets |

## Selective export

You don't have to export everything. Check only the features you need and the ZIP will contain just those files. This is useful if you want to:

- Back up a single library before making changes
- Import your calendar into another app like Google Calendar
- Archive your notes to use in Obsidian or another markdown editor
- Share your recipes with someone

Note: the Movie, Plant, and Clipboard features are not currently part of the exportable set.

## Export details

- **Format:** ZIP archive containing one file per selected feature
- **Rate limit:** one export per 24 hours
- **Expiration:** exports are automatically deleted after 48 hours
- **Notification:** you'll receive an in-app notification (bell icon) when the export is ready; push and Telegram notifications are also sent if configured
- **File naming:** `export_YYYY-MM-DD.zip` (e.g. `export_2026-05-27.zip`)

## Re-importing exported data

Most export formats are designed to be re-importable:

- `.ics` files can be imported into any calendar app or back into solyto
- `.vcf` files can be imported into any contacts app
- `.opml` files can be imported into any RSS reader
- `.csv` files can be opened in spreadsheet apps for review
- `.md` notes can be used in Obsidian, Notion, or any markdown editor

## Troubleshooting

- **"Export limit reached"** — you've exported within the last 24 hours. Wait and try again.
- **"Export expired"** — the file has been removed after 48 hours. Start a new export.
- **Large exports** — exports with many features may take a few minutes to process. You'll be notified when ready.
- **Download not starting** — check your browser's popup/download blocker settings. The download starts automatically when you click the link.
