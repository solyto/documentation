---
title: Telegram Bot
description: Save links, get daily digests, and receive notifications via Telegram.
---

solyto has a Telegram bot ([@SolytoBot](https://t.me/SolytoBot)) that lets you interact with your account directly from Telegram. Save links, add items to your libraries, receive daily summaries, and get notified — all without opening the app.

## What the bot can do

- **Quick-add items** — send any text or URL and the bot detects the type (todo, note, link, music, movie, recipe, etc.)
- **Daily summary** — `/day` shows your upcoming appointments and due todos
- **List todos** — `/todos` lists your open todos right in the chat
- **Alerts** — a day-ahead summary at 7:00 and a check-in reminder at 20:00 (your timezone), when enabled
- **Notifications** — receive alerts for new releases, friend requests, and more via the Telegram channel

## Connecting the bot

Linking your solyto account to Telegram is a two-step process:

1. In solyto, go to **Settings → Notifications** and request a Telegram connection token
2. Copy the token
3. Open [@SolytoBot](https://t.me/SolytoBot) on Telegram
4. Send `/connect <your-token>` to the bot
5. The bot confirms the connection

Your account is now linked. You can disconnect at any time from the same settings page.

## Bot commands

| Command | What it does |
|---------|-------------|
| `/connect <token>` | Link your solyto account (one-time setup) |
| `/day` | Show today's summary — upcoming appointments and due/overdue todos |
| `/todos` | List your current open todos |
| `/help` | Show available commands |

## Quick-add via the bot

Once connected, you can add items to your libraries by simply sending text or a URL to the bot:

1. Send a URL or plain text to @SolytoBot
2. The bot detects the content type automatically (todo, note, link, music, book, movie, game, recipe, plant, quote, feed, clipboard)
3. If the detection confidence is below 60%, the bot shows an inline keyboard to pick the type
4. The item is added to the matching library

For example:

- Send a Deezer or Discogs link → added to your Music Library
- Send an IMDb URL → added to your Movie Library
- Send a Chefkoch recipe URL → added to your Recipe Library
- Send any other URL → added to your Link Library
- Send a line containing `due:` → added as a todo

The bot uses conversation state to handle multi-step interactions like type selection.

## Alerts

The bot can deliver two scheduled alerts, controlled by the notification settings for the Telegram channel (see [Notifications](/customization/notifications/)):

- **Your Day alert** — at 07:00 (your timezone), a summary of today's calendar events and due/overdue todos
- **Check-in alert** — at 20:00 (your timezone), a reminder to complete your [Daily Check-In](/features/check-in/)

## Languages

The bot supports the same languages as solyto:

- English (en)
- German (de)
- French (fr)
- Spanish (es)

The bot language follows your solyto account language setting.

## Disconnecting

To unlink your Telegram account:

1. Go to **Settings → Notifications**
2. Disconnect the Telegram bot

This removes the association between your Telegram account and your solyto account. The bot will no longer respond to commands or send alerts.

## Self-hosting note

If you self-host solyto, you need to create your own Telegram bot:

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot and copy the API token
3. Provide the token as the `SOLYTO_BOT_TELEGRAM_TOKEN` secret (see [Docker Secrets](/self-hosting/secrets/))
4. Register the bot webhook (see the deployment setup)

The bot receives updates via a webhook served by the API.
