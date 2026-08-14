---
title: Notifications
description: Configure notifications across in-app, email, push, and Telegram channels.
---

solyto can send notifications through four channels. You control exactly which notification types go through which channels — every type can be enabled or disabled per channel.

## Notification types

solyto has 9 notification types:

| Type | Key | Description |
|------|-----|-------------|
| Music release | `music_release` | New album or single releases from artists in your Music Library |
| Book release | `book_release` | New book releases from authors in your Book Library |
| Movie release | `movie_release` | New movie releases for films in your Watchlist |
| Friend request | `friend_request` | Someone sent you a friend request |
| Your Day reminder | `daily_day_reminder` | Daily morning summary of your day (todos, events, weather) |
| Check-in reminder | `daily_check_in_reminder` | Daily nudge to complete your Daily Check-In |
| Calendar share | `calendar_share` | Someone shared a calendar with you |
| Dev request comment | `dev_request_comment` | Someone commented on a feature request you're following |
| Export ready | `export_ready` | A data export job has finished and is ready to download |

## Channels

### In-app (UI)

Notifications appear in the bell icon in the navigation bar. Click the bell to see your notification history, mark items read, or mark all as read. This channel is always available — no setup required.

### Push (Web Push)

Browser push notifications using the Web Push API with VAPID authentication. Available on web.

To enable push notifications:

1. Go to **Settings → Notifications**
2. Click **Enable Push Notifications**
3. Your browser will prompt for permission — click **Allow**
4. Push notifications are now active

Push notifications work even when solyto is not open in a browser tab, including when installed as a PWA.

:::note
Push notifications require HTTPS and a supported browser (Chrome, Firefox, Edge, Safari 16.4+).
:::

### Telegram (Bot)

Send notifications to your Telegram account via the [Telegram Bot](/integrations/telegram/).

To set up Telegram notifications:

1. [Connect the Telegram bot](/integrations/telegram/#connecting-the-bot) to your solyto account
2. Go to **Settings → Notifications**
3. Enable the notification types you want to receive via the **Bot** channel

The Telegram channel is only enabled once the bot is connected.

### Email

Email notifications are coming soon — the email channel is currently unavailable.

## Configuring notifications

Go to **Settings → Notifications** to:

- Connect or disconnect the Telegram bot
- Enable or disable push notifications in your browser
- Toggle each notification type per channel

### Per-type, per-channel configuration

The notification settings page shows a matrix where each row is a notification type and each column is a channel (UI, Email, Push, Bot). Toggle any combination. Channels that aren't set up yet are greyed out — the Bot channel requires a connected Telegram bot, and the Push channel requires push to be enabled.

| Type | UI | Email | Push | Bot |
|---|:---:|:---:|:---:|:---:|
| New Book Releases | ✓ | — | ✓ | ✓ |
| New Music Releases | ✓ | — | ✓ | ✓ |
| New Screen Release | ✓ | — | ✓ | ✓ |
| New Friend Request | ✓ | — | ✓ | ✓ |
| Reminder for daily check-in | ✓ | — | ✓ | ✓ |
| Reminder for the upcoming day | ✓ | — | ✓ | ✓ |
| Calendar Shares | ✓ | — | ✓ | ✓ |
| Dev Request Comments | ✓ | — | ✓ | ✓ |
| Export Ready | ✓ | — | ✓ | ✓ |

For example, you might want export notifications only in-app, daily reminders via Telegram, and release alerts via push.

The two daily reminder types (`daily_day_reminder` and `daily_check_in_reminder`) are sent at 07:00 and 20:00 in your timezone respectively (see [Telegram](/integrations/telegram/) for the alert behavior).
