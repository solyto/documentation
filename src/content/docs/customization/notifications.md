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

Notifications appear in the bell icon in the navigation bar. Click the bell to see your notification history. This channel is always available — no setup required.

### Email

Email notifications are coming soon. When available, you'll be able to configure delivery frequency and which types to receive in **Settings → Notifications → Email**.

### Push (Web Push)

Browser push notifications using the Web Push API with VAPID authentication.

To enable push notifications:

1. Go to **Settings → Notifications → Push**
2. Click **Enable Push Notifications**
3. Your browser will prompt for permission — click **Allow**
4. Push notifications are now active

Push notifications work even when solyto is not open in a browser tab, including when installed as a PWA.

:::note
Push notifications require HTTPS and a supported browser (Chrome, Firefox, Edge, Safari 16.4+).
:::

### Telegram

Send notifications to your Telegram account via the [Telegram Bot](/integrations/telegram/).

To set up Telegram notifications:

1. [Connect the Telegram bot](/integrations/telegram/#connecting-the-bot) to your solyto account
2. Go to **Settings → Notifications → Telegram**
3. Enable the notification types you want to receive via Telegram

#### Telegram alerts

Two special alert types are available for Telegram:

**Your Day Alert** — a daily morning summary delivered at a configurable time. Includes:

- Today's calendar events
- Due and overdue todos
- Weather forecast
- Any other relevant items for the day

**Check-in Alert** — a daily reminder to complete your [Daily Check-In](/features/check-in/). Delivered at a time you configure.

Both alerts follow your account language setting (English, German, French, or Spanish).

## Configuring notifications

Go to **Settings → Notifications** to:

- Enable or disable each notification type per channel (a full matrix of types × channels)
- Set delivery times for the Your Day alert and Check-in alert
- Enable or disable push notifications in your browser
- Connect or disconnect the Telegram bot

### Per-type, per-channel configuration

The notification settings page shows a matrix where each row is a notification type and each column is a channel. Toggle any combination:

| | UI | Email | Push | Telegram |
|---|:---:|:---:|:---:|:---:|
| Music release | ✓ | ✓ | ✓ | ✓ |
| Book release | ✓ | ✓ | ✓ | ✓ |
| Movie release | ✓ | ✓ | ✓ | ✓ |
| Friend request | ✓ | ✓ | ✓ | ✓ |
| Your Day reminder | ✓ | ✓ | ✓ | ✓ |
| Check-in reminder | ✓ | — | ✓ | ✓ |
| Calendar share | ✓ | ✓ | ✓ | ✓ |
| Dev request comment | ✓ | ✓ | ✓ | ✓ |
| Export ready | ✓ | ✓ | ✓ | ✓ |

For example, you might want export notifications only in-app, daily digests via Telegram, and release alerts via push.

## Notification preferences

Some additional preferences:

- **Quiet hours** — suppress notifications during certain hours (coming soon)
- **Digest content** — choose which sections appear in your daily digest
- **Sound** — enable or disable notification sounds for in-app notifications
