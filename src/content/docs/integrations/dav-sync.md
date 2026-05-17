---
title: DAV Sync
description: Two-way CalDAV and CardDAV sync with Google, Apple, Nextcloud, and more.
---

solyto supports CalDAV (calendar sync) and CardDAV (contact sync). This means your solyto calendar and contacts stay in sync with any compatible service.

## CalDAV (Calendar sync)

Connect your solyto calendar to:

- **Google Calendar**
- **Apple Calendar**
- **Nextcloud Calendar**
- **Thunderbird** (via Lightning)
- Any CalDAV-compatible client

### Setup

1. In solyto, go to **Settings → Integrations → CalDAV**
2. Copy your CalDAV server URL and credentials
3. Add a new CalDAV account in your calendar app using those credentials

Changes made in either solyto or your external calendar app will sync in both directions.

## CardDAV (Contact sync)

Connect your solyto contacts to:

- **Google Contacts**
- **Apple Contacts**
- **Nextcloud Contacts**
- Any CardDAV-compatible client

### Setup

1. In solyto, go to **Settings → Integrations → CardDAV**
2. Copy your CardDAV server URL and credentials
3. Add a new CardDAV account in your contacts app using those credentials

## Troubleshooting

- If sync stops working, check that your credentials in the external app match what's in solyto
- Force a manual sync from the external app if changes aren't propagating
- For Google Calendar, you may need to re-authorize after a password change
