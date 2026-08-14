---
title: Telegram Bot
description: Save links, get daily digests, and receive notifications via Telegram.
---

solyto has a Telegram bot ([@SolytoBot](https://t.me/SolytoBot)) that lets you interact with your account directly from Telegram. Save links, add items to your libraries, receive daily summaries, and get notified — all without opening the app.

## What the bot can do

- **Quick-add items** — send any text or URL and the bot detects the type (link, music, movie, etc.)
- **Daily digest** — receive a morning summary of your day (todos, events, weather)
- **Check-in reminder** — get a daily nudge to complete your check-in
- **List todos** — view your current todos right in the chat
- **Notifications** — receive alerts for new releases, friend requests, and more

## Connecting the bot

Linking your solyto account to Telegram is a two-step process:

1. In solyto, go to **Settings → Notifications → Telegram Bot**
2. Click **Create connection** — solyto generates a unique token via the backend
3. Copy the token
4. Open [@SolytoBot](https://t.me/SolytoBot) on Telegram
5. Send `/connect <your-token>` to the bot
6. The bot confirms the connection

Your account is now linked. You can disconnect at any time from the same settings page.

## Bot commands

| Command | What it does |
|---------|-------------|
| `/connect <token>` | Link your solyto account (one-time setup) |
| `/day` | Show your daily summary (todos, events, weather) |
| `/todos` | List your current todos |
| `/help` | Show available commands |

## Quick-add via the bot

Once connected, you can add items to your libraries by simply sending text or a URL to the bot:

1. Send a URL or plain text to @SolytoBot
2. The bot detects the content type automatically (link, music, movie, recipe, etc.)
3. If the type is ambiguous, the bot presents a keyboard for you to choose
4. The item is added to the matching library

For example:

- Send a Spotify or Deezer link → added to your Music Library
- Send an IMDb URL → added to your Movie Library
- Send a Chefkoch recipe URL → added to your Recipe Library
- Send any other URL → added to your Link Library
- Send plain text → added as a todo or note (you choose)

The bot uses conversation state (stored in Redis) to handle multi-step interactions like type selection.

## Alerts

The bot can deliver two scheduled alerts:

### Your Day Alert

A daily morning summary delivered at a time you configure. It includes:

- Today's calendar events
- Due and overdue todos
- Weather forecast (if configured)
- Any other relevant items

Configure the delivery time in **Settings → Notifications → Telegram Bot**.

### Check-in Alert

A daily reminder to complete your [Daily Check-In](/features/check-in/). The time is configurable in the same settings area.

Both alerts are available in all four supported languages (English, German, French, Spanish).

## Languages

The bot supports the same languages as solyto:

- English (en)
- German (de)
- French (fr)
- Spanish (es)

The bot language follows your solyto account language setting.

## Disconnecting

To unlink your Telegram account:

1. Go to **Settings → Notifications → Telegram Bot**
2. Click **Disconnect**

This removes the association between your Telegram account and your solyto account. The bot will no longer respond to commands or send alerts.

## Self-hosting note

If you self-host solyto, you need to create your own Telegram bot:

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Create a new bot and copy the API token
3. Add the token to your `.env` file as `TELEGRAM_BOT_TOKEN`
4. Set up a Redis instance for conversation state storage
5. Restart the bot worker

The bot worker runs as a separate process that listens for incoming Telegram updates via webhook or polling.
