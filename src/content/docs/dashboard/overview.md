---
title: Dashboard
description: Your daily overview — weather, calendar, inspiration, and quick glance at everything that matters.
---

The dashboard is the landing page of solyto, accessible at the root route `/`. It pulls together data from across all your features into a single three-column view so you can see what your day looks like at a glance.

## Layout

The dashboard is organized into three columns. On mobile, the columns stack vertically in the same order.

### Your Day (left column)

Everything you need to know about today:

- **Weather** — Current conditions and today's forecast from the Open-Meteo API. The city and temperature unit (Celsius or Fahrenheit) are configurable in **Settings → General**.
- **Today's Events** — Calendar events for today pulled from all your active calendars. Tap an event to jump to the [Calendar](/features/calendar/) view.
- **Due Todos** — Todos that are due today or overdue. Mark them complete without leaving the dashboard.
- **Scored Todos** — The top 5 most relevant todos, ranked by a smart score that factors in priority, estimated effort, overdue status, and age. This helps surface the tasks that matter most right now.

### Inspiration (center column)

Fresh content to start your day:

- **New Music Releases** — Up to 5 new album releases from artists in your [Music Library](/features/libraries/music/).
- **New Book Releases** — Up to 5 new book releases from authors in your [Book Library](/features/libraries/books/).
- **New Screen Releases** — Up to 5 new movies or shows worth knowing about.
- **Recent Notes** — Up to 5 notes you recently created or updated. Quick access back into your [Notes](/features/notes/).
- **Newest Links** — The most recently saved links from your [Link Library](/features/libraries/links/).
- **Daily Quote** — A random quote from your [Quote Library](/features/libraries/quotes/), refreshed once per day.

### Quick Glance (right column)

At-a-glance status widgets:

- **Check-In** — Your daily [check-in](/features/check-in/) status and a quick entry field to log today's entry.
- **Time Tracking** — Shows any active timer and your most recent [time tracking](/features/time-tracking/) entries.
- **Shortcuts** — User-defined quick-access shortcuts for pages or actions you use frequently.

## Onboarding

When you first visit solyto (when the `first_visit` flag is true), a four-step onboarding modal guides you through setup:

1. **Welcome** — An introduction to solyto and what it can do for you.
2. **Localization** — Choose your language, date format, and time format.
3. **Features** — Toggle which features appear in the navigation. You can choose from 11 features: calendar, todos, notes, libraries, contacts, check-in, finances, clipboard, dev requests, feeds, and time tracking.
4. **Ready** — A completion screen confirming your setup.

### Welcome Tour

After the onboarding modal completes, a guided Welcome Tour starts automatically. It walks you through each enabled feature page step-by-step so you know where everything is.

You can restart the tour at any time from **Settings → App → "Take the tour"**.

## Customizing the dashboard

You control what appears on the dashboard through **Settings → Features**. Toggling a feature off hides it from both the dashboard widgets and the navigation sidebar. For example, if you disable Finances, all finance-related widgets disappear from the dashboard.

Widget-level customization (reordering, hiding individual widgets) is not currently available.

## Mobile behavior

On smaller screens, the three columns stack into a single vertical scroll. The order is preserved: Your Day first, then Inspiration, then Quick Glance. All widgets remain functional — you can complete todos, start timers, and add check-in entries just as on desktop.

## Quick Add

The dashboard includes a floating action button (FAB) for [Quick Add](/dashboard/quick-add/) — a smart content detection tool that lets you paste a URL or text and have solyto automatically file it as a library entry, todo, or note. See the [Quick Add](/dashboard/quick-add/) page for full details.
