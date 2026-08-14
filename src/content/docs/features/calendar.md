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

Each calendar gets its own color. You can reorder calendars (drag-and-drop), and hide or show individual calendars. Calendars can be owned by you, shared with you (pending or accepted invite), or subscribed to.

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
- **All occurrences** — every instance of the repeating event

## Calendar sharing

Share your calendars with friends who also use solyto:

1. Open a calendar's **Share** modal (only the owner can share)
2. Select a friend from your [Friends](/account/friends/) list — they get an invite
3. The friend **accepts or declines** the pending invite
4. **Revoke access** — the owner can stop sharing at any time
5. **Unsubscribe** — recipients can unsubscribe from calendars shared with them

Shared calendars appear alongside your own, with an invite status indicator (pending / accepted).

## Attaching todos and notes to events

Any event can have todos and notes attached to it, keeping related material together:

- **Attach** a todo or note from a searchable picker while editing an event
- **Detach** them at any time
- Attached items are visible on the event in the calendar

Todos with a due date also appear directly on the calendar and can be completed in place.

## CalDAV sync

solyto supports two-way CalDAV sync, keeping your events in sync with external calendar services:

- Google Calendar
- Apple Calendar
- Nextcloud Calendar
- Any other CalDAV-compatible service

The solyto CalDAV server runs at `https://dav.solyto.de` (or your own instance). You log in with your solyto email and password.

### Import process

Importing from an external CalDAV server is a multi-stage process:

1. **Start** — enter your external server's URL, username, and password
2. **Select** — choose which calendars to import
3. **Importing** — events are fetched and stored, with live progress
4. **Finished** — your calendars are available in solyto

See [DAV Sync](/integrations/dav-sync/) for detailed setup instructions.

## Notifications

You can receive notifications for upcoming events via Telegram or browser push. See [Notifications](/customization/notifications/).

## Exporting

Your calendar data can be exported as a `.ics` file, compatible with any calendar application. See [Exporting Data](/integrations/exporting/).
