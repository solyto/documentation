---
title: Privacy & Security
description: How solyto handles your data.
---

solyto was built with privacy as a core requirement, not an afterthought.

## What solyto does NOT do

- **No tracking** — no analytics, no telemetry, no usage data
- **No cookies** — the only browser storage used is a localStorage entry for authentication
- **No background requests** — solyto only contacts external services when you explicitly trigger an action (like an import or a recommendation)
- **No AI training** — your data is not used to train any model
- **No ads** — solyto has no advertising

## What solyto stores

solyto stores the data you enter — notes, todos, calendar events, contacts, library entries, and so on — in your account. On solyto.app, this is stored on servers in the EU. If you self-host, it's on your server.

## Authentication

solyto uses a single localStorage entry for your authentication token. No third-party auth services are involved. Passkey (WebAuthn) login is supported for passwordless authentication.

## External service contact

solyto contacts external services only when you explicitly request it:

- **Weather** — Open-Meteo for forecasts, and OpenStreetMap Nominatim for city search on the dashboard widget
- **Library imports & search** — Deezer, Discogs, Hardcover, Goodreads, IMDb, TMDB, Steam, BoardGameGeek, and Chefkoch, triggered by you
- **Release notifications** — the backend periodically checks Deezer/Hardcover/TMDB for new releases from your favorite artists/authors
- **AI recommendations** — library recommendations are generated on demand via an OpenAI-compatible API; nothing is sent until you click the button
- **CalDAV/CardDAV sync** — syncs only when you have it configured; you can disable it at any time
- **Telegram bot** — only active if you set it up; messages sent by you
- **Notifications** — sent to your browser, email, or Telegram when events occur

Nothing happens in the background without your knowledge.

## Self-hosting

If you self-host solyto, your data never leaves your server. You control everything. See [Self-Hosting](/self-hosting/overview/).

## Open source

solyto is open source. You can audit exactly what it does. The source is on [GitHub](https://github.com/solyto).
