---
title: Telegram Bot
description: Save links, get daily digests, and receive notifications via Telegram.
---

solyto has a Telegram bot integration that lets you interact with your account from Telegram without opening the app.

## What the bot can do

- **Save links** — send any URL to the bot and it's automatically added to your [Link Library](/libraries/links/)
- **Daily digest** — receive a morning summary of your day (todos, events, weather)
- **Notifications** — get notified about upcoming events, new releases, and more

## Setting up the bot

1. Open **Settings → Integrations → Telegram**
2. Click **Connect** — you'll be given a unique code
3. Open the solyto bot on Telegram and send `/start <code>`
4. Your account is now linked

## Sending links

Once connected, send any URL to the bot. It will confirm the link was saved and show you the title.

## Daily digest

Configure what appears in your daily digest in **Settings → Notifications → Telegram**. You can set the delivery time and choose which sections to include.

## Self-hosting note

If you self-host solyto, you need to create your own Telegram bot via [@BotFather](https://t.me/BotFather) and add the token to your `.env` file.
