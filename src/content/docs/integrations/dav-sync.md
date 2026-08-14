---
title: DAV Sync
description: Two-way CalDAV and CardDAV sync with Google, Apple, Nextcloud, and more.
---

solyto includes a built-in DAV server powered by SabreDAV with a PostgreSQL backend. This gives you two-way CalDAV (calendar) and CardDAV (contacts) sync with any compatible client — no plugins or extensions needed.

## Server URL

| Instance | URL |
|----------|-----|
| Hosted (solyto.app) | `https://dav.solyto.de` |
| Self-hosted | Your own DAV endpoint (typically `https://your-domain/dav`) |

## Authentication

DAV sync uses **Basic Auth** with your solyto account credentials:

- **Username:** your solyto email address
- **Password:** your solyto account password

Find your connection details in **Settings → Integrations → CalDAV** or **Settings → Integrations → CardDAV**.

## CalDAV (Calendar sync)

CalDAV keeps your solyto calendar in sync with external calendar apps. Changes made in either direction are reflected everywhere.

### Compatible clients

- **Google Calendar** (via CalDAV support or third-party sync)
- **Apple Calendar** (macOS, iOS)
- **Thunderbird** (via built-in CalDAV)
- **DAVx** (Android)
- **Nextcloud Calendar**
- **GNOME Calendar** / **KDE KOrganizer** (Linux)
- Any other CalDAV-compatible client

### Setup

1. In solyto, go to **Settings → Integrations → CalDAV**
2. Copy the CalDAV server URL and your credentials
3. Open your calendar app and add a new CalDAV account
4. Enter the server URL, your email, and your password
5. Your solyto calendars will appear as available calendars to subscribe to

Changes made in solyto or your external calendar app will sync in both directions automatically.

### Calendar sharing

solyto supports calendar sharing via CalDAV. You can share calendars with other solyto users and set permissions (read-only or read-write).

## CardDAV (Contact sync)

CardDAV keeps your solyto contacts in sync with external contacts apps.

### Compatible clients

- **Google Contacts**
- **Apple Contacts** (macOS, iOS)
- **DAVx** (Android)
- **Nextcloud Contacts**
- **Thunderbird** (via CardBook extension)
- Any other CardDAV-compatible client

### Setup

1. In solyto, go to **Settings → Integrations → CardDAV**
2. Copy the CardDAV server URL and your credentials
3. Open your contacts app and add a new CardDAV account
4. Enter the server URL, your email, and your password
5. Your solyto contacts will sync automatically

## Importing via CalDAV / CardDAV

If you want to import existing calendars or contacts into solyto:

### Calendar import

1. Export your calendar from your existing service as an `.ics` file
2. In solyto, go to **Calendar → Import**
3. Upload the `.ics` file or provide a CalDAV URL to sync from

The import process has four stages:

1. **Started** — the import job has been queued
2. **Select** — choose which calendars/events to import
3. **Creating/Importing** — events are being written to your solyto calendar
4. **Finished** — import is complete

### Contact import

1. Export your contacts as a `.vcf` (vCard) file
2. In solyto, go to **Contacts → Import**
3. Upload the `.vcf` file

Alternatively, connect via CardDAV and let the sync pull in your existing contacts automatically.

## Sync frequency

DAV sync is near-real-time on solyto.app. External clients typically poll every 5–15 minutes depending on the app. Some clients (like DAVx on Android) allow you to configure the sync interval manually.

## Troubleshooting

### Sync not working

- Verify the server URL is correct (`https://dav.solyto.de` for hosted)
- Check that your email and password match your solyto account
- If you recently changed your solyto password, update the credentials in your DAV client
- Force a manual sync from the external app (most clients have a refresh button)

### Events not appearing

- Check that you subscribed to the correct calendar in your DAV client
- Some clients require you to explicitly enable a newly discovered calendar
- Verify the event exists in solyto's web interface first

### Duplicate events

- This usually happens when the same calendar is connected twice. Remove one of the connections and force a sync.

### Google Calendar specifics

Google Calendar requires [CalDAV support to be enabled](https://support.google.com/calendar/answer/99358) and may need app-specific passwords if you use two-factor authentication.

### Self-hosting

If you self-host solyto, the DAV server runs as part of the stack. Make sure:

- The SabreDAV service is running
- PostgreSQL is accessible
- Your reverse proxy forwards DAV requests to the correct service
- TLS is configured (DAV clients typically require HTTPS)
