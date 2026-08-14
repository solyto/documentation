---
title: First Steps
description: What to do after creating your solyto account.
---

Whether you're using solyto.app or a local/self-hosted instance, here's what to do after creating your account.

## Onboarding modal

On your first login, solyto shows an onboarding modal with four steps:

1. **Welcome** — a brief introduction
2. **Localization** — set your timezone, date format, and time format
3. **Features** — choose which features to enable
4. **Ready** — you're all set

You can always change these later in **Settings**.

## Welcome tour

After the onboarding modal, a guided tour walks you through each feature. You can restart it anytime from **Settings → General → Restart Tour**.

## Configure your preferences

Head to **Settings** and set up the following:

| Setting | Where | What it does |
|---------|-------|-------------|
| Timezone | Settings → General | Sets your local timezone for calendar and check-in |
| Date format | Settings → General | Choose between DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD |
| Time format | Settings → General | 12-hour or 24-hour clock |
| Weather city | Settings → General | Shows weather on the dashboard |
| Theme | Settings → Themes | Pick a theme — light, dark, or custom |

## Enable or disable features

Not every feature is relevant to everyone. Go to **Settings → Features** and toggle features on or off. Disabled features are hidden from the navigation and the dashboard.

You can always re-enable them later.

## Connect the Telegram bot

The Telegram bot lets you save links and receive a daily digest without opening the app.

1. Go to **Settings → Integrations → Telegram**
2. Click **Connect** and copy the unique code
3. Open the solyto bot on Telegram and send `/start <your-code>`
4. Your account is linked

See [Telegram Bot](/integrations/telegram/) for details.

## Set up CalDAV / CardDAV sync

If you use an external calendar or contacts app (Apple Calendar, DAVx, Thunderbird, etc.), you can sync via CalDAV and CardDAV.

solyto runs a SabreDAV-compatible server. Connection details are available in **Settings → Integrations → CalDAV/CardDAV**.

See [CalDAV/CardDAV Sync](/integrations/dav-sync/) for setup instructions per client.

## Import existing data

Moving from another tool? solyto supports importing data from common formats:

- **Todos** — import from JSON
- **Contacts** — import from vCard (.vcf)
- **Calendar** — import from .ics
- **Bookmarks / RSS** — import from OPML

See [Importing](/integrations/importing/) for details.

## Explore

You're all set. Here are some things to try:

- Add a few todos using the [one-line syntax](/features/todos/#one-line-creation)
- Subscribe to an RSS feed in [Feeds](/features/feeds/)
- Log today's mood in [Daily Check-In](/features/check-in/)
- Add a book or album to your [Libraries](/features/libraries/overview/)
- Start tracking time on a project in [Time Tracking](/features/time-tracking/)
- Send a link to the [Telegram bot](/integrations/telegram/) and watch it appear in your Link Library
