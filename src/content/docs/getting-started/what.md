---
title: What is solyto
description: solyto is a free, open source, private, all-in-one personal management app.
---

solyto is a free, open source, private, all-in-one personal management app. Todos, calendar, contacts, notes, finances, libraries, time tracking, and more — one app, one login, one interface. No tracking, no ads, no subscriptions. Ever.

## Three ways to use solyto

1. **solyto.app** — the hosted version. Create an account and start using it immediately. No setup required.
2. **Local development** — run the full stack locally with Docker Compose via the [localdocker](https://github.com/solyto/localdocker) repo. Ideal for contributing or experimenting.
3. **Self-hosting** — deploy solyto on your own server using the [selfhosted](https://github.com/solyto/selfhosted) repo. Full control over your data.

## What's included

Every feature is included. No tiers, no upgrades, no "coming soon."

**Productivity**

- [Todos](/features/todos/) — tasks with tags, due dates, priorities, and recurring schedules
- [Calendar](/features/calendar/) — your schedule with CalDAV sync
- [Notes](/features/notes/) — notes and thoughts, organized your way
- [Contacts](/features/contacts/) — address book with CardDAV sync
- [Clipboard](/features/clipboard/) — shared clipboard across devices
- [Topics](/features/topics/) — organize research and ideas

**Libraries**

- [Music](/features/libraries/music/), [Books](/features/libraries/books/), [Movies](/features/libraries/movies/), [Games](/features/libraries/games/) — track your collections
- [Recipes](/features/libraries/recipes/), [Quotes](/features/libraries/quotes/), [Links](/features/libraries/links/), [Plants](/features/libraries/plants/) — catalog everything else

**Wellbeing & Time**

- [Daily Check-In](/features/check-in/) — mood tracking, journaling, habit building
- [Time Tracking](/features/time-tracking/) — track projects, billable hours, and productivity

**Finance**

- [Finances](/features/finances/) — budget tracking and net worth overview

**Information**

- [RSS Feeds](/features/feeds/) — news from sources you choose, no algorithms

**Integrations**

- [Telegram Bot](/integrations/telegram/) — save links, get daily digests, receive notifications
- [CalDAV/CardDAV Sync](/integrations/dav-sync/) — sync with external calendar and contact apps
- AI Assistants — interact with your own data using AI, on your terms

## Tech stack

solyto is built with well-known, mature tools:

- **Frontend** — SvelteKit 2, Svelte 5, Tailwind CSS v4, TypeScript
- **Backend** — Laravel 12, PHP 8.4
- **Databases** — MariaDB (app data), PostgreSQL (CalDAV/CardDAV via SabreDAV)
- **Cache & Queue** — Redis
- **Reverse Proxy** — Traefik with automatic Let's Encrypt TLS
- **Deployment** — Docker (images: `solyto/app`, `solyto/api-php`, `solyto/api-nginx`)
