---
title: Calendar
description: Event management with CalDAV sync, recurring events, and calendar sharing.
---

The Calendar feature is a full event manager built into solyto. It supports multiple calendars, recurring events, sharing with friends, and two-way CalDAV sync with external services like Google Calendar and Apple Calendar.

## Creating events

Click any day or time slot to create an event. Events support:

- **Title** — the event name
- **Description** — optional details
- **Location** — where the event takes place
- **Start and end time** — or mark as all-day
- **Recurring schedule** — repeat daily, weekly, monthly, or on a custom rule
- **Calendar** — assign to one of your calendars

## Multiple calendars

You can create as many calendars as you need and color-code each one. Common setups include:

- **Personal** — your own appointments
- **Work** — meetings and deadlines
- **Family** — shared family events

Each calendar gets its own color, making it easy to tell them apart at a glance.

## Calendar views

solyto provides four views, each with a mobile-optimized variant:

| View | Description |
|------|-------------|
| **Month** | Full month grid with event dots |
| **Week** | Hour-by-hour columns for the week |
| **Day** | Detailed hourly view of a single day |
| **List** | Chronological list of upcoming events |

## Recurring events

Events can repeat using RRULE (RFC 5545) recurrence rules. Supported patterns include:

- Daily, weekly, monthly, yearly
- Custom intervals (e.g., every 2 weeks)
- Specific days of the week (e.g., every Monday and Wednesday)

### Editing recurring events

When you edit or delete a recurring event, solyto asks whether to apply the change to:

- **This occurrence only** — the single instance
- **All future occurrences** — this and every subsequent instance

## Calendar sharing

Share your calendars with friends who also use solyto:

1. **Generate an invite link** — send it to your friend
2. **Friend accepts** — they get read access to your calendar
3. **Revoke access** — stop sharing at any time
4. **Unsubscribe** — recipients can unsubscribe from shared calendars

Shared calendars appear alongside your own, with a distinct visual indicator.

## CalDAV sync

solyto supports two-way CalDAV sync, keeping your events in sync with external calendar services:

- Google Calendar
- Apple Calendar
- Nextcloud Calendar
- Any other CalDAV-compatible service

### Import process

Importing from a CalDAV server is a multi-stage process:

1. **Started** — you enter your CalDAV server credentials
2. **Select** — choose which calendars to import
3. **Creating** — solyto creates local calendar mappings
4. **Importing** — events are fetched and stored
5. **Finished** — sync is active and ongoing

See [DAV Sync](/integrations/dav-sync/) for detailed setup instructions.

## Notifications

You can receive notifications for upcoming events via Telegram or browser push. See [Notifications](/customization/notifications/).

## Exporting

Your calendar data can be exported as a `.ics` file, compatible with any calendar application. See [Exporting Data](/integrations/exporting/).
